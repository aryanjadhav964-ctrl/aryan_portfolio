export interface Lead {
  id?: string;
  name: string;
  email: string;
  instagram_or_phone?: string;
  message?: string;
  created_at?: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export interface WorkItem {
  id: string;
  title: string;
  category: string;
  description: string;
  stats: { label: string; value: string }[];
  color: string;
}
