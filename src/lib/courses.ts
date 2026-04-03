export interface Course {
  id: string;
  title: string;
  tagline: string;
}

export const courses: Course[] = [
  {
    id: "foundation-ielts",
    title: "Foundation IELTS",
    tagline: "Comprehensive Academic Preparation for University Admission",
  },
  {
    id: "easy-ielts",
    title: "Easy IELTS",
    tagline: "Transform Your Language Skills for University Success",
  },
  {
    id: "advance-ielts",
    title: "Advance IELTS",
    tagline: "Master IELTS with Expert Guidance and Targeted Practice",
  },
  {
    id: "executive-ielts",
    title: "Executive IELTS",
    tagline: "Tailored IELTS Coaching for Professionals and Executives",
  },
  {
    id: "ielts-express",
    title: "IELTS Express",
    tagline: "Intensive IELTS Preparation for Rapid Results",
  },
];

export const mock: Course[] = [
  {
    id: "single-mock",
    title: "Single Mock",
    tagline: "Evaluate Your Language Skills with a Single Mock Test",
  },
  {
    id: "three-mock",
    title: "Number Of Three Mock Tests",
    tagline:
      "Boost Your IELTS Readiness with Three Mock Tests and Expert Feedback",
  },
  {
    id: "five-mock",
    title: "Number Of five Mock Tests",
    tagline:
      "Comprehensive IELTS Preparation with Five Mock Tests and Detailed Analysis",
  },
  {
    id: "ten-mock",
    title: "Number Of ten Mock Tests",
    tagline:
      "Intensive IELTS Training with Ten Mock Tests and Personalized Feedback",
  },
  {
    id: "unlimited-mock",
    title: "Unlimited Mock",
    tagline:
      "Unlimited Mock Tests for Continuous IELTS Improvement and Success",
  },
];

export const spoken: Course[] = [
  {
    id: "fundamental-spoken-english",
    title: "Fundamental Spoken English",
    tagline:
      "Build Your Confidence in Speaking English with Our Spoken English 1 Course",
  },
  {
    id: "advanced-spoken-english",
    title: "Advanced Spoken English",
    tagline:
      "Take Your English Speaking Skills to the Next Level with Our Advanced Spoken English Course",
  },
];
