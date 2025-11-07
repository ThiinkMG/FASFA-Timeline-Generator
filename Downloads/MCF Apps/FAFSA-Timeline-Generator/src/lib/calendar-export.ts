import type { TimelineItem, TimelineFormData } from '@/types/timeline';
import { format } from 'date-fns';

// Format date for .ics file (YYYYMMDD)
const formatICSDate = (date: Date): string => {
  return format(date, 'yyyyMMdd');
};

// Format datetime for .ics file (YYYYMMDDTHHmmss)
const formatICSDateTime = (date: Date): string => {
  return format(date, "yyyyMMdd'T'HHmmss");
};

// Escape special characters for .ics format
const escapeICSText = (text: string): string => {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n');
};

// Generate unique ID for calendar event
const generateUID = (itemId: string): string => {
  return `${itemId}@mycollegefinance.com`;
};

export function generateCalendarICS(
  formData: TimelineFormData,
  timelineItems: TimelineItem[]
): void {
  const calendarName = `FAFSA Timeline ${formData.academicYear}`;
  const now = new Date();

  // Start building .ics content
  let icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//My College Finance//FAFSA Timeline//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${escapeICSText(calendarName)}`,
    'X-WR-TIMEZONE:America/New_York',
    'X-WR-CALDESC:Personalized FAFSA timeline for ' + escapeICSText(formData.studentName),
  ].join('\r\n');

  // Add each timeline item as an event
  timelineItems.forEach((item) => {
    const eventDate = new Date(item.date);
    const eventEndDate = new Date(eventDate);
    eventEndDate.setHours(23, 59, 59); // End of day

    // Create reminder 7 days before for priority/deadline items
    const hasReminder = item.priority || item.type === 'deadline';

    const event = [
      'BEGIN:VEVENT',
      `UID:${generateUID(item.id)}`,
      `DTSTAMP:${formatICSDateTime(now)}`,
      `DTSTART;VALUE=DATE:${formatICSDate(eventDate)}`,
      `DTEND;VALUE=DATE:${formatICSDate(eventEndDate)}`,
      `SUMMARY:${escapeICSText(item.title)}`,
      `DESCRIPTION:${escapeICSText(item.description)}`,
      `LOCATION:Online - FAFSA Application`,
      `CATEGORIES:FAFSA,Financial Aid,${item.type.toUpperCase()}`,
      `STATUS:CONFIRMED`,
      `TRANSP:TRANSPARENT`,
      item.priority ? 'PRIORITY:1' : 'PRIORITY:5',
    ];

    // Add alarm/reminder for important items
    if (hasReminder) {
      event.push(
        'BEGIN:VALARM',
        'ACTION:DISPLAY',
        `DESCRIPTION:Reminder: ${escapeICSText(item.title)} in 7 days`,
        'TRIGGER:-P7D', // 7 days before
        'END:VALARM'
      );

      // Add second reminder 1 day before for deadlines
      if (item.type === 'deadline') {
        event.push(
          'BEGIN:VALARM',
          'ACTION:DISPLAY',
          `DESCRIPTION:URGENT: ${escapeICSText(item.title)} tomorrow!`,
          'TRIGGER:-P1D', // 1 day before
          'END:VALARM'
        );
      }
    }

    event.push('END:VEVENT');
    icsContent += '\r\n' + event.join('\r\n');
  });

  // Close calendar
  icsContent += '\r\nEND:VCALENDAR';

  // Create blob and download
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `MCF-FAFSA-Timeline-${formData.academicYear}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Generate individual calendar links for popular services
export function getCalendarLinks(item: TimelineItem, formData: TimelineFormData) {
  const eventDate = new Date(item.date);
  const startDate = formatICSDate(eventDate);
  const endDate = formatICSDate(eventDate);

  const title = encodeURIComponent(item.title);
  const description = encodeURIComponent(item.description);

  return {
    google: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${description}&sf=true&output=xml`,
    outlook: `https://outlook.live.com/calendar/0/deeplink/compose?subject=${title}&startdt=${eventDate.toISOString()}&body=${description}`,
    yahoo: `https://calendar.yahoo.com/?v=60&view=d&type=20&title=${title}&st=${startDate}&desc=${description}`,
  };
}
