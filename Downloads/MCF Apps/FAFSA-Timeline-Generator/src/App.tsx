import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TimelineFormWizard } from '@/components/forms/TimelineFormWizard';
import { TimelineVisualization } from '@/components/timeline/TimelineVisualization';
import { DeadlineCountdown } from '@/components/timeline/DeadlineCountdown';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Calendar, RotateCcw, Sparkles } from 'lucide-react';
import type { TimelineFormData, TimelineItem } from '@/types/timeline';
import { timelineDatabase, getStateSpecificItems, getSpecialCircumstancesItems } from '@/lib/timeline-data';
import { generateTimelinePDF } from '@/lib/pdf-export';
import { generateCalendarICS } from '@/lib/calendar-export';
import { useTimelineStorage } from '@/hooks/useLocalStorage';

function App() {
  const [showForm, setShowForm] = useState(true);
  const [formData, setFormData] = useState<TimelineFormData | null>(null);
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([]);
  const { savedTimeline, saveTimeline, clearTimeline } = useTimelineStorage();

  // Load saved timeline on mount
  useEffect(() => {
    if (savedTimeline) {
      setFormData(savedTimeline.formData);
      setTimelineItems(savedTimeline.items);
      setShowForm(false);
    }
  }, []);

  const handleFormComplete = (data: TimelineFormData) => {
    setFormData(data);

    // Get base timeline items
    const baseItems = timelineDatabase[data.academicYear]?.[data.studentType] || [];

    // Get state-specific items
    const stateItems = getStateSpecificItems(data.state, data.academicYear);

    // Get special circumstances items
    const specialItems = getSpecialCircumstancesItems(
      data.specialCircumstances,
      data.academicYear
    );

    // Combine and sort all items
    const allItems = [...baseItems, ...stateItems, ...specialItems].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    setTimelineItems(allItems);
    setShowForm(false);

    // Save to localStorage
    saveTimeline({ formData: data, items: allItems });
  };

  const handleToggleComplete = (itemId: string, completed: boolean) => {
    const updatedItems = timelineItems.map((item) =>
      item.id === itemId ? { ...item, completed } : item
    );
    setTimelineItems(updatedItems);

    // Auto-save
    if (formData) {
      saveTimeline({ formData, items: updatedItems });
    }
  };

  const handleUpdateNotes = (itemId: string, notes: string) => {
    const updatedItems = timelineItems.map((item) =>
      item.id === itemId ? { ...item, notes } : item
    );
    setTimelineItems(updatedItems);

    // Auto-save
    if (formData) {
      saveTimeline({ formData, items: updatedItems });
    }
  };

  const handleExportPDF = () => {
    if (formData) {
      generateTimelinePDF(formData, timelineItems);
    }
  };

  const handleExportCalendar = () => {
    if (formData) {
      generateCalendarICS(formData, timelineItems);
    }
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to start over? This will clear your current timeline.')) {
      clearTimeline();
      setFormData(null);
      setTimelineItems([]);
      setShowForm(true);
    }
  };

  const completedCount = timelineItems.filter((item) => item.completed).length;
  const totalCount = timelineItems.length;
  const completionPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container py-8 px-4">
        {showForm ? (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4 py-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                FAFSA Timeline Generator
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Create your personalized FAFSA action plan with key deadlines, reminders, and
                milestones tailored to your unique situation.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="w-4 h-4" />
                <span>Never miss a deadline • Stay organized • Maximize your aid</span>
              </div>
            </div>

            {/* Form Wizard */}
            <TimelineFormWizard
              onComplete={handleFormComplete}
              initialData={savedTimeline?.formData}
            />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Timeline Header */}
            <Card>
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl sm:text-3xl font-bold">
                      {formData?.studentName}'s FAFSA Timeline
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Academic Year: {formData?.academicYear} • {formData?.state} •{' '}
                      {formData?.studentType.replace('-', ' ').toUpperCase()}
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm" onClick={handleReset}>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Start Over
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-lg bg-blue-50 dark:bg-[hsl(var(--timeline-safe-bg))] border dark:border-[hsl(var(--timeline-safe-border))]">
                    <div className="text-3xl font-bold text-blue-600 dark:text-[hsl(var(--timeline-safe))]">
                      {totalCount}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Deadlines</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-green-50 dark:bg-[hsl(var(--timeline-complete-bg))] border dark:border-[hsl(var(--timeline-complete-border))]">
                    <div className="text-3xl font-bold text-green-600 dark:text-[hsl(var(--timeline-complete))]">
                      {completedCount}
                    </div>
                    <div className="text-sm text-muted-foreground">Completed</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-purple-50 dark:bg-[hsl(var(--timeline-warning-bg))] border dark:border-[hsl(var(--timeline-warning-border))]">
                    <div className="text-3xl font-bold text-purple-600 dark:text-[hsl(var(--timeline-warning))]">
                      {completionPercentage}%
                    </div>
                    <div className="text-sm text-muted-foreground">Progress</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="brand" onClick={handleExportPDF}>
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>
              <Button variant="success" onClick={handleExportCalendar}>
                <Calendar className="w-4 h-4 mr-2" />
                Export to Calendar
              </Button>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Timeline - Takes 2 columns */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Your Timeline</h2>
                <TimelineVisualization
                  items={timelineItems}
                  onToggleComplete={handleToggleComplete}
                  onUpdateNotes={handleUpdateNotes}
                />
              </div>

              {/* Sidebar - Takes 1 column */}
              <div className="space-y-6">
                <DeadlineCountdown items={timelineItems} />

                {/* Tips Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">💡 Pro Tips</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex gap-2">
                      <span className="text-blue-600 dark:text-[hsl(var(--link))]">✓</span>
                      <p>Submit your FAFSA as early as possible for maximum aid consideration</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-blue-600 dark:text-[hsl(var(--link))]">✓</span>
                      <p>Use the IRS Data Retrieval Tool for accurate tax information</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-blue-600 dark:text-[hsl(var(--link))]">✓</span>
                      <p>Check your state's specific deadline - some are earlier than federal</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-blue-600 dark:text-[hsl(var(--link))]">✓</span>
                      <p>Add notes to each deadline to track your progress</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
