// Interface wording (buttons, headings, labels) in both languages.
// Your own content (profile, projects, ...) lives in src/data instead.
// `{name}` placeholders are filled in by t(key, { name: ... }).

const en = {
  metaTitle: 'Mohammed Alghifari | Software Engineer & Data Analyst',
  skipToContent: 'Skip to main content',
  techStack: 'Tech Stack',
  projects: 'Projects',
  contact: 'Contact',
  mainNav: 'Main',
  downloadCv: 'Download CV',
  chooseCv: 'Choose a CV version',
  email: 'Email',
  technologies: 'Technologies used',
  sourceCode: 'Source code',
  sourceCodeOf: 'Source code of {title}',
  liveDemo: 'Live demo',
  liveDemoOf: 'Live demo of {title}',
  opensNewTab: '(opens in a new tab)',
  showOverview: 'Show {title} overview',
  showBack: 'Show {title} {back}',
  backFigma: 'Figma design',
  backSite: 'live site',
  backDashboard: 'dashboard',
  backGallery: 'screenshots',
  switchToDark: 'Switch to dark mode',
  switchToLight: 'Switch to light mode',
  otherLanguage: 'العربية', // shown on the language button: the language you switch TO
  otherLanguageShort: 'ع', // same, on small screens
  builtBy: 'Designed & built by',
}

export type UiKey = keyof typeof en

const ar: Record<UiKey, string> = {
  metaTitle: 'محمد الغفاري | مهندس برمجيات ومحلل بيانات',
  skipToContent: 'تخطَّ إلى المحتوى الرئيسي',
  techStack: 'التقنيات',
  projects: 'المشاريع',
  contact: 'تواصل معي',
  mainNav: 'القائمة الرئيسية',
  downloadCv: 'تحميل السيرة الذاتية',
  chooseCv: 'اختر نسخة السيرة الذاتية',
  email: 'البريد الإلكتروني',
  technologies: 'التقنيات المستخدمة',
  sourceCode: 'الكود المصدري',
  sourceCodeOf: 'الكود المصدري لمشروع {title}',
  liveDemo: 'العرض المباشر',
  liveDemoOf: 'العرض المباشر لمشروع {title}',
  opensNewTab: '(يفتح في تبويب جديد)',
  showOverview: 'عرض واجهة مشروع {title}',
  showBack: 'عرض {back} لمشروع {title}',
  backFigma: 'تصميم Figma',
  backSite: 'الموقع المباشر',
  backDashboard: 'لوحة البيانات',
  backGallery: 'لقطات الشاشة',
  switchToDark: 'التبديل إلى الوضع الداكن',
  switchToLight: 'التبديل إلى الوضع الفاتح',
  otherLanguage: 'English',
  otherLanguageShort: 'EN',
  builtBy: 'تصميم وتطوير',
}

export const ui = { en, ar }
