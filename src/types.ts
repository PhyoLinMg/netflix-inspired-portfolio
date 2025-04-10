// types.ts

export interface ProfileBanner {
  backgroundimage: { url: string };
  headline: string;
  resumelink: {
    url: string;
  };
  linkedinlink: string;
  profilesummary: string;
}

export interface WorkPermit {
  visaStatus: string;
  expiryDate: Date;
  summary: string;
  additionalInfo: string;
}

export interface TimelineItem {
  timelinetype: 'work' | 'education';
  name: string;
  title: string;
  techstack: string;
  summarypoints: string;
  daterange: string;
}

export interface Project {
  title: string;
  description: string;
  techused: string;
  image: { url: string };
}

export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  link: string;
  iconName: string;
}

export interface ContactMe {
  profilepicture: { url: string };
  name: string;
  title: string;
  summary: string;
  //companyUniversity: string;
  linkedinlink: string;
  email: string;
  mobile: string;
}

export interface Skill { 
  name: string;
  category: string;
  description: string;
  icon: string;
}
