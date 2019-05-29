// No need for id:s since database is assigning them automatically
export interface CourseItem {
  name: string;
  start_date: string;
  end_date: string;
}

export interface AssignmentItem {
  name: string;
  description: string;
  state: string;
  created_date: string;
  due_date: string;
  course_id_FK: number;
}
