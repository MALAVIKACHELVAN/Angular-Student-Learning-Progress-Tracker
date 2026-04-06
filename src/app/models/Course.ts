export interface Course {
  id?: number;
  title: string;
  instructor: string;
  duration: string;
  category: string;
  price: number;
  description: string;
  status: 'Active' | 'Inactive';
}