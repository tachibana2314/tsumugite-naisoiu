export interface Project {
  id: string;
  title: string;
  location: string;
  date: string;
  imageUrl: string;
  category: string;
  description?: string;
  images?: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export type ContactType = 
  | "店舗・オフィスの設計について"
  | "その他";

export interface ContactForm {
  name: string;
  company?: string; // 会社名を任意項目に変更
  email: string;
  phone: string;
  type: ContactType;
  message: string;
}