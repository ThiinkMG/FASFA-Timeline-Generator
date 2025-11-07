import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import type { TimelineFormData, AcademicYear, StudentType } from '@/types/timeline';
import { US_STATES } from '@/lib/constants';

interface TimelineFormWizardProps {
  onComplete: (data: TimelineFormData) => void;
  initialData?: Partial<TimelineFormData>;
}

export function TimelineFormWizard({ onComplete, initialData }: TimelineFormWizardProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<TimelineFormData>({
    studentName: initialData?.studentName || '',
    academicYear: initialData?.academicYear || '2025-26',
    studentType: initialData?.studentType || 'high-school',
    state: initialData?.state || '',
    specialCircumstances: initialData?.specialCircumstances || {
      divorcedParents: false,
      remarriedParent: false,
      independentStudent: false,
      specialCircumstances: false,
      appealPlanned: false,
    },
  });

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onComplete(formData);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    if (step === 1) return formData.studentName.trim() !== '';
    if (step === 2) return formData.state !== '';
    return true;
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <CardTitle className="text-2xl font-bold text-blue-600 dark:text-[hsl(var(--link))]">
            Create Your FAFSA Timeline
          </CardTitle>
          <span className="text-sm text-muted-foreground">
            Step {step} of {totalSteps}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
        <CardDescription className="mt-2">
          {step === 1 && "Let's start with some basic information"}
          {step === 2 && 'Tell us about your situation'}
          {step === 3 && 'Any special circumstances we should know about?'}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Step 1: Basic Information */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in-50 duration-300">
            <div className="space-y-2">
              <Label htmlFor="studentName">Your Full Name *</Label>
              <Input
                id="studentName"
                placeholder="Enter your full name"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                className="text-base"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="academicYear">Academic Year *</Label>
              <Select
                value={formData.academicYear}
                onValueChange={(value: AcademicYear) =>
                  setFormData({ ...formData, academicYear: value })
                }
              >
                <SelectTrigger id="academicYear">
                  <SelectValue placeholder="Select academic year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2025-26">2025-26 (Current)</SelectItem>
                  <SelectItem value="2026-27">2026-27</SelectItem>
                  <SelectItem value="2027-28">2027-28</SelectItem>
                  <SelectItem value="2028-29">2028-29</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="studentType">Student Type *</Label>
              <Select
                value={formData.studentType}
                onValueChange={(value: StudentType) =>
                  setFormData({ ...formData, studentType: value })
                }
              >
                <SelectTrigger id="studentType">
                  <SelectValue placeholder="Select student type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high-school">High School Student</SelectItem>
                  <SelectItem value="current-college">Current College Student</SelectItem>
                  <SelectItem value="graduate">Graduate Student</SelectItem>
                  <SelectItem value="adult-learner">Adult Learner</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {/* Step 2: Location */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in-50 duration-300">
            <div className="space-y-2">
              <Label htmlFor="state">State of Residence *</Label>
              <Select
                value={formData.state}
                onValueChange={(value) => setFormData({ ...formData, state: value })}
              >
                <SelectTrigger id="state">
                  <SelectValue placeholder="Select your state" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {US_STATES.map((state) => (
                    <SelectItem key={state.code} value={state.code}>
                      {state.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Your state may have specific financial aid deadlines and programs
              </p>
            </div>

            <div className="rounded-lg bg-blue-50 dark:bg-blue-950/20 p-4 border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold mb-2 text-sm">Why we ask for your state</h4>
              <p className="text-sm text-muted-foreground">
                Each state has different financial aid programs and deadlines. We'll include
                state-specific deadlines in your personalized timeline.
              </p>
            </div>
          </div>
        )}

        {/* Step 3: Special Circumstances */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in-50 duration-300">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Select any that apply to you (optional). We'll add relevant deadlines to your
                timeline.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-accent transition-colors">
                  <Checkbox
                    id="divorcedParents"
                    checked={formData.specialCircumstances.divorcedParents}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        specialCircumstances: {
                          ...formData.specialCircumstances,
                          divorcedParents: checked as boolean,
                        },
                      })
                    }
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="divorcedParents"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      Divorced or Separated Parents
                    </label>
                    <p className="text-sm text-muted-foreground">
                      We'll help you understand contributor requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-accent transition-colors">
                  <Checkbox
                    id="remarriedParent"
                    checked={formData.specialCircumstances.remarriedParent}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        specialCircumstances: {
                          ...formData.specialCircumstances,
                          remarriedParent: checked as boolean,
                        },
                      })
                    }
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="remarriedParent"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      Remarried Parent
                    </label>
                    <p className="text-sm text-muted-foreground">
                      Stepparent financial information may be required
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-accent transition-colors">
                  <Checkbox
                    id="independentStudent"
                    checked={formData.specialCircumstances.independentStudent}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        specialCircumstances: {
                          ...formData.specialCircumstances,
                          independentStudent: checked as boolean,
                        },
                      })
                    }
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="independentStudent"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      Independent Student Status
                    </label>
                    <p className="text-sm text-muted-foreground">
                      Age 24+, married, military, or other criteria
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-accent transition-colors">
                  <Checkbox
                    id="specialCircumstances"
                    checked={formData.specialCircumstances.specialCircumstances}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        specialCircumstances: {
                          ...formData.specialCircumstances,
                          specialCircumstances: checked as boolean,
                        },
                      })
                    }
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="specialCircumstances"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      Special Circumstances
                    </label>
                    <p className="text-sm text-muted-foreground">
                      Job loss, medical expenses, natural disasters, etc.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-accent transition-colors">
                  <Checkbox
                    id="appealPlanned"
                    checked={formData.specialCircumstances.appealPlanned}
                    onCheckedChange={(checked) =>
                      setFormData({
                        ...formData,
                        specialCircumstances: {
                          ...formData.specialCircumstances,
                          appealPlanned: checked as boolean,
                        },
                      })
                    }
                  />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="appealPlanned"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      Planning to Appeal Financial Aid
                    </label>
                    <p className="text-sm text-muted-foreground">
                      We'll include appeal preparation and submission deadlines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6 border-t">
          <Button variant="outline" onClick={handleBack} disabled={step === 1}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <Button
            variant={step === totalSteps ? 'brand' : 'default'}
            onClick={handleNext}
            disabled={!canProceed()}
          >
            {step === totalSteps ? (
              <>
                Generate Timeline
                <Check className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Continue
                <ChevronRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
