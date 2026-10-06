import type { LocaleCode } from './locales';

type LaunchCopy = {
  aboutCompany: string;
  viewProducts: string;
  bible: string;
  void: string;
  available: string;
  watch: string;
  future: string;
  futureDescription: string;
  exploreFuture: string;
};

const copy: Record<LocaleCode, LaunchCopy> = {
  en: { aboutCompany: 'About the company', viewProducts: 'Explore available products', bible: 'Explore BibleLink', void: 'Explore VOID STRIKER', available: 'Available now on the App Store', watch: 'Watch the film', future: 'A new world in development', futureDescription: 'NOVA FRONTIER is a future NAVL game. This concept image shows the creative direction; features and release plans may change during development.', exploreFuture: 'Discover NOVA FRONTIER' },
  pt: { aboutCompany: 'Conheça a empresa', viewProducts: 'Ver produtos disponíveis', bible: 'Conheça BibleLink', void: 'Conheça VOID STRIKER', available: 'Disponível agora na App Store', watch: 'Assista ao vídeo', future: 'Um novo mundo em desenvolvimento', futureDescription: 'NOVA FRONTIER é um futuro jogo da NAVL. Esta imagem conceitual mostra a direção criativa; recursos e planos de lançamento podem mudar durante o desenvolvimento.', exploreFuture: 'Conheça NOVA FRONTIER' },
  es: { aboutCompany: 'Conoce la empresa', viewProducts: 'Ver productos disponibles', bible: 'Conoce BibleLink', void: 'Conoce VOID STRIKER', available: 'Ya disponible en App Store', watch: 'Ver el vídeo', future: 'Un nuevo mundo en desarrollo', futureDescription: 'NOVA FRONTIER es un futuro juego de NAVL. Esta imagen conceptual muestra la dirección creativa; las funciones y los planes de lanzamiento pueden cambiar durante el desarrollo.', exploreFuture: 'Conoce NOVA FRONTIER' },
  ko: { aboutCompany: '회사 소개', viewProducts: '출시된 제품 보기', bible: 'BibleLink 알아보기', void: 'VOID STRIKER 알아보기', available: 'App Store에서 이용 가능', watch: '영상 보기', future: '개발 중인 새로운 세계', futureDescription: 'NOVA FRONTIER는 NAVL이 개발 중인 차기 게임입니다. 이 콘셉트 이미지는 창작 방향을 보여 주며 기능과 출시 계획은 개발 과정에서 바뀔 수 있습니다.', exploreFuture: 'NOVA FRONTIER 알아보기' },
  ar: { aboutCompany: 'تعرّف على الشركة', viewProducts: 'استكشف المنتجات المتاحة', bible: 'اكتشف BibleLink', void: 'اكتشف VOID STRIKER', available: 'متاح الآن على App Store', watch: 'شاهد الفيديو', future: 'عالم جديد قيد التطوير', futureDescription: 'NOVA FRONTIER لعبة مستقبلية من NAVL. تعرض هذه الصورة التصورية الاتجاه الإبداعي، وقد تتغير الميزات وخطط الإصدار أثناء التطوير.', exploreFuture: 'اكتشف NOVA FRONTIER' },
};

export const launchCopy = (locale: LocaleCode) => copy[locale];
