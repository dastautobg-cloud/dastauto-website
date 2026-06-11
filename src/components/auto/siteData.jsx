const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

export const contact = {
  phone: "+359 89 855 7708",
  phoneHref: "+359898557708",
  email: "dastautobg@gmail.com",
  address: "DastAuto, България",
  hours: "Пон–Съб: 09:00–18:30",
  facebook: "https://www.facebook.com/profile.php?id=100007713198222",
  instagram: "https://www.instagram.com/dastautobg/"
};

export const galleryProjects = [
  {
    title: "Възстановяване на предна броня",
    category: "Автобоядисване",
    before: "https://media.base44.com/images/public/6a25b894c69d8cc1446d8452/04c3fe127_generated_110ef68c.png",
    after: "https://media.base44.com/images/public/6a25b894c69d8cc1446d8452/afda7a62e_generated_ee12e0fd.png",
    alt: "Предна броня преди и след професионално боядисване",
    problem: "Дълбоки драскотини, ожулвания и нарушен лак след градски инцидент.",
    work: "Демонтаж, шлайфане, грундиране, компютърно напасване на цвят и фино полиране.",
    materials: "PPG лак, 3M Perfect-It, професионална камера за боядисване.",
    duration: "2 работни дни",
    result: "Фабричен вид, равномерен гланц и невидим преход.",
    extra_images: []
  },
  {
    title: "Корекция на лак и машинно полиране",
    category: "Полиране",
    before: "https://media.base44.com/images/public/6a25b894c69d8cc1446d8452/1f5f5d0e4_generated_25180df0.png",
    after: "https://media.base44.com/images/public/6a25b894c69d8cc1446d8452/64d459342_generated_b73ea256.png",
    alt: "Черен капак преди и след машинно полиране",
    problem: "Холограми, swirl marks и загуба на дълбочина в черния лак.",
    work: "Двустъпкова корекция, финиш паста, обезмасляване и защитен sealant.",
    materials: "Rupes система, Menzerna compound, микрофибърни падове.",
    duration: "1 ден",
    result: "Огледален финиш и силно подобрена дълбочина на цвета.",
    extra_images: []
  },
  {
    title: "Ремонт след ПТП на страничен панел",
    category: "Ремонти след ПТП",
    before: "https://media.base44.com/images/public/6a25b894c69d8cc1446d8452/c1ca6901a_generated_7ecc9067.png",
    after: "https://media.base44.com/images/public/6a25b894c69d8cc1446d8452/131b70cfe_generated_5303f38a.png",
    alt: "Страничен панел на SUV преди и след тенекеджийски ремонт",
    problem: "Деформация на панел, нарушени фуги и повредена боя след удар.",
    work: "Изправяне, геометричен контрол, подготовка, боядисване и финален quality check.",
    materials: "Spotter техника, premium filler, Glasurit покрития.",
    duration: "4 работни дни",
    result: "Възстановена форма, точни фуги и заводски визуален стандарт.",
    extra_images: []
  },
  {
    title: "Керамично покритие 9H",
    category: "Керамично покритие",
    before: "https://media.base44.com/images/public/6a25b894c69d8cc1446d8452/cb240ad28_generated_3cc27fc6.png",
    after: "https://media.base44.com/images/public/6a25b894c69d8cc1446d8452/dc60d39cd_generated_7c3a9f26.png",
    alt: "Луксозен автомобил преди и след керамично покритие с водоотблъскване",
    problem: "Замърсявания, водни петна и липса на дълготрайна защита.",
    work: "Деконтаминация, лека корекция, IPA wipe и нанасяне на керамика на два слоя.",
    materials: "9H ceramic coating, clay bar, pH-neutral подготовка.",
    duration: "2 дни",
    result: "Силен хидрофобен ефект, по-лесно миене и висок гланц.",
    extra_images: []
  },
  {
    title: "Пълен вътрешен детайлинг",
    category: "Детайлинг",
    before: "https://media.base44.com/images/public/6a25b894c69d8cc1446d8452/8d1ff6130_generated_61f9725d.png",
    after: "https://media.base44.com/images/public/6a25b894c69d8cc1446d8452/778e264c6_generated_4f6818c3.png",
    alt: "Автомобилен интериор преди и след пълен детайлинг",
    problem: "Петна по кожа и текстил, прах, неприятни миризми и износен вид.",
    work: "Дълбоко пране, парна обработка, почистване на кожа и UV защита.",
    materials: "Koch-Chemie, leather conditioner, антибактериална пара.",
    duration: "1 работен ден",
    result: "Свеж салон, защитени повърхности и премиум усещане.",
    extra_images: []
  }
];

export const categories = ["Всички", "Автобоядисване", "Детайлинг", "Полиране", "Керамично покритие", "Ремонти след ПТП"];