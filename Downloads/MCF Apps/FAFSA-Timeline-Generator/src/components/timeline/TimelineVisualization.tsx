import type { TimelineItem } from '@/types/timeline';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, AlertCircle } from 'lucide-react';
import { format, differenceInDays } from 'date-fns';
import { cn } from '@/lib/utils';

interface TimelineVisualizationProps {
  items: TimelineItem[];
  onToggleComplete?: (itemId: string, completed: boolean) => void;
  onUpdateNotes?: (itemId: string, notes: string) => void;
}

export function TimelineVisualization({
  items,
  onToggleComplete,
  onUpdateNotes,
}: TimelineVisualizationProps) {
  const sortedItems = [...items].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const getDaysUntil = (dateString: string) => {
    const days = differenceInDays(new Date(dateString), new Date());
    return days;
  };

  const getUrgencyColor = (days: number) => {
    if (days < 0) return 'text-gray-500 dark:text-[hsl(var(--timeline-past))]';
    if (days <= 7) return 'text-red-600 dark:text-[hsl(var(--timeline-critical))]';
    if (days <= 30) return 'text-amber-600 dark:text-[hsl(var(--timeline-warning))]';
    return 'text-blue-600 dark:text-[hsl(var(--timeline-safe))]';
  };

  const getTypeColor = (type: string) => {
    if (type === 'deadline')
      return 'bg-red-100 text-red-800 dark:bg-[hsl(var(--timeline-critical-bg))] dark:text-[hsl(var(--timeline-critical))] dark:border-[hsl(var(--timeline-critical-border))]';
    if (type === 'priority')
      return 'bg-amber-100 text-amber-800 dark:bg-[hsl(var(--timeline-warning-bg))] dark:text-[hsl(var(--timeline-warning))] dark:border-[hsl(var(--timeline-warning-border))]';
    return 'bg-blue-100 text-blue-800 dark:bg-[hsl(var(--timeline-safe-bg))] dark:text-[hsl(var(--timeline-safe))] dark:border-[hsl(var(--timeline-safe-border))]';
  };

  return (
    <div className="relative space-y-4">
      {/* Timeline Line */}
      <div className="absolute left-[21px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500" />

      {sortedItems.map((item, index) => {
        const daysUntil = getDaysUntil(item.date);
        const isPast = daysUntil < 0;
        const isCompleted = item.completed || false;

        return (
          <Card
            key={item.id}
            className={cn(
              'relative ml-12 transition-all hover:shadow-md',
              isCompleted && 'opacity-60',
              isPast && !isCompleted && 'border-l-4 border-l-gray-400'
            )}
          >
            {/* Timeline Dot */}
            <div
              className={cn(
                'absolute -left-[57px] top-6 w-10 h-10 rounded-full flex items-center justify-center border-4 border-background z-10',
                item.type === 'deadline' && 'bg-red-500 dark:bg-[hsl(var(--timeline-critical))]',
                item.type === 'priority' && 'bg-amber-500 dark:bg-[hsl(var(--timeline-warning))]',
                item.type === 'optional' && 'bg-blue-500 dark:bg-[hsl(var(--timeline-safe))]',
                isCompleted && 'bg-green-500 dark:bg-[hsl(var(--timeline-complete))]'
              )}
            >
              {isCompleted ? (
                <Check className="w-5 h-5 text-white" />
              ) : (
                <Calendar className="w-5 h-5 text-white" />
              )}
            </div>

            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3 flex-1">
                  {onToggleComplete && (
                    <Checkbox
                      checked={isCompleted}
                      onCheckedChange={(checked) =>
                        onToggleComplete(item.id, checked as boolean)
                      }
                      className="mt-1"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3
                        className={cn(
                          'text-lg font-semibold',
                          isCompleted && 'line-through text-muted-foreground'
                        )}
                      >
                        {item.title}
                      </h3>
                      <Badge variant="outline" className={getTypeColor(item.type)}>
                        {item.type}
                      </Badge>
                      {item.priority && (
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                          Priority
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{item.description}</p>

                    {/* Date & Countdown */}
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium">
                          {format(new Date(item.date), 'MMMM d, yyyy')}
                        </span>
                      </div>
                      {!isPast && !isCompleted && (
                        <div className={cn('flex items-center gap-2', getUrgencyColor(daysUntil))}>
                          <Clock className="w-4 h-4" />
                          <span className="font-medium">
                            {daysUntil === 0
                              ? 'Today!'
                              : daysUntil === 1
                              ? '1 day left'
                              : `${daysUntil} days left`}
                          </span>
                          {daysUntil <= 7 && <AlertCircle className="w-4 h-4" />}
                        </div>
                      )}
                      {isPast && !isCompleted && (
                        <div className="flex items-center gap-2 text-gray-500 dark:text-[hsl(var(--timeline-past))]">
                          <AlertCircle className="w-4 h-4" />
                          <span className="font-medium">
                            {Math.abs(daysUntil)} days ago
                          </span>
                        </div>
                      )}
                      {isCompleted && (
                        <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-[hsl(var(--timeline-complete-bg))] dark:text-[hsl(var(--timeline-complete))] dark:border-[hsl(var(--timeline-complete-border))]">
                          ✓ Completed
                        </Badge>
                      )}
                    </div>

                    {/* Notes Section */}
                    {onUpdateNotes && (
                      <div className="mt-3">
                        <textarea
                          placeholder="Add notes... (optional)"
                          value={item.notes || ''}
                          onChange={(e) => onUpdateNotes(item.id, e.target.value)}
                          className="w-full text-sm p-2 rounded border bg-background resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                          rows={2}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

// Import Check icon
import { Check } from 'lucide-react';
