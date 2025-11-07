import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, AlertTriangle } from 'lucide-react';
import type { TimelineItem } from '@/types/timeline';
import { differenceInDays, differenceInHours, format } from 'date-fns';

interface DeadlineCountdownProps {
  items: TimelineItem[];
}

export function DeadlineCountdown({ items }: DeadlineCountdownProps) {
  const [now, setNow] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Get upcoming deadlines (next 30 days, not completed)
  const upcomingDeadlines = items
    .filter((item) => {
      const itemDate = new Date(item.date);
      const daysUntil = differenceInDays(itemDate, now);
      return !item.completed && daysUntil >= 0 && daysUntil <= 30;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3); // Show top 3

  if (upcomingDeadlines.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Upcoming Deadlines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            No upcoming deadlines in the next 30 days. Great work staying on top of things!
          </p>
        </CardContent>
      </Card>
    );
  }

  const getTimeLeft = (dateString: string) => {
    const targetDate = new Date(dateString);
    const days = differenceInDays(targetDate, now);
    const hours = differenceInHours(targetDate, now) % 24;

    return { days, hours };
  };

  const getUrgencyClass = (days: number) => {
    if (days === 0) return 'bg-red-100 border-red-500 dark:bg-red-950/20';
    if (days <= 3) return 'bg-red-50 border-red-300 dark:bg-red-950/10';
    if (days <= 7) return 'bg-amber-50 border-amber-300 dark:bg-amber-950/10';
    return 'bg-blue-50 border-blue-300 dark:bg-blue-950/10';
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          Upcoming Deadlines
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingDeadlines.map((item) => {
          const { days, hours } = getTimeLeft(item.date);
          const isUrgent = days <= 3;

          return (
            <div
              key={item.id}
              className={`p-4 rounded-lg border-2 ${getUrgencyClass(days)}`}
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-semibold text-sm">{item.title}</h4>
                {isUrgent && (
                  <AlertTriangle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0" />
                )}
              </div>

              <p className="text-xs text-muted-foreground mb-3">
                {format(new Date(item.date), 'EEEE, MMMM d, yyyy')}
              </p>

              <div className="flex items-center gap-2">
                <Badge
                  variant={days === 0 ? 'destructive' : 'secondary'}
                  className="text-sm font-bold"
                >
                  {days === 0 ? (
                    <>TODAY!</>
                  ) : days === 1 ? (
                    <>1 DAY</>
                  ) : (
                    <>{days} DAYS</>
                  )}
                </Badge>
                {days > 0 && hours > 0 && (
                  <span className="text-xs text-muted-foreground">
                    {hours} hour{hours !== 1 ? 's' : ''}
                  </span>
                )}
              </div>

              {item.priority && (
                <Badge variant="outline" className="mt-2 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                  High Priority
                </Badge>
              )}
            </div>
          );
        })}

        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground text-center">
            Showing your next {upcomingDeadlines.length} deadline
            {upcomingDeadlines.length !== 1 ? 's' : ''} • Updates every minute
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
