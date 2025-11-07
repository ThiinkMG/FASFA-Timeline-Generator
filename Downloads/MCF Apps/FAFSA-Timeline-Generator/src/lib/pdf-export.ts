import { jsPDF } from 'jspdf';
import type { TimelineItem, TimelineFormData } from '@/types/timeline';
import { format } from 'date-fns';

export function generateTimelinePDF(
  formData: TimelineFormData,
  timelineItems: TimelineItem[]
) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  let yPos = 20;

  // Helper function to add new page if needed
  const checkPageBreak = (requiredSpace: number) => {
    if (yPos + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
      return true;
    }
    return false;
  };

  // Helper function to wrap text
  const wrapText = (text: string, maxWidth: number) => {
    return doc.splitTextToSize(text, maxWidth);
  };

  // Header - MCF Branding
  doc.setFontSize(24);
  doc.setTextColor(1, 38, 153); // MCF Blue
  doc.text('MY COLLEGE FINANCE', pageWidth / 2, yPos, { align: 'center' });

  yPos += 8;
  doc.setFontSize(10);
  doc.setTextColor(100, 116, 139);
  doc.text('EDUCATE • MOTIVATE • ELEVATE', pageWidth / 2, yPos, { align: 'center' });

  yPos += 15;
  doc.setFontSize(18);
  doc.setTextColor(0, 0, 0);
  doc.text('FAFSA Timeline', pageWidth / 2, yPos, { align: 'center' });

  // Student Information
  yPos += 15;
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text(`Student: ${formData.studentName}`, margin, yPos);

  yPos += 8;
  doc.setFontSize(10);
  doc.text(`Academic Year: ${formData.academicYear}`, margin, yPos);
  doc.text(`State: ${formData.state}`, pageWidth / 2, yPos);

  yPos += 6;
  doc.text(
    `Student Type: ${formData.studentType.replace('-', ' ').toUpperCase()}`,
    margin,
    yPos
  );
  doc.text(`Generated: ${format(new Date(), 'MMMM d, yyyy')}`, pageWidth / 2, yPos);

  // Separator line
  yPos += 10;
  doc.setDrawColor(200, 200, 200);
  doc.line(margin, yPos, pageWidth - margin, yPos);

  // Timeline Items
  yPos += 15;
  doc.setFontSize(14);
  doc.setTextColor(1, 38, 153);
  doc.text('Your FAFSA Timeline', margin, yPos);

  yPos += 10;

  // Sort items by date
  const sortedItems = [...timelineItems].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  sortedItems.forEach((item, index) => {
    checkPageBreak(40);

    // Timeline item box
    const boxHeight = 35;
    const boxY = yPos;

    // Draw subtle background for item
    doc.setFillColor(250, 250, 250);
    doc.rect(margin, boxY, pageWidth - 2 * margin, boxHeight, 'F');

    // Draw left border color based on type
    if (item.type === 'deadline') {
      doc.setFillColor(239, 68, 68); // Red
    } else if (item.type === 'priority') {
      doc.setFillColor(251, 191, 36); // Amber
    } else {
      doc.setFillColor(59, 130, 246); // Blue
    }
    doc.rect(margin, boxY, 3, boxHeight, 'F');

    // Date
    yPos += 7;
    doc.setFontSize(9);
    doc.setTextColor(1, 38, 153);
    doc.text(format(new Date(item.date), 'MMM d, yyyy'), margin + 8, yPos);

    // Type badge
    const badgeX = margin + 50;
    if (item.type === 'deadline') {
      doc.setFillColor(254, 226, 226);
    } else if (item.type === 'priority') {
      doc.setFillColor(254, 243, 199);
    } else {
      doc.setFillColor(219, 234, 254);
    }
    doc.roundedRect(badgeX, yPos - 4, 20, 5, 1, 1, 'F');
    doc.setFontSize(7);
    if (item.type === 'deadline') {
      doc.setTextColor(153, 27, 27);
    } else if (item.type === 'priority') {
      doc.setTextColor(146, 64, 14);
    } else {
      doc.setTextColor(30, 64, 175);
    }
    doc.text(item.type.toUpperCase(), badgeX + 2, yPos);

    // Title
    yPos += 5;
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    doc.text(item.title, margin + 8, yPos);
    doc.setFont('helvetica', 'normal');

    // Description
    yPos += 5;
    doc.setFontSize(9);
    doc.setTextColor(60, 60, 60);
    const wrappedDesc = wrapText(item.description, pageWidth - 2 * margin - 16);
    wrappedDesc.forEach((line: string, lineIndex: number) => {
      if (lineIndex < 2) { // Limit to 2 lines in PDF
        doc.text(line, margin + 8, yPos);
        yPos += 4;
      }
    });

    yPos += boxHeight - 21 + 10; // Move to next item
  });

  // Footer
  checkPageBreak(20);
  yPos = pageHeight - 15;
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text('© 2025 My College Finance. All rights reserved.', pageWidth / 2, yPos, {
    align: 'center',
  });
  doc.text('https://www.mycollegefinance.com/', pageWidth / 2, yPos + 5, {
    align: 'center',
  });

  // Save PDF
  const filename = `MCF-FAFSA-Timeline-${formData.studentName.replace(/\s+/g, '-')}-${formData.academicYear}.pdf`;
  doc.save(filename);
}
