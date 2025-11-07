export type AcademicYear = '2025-26' | '2026-27' | '2027-28' | '2028-29';

export type StudentType =
  | 'high-school'
  | 'current-college'
  | 'graduate'
  | 'adult-learner';

export type TimelineItemType = 'deadline' | 'priority' | 'optional';

export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description: string;
  type: TimelineItemType;
  priority: boolean;
  completed?: boolean;
  notes?: string;
}

export interface SpecialCircumstances {
  divorcedParents: boolean;
  remarriedParent: boolean;
  independentStudent: boolean;
  specialCircumstances: boolean;
  appealPlanned: boolean;
}

export interface TimelineFormData {
  studentName: string;
  academicYear: AcademicYear;
  studentType: StudentType;
  state: string;
  specialCircumstances: SpecialCircumstances;
}

export interface SavedTimeline extends TimelineFormData {
  id: string;
  items: TimelineItem[];
  createdAt: string;
  updatedAt: string;
}
