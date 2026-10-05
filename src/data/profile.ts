import type { Profile } from '../types/content'

export const profile: Profile = {
  name: { en: 'Mohammed Alghifari', ar: 'محمد الغفاري' },
  brand: 'M7dev', // shown in the header and footer
  // Stretched with tatweel (ـ) for the hero heading only. Add or remove ـ to change the stretch.
  heroName: { en: 'Mohammed Alghifari', ar: 'محــــــمد الغفــــــاري' },
  role: { en: 'Software Engineer & Data Analyst', ar: 'مهندس برمجيات ومحلل بيانات' },
  intro: {
    en: 'I build full-stack web applications, turn data into clear, useful insights, and explore how AI can make products smarter.',
    ar: 'أبني تطبيقات ويب متكاملة، وأحوّل البيانات إلى رؤى واضحة ومفيدة، وأستكشف كيف يجعل الذكاء الاصطناعي المنتجات أذكى.',
  },
  email: 'm.khallaf03@gmail.com',
  cvs: [
    { label: { en: 'Full-Stack Developer', ar: 'مطوّر ويب متكامل' }, href: '/cv/Mohammed_Alghifari_CV_Full_Stack.pdf' },
    { label: { en: 'Data Analyst', ar: 'محلل بيانات' }, href: '/cv/Mohammed_Alghifari_CV_Data_Analyst.pdf' },
    { label: { en: 'IT', ar: 'تقنية المعلومات' }, href: '/cv/Mohammed_Alghifari_CV_IT.pdf' },
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/M7Ddev', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohammad-alghifari/', icon: 'linkedin' },
  ],
  contactText: {
    en: "I'm open to software engineering and data analyst opportunities. The best way to reach me is by email.",
    ar: 'أرحّب بفرص العمل في هندسة البرمجيات وتحليل البيانات، وأفضل طريقة للتواصل معي هي البريد الإلكتروني.',
  },
}
