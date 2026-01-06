export interface WindowState {
  id: string;
  title: string;
  icon: string;
  component: string;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
}

export interface DesktopIcon {
  id: string;
  label: string;
  icon: string;
  component: string;
}

export interface CVData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone?: string;
    location: string;
  };
  summary: string;
  experience: Array<{
    company: string;
    position: string;
    period: string;
    description: string;
    achievements?: string[];
  }>;
  education: Array<{
    institution: string;
    degree: string;
    period: string;
    details?: string;
  }>;
  skills: string[];
}

export interface BookItem {
  id: string;
  title: string;
  author: string;
  type: 'book' | 'article';
  year?: number;
  description: string;
  url?: string;
  tags?: string[];
}

export interface SkillCategory {
  category: string;
  skills: Array<{
    name: string;
    level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
    description?: string;
  }>;
}

export interface SocialLink {
  platform: 'github' | 'linkedin' | 'other';
  url: string;
  username: string;
}
