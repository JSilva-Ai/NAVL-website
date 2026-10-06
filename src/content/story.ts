import { currentLocale } from '../lib/url';
import type { LocaleCode } from './locales';

type StoryCopy = {
  nav: { about: string; news: string };
  about: {
    label: string; title: string; lede: string; origin: string[];
    principlesTitle: string; principles: { title: string; body: string }[];
    closingTitle: string; closing: string;
  };
  news: {
    label: string; title: string; lede: string;
    entries: { date: string; stage: string; title: string; body: string; route: string; link: string }[];
  };
  updates: { label: string; title: string; body: string; cta: string };
  interest: { label: string; title: string; body: string; cta: string; note: string; subject: string };
  bible: {
    label: string; title: string; lede: string; videoAlt: string;
    steps: { title: string; body: string }[];
  };
  media: {
    concept: Record<string, string>;
    icon: string;
    bibleScreens: { alt: string; label: string }[];
    gameplay: string;
    playButton: string;
  };
};

const en: StoryCopy = {
  nav: { about: 'About', news: 'News' },
  about: {
    label: 'About NAVL', title: 'Independent by design.',
    lede: 'New AI Vision Labs is a product studio in Kennesaw, Georgia. We create intelligent applications and original games under our own name.',
    origin: [
      'NAVL began with a simple conviction: useful technology can feel ambitious without becoming complicated, invasive, or impersonal.',
      'We work across product strategy, interface design, engineering, testing, and support. Keeping those disciplines close lets each decision serve the complete experience.',
    ],
    principlesTitle: 'What guides the work',
    principles: [
      { title: 'Purpose before features', body: 'Every product begins with a clear human need. Features earn their place by making that need easier to meet.' },
      { title: 'Clarity builds trust', body: 'We identify concepts, products in development, and released work honestly. We explain data use in plain language.' },
      { title: 'Quality is the whole journey', body: 'Typography, accessibility, performance, support, and the final interaction all belong to the product.' },
    ],
    closingTitle: 'Technology should feel considered.',
    closing: 'Our goal is to build work people can understand, enjoy, and trust — and to keep improving it after release.',
  },
  news: {
    label: 'Studio journal', title: 'What is moving forward.',
    lede: 'Release notes, product milestones, and selected work from inside New AI Vision Labs.',
    entries: [
      { date: 'October 2026', stage: 'App Store', title: 'BibleLink and VOID STRIKER are now on the App Store', body: 'Both NAVL products are available on the App Store. Their official links are on their product pages; Google Play availability has not been announced.', route: 'apps', link: 'Explore all products' },
      { date: 'September 2026', stage: 'Final testing', title: 'BibleLink enters final release preparation', body: 'Purchase and restoration have been validated on physical iPhones. Store materials, localization, and release checks are now being completed.', route: 'apps/biblelink', link: 'Explore BibleLink' },
      { date: 'September 2026', stage: 'Studio update', title: 'NAVL becomes a five-language experience', body: 'The studio website is now available in English, Portuguese, Spanish, Korean, and Arabic, including local support and privacy pages.', route: '', link: 'Return home' },
      { date: 'September 2026', stage: 'Gameplay', title: 'A look inside VOID STRIKER', body: 'Watch real gameplay footage while the mobile game is prepared for the App Store and Google Play.', route: 'demo', link: 'Watch gameplay' },
    ],
  },
  updates: { label: 'Latest from NAVL', title: 'The work, while it is happening.', body: 'Follow release preparation, product milestones, and the decisions shaping the studio.', cta: 'Read studio news' },
  interest: { label: 'Release updates', title: 'Be there when it is ready.', body: 'Tell us which product you want to hear about. We will use your message only to answer your request.', cta: 'Request an update', note: 'No automated subscription. Your email app will open with a prepared message.', subject: 'NAVL product release update' },
  bible: {
    label: 'Inside BibleLink', title: 'A daily rhythm, brought into one place.', lede: 'Real screens show the complete path from Scripture to reflection, prayer, and action.', videoAlt: 'A short visual tour of real BibleLink screens.',
    steps: [
      { title: 'Begin with Scripture', body: 'A calm daily verse with listening, saving, and sharing controls.' },
      { title: 'Read with context', body: 'Translations, parallel reading, audio, and adjustable text support deeper reading.' },
      { title: 'Carry it into the day', body: 'Reflection, prayer, and a practical action connect reading with daily life.' },
    ],
  },
  media: {
    concept: {
      loop: 'LOOP concept artwork: a luminous glass loop connects points around a calm central light.',
      shield: 'SHIELD concept artwork: a crystalline shield protects a luminous digital signal.',
      guard: 'GUARD concept artwork: a golden timeline travels safely through a protective arc.',
      'galaxy-forge': 'GALAXY FORGE concept artwork: an orbital forge shapes a starship from molten starlight.',
    },
    icon: 'BibleLink app icon, an ornate black and gold Bible with a luminous cross.',
    bibleScreens: [
      { alt: 'BibleLink home with a daily verse over a sunrise at sea.', label: 'A quiet daily start' },
      { alt: 'BibleLink Bible reader with translation, parallel reading, audio, and text controls.', label: 'Read and listen to Scripture' },
      { alt: 'Moment with God with Scripture, reflection, prayer, and an action for the day.', label: 'A complete daily devotional' },
      { alt: 'BibleLink prayer categories with their Bible references.', label: 'Prayers for every moment' },
      { alt: 'BibleLink favorites organizing verses, prayers, highlights, and notes.', label: 'Keep what speaks to you' },
      { alt: 'BibleLink reader using larger text for comfortable reading.', label: 'Comfortable, adjustable reading' },
    ],
    gameplay: 'VOID STRIKER gameplay',
    playButton: 'Play video',
  },
};

const pt: StoryCopy = {
  nav: { about: 'Sobre', news: 'Novidades' },
  about: {
    label: 'Sobre a NAVL', title: 'Independente por escolha.',
    lede: 'A New AI Vision Labs é um estúdio de produtos em Kennesaw, Geórgia. Criamos aplicativos inteligentes e jogos originais com a nossa própria marca.',
    origin: ['A NAVL nasceu de uma convicção simples: tecnologia útil pode ser ambiciosa sem ser complicada, invasiva ou impessoal.', 'Trabalhamos com estratégia, interface, engenharia, testes e suporte. Manter essas áreas próximas faz cada decisão servir à experiência completa.'],
    principlesTitle: 'O que orienta nosso trabalho',
    principles: [
      { title: 'Propósito antes das funções', body: 'Cada produto começa com uma necessidade humana clara. Uma função só permanece quando torna essa necessidade mais fácil de atender.' },
      { title: 'Clareza gera confiança', body: 'Identificamos com honestidade conceitos, produtos em desenvolvimento e trabalhos publicados. Explicamos o uso de dados em linguagem simples.' },
      { title: 'Qualidade é a jornada inteira', body: 'Tipografia, acessibilidade, desempenho, suporte e a interação final fazem parte do mesmo produto.' },
    ],
    closingTitle: 'Tecnologia deve transmitir cuidado.', closing: 'Queremos criar produtos que as pessoas compreendam, apreciem e confiem — e continuar melhorando cada um depois do lançamento.',
  },
  news: {
    label: 'Diário do estúdio', title: 'O que está avançando.', lede: 'Lançamentos, etapas importantes e trabalhos selecionados de dentro da New AI Vision Labs.',
    entries: [
      { date: 'Outubro de 2026', stage: 'App Store', title: 'BibleLink e VOID STRIKER já estão na App Store', body: 'Os dois produtos da NAVL estão disponíveis na App Store. Os links oficiais estão nas páginas dos produtos; a disponibilidade no Google Play ainda não foi anunciada.', route: 'apps', link: 'Conhecer os produtos' },
      { date: 'Setembro de 2026', stage: 'Testes finais', title: 'BibleLink entra na preparação final de lançamento', body: 'Compra e restauração foram validadas em iPhones físicos. Materiais da loja, localização e verificações finais estão sendo concluídos.', route: 'apps/biblelink', link: 'Conhecer o BibleLink' },
      { date: 'Setembro de 2026', stage: 'Atualização do estúdio', title: 'NAVL passa a oferecer uma experiência em cinco idiomas', body: 'O site agora está disponível em inglês, português, espanhol, coreano e árabe, incluindo suporte e privacidade localizados.', route: '', link: 'Voltar ao início' },
      { date: 'Setembro de 2026', stage: 'Jogo em ação', title: 'Um olhar sobre VOID STRIKER', body: 'Assista a uma partida real enquanto o jogo é preparado para a App Store e o Google Play.', route: 'demo', link: 'Assistir ao vídeo' },
    ],
  },
  updates: { label: 'Novidades da NAVL', title: 'O trabalho enquanto acontece.', body: 'Acompanhe a preparação de lançamentos, os avanços dos produtos e as decisões que estão formando o estúdio.', cta: 'Ler novidades' },
  interest: { label: 'Atualizações de lançamento', title: 'Esteja presente quando estiver pronto.', body: 'Conte qual produto você deseja acompanhar. Usaremos sua mensagem somente para responder ao seu pedido.', cta: 'Pedir uma atualização', note: 'Sem inscrição automática. Seu aplicativo de e-mail abrirá com uma mensagem preparada.', subject: 'Atualização de lançamento dos produtos NAVL' },
  bible: {
    label: 'Por dentro do BibleLink', title: 'Um ritmo diário reunido em um só lugar.', lede: 'Telas reais mostram o caminho completo entre Escritura, reflexão, oração e ação.', videoAlt: 'Uma apresentação visual curta com telas reais do BibleLink.',
    steps: [
      { title: 'Comece com a Escritura', body: 'Um versículo diário sereno, com controles para ouvir, salvar e compartilhar.' },
      { title: 'Leia com contexto', body: 'Traduções, leitura paralela, áudio e texto ajustável apoiam uma leitura mais profunda.' },
      { title: 'Leve a mensagem para o dia', body: 'Reflexão, oração e uma ação prática conectam a leitura com a vida diária.' },
    ],
  },
  media: {
    concept: { loop: 'Arte conceitual do LOOP: um elo de vidro luminoso conecta pontos ao redor de uma luz serena.', shield: 'Arte conceitual do SHIELD: um escudo cristalino protege um sinal digital luminoso.', guard: 'Arte conceitual do GUARD: uma linha do tempo dourada atravessa com segurança um arco protetor.', 'galaxy-forge': 'Arte conceitual do GALAXY FORGE: uma forja orbital molda uma nave com luz estelar.' },
    icon: 'Ícone do BibleLink, uma Bíblia preta e dourada com uma cruz luminosa.',
    bibleScreens: [
      { alt: 'Tela inicial do BibleLink com o versículo diário sobre o nascer do sol no mar.', label: 'Um começo diário sereno' },
      { alt: 'Leitor bíblico com tradução, leitura paralela, áudio e controles de texto.', label: 'Leia e ouça a Escritura' },
      { alt: 'Momento com Deus com Escritura, reflexão, oração e ação para o dia.', label: 'Um devocional diário completo' },
      { alt: 'Categorias de oração do BibleLink acompanhadas de referências bíblicas.', label: 'Orações para cada momento' },
      { alt: 'Favoritos do BibleLink organizando versículos, orações, destaques e anotações.', label: 'Guarde o que falou ao seu coração' },
      { alt: 'Leitor do BibleLink com texto ampliado para uma leitura confortável.', label: 'Leitura confortável e ajustável' },
    ],
    gameplay: 'VOID STRIKER em ação',
    playButton: 'Reproduzir vídeo',
  },
};

const es: StoryCopy = {
  ...en,
  nav: { about: 'Nosotros', news: 'Novedades' },
  about: { label: 'Sobre NAVL', title: 'Independientes por elección.', lede: 'New AI Vision Labs es un estudio de productos en Kennesaw, Georgia. Creamos aplicaciones inteligentes y juegos originales bajo nuestra propia marca.', origin: ['NAVL nació de una convicción sencilla: la tecnología útil puede ser ambiciosa sin ser complicada, invasiva o impersonal.', 'Trabajamos en estrategia, interfaz, ingeniería, pruebas y soporte. Mantener estas disciplinas cerca permite que cada decisión sirva a la experiencia completa.'], principlesTitle: 'Lo que guía nuestro trabajo', principles: [{ title: 'Propósito antes que funciones', body: 'Cada producto comienza con una necesidad humana clara.' }, { title: 'La claridad genera confianza', body: 'Presentamos con honestidad conceptos, productos en desarrollo y trabajos publicados.' }, { title: 'La calidad es todo el recorrido', body: 'Tipografía, accesibilidad, rendimiento, soporte e interacción pertenecen al mismo producto.' }], closingTitle: 'La tecnología debe sentirse cuidada.', closing: 'Creamos productos que las personas puedan comprender, disfrutar y confiar, y seguimos mejorándolos después del lanzamiento.' },
  news: { label: 'Diario del estudio', title: 'Lo que sigue avanzando.', lede: 'Lanzamientos, hitos y trabajos seleccionados desde New AI Vision Labs.', entries: [
    { date: 'Octubre de 2026', stage: 'App Store', title: 'BibleLink y VOID STRIKER ya están en App Store', body: 'Los dos productos de NAVL están disponibles en App Store. Sus enlaces oficiales están en las páginas de producto; aún no se ha anunciado su disponibilidad en Google Play.', route: 'apps', link: 'Ver los productos' },
    { date: 'Septiembre de 2026', stage: 'Pruebas finales', title: 'BibleLink entra en la preparación final', body: 'La compra y restauración se validaron en iPhones físicos. Estamos completando materiales, localización y revisiones finales.', route: 'apps/biblelink', link: 'Conocer BibleLink' },
    { date: 'Septiembre de 2026', stage: 'Estudio', title: 'NAVL se convierte en una experiencia de cinco idiomas', body: 'El sitio está disponible en inglés, portugués, español, coreano y árabe.', route: '', link: 'Volver al inicio' },
    { date: 'Septiembre de 2026', stage: 'Gameplay', title: 'Una mirada a VOID STRIKER', body: 'Mira una partida real mientras el juego se prepara para App Store y Google Play.', route: 'demo', link: 'Ver el vídeo' },
  ] },
  updates: { label: 'Novedades NAVL', title: 'El trabajo mientras sucede.', body: 'Sigue la preparación de lanzamientos, los avances y las decisiones que forman el estudio.', cta: 'Leer novedades' },
  interest: { label: 'Actualizaciones', title: 'Acompáñanos cuando esté listo.', body: 'Cuéntanos qué producto quieres seguir. Usaremos tu mensaje solo para responder a tu solicitud.', cta: 'Solicitar una actualización', note: 'Sin suscripción automática. Se abrirá tu aplicación de correo.', subject: 'Actualización de productos NAVL' },
  bible: { label: 'Dentro de BibleLink', title: 'Un ritmo diario en un solo lugar.', lede: 'Pantallas reales muestran el recorrido entre Escritura, reflexión, oración y acción.', videoAlt: 'Recorrido visual corto por pantallas reales de BibleLink.', steps: [{ title: 'Comienza con la Escritura', body: 'Un versículo diario sereno con controles para escuchar, guardar y compartir.' }, { title: 'Lee con contexto', body: 'Traducciones, lectura paralela, audio y texto ajustable.' }, { title: 'Llévalo a tu día', body: 'Reflexión, oración y una acción práctica conectan la lectura con la vida.' }] },
  media: { concept: { loop: 'Arte conceptual de LOOP: un lazo de vidrio luminoso conecta puntos alrededor de una luz serena.', shield: 'Arte conceptual de SHIELD: un escudo cristalino protege una señal digital luminosa.', guard: 'Arte conceptual de GUARD: una línea dorada atraviesa un arco protector.', 'galaxy-forge': 'Arte conceptual de GALAXY FORGE: una forja orbital crea una nave con luz estelar.' }, icon: 'Icono de BibleLink, una Biblia negra y dorada con una cruz luminosa.', bibleScreens: en.media.bibleScreens.map((_, i) => ({ alt: ['Inicio de BibleLink con el versículo diario sobre el mar.','Lector bíblico con traducción, lectura paralela, audio y controles de texto.','Momento con Dios con Escritura, reflexión, oración y acción.','Categorías de oración con referencias bíblicas.','Favoritos con versículos, oraciones, destacados y notas.','Lectura cómoda con texto ampliado.'][i], label: ['Un comienzo diario sereno','Lee y escucha la Escritura','Un devocional diario completo','Oraciones para cada momento','Guarda lo que te habla','Lectura cómoda y ajustable'][i] })), gameplay: 'VOID STRIKER en acción', playButton: 'Reproducir video' },
};

const ko: StoryCopy = {
  ...en,
  nav: { about: '회사 소개', news: '소식' },
  about: { label: 'NAVL 소개', title: '독립을 선택한 스튜디오.', lede: 'New AI Vision Labs는 미국 조지아주 케네소에서 지능형 앱과 오리지널 게임을 자체 브랜드로 만드는 제품 스튜디오입니다.', origin: ['NAVL은 유용한 기술이 복잡하거나 침해적이지 않으면서도 충분히 야심찰 수 있다는 믿음에서 시작했습니다.', '전략, 인터페이스, 엔지니어링, 테스트, 지원을 가까이 연결해 모든 결정이 완전한 경험을 향하도록 합니다.'], principlesTitle: '우리의 기준', principles: [{ title: '기능보다 목적', body: '모든 제품은 분명한 사람의 필요에서 시작합니다.' }, { title: '명확함이 신뢰를 만듭니다', body: '개념, 개발 중인 제품, 출시된 작업을 정직하게 구분합니다.' }, { title: '품질은 전체 여정입니다', body: '타이포그래피, 접근성, 성능, 지원, 마지막 상호작용까지 모두 제품입니다.' }], closingTitle: '기술에는 세심함이 느껴져야 합니다.', closing: '사람들이 이해하고 즐기며 신뢰할 수 있는 제품을 만들고 출시 후에도 계속 개선합니다.' },
  news: { label: '스튜디오 저널', title: '지금 앞으로 나아가는 일.', lede: 'New AI Vision Labs의 출시 준비, 제품 이정표, 주요 작업을 전합니다.', entries: [
    { date: '2026년 10월', stage: 'App Store', title: 'BibleLink와 VOID STRIKER가 App Store에 출시되었습니다', body: '두 제품 모두 App Store에서 이용할 수 있습니다. 공식 링크는 각 제품 페이지에 있으며 Google Play 출시 일정은 아직 발표되지 않았습니다.', route: 'apps', link: '제품 보기' },
    { date: '2026년 9월', stage: '최종 테스트', title: 'BibleLink가 최종 출시 준비에 들어갑니다', body: '실제 iPhone에서 구매와 복원을 확인했습니다. 스토어 자료, 현지화, 최종 검토를 진행 중입니다.', route: 'apps/biblelink', link: 'BibleLink 보기' },
    { date: '2026년 9월', stage: '스튜디오 소식', title: 'NAVL 웹사이트가 다섯 언어를 지원합니다', body: '영어, 포르투갈어, 스페인어, 한국어, 아랍어로 지원 및 개인정보 페이지까지 제공합니다.', route: '', link: '홈으로' },
    { date: '2026년 9월', stage: '게임플레이', title: 'VOID STRIKER 게임플레이 공개', body: 'App Store와 Google Play 출시를 준비하는 동안 실제 게임플레이 영상을 볼 수 있습니다.', route: 'demo', link: '게임 영상 보기' },
  ] },
  updates: { label: 'NAVL 소식', title: '만들어지는 과정을 전합니다.', body: '출시 준비, 제품 이정표, 스튜디오를 만드는 결정을 확인하세요.', cta: '스튜디오 소식 보기' },
  interest: { label: '출시 소식', title: '준비되는 순간 함께하세요.', body: '관심 있는 제품을 알려 주세요. 요청에 답변하기 위한 용도로만 메시지를 사용합니다.', cta: '업데이트 요청', note: '자동 구독이 아닙니다. 미리 작성된 이메일이 열립니다.', subject: 'NAVL 제품 출시 소식' },
  bible: { label: 'BibleLink 살펴보기', title: '하루의 리듬을 한곳에.', lede: '실제 화면으로 성경, 묵상, 기도, 실천까지의 흐름을 보여 줍니다.', videoAlt: 'BibleLink 실제 화면을 담은 짧은 영상.', steps: [{ title: '말씀으로 시작하세요', body: '듣기, 저장, 공유 기능과 함께 차분한 오늘의 말씀을 만납니다.' }, { title: '맥락과 함께 읽으세요', body: '번역, 병렬 읽기, 오디오, 글자 조절로 깊이 읽습니다.' }, { title: '하루로 이어 가세요', body: '묵상, 기도, 실천이 말씀과 일상을 연결합니다.' }] },
  media: { concept: { loop: 'LOOP 콘셉트 아트: 빛나는 유리 고리가 차분한 빛 주위의 점들을 연결합니다.', shield: 'SHIELD 콘셉트 아트: 수정 같은 방패가 빛나는 디지털 신호를 보호합니다.', guard: 'GUARD 콘셉트 아트: 황금빛 시간선이 보호 아치를 통과합니다.', 'galaxy-forge': 'GALAXY FORGE 콘셉트 아트: 궤도 용광로가 별빛으로 우주선을 만듭니다.' }, icon: '빛나는 십자가가 있는 검정과 금색 BibleLink 성경 아이콘.', bibleScreens: en.media.bibleScreens.map((_, i) => ({ alt: ['바다의 일출 위에 오늘의 말씀을 보여 주는 BibleLink 홈.','번역, 병렬 읽기, 오디오, 글자 조절이 있는 성경 리더.','말씀, 묵상, 기도, 오늘의 실천을 담은 하나님과의 시간.','성경 구절과 함께 제공되는 기도 카테고리.','말씀, 기도, 하이라이트, 메모를 모은 즐겨찾기.','큰 글자로 편안하게 읽는 BibleLink 성경 리더.'][i], label: ['차분한 하루의 시작','말씀을 읽고 듣기','완전한 오늘의 묵상','모든 순간을 위한 기도','마음에 남은 내용 보관','편안하고 조절 가능한 읽기'][i] })), gameplay: 'VOID STRIKER 플레이 영상', playButton: '동영상 재생' },
};

const ar: StoryCopy = {
  ...en,
  nav: { about: 'من نحن', news: 'الأخبار' },
  about: { label: 'عن NAVL', title: 'مستقلون باختيارنا.', lede: 'New AI Vision Labs استوديو منتجات في كينيساو بولاية جورجيا، نصنع تطبيقات ذكية وألعابًا أصلية باسمنا.', origin: ['بدأت NAVL بقناعة بسيطة: يمكن للتقنية المفيدة أن تكون طموحة من دون أن تصبح معقدة أو متطفلة أو بلا روح.', 'نجمع استراتيجية المنتج والتصميم والهندسة والاختبار والدعم حتى تخدم كل قراراتنا التجربة الكاملة.'], principlesTitle: 'ما يوجّه عملنا', principles: [{ title: 'الهدف قبل الميزات', body: 'يبدأ كل منتج من حاجة إنسانية واضحة.' }, { title: 'الوضوح يبني الثقة', body: 'نميّز بصدق بين الأفكار والمنتجات قيد التطوير والعمل المنشور.' }, { title: 'الجودة هي الرحلة كاملة', body: 'الخطوط وسهولة الوصول والأداء والدعم والتفاعل الأخير كلها جزء من المنتج.' }], closingTitle: 'يجب أن تعكس التقنية عناية حقيقية.', closing: 'نبني منتجات يمكن للناس فهمها والاستمتاع بها والثقة فيها، ثم نواصل تحسينها بعد الإطلاق.' },
  news: { label: 'يوميات الاستوديو', title: 'ما الذي يتقدم الآن.', lede: 'أخبار الإطلاق ومراحل المنتجات وأعمال مختارة من New AI Vision Labs.', entries: [
    { date: 'أكتوبر 2026', stage: 'App Store', title: 'BibleLink وVOID STRIKER متاحان الآن على App Store', body: 'المنتجان متاحان على App Store، وروابطهما الرسمية موجودة في صفحات المنتجات. لم يُعلن عن توفرهما على Google Play بعد.', route: 'apps', link: 'استكشف المنتجات' },
    { date: 'سبتمبر 2026', stage: 'الاختبار النهائي', title: 'BibleLink يدخل مرحلة الاستعداد النهائي للإطلاق', body: 'تم التحقق من الشراء والاستعادة على أجهزة iPhone فعلية، ويجري استكمال مواد المتجر والترجمة والمراجعات النهائية.', route: 'apps/biblelink', link: 'استكشف BibleLink' },
    { date: 'سبتمبر 2026', stage: 'تحديث الاستوديو', title: 'تجربة NAVL متاحة بخمس لغات', body: 'أصبح الموقع متاحًا بالإنجليزية والبرتغالية والإسبانية والكورية والعربية، بما في ذلك الدعم والخصوصية.', route: '', link: 'العودة إلى الرئيسية' },
    { date: 'سبتمبر 2026', stage: 'أسلوب اللعب', title: 'نظرة على VOID STRIKER', body: 'شاهد لقطات لعب حقيقية بينما يجري إعداد اللعبة لـ App Store وGoogle Play.', route: 'demo', link: 'شاهد الفيديو' },
  ] },
  updates: { label: 'أخبار NAVL', title: 'تابع العمل أثناء حدوثه.', body: 'تابع استعدادات الإطلاق ومراحل المنتجات والقرارات التي تشكل الاستوديو.', cta: 'اقرأ الأخبار' },
  interest: { label: 'تحديثات الإطلاق', title: 'كن حاضرًا عندما يصبح المنتج جاهزًا.', body: 'أخبرنا بالمنتج الذي يهمك. سنستخدم رسالتك للرد على طلبك فقط.', cta: 'اطلب تحديثًا', note: 'لا يوجد اشتراك تلقائي. سيفتح تطبيق البريد برسالة جاهزة.', subject: 'تحديث إطلاق منتجات NAVL' },
  bible: { label: 'داخل BibleLink', title: 'إيقاع يومي في مكان واحد.', lede: 'تعرض شاشات حقيقية المسار من الكتاب المقدس إلى التأمل والصلاة والعمل.', videoAlt: 'جولة مرئية قصيرة في شاشات BibleLink الحقيقية.', steps: [{ title: 'ابدأ بالكتاب المقدس', body: 'آية يومية هادئة مع الاستماع والحفظ والمشاركة.' }, { title: 'اقرأ ضمن السياق', body: 'ترجمات وقراءة متوازية وصوت ونص قابل للتعديل.' }, { title: 'احمل الرسالة إلى يومك', body: 'يربط التأمل والصلاة والعمل العملي القراءة بالحياة اليومية.' }] },
  media: { concept: { loop: 'تصوّر فني لـ LOOP: حلقة زجاجية مضيئة تصل نقاطًا حول ضوء هادئ.', shield: 'تصوّر فني لـ SHIELD: درع بلوري يحمي إشارة رقمية مضيئة.', guard: 'تصوّر فني لـ GUARD: خط زمني ذهبي يعبر قوس حماية.', 'galaxy-forge': 'تصوّر فني لـ GALAXY FORGE: مسبك مداري يصنع مركبة من ضوء النجوم.' }, icon: 'أيقونة BibleLink: كتاب مقدس أسود وذهبي مع صليب مضيء.', bibleScreens: en.media.bibleScreens.map((_, i) => ({ alt: ['واجهة BibleLink مع آية اليوم فوق شروق الشمس على البحر.','قارئ الكتاب المقدس مع الترجمة والقراءة المتوازية والصوت والتحكم بالنص.','لحظة مع الله وتتضمن الكتاب المقدس والتأمل والصلاة والعمل.','فئات الصلاة مع مراجع الكتاب المقدس.','المفضلة وتجمع الآيات والصلوات والتظليل والملاحظات.','قارئ BibleLink بنص كبير لقراءة مريحة.'][i], label: ['بداية يومية هادئة','اقرأ واستمع إلى الكتاب المقدس','تأمل يومي متكامل','صلوات لكل لحظة','احتفظ بما يلامس قلبك','قراءة مريحة وقابلة للتعديل'][i] })), gameplay: 'مشاهد لعب VOID STRIKER', playButton: 'تشغيل الفيديو' },
};

const copies: Record<LocaleCode, StoryCopy> = { en, pt, es, ko, ar };
export const story = copies[currentLocale().code] ?? en;

export function mediaAlt(slug: string, fallback: string) {
  return story.media.concept[slug] ?? (slug === 'biblelink' ? story.media.icon : fallback);
}

export function bibleScreen(index: number, fallback: { alt: string; label?: string }) {
  return story.media.bibleScreens[index] ?? fallback;
}
