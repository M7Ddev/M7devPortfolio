import type { Project } from '../types/content'

// Projects shown in the Projects section, in display order.
//
// `back` options (leave it out for a card that doesn't flip):
//   { type: 'figma', url: '<Figma share link>' }
//   { type: 'site', url: '<live site URL>' }  (the site must allow being embedded)
//   { type: 'dashboard', url: '<Streamlit / Power BI / Tableau embed link>' }
//   { type: 'gallery', images: [{ src: '/images/projects/...', alt: '...' }] }  (add `phone: true` for mobile screens)
export const projects: Project[] = [
  {
    slug: '9ba',
    title: 'صبّة (9ba)',
    category: { en: 'Full-Stack AI App', ar: 'تطبيق ويب متكامل بالذكاء الاصطناعي' },
    tagline: {
      en: 'A specialty-coffee brewing assistant that generates precise recipes from your brew method, beans and grinder, and fills in bean details from a photo of the coffee bag.',
      ar: 'مساعد لتحضير القهوة المختصة يُنشئ وصفات دقيقة حسب طريقة التحضير والحبوب والمطحنة، ويملأ بيانات الحبوب تلقائيًا من صورة كيس القهوة.',
    },
    tech: ['Laravel', 'React', 'Gemini API', 'PostgreSQL'],
    image: {
      src: '/images/projects/9ba.webp',
      alt: 'صبّة in Arabic dark mode: a settings form for brew method, roast level, taste preference, water and coffee amounts, serving and grinder, with a button to photograph the coffee bag.',
    },
    repoUrl: 'https://github.com/M7Ddev/9ba',
    liveUrl: 'https://nineba.onrender.com/',
    // Screenshots from the live site (it blocks being embedded, so no `site` back).
    back: {
      type: 'gallery',
      images: [
        {
          src: '/images/projects/9ba/recipe.webp',
          alt: 'A generated V60 recipe in Arabic: coffee dose, water and temperature, grind size, ratio and total time, why the recipe suits the beans, timed steps and notes.',
        },
        {
          src: '/images/projects/9ba/steps-timer.webp',
          alt: 'Brew timer with the current step highlighted, "How did it turn out?" feedback buttons and the brew history the assistant learns from.',
        },
        {
          src: '/images/projects/9ba/english-light.webp',
          alt: 'صبّة in English and light mode: the setup form with brew method, roast level, taste preference and grinder, and a button to photograph the coffee bag.',
        },
      ],
    },
  },
  {
    slug: 'yourgymbro',
    title: 'YourGymBro',
    category: { en: 'Full-Stack Web App', ar: 'تطبيق ويب متكامل' },
    tagline: {
      en: 'A workout tracker for saving your weekly training plan and following your progress, in Arabic and English with light and dark themes.',
      ar: 'تطبيق لتتبّع التمارين يحفظ خطتك التدريبية الأسبوعية ويتابع تقدّمك، بالعربية والإنجليزية مع وضعين فاتح وداكن.',
    },
    tech: ['Laravel', 'React', 'Supabase'],
    image: {
      src: '/images/projects/yourgymbro.webp',
      alt: 'YourGymBro home page in Arabic dark mode with the headline "Track your workout plan with ease" and a prompt to sign up or log in to track workouts.',
    },
    repoUrl: 'https://github.com/M7Ddev/Yourgymbro',
    liveUrl: 'https://yourgymbroo.netlify.app/',
    back: { type: 'site', url: 'https://yourgymbroo.netlify.app/' },
  },
  {
    slug: '9oora',
    title: '9oora',
    category: { en: 'Full-Stack Web App', ar: 'تطبيق ويب متكامل' },
    tagline: {
      en: 'A photography studio booking platform: clients browse sessions, pick an open time slot and track their bookings, while admins manage services, slots and booking status from a dashboard.',
      ar: 'منصة لحجز جلسات استوديو التصوير: يتصفح العملاء الجلسات ويختارون موعدًا متاحًا ويتابعون حجوزاتهم، بينما يدير المشرفون الخدمات والمواعيد وحالة الحجوزات من لوحة تحكم.',
    },
    tech: ['Laravel', 'Sanctum', 'React', 'React Router', 'MySQL'],
    image: {
      src: '/images/projects/9oora/home.webp',
      alt: '9oora home page with the headline "Your perfect shot, perfectly scheduled" and a three-step "How it works" section.',
    },
    // No repo or live demo yet. Screenshots taken from a local run.
    back: {
      type: 'gallery',
      images: [
        {
          src: '/images/projects/9oora/services.webp',
          alt: 'Services page listing Portrait, Family and Mini photography sessions with duration and price.',
        },
        {
          src: '/images/projects/9oora/booking.webp',
          alt: 'Booking page for a Portrait Session with a grid of available time slots to choose from.',
        },
        {
          src: '/images/projects/9oora/my-bookings.webp',
          alt: 'My Bookings page showing a confirmed and a pending session, each with a cancel button.',
        },
        {
          src: '/images/projects/9oora/admin-dashboard.webp',
          alt: 'Admin dashboard with totals for users, services, time slots and bookings, and bookings by status.',
        },
      ],
    },
  },
  {
    slug: 'pcware',
    title: 'pcWare',
    category: { en: 'Admin Dashboard', ar: 'لوحة تحكم إدارية' },
    tagline: {
      en: 'An Arabic (right-to-left) admin dashboard for a PC store: manage products and orders, track revenue and order status, and look up devices from a live product API.',
      ar: 'لوحة تحكم إدارية عربية لمتجر أجهزة كمبيوتر: إدارة المنتجات والطلبات، ومتابعة الإيرادات وحالة الطلبات، والبحث عن الأجهزة عبر واجهة برمجية مباشرة للمنتجات.',
    },
    tech: ['React', 'React Router', 'Laravel', 'Sanctum', 'REST APIs'],
    image: {
      src: '/images/projects/pcware/dashboard.webp',
      alt: 'pcWare dashboard in Arabic dark mode showing totals for products, revenue and orders, and an order status breakdown.',
    },
    repoUrl: 'https://github.com/M7Ddev/pcWare-dashboard',
    // No live demo yet. Screenshots taken from a local run.
    back: {
      type: 'gallery',
      images: [
        {
          src: '/images/projects/pcware/products.webp',
          alt: 'Products management table with category, price, quantity, status and edit and delete actions.',
        },
        {
          src: '/images/projects/pcware/orders.webp',
          alt: 'Orders management table with order number, customer, date, product, quantity, total price and status.',
        },
        {
          src: '/images/projects/pcware/device-search.webp',
          alt: 'Device search showing details for an Apple MacBook Pro: stock, rating, brand, discount and description.',
        },
        {
          src: '/images/projects/pcware/login.webp',
          alt: 'pcWare sign-in page in Arabic with email and password fields.',
        },
      ],
    },
  },
  {
    slug: 'kau-esports',
    title: 'KAU Esports',
    category: { en: 'Graduation Project · Mobile App', ar: 'مشروع تخرج · تطبيق جوال' },
    tagline: {
      en: 'A Flutter app for running university esports tournaments: organizers create tournaments, manage brackets and verify results, while players join, submit match results and track their performance.',
      ar: 'تطبيق Flutter لإدارة بطولات الرياضات الإلكترونية في الجامعة: ينشئ المنظمون البطولات ويديرون جداول المباريات ويتحققون من النتائج، بينما ينضم اللاعبون ويرفعون نتائج مبارياتهم ويتابعون أداءهم.',
    },
    tech: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'Bloc'],
    image: {
      src: '/images/projects/kau-esports/cover.webp',
      alt: 'Three KAU Esports phone screens: the organizer dashboard, the player home with ongoing tournaments, and the player performance analysis.',
    },
    // No public source code or live demo. Screenshots taken from a local web build.
    back: {
      type: 'gallery',
      phone: true,
      images: [
        {
          src: '/images/projects/kau-esports/manage-tournaments.webp',
          alt: 'Organizer view: Manage Tournaments list with game, format, player count, date and status, plus edit, players, bracket and delete actions.',
        },
        {
          src: '/images/projects/kau-esports/bracket.webp',
          alt: 'Tournament bracket showing a completed final and its score.',
        },
        {
          src: '/images/projects/kau-esports/create-tournament.webp',
          alt: 'Create Tournament form with name, game, format, team size, max players and start and end dates.',
        },
        {
          src: '/images/projects/kau-esports/player-profile.webp',
          alt: 'Player profile with role badge, an Analyze Player button and tournament history with placements and points.',
        },
        {
          src: '/images/projects/kau-esports/player-analysis.webp',
          alt: 'Player analysis sheet with performance level, win rate, podium rate, total points, best game and a written insight.',
        },
      ],
    },
  },
  {
    slug: 'istiraha',
    title: { en: 'Istiraha', ar: 'استراحة' },
    category: { en: 'UI/UX Design', ar: 'تصميم واجهات وتجربة المستخدم' },
    tagline: {
      en: 'A mobile app design in Arabic for discovering and booking istirahas (private rest houses) across Saudi cities: browse featured places, filter by city or price, save favorites and book.',
      ar: 'تصميم تطبيق جوال باللغة العربية لاكتشاف الاستراحات وحجزها في مدن المملكة: تصفّح الاستراحات المميزة، والتصفية حسب المدينة أو السعر، وحفظ المفضلة والحجز.',
    },
    tech: ['Figma', 'UI Design', 'UX Design', 'Prototyping'],
    image: {
      src: '/images/projects/istiraha/cover.webp',
      alt: 'Two Istiraha app screens in Arabic: the home screen with a featured rest house, filters and rest houses by city, and a listings screen showing each rest house’s city, neighborhood and nightly price with an add-to-cart button.',
    },
    back: {
      type: 'figma',
      url: 'https://www.figma.com/design/9Q1mWNq3cSECjokLNxMz5H/ISTIRAHA-APP?node-id=0-1',
    },
  },
  {
    slug: 'algorithmic-attention-fake-news',
    title: { en: 'AI Algorithms, Attention & Fake News', ar: 'خوارزميات الذكاء الاصطناعي والانتباه والأخبار المزيفة' },
    category: { en: 'Data Analysis', ar: 'تحليل بيانات' },
    tagline: {
      en: 'An interactive dashboard analyzing 25,000+ social media records to see how algorithmic exposure, echo chambers and personalization relate to fake news across platforms and age groups. Built for the SDA × Newtech Data Analysis Bootcamp.',
      ar: 'لوحة بيانات تفاعلية تحلل أكثر من 25,000 سجل من وسائل التواصل الاجتماعي لمعرفة علاقة التعرض للخوارزميات وغرف الصدى وتخصيص المحتوى بالأخبار المزيفة عبر المنصات والفئات العمرية. ضمن معسكر تحليل البيانات من SDA وNewtech.',
    },
    tech: ['Python', 'pandas', 'Plotly', 'Streamlit'],
    image: {
      src: '/images/projects/fake-news/dashboard.webp',
      alt: 'Streamlit dashboard titled "Impact of AI Algorithms on Attention Span & Fake News" with platform and age filters, KPI tiles and charts of real vs. fake news.',
    },
    repoUrl: 'https://github.com/M7Ddev/ai-algorithms-attention-fake-news',
    liveUrl: 'https://ai-algorithms-attention-fake-news-dnayndd8sq4ndwtxbe82om.streamlit.app/',
    // Screenshots of the live Streamlit app (loads instantly, unlike the sleeping live embed).
    back: {
      type: 'gallery',
      images: [
        {
          src: '/images/projects/fake-news/distribution.webp',
          alt: 'Donut chart of real vs. fake news (79.5% / 20.5%) and a bar chart of the fake news rate by platform, led by Instagram at 50%.',
        },
        {
          src: '/images/projects/fake-news/indicators-heatmap.webp',
          alt: 'Average behavioral indicators for real vs. fake news and a correlation heatmap of the indicators against is_fake.',
        },
        {
          src: '/images/projects/fake-news/platform-comparison.webp',
          alt: 'Platform Comparison Tool comparing Facebook and Instagram side by side in a table and a grouped bar chart.',
        },
        {
          src: '/images/projects/fake-news/eda-platforms.webp',
          alt: 'Extended EDA: number of records per platform and average AI addiction probability by platform.',
        },
        {
          src: '/images/projects/fake-news/eda-addiction.webp',
          alt: 'Histogram of AI addiction probability and box plots of addiction probability by age group.',
        },
      ],
    },
  },
  {
    slug: 'coffee-shop-sales',
    title: { en: 'Coffee Shop Sales Analysis', ar: 'تحليل مبيعات مقهى' },
    category: { en: 'Data Analysis', ar: 'تحليل بيانات' },
    tagline: {
      en: 'An end-to-end analysis of 149,000+ coffee shop transactions: cleaned and prepared the data in Python, answered five business questions, then built an interactive Power BI dashboard for revenue, products, stores and peak hours. Data Bootcamp final project.',
      ar: 'تحليل شامل لأكثر من 149,000 عملية بيع في مقهى: تنظيف البيانات وتجهيزها بلغة Python، والإجابة عن خمسة أسئلة عمل، ثم بناء لوحة Power BI تفاعلية للإيرادات والمنتجات والفروع وأوقات الذروة. مشروع التخرج من معسكر تحليل البيانات.',
    },
    tech: ['Python', 'pandas', 'Matplotlib', 'Power BI'],
    image: {
      src: '/images/projects/coffee-sales/dashboard.webp',
      alt: 'Power BI "Coffee Shop Sales" dashboard: total orders, revenue and average order value, monthly revenue trend, revenue by category, product type and store, and orders by hour.',
    },
    // The Colab notebook is the source code; the Power BI report isn't published online.
    repoUrl: 'https://colab.research.google.com/drive/1UBwc3GCcpxocmh4MJeZovtn4HvryT-lv?usp=sharing',
    back: {
      type: 'gallery',
      images: [
        {
          src: '/images/projects/coffee-sales/python-cleaning.webp',
          alt: 'Python data cleaning steps: duplicate and invalid value checks, date and time conversion, a data quality summary and a new total_sales column.',
        },
        {
          src: '/images/projects/coffee-sales/monthly-revenue.webp',
          alt: 'Line chart of monthly revenue from January to June, rising from about 80K to 166K.',
        },
        {
          src: '/images/projects/coffee-sales/revenue-by-category.webp',
          alt: 'Bar chart of revenue by product category, led by coffee and tea.',
        },
        {
          src: '/images/projects/coffee-sales/top-products.webp',
          alt: 'Horizontal bar chart of the top 10 products by revenue, led by Barista Espresso.',
        },
      ],
    },
  },
  {
    slug: 'urdev',
    title: 'UrDev',
    category: { en: 'E-commerce Website', ar: 'موقع تجارة إلكترونية' },
    tagline: {
      en: 'An Arabic e-commerce site for ordering digital development services: browse and search services, add them to a cart, create an account with securely hashed passwords, and check out.',
      ar: 'موقع تجارة إلكترونية عربي لطلب خدمات التطوير الرقمي: تصفّح الخدمات والبحث عنها، وإضافتها إلى السلة، وإنشاء حساب بكلمات مرور مشفّرة بأمان، وإتمام الطلب.',
    },
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap'],
    image: {
      src: '/images/projects/urdev/products.webp',
      alt: 'UrDev services grid in Arabic dark mode: web development, Flutter apps, UI/UX design and backend development, each with a price in riyals and an order button.',
    },
    repoUrl: 'https://github.com/M7Ddev/UrDev',
    // No live demo. Screenshots taken from a local run with sample services.
    back: {
      type: 'gallery',
      images: [
        {
          src: '/images/projects/urdev/home.webp',
          alt: 'UrDev home page for a signed-in user, with navigation, service search and the hero "Start your digital project today".',
        },
        {
          src: '/images/projects/urdev/cart.webp',
          alt: 'Shopping cart panel with two services, their prices, the total and a checkout button.',
        },
        {
          src: '/images/projects/urdev/search.webp',
          alt: 'Search results for "development" showing backend, app, full stack and front-end development services.',
        },
        {
          src: '/images/projects/urdev/login.webp',
          alt: 'UrDev sign-in page in Arabic with username and password fields.',
        },
      ],
    },
  },
]
