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
    title: "Възстановяване на предница след ПТП",
    category: "Автобоядисване",
    before: "https://res.cloudinary.com/dtsjmztev/image/upload/v1794097196/image_db2be1de_xbiwud.jpg",
    after: "https://res.cloudinary.com/dtsjmztev/image/upload/v1794097196/image_d9d101bc_dasjxu.jpg",
    alt: "Предна броня и преден капак преди и след професионален ремонт",
    problem: "Деформиран преден капак, разкъсана предна броня и компрометиран лак след челен сблъсък.",
    work: "Пълен демонтаж, машинно шлайфане, нанасяне на епоксиден грунд, дигитално колориране със спектрофотометър, боядисване и тристъпково детайлинг полиране.",
    materials: "Водоразтворима боя и high-solid гланцов лак Glasurit, полираща система Koch Chemie, херметизирана бояджийска камера с термоизпичане.",
    duration: "9 работни дни",
    result: "Възстановен фабричен вид.",
    extra_images: []

  },
  {
    title: "Корекция на лак и машинно полиране",
    category: "Полиране",
    before: "https://res.cloudinary.com/dtsjmztev/image/upload/v1794097194/image_e6798134_cgphty.jpg",
    after: "https://res.cloudinary.com/dtsjmztev/image/upload/v1794097195/image_ea505c1f_cqdpsx.jpg",
    alt: "Предна М-кова броня и тунинг детайли преди и след професионално пребоядисване",
    problem: "Стандартна заводска визия в обикновен бял цвят без агресивни тунинг акценти.",
    work: "Демонтаж на фабрични детайли, монтиране на агресивна предна М-кова броня, замяна на бъбреци с двойни Gloss Black решетки, инсталиране на М-style Батман капаци на огледалата, цялостна подготовка и пребоядисване на каросерията в емблематичния за марката неоново зелен цвят и финално плътно затъмняване на задните стъкла.",
    materials: "Професионална автобоя в цвят BMW Java Green (код W14), черни спортни М джанти, двойни черни гланцови бъбреци, М-style Батман капачки, премиум фолио за стъкла, полираща система Koch Chemie.",
    duration: "12 работни дни",
    result: "Уникална агресивна визия, брутален неоново зелен цвят с дълбоки отблясъци и изчистен детайлинг стил без регистрационни табели.",
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