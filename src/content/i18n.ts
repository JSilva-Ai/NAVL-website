import * as en from './en/site.ts';
import { pages as enPages, type PageMeta } from './en/pages.ts';
import type { LocaleCode } from './locales.ts';

type ProductCopy = {
  positioning?: string;
  tagline: string;
  kind: string;
  description: string[];
  conceptLabel?: string;
};

type Copy = {
  proposition: string;
  blurb: string;
  location: string;
  nav: [string, string, string];
  hero: { eyebrow: string; headline: string[]; accentWord: string; primary: string; secondary: string };
  approach: { label: string; headline: string; body: string[]; points: { title: string; body: string }[] };
  portfolio: { label: string; headline: string; body: string; all: string; apps: string; games: string };
  demoCallout: { label: string; headline: string; body: string; cta: string };
  appsPage: { label: string; headline: string; lede: string; note: string };
  ui: Record<string, string>;
  footer: { studio: string; help: string; legal: string; rights: string };
  status: Record<string, string>;
  products: Record<string, ProductCopy>;
  pageTitles: Record<string, [string, string]>;
};

const pt: Copy = {
  proposition: 'Somos um estúdio independente de tecnologia. Criamos nossos próprios aplicativos inteligentes e jogos originais, e os publicamos com a nossa marca.',
  blurb: 'Um estúdio independente que cria aplicativos inteligentes e jogos originais.',
  location: 'Kennesaw, Geórgia, Estados Unidos',
  nav: ['Produtos', 'Jogo em ação', 'Suporte'],
  hero: { eyebrow: 'Estúdio independente de tecnologia', headline: ['Criamos', 'tecnologia', 'com propósito.'], accentWord: 'propósito.', primary: 'Conheça nossos produtos', secondary: 'Assista ao jogo' },
  approach: { label: 'Como trabalhamos', headline: 'Um estúdio pequeno. Produtos completos.', body: ['Tudo o que publicamos nasce aqui. Não fazemos produtos genéricos para terceiros: cada detalhe tem a identidade e a responsabilidade da NAVL.', 'As mesmas pessoas que escrevem o código desenham a experiência e respondem ao suporte. Essa proximidade aparece no cuidado com o produto inteiro.'], points: [
    { title: 'Criamos o que publicamos', body: 'Cada produto é concebido, projetado e desenvolvido internamente, do início ao fim.' },
    { title: 'Respeitamos a privacidade', body: 'Pedimos somente os dados necessários para cada produto funcionar e explicamos isso com clareza.' },
    { title: 'Mostramos o estágio real', body: 'Pesquisa, desenvolvimento, testes ou publicação: o site sempre informa onde cada produto realmente está.' },
  ] },
  portfolio: { label: 'Portfólio', headline: 'Seis ideias. Uma mesma exigência.', body: 'Quatro aplicativos inteligentes e dois jogos, apresentados com honestidade e uma identidade visual comum.', all: 'Ver todos os produtos', apps: 'IA e aplicativos', games: 'Jogos' },
  demoCallout: { label: 'Jogo em ação', headline: 'Veja VOID STRIKER em ação.', body: 'Assista a uma partida real de VOID STRIKER, com combate espacial, ondas de inimigos e melhorias.', cta: 'Assistir ao vídeo' },
  appsPage: { label: 'Produtos', headline: 'O que estamos construindo.', lede: 'Seis produtos em quatro estágios. Todos são nossos e cada página informa o estágio real do trabalho.', note: 'Este produto ainda não foi lançado. O link de download aparecerá quando houver uma versão pública.' },
  ui: { skipToContent: 'Ir para o conteúdo', menu: 'Menu', close: 'Fechar', backToApps: 'Todos os produtos', screenshotsLabel: 'Capturas do aplicativo', gameplayLabel: 'Jogo em ação', conceptArtLabel: 'Arte conceitual', noScreenshots: 'As capturas serão publicadas quando o produto tiver uma interface pronta para ser mostrada.', kindLabel: 'Categoria', stageLabel: 'Estágio', supportShort: 'Suporte', supportEmail: 'E-mail de suporte', emailUs: 'Fale conosco', primaryNav: 'Navegação principal', onThisPage: 'Nesta página', lastUpdated: 'Última atualização', getIt: 'Disponibilidade', platforms: 'Plataformas', legalSupport: 'Privacidade e suporte', privacy: 'Política de Privacidade', terms: 'Termos de Uso', dataDeletion: 'Exclusão de dados', playDemo: 'Jogar demonstração', aboutGame: 'Conheça o jogo', deleteRequest: 'Enviar pedido de exclusão', download: 'Baixar', languages: 'Idiomas', phone: 'Telefone', productsWord: 'PRODUTOS', conceptNotice: 'Imagem conceitual de um produto em desenvolvimento.' },
  footer: { studio: 'Estúdio', help: 'Ajuda', legal: 'Legal', rights: 'Todos os direitos reservados.' },
  status: { 'Product discovery': 'Pesquisa de produto', 'In development': 'Em desenvolvimento', 'Final testing': 'Testes finais', 'On the stores': 'Disponível nas lojas' },
  products: {
    loop: { positioning: 'Inteligência que pensa um passo à frente.', tagline: 'Um aplicativo de consumo em desenvolvimento, multilíngue desde o início.', kind: 'IA · Aplicativo de consumo', description: ['LOOP é um aplicativo que estamos desenvolvendo em torno de inteligência proativa.', 'Ele nasce multilíngue, porque adaptar um produto pronto para outro idioma costuma exigir muito mais do que traduzir palavras.', 'Os detalhes serão apresentados quando estiverem consolidados. Ainda não existe data pública de lançamento.'], conceptLabel: 'Arte conceitual · produto em desenvolvimento' },
    shield: { positioning: 'Saiba antes de confiar.', tagline: 'Um conceito em pesquisa sobre uma pergunta simples: posso confiar nisso?', kind: 'IA · Proteção digital', description: ['SHIELD parte de situações comuns: uma mensagem desconhecida, um link quase correto, uma cobrança ou um código QR.', 'A ideia estudada é ajudar a pessoa a avaliar uma interação digital antes de clicar, responder ou enviar dinheiro.', 'SHIELD está em pesquisa. Ainda não existe produto lançado e nenhuma proteção é prometida antes de testes reais.'], conceptLabel: 'Arte conceitual · pesquisa de produto' },
    guard: { positioning: 'Saiba antes de perder.', tagline: 'Um conceito em pesquisa sobre o dinheiro que sai sem chamar atenção.', kind: 'IA · Proteção financeira', description: ['Muitas perdas acontecem por datas esquecidas: testes que viram cobrança, renovações, prazos de devolução e aumentos de preço.', 'GUARD é o conceito que estamos estudando para dar visibilidade a esses momentos.', 'Ele ainda não conecta bancos, cancela serviços, pede reembolsos ou movimenta dinheiro. Essas funções só serão descritas se existirem e forem testadas.'], conceptLabel: 'Arte conceitual · pesquisa de produto' },
    biblelink: { positioning: 'Bíblia, reflexão e oração para todos os dias.', tagline: 'Um aplicativo devocional diário em testes finais.', kind: 'Aplicativo · Devocional diário', description: ['BibleLink reúne Bíblia, reflexão, aplicação prática e oração em uma experiência serena.', 'Foi criado para apoiar um ritmo diário de leitura e oferece conteúdo em nove idiomas.', 'O aplicativo está em testes finais. Os links das lojas aparecerão após a liberação pública.'] },
    'void-striker': { tagline: 'O último caça da humanidade. O Vazio despertou.', kind: 'Jogo', description: ['Enfrente cinco setores de campanha e seis chefes, ou jogue o Desafio Diário e o Modo Sobrevivência. São sete naves e cinco tipos de arma.', 'Ganhe Sucata para desbloquear naves e pinturas. Ajuste vibração e efeitos, e escolha entre português, inglês e espanhol.', 'VOID STRIKER está sendo preparado para venda na App Store e no Google Play. Assista ao vídeo do jogo enquanto aguardamos os links das lojas.'] },
    'galaxy-forge': { tagline: 'Nosso segundo jogo, atualmente em desenvolvimento.', kind: 'Jogo', description: ['GALAXY FORGE é o segundo jogo do estúdio e está sendo desenvolvido.', 'A jogabilidade ainda não é descrita porque as decisões mudam durante essa fase.'], conceptLabel: 'Arte conceitual · jogo em desenvolvimento' },
  },
  pageTitles: {},
};

const es: Copy = {
  proposition: 'Somos un estudio de tecnología independiente. Diseñamos nuestros propios productos, aplicaciones inteligentes y juegos originales, y los publicamos con nuestra marca.',
  blurb: 'Un estudio independiente que crea aplicaciones inteligentes y juegos originales.', location: 'Kennesaw, Georgia, Estados Unidos',
  nav: ['Productos', 'Gameplay', 'Soporte'],
  hero: { eyebrow: 'Estudio de tecnología independiente', headline: ['Creamos', 'tecnología', 'con propósito.'], accentWord: 'propósito.', primary: 'Conoce nuestros productos', secondary: 'Ver el juego' },
  approach: { label: 'Cómo trabajamos', headline: 'Un estudio pequeño. Productos completos.', body: ['Todo lo que publicamos nace aquí. Cada detalle lleva la identidad y la responsabilidad de NAVL.', 'Las mismas personas que escriben el código diseñan la experiencia y responden el soporte. Esa cercanía se nota en el producto completo.'], points: [
    { title: 'Creamos lo que publicamos', body: 'Cada producto se concibe, diseña y desarrolla internamente, de principio a fin.' },
    { title: 'Respetamos la privacidad', body: 'Pedimos solo los datos necesarios y explicamos con claridad cómo funciona cada producto.' },
    { title: 'Mostramos la etapa real', body: 'Investigación, desarrollo, pruebas o publicación: siempre indicamos la etapa verdadera.' },
  ] },
  portfolio: { label: 'Portafolio', headline: 'Seis ideas. Una misma exigencia.', body: 'Cuatro aplicaciones inteligentes y dos juegos, presentados con honestidad y una identidad visual común.', all: 'Ver todos los productos', apps: 'IA y aplicaciones', games: 'Juegos' },
  demoCallout: { label: 'Gameplay', headline: 'Mira VOID STRIKER en acción.', body: 'Mira una partida real de VOID STRIKER, con combate espacial, oleadas enemigas y mejoras.', cta: 'Ver el vídeo' },
  appsPage: { label: 'Productos', headline: 'Lo que estamos construyendo.', lede: 'Seis productos en cuatro etapas. Todos son nuestros y cada página indica el estado real del trabajo.', note: 'Este producto aún no se ha lanzado. El enlace de descarga aparecerá cuando exista una versión pública.' },
  ui: { skipToContent: 'Ir al contenido', menu: 'Menú', close: 'Cerrar', backToApps: 'Todos los productos', screenshotsLabel: 'Capturas de la aplicación', gameplayLabel: 'Juego en acción', conceptArtLabel: 'Arte conceptual', noScreenshots: 'Publicaremos capturas cuando exista una interfaz lista para mostrarse.', kindLabel: 'Categoría', stageLabel: 'Etapa', supportShort: 'Soporte', supportEmail: 'Correo de soporte', emailUs: 'Escríbenos', primaryNav: 'Navegación principal', onThisPage: 'En esta página', lastUpdated: 'Última actualización', getIt: 'Disponibilidad', platforms: 'Plataformas', legalSupport: 'Privacidad y soporte', privacy: 'Política de Privacidad', terms: 'Términos de Uso', dataDeletion: 'Eliminación de datos', playDemo: 'Jugar demostración', aboutGame: 'Conoce el juego', deleteRequest: 'Enviar solicitud de eliminación', download: 'Descargar', languages: 'Idiomas', phone: 'Teléfono', productsWord: 'PRODUCTOS', conceptNotice: 'Imagen conceptual de un producto en desarrollo.' },
  footer: { studio: 'Estudio', help: 'Ayuda', legal: 'Legal', rights: 'Todos los derechos reservados.' },
  status: { 'Product discovery': 'Investigación de producto', 'In development': 'En desarrollo', 'Final testing': 'Pruebas finales', 'On the stores': 'Disponible en tiendas' },
  products: {
    loop: { positioning: 'Inteligencia que piensa un paso adelante.', tagline: 'Una aplicación de consumo en desarrollo, multilingüe desde el inicio.', kind: 'IA · Aplicación de consumo', description: ['LOOP es una aplicación que desarrollamos alrededor de la inteligencia proactiva.', 'Nace multilingüe porque adaptar un producto terminado requiere mucho más que traducir palabras.', 'Presentaremos los detalles cuando estén consolidados. Todavía no hay una fecha pública de lanzamiento.'], conceptLabel: 'Arte conceptual · producto en desarrollo' },
    shield: { positioning: 'Sabe antes de confiar.', tagline: 'Un concepto en investigación sobre una pregunta sencilla: ¿puedo confiar en esto?', kind: 'IA · Protección digital', description: ['SHIELD parte de situaciones comunes: un mensaje desconocido, un enlace casi correcto, una factura o un código QR.', 'La idea es ayudar a evaluar una interacción digital antes de hacer clic, responder o enviar dinero.', 'SHIELD está en investigación. No existe un producto lanzado ni promesas de protección antes de pruebas reales.'], conceptLabel: 'Arte conceptual · investigación de producto' },
    guard: { positioning: 'Sabe antes de perder.', tagline: 'Un concepto sobre el dinero que sale sin llamar la atención.', kind: 'IA · Protección financiera', description: ['Muchas pérdidas ocurren por fechas olvidadas: pruebas que se convierten en cargos, renovaciones y plazos de devolución.', 'GUARD es el concepto que estudiamos para dar visibilidad a esos momentos.', 'Todavía no conecta bancos, cancela servicios, pide reembolsos ni mueve dinero.'], conceptLabel: 'Arte conceptual · investigación de producto' },
    biblelink: { positioning: 'Biblia, reflexión y oración para cada día.', tagline: 'Una aplicación devocional diaria en pruebas finales.', kind: 'Aplicación · Devocional diario', description: ['BibleLink reúne Biblia, reflexión, aplicación práctica y oración en una experiencia serena.', 'Fue creado para acompañar un ritmo diario de lectura y ofrece contenido en nueve idiomas.', 'La aplicación está en pruebas finales. Los enlaces de las tiendas aparecerán tras el lanzamiento público.'] },
    'void-striker': { tagline: 'El último caza de la humanidad. El Vacío ha despertado.', kind: 'Juego', description: ['Enfréntate a cinco sectores de campaña y seis jefes, o juega el Desafío Diario y el Modo Supervivencia. Hay siete naves y cinco tipos de arma.', 'Gana Chatarra para desbloquear naves y diseños. Ajusta la vibración y los efectos, y elige español, inglés o portugués.', 'VOID STRIKER se prepara para su venta en App Store y Google Play. Mira el vídeo del juego mientras llegan los enlaces de las tiendas.'] },
    'galaxy-forge': { tagline: 'Nuestro segundo juego, actualmente en desarrollo.', kind: 'Juego', description: ['GALAXY FORGE es el segundo juego del estudio y está en desarrollo.', 'La jugabilidad todavía no se describe porque las decisiones cambian durante esta etapa.'], conceptLabel: 'Arte conceptual · juego en desarrollo' },
  }, pageTitles: {},
};

const ko: Copy = {
  proposition: '우리는 독립 기술 스튜디오입니다. 지능형 앱과 오리지널 게임을 직접 설계하고 개발해 우리의 이름으로 선보입니다.',
  blurb: '지능형 앱과 오리지널 게임을 만드는 독립 기술 스튜디오.', location: '미국 조지아주 케네소',
  nav: ['제품', '게임플레이', '지원'],
  hero: { eyebrow: '독립 기술 스튜디오', headline: ['목적이 있는', '기술을', '만듭니다.'], accentWord: '만듭니다.', primary: '제품 둘러보기', secondary: '게임 영상 보기' },
  approach: { label: '우리가 일하는 방식', headline: '작은 스튜디오. 완성도 높은 제품.', body: ['우리가 공개하는 모든 제품은 이곳에서 시작됩니다. 각 세부 요소에는 NAVL의 정체성과 책임이 담겨 있습니다.', '코드를 작성하고 경험을 설계하는 사람들이 직접 지원에도 답합니다. 이 가까운 거리가 제품 전체의 완성도로 이어집니다.'], points: [
    { title: '직접 만들고 직접 공개합니다', body: '모든 제품은 아이디어부터 출시까지 내부에서 설계하고 개발합니다.' },
    { title: '개인정보를 존중합니다', body: '제품 작동에 필요한 최소한의 데이터만 사용하고 그 이유를 명확히 설명합니다.' },
    { title: '실제 진행 단계를 공개합니다', body: '연구, 개발, 최종 테스트, 출시 중 현재 위치를 솔직하게 표시합니다.' },
  ] },
  portfolio: { label: '포트폴리오', headline: '여섯 가지 아이디어. 하나의 기준.', body: '네 개의 지능형 앱과 두 개의 게임을 같은 수준의 정직함과 시각적 완성도로 소개합니다.', all: '모든 제품 보기', apps: 'AI 및 애플리케이션', games: '게임' },
  demoCallout: { label: '게임플레이', headline: 'VOID STRIKER의 전투를 만나보세요.', body: '실제 게임에서 촬영한 우주 전투, 적의 웨이브, 업그레이드 장면을 영상으로 확인하세요.', cta: '게임 영상 보기' },
  appsPage: { label: '제품', headline: '우리가 만들고 있는 것.', lede: '네 단계에 있는 여섯 제품입니다. 모두 직접 만든 작업이며 각 페이지에 현재 상태를 정확히 표시합니다.', note: '아직 출시되지 않은 제품입니다. 공개 버전이 준비되면 다운로드 링크가 표시됩니다.' },
  ui: { skipToContent: '본문으로 이동', menu: '메뉴', close: '닫기', backToApps: '모든 제품', screenshotsLabel: '앱 화면', gameplayLabel: '게임플레이', conceptArtLabel: '콘셉트 아트', noScreenshots: '공개할 수 있는 인터페이스가 준비되면 화면을 게시합니다.', kindLabel: '분류', stageLabel: '단계', supportShort: '지원', supportEmail: '지원 이메일', emailUs: '문의하기', primaryNav: '주요 탐색', onThisPage: '이 페이지에서', lastUpdated: '마지막 업데이트', getIt: '이용 가능 여부', platforms: '플랫폼', legalSupport: '개인정보 및 지원', privacy: '개인정보 처리방침', terms: '이용 약관', dataDeletion: '데이터 삭제', playDemo: '데모 플레이', aboutGame: '게임 소개', deleteRequest: '삭제 요청 이메일 보내기', download: '다운로드', languages: '언어', phone: '전화', productsWord: '제품', conceptNotice: '개발 중인 제품을 위한 콘셉트 이미지입니다.' },
  footer: { studio: '스튜디오', help: '도움말', legal: '법적 고지', rights: '모든 권리 보유.' },
  status: { 'Product discovery': '제품 연구', 'In development': '개발 중', 'Final testing': '최종 테스트', 'On the stores': '스토어 출시' },
  products: {
    loop: { positioning: '한발 앞서 생각하는 지능.', tagline: '처음부터 다국어로 설계된 소비자용 앱.', kind: 'AI · 소비자 앱', description: ['LOOP는 능동형 지능을 중심으로 개발 중인 소비자용 애플리케이션입니다.', '완성된 뒤 번역하는 방식이 아니라 첫 설계부터 여러 언어를 고려합니다.', '세부 기능이 확정되면 공개합니다. 아직 출시일은 정해지지 않았습니다.'], conceptLabel: '콘셉트 아트 · 개발 중인 제품' },
    shield: { positioning: '신뢰하기 전에 확인하세요.', tagline: '“이것을 믿어도 될까?”라는 질문에서 시작한 연구 단계의 콘셉트.', kind: 'AI · 디지털 보호', description: ['SHIELD는 낯선 메시지, 의심스러운 링크, 청구서, QR 코드처럼 일상적인 순간에서 출발합니다.', '행동하기 전에 디지털 상호작용을 판단하도록 돕는 개인 신뢰 지능을 연구하고 있습니다.', '현재는 연구 단계이며 검증되지 않은 보호 효과를 약속하지 않습니다.'], conceptLabel: '콘셉트 아트 · 제품 연구' },
    guard: { positioning: '잃기 전에 알아차리세요.', tagline: '조용히 빠져나가는 돈을 살펴보는 연구 단계의 콘셉트.', kind: 'AI · 재정 보호', description: ['무료 체험 전환, 자동 갱신, 환불 기한처럼 놓치기 쉬운 날짜에서 손실이 생깁니다.', 'GUARD는 이런 순간을 더 잘 보이게 만드는 개념을 연구합니다.', '아직 은행 연결, 취소, 환불 요청 또는 송금 기능은 제공하지 않습니다.'], conceptLabel: '콘셉트 아트 · 제품 연구' },
    biblelink: { positioning: '매일을 위한 성경, 묵상과 기도.', tagline: '최종 테스트 중인 매일 묵상 앱.', kind: '애플리케이션 · 매일 묵상', description: ['BibleLink는 성경, 묵상, 삶의 적용과 기도를 차분한 경험으로 연결합니다.', '매일 성경을 읽는 리듬을 돕도록 설계되었으며 아홉 개 언어의 콘텐츠를 제공합니다.', '현재 최종 테스트 중이며 공개 출시 후 스토어 링크가 표시됩니다.'] },
    'void-striker': { tagline: '인류의 마지막 전투기. 공허가 깨어났습니다.', kind: '게임', description: ['다섯 개의 캠페인 구역과 여섯 명의 보스에 도전하거나 일일 도전과 생존 모드를 즐겨 보세요. 전투기 일곱 대와 무기 다섯 종류를 사용할 수 있습니다.', '게임을 진행하며 새로운 전투기와 외형을 잠금 해제할 수 있습니다. 인터페이스는 영어, 포르투갈어, 스페인어를 지원합니다.', 'VOID STRIKER는 App Store와 Google Play 판매를 준비 중입니다. 출시 전까지 게임플레이 영상을 확인해 주세요.'] },
    'galaxy-forge': { tagline: '개발 중인 두 번째 게임.', kind: '게임', description: ['GALAXY FORGE는 스튜디오의 두 번째 게임으로 현재 개발 중입니다.', '초기 단계의 결정이 계속 바뀌므로 게임 방식은 아직 공개하지 않습니다.'], conceptLabel: '콘셉트 아트 · 개발 중인 게임' },
  }, pageTitles: {},
};

const ar: Copy = {
  proposition: 'نحن استوديو تقني مستقل. نصمم تطبيقات ذكية وألعابًا أصلية ونبنيها بأنفسنا ثم ننشرها باسمنا.',
  blurb: 'استوديو تقني مستقل يصنع تطبيقات ذكية وألعابًا أصلية.', location: 'كينيساو، جورجيا، الولايات المتحدة',
  nav: ['المنتجات', 'أسلوب اللعب', 'الدعم'],
  hero: { eyebrow: 'استوديو تقني مستقل', headline: ['نصنع', 'تقنية', 'لها غاية.'], accentWord: 'غاية.', primary: 'استكشف منتجاتنا', secondary: 'شاهد أسلوب اللعب' },
  approach: { label: 'كيف نعمل', headline: 'استوديو صغير. منتج متكامل.', body: ['كل ما ننشره يبدأ هنا. تحمل كل تفصيلة هوية NAVL ومسؤوليتها.', 'الأشخاص الذين يكتبون الشفرة ويصممون التجربة هم أنفسهم من يجيبون عن رسائل الدعم. هذا القرب يظهر في جودة المنتج كله.'], points: [
    { title: 'نصنع ما ننشره', body: 'كل منتج يُصمَّم ويُطوَّر داخليًا من الفكرة إلى الإطلاق.' },
    { title: 'نحترم الخصوصية', body: 'نستخدم الحد الأدنى من البيانات اللازمة ونشرح ذلك بوضوح.' },
    { title: 'نُظهر المرحلة الحقيقية', body: 'بحث أو تطوير أو اختبار أو إطلاق: نعرض دائمًا وضع المنتج الفعلي.' },
  ] },
  portfolio: { label: 'أعمالنا', headline: 'ست أفكار. معيار واحد.', body: 'أربعة تطبيقات ذكية ولعبتان، بهوية بصرية موحّدة وشفافية كاملة.', all: 'عرض كل المنتجات', apps: 'الذكاء الاصطناعي والتطبيقات', games: 'الألعاب' },
  demoCallout: { label: 'أسلوب اللعب', headline: 'شاهد VOID STRIKER أثناء اللعب.', body: 'شاهد لقطات حقيقية من القتال الفضائي وموجات الأعداء والترقيات داخل اللعبة.', cta: 'شاهد الفيديو' },
  appsPage: { label: 'المنتجات', headline: 'ما الذي نبنيه.', lede: 'ستة منتجات في أربع مراحل. كلها من صنعنا وتعرض كل صفحة المرحلة الفعلية للعمل.', note: 'لم يصدر هذا المنتج بعد. سيظهر رابط التنزيل عندما تتوفر نسخة عامة.' },
  ui: { skipToContent: 'الانتقال إلى المحتوى', menu: 'القائمة', close: 'إغلاق', backToApps: 'كل المنتجات', screenshotsLabel: 'صور التطبيق', gameplayLabel: 'أسلوب اللعب', conceptArtLabel: 'فن تصوري', noScreenshots: 'سننشر الصور عندما تصبح واجهة المنتج جاهزة للعرض.', kindLabel: 'الفئة', stageLabel: 'المرحلة', supportShort: 'الدعم', supportEmail: 'بريد الدعم', emailUs: 'تواصل معنا', primaryNav: 'التنقل الرئيسي', onThisPage: 'في هذه الصفحة', lastUpdated: 'آخر تحديث', getIt: 'التوفر', platforms: 'المنصات', legalSupport: 'الخصوصية والدعم', privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام', dataDeletion: 'حذف البيانات', playDemo: 'تشغيل العرض', aboutGame: 'عن اللعبة', deleteRequest: 'إرسال طلب حذف', download: 'تنزيل', languages: 'اللغات', phone: 'الهاتف', productsWord: 'منتجات', conceptNotice: 'صورة تصورية لمنتج قيد التطوير.' },
  footer: { studio: 'الاستوديو', help: 'المساعدة', legal: 'قانوني', rights: 'جميع الحقوق محفوظة.' },
  status: { 'Product discovery': 'بحث المنتج', 'In development': 'قيد التطوير', 'Final testing': 'الاختبارات النهائية', 'On the stores': 'متاح في المتاجر' },
  products: {
    loop: { positioning: 'ذكاء يفكر خطوة إلى الأمام.', tagline: 'تطبيق للمستخدم قيد التطوير، صُمم متعدد اللغات منذ البداية.', kind: 'ذكاء اصطناعي · تطبيق للمستخدم', description: ['LOOP تطبيق نعمل عليه حول مفهوم الذكاء الاستباقي.', 'صُمم متعدد اللغات من البداية لأن إضافة لغة إلى منتج مكتمل ليست مجرد ترجمة.', 'سنعلن التفاصيل عندما تستقر. لا يوجد موعد إطلاق معلن حاليًا.'], conceptLabel: 'فن تصوري · منتج قيد التطوير' },
    shield: { positioning: 'اعرف قبل أن تثق.', tagline: 'فكرة في مرحلة البحث تبدأ بسؤال: هل يمكنني الوثوق بهذا؟', kind: 'ذكاء اصطناعي · حماية رقمية', description: ['ينطلق SHIELD من مواقف يومية: رسالة مجهولة أو رابط مريب أو فاتورة أو رمز QR.', 'ندرس فكرة تساعد الشخص على تقييم التفاعل الرقمي قبل النقر أو الرد أو إرسال المال.', 'ما زال في مرحلة البحث ولا نَعِد بحماية لم تُختبر بعد.'], conceptLabel: 'فن تصوري · بحث المنتج' },
    guard: { positioning: 'اعرف قبل أن تخسر.', tagline: 'فكرة تبحث في المال الذي يخرج بهدوء.', kind: 'ذكاء اصطناعي · حماية مالية', description: ['قد تأتي الخسارة من موعد منسي: تجربة تتحول إلى رسوم أو تجديد تلقائي أو انتهاء مهلة إرجاع.', 'GUARD هو المفهوم الذي ندرسه لإظهار تلك اللحظات بوضوح.', 'لا يتصل حاليًا بالبنوك ولا يلغي خدمات أو يطلب استردادًا أو يحرك الأموال.'], conceptLabel: 'فن تصوري · بحث المنتج' },
    biblelink: { positioning: 'الكتاب المقدس والتأمل والصلاة لكل يوم.', tagline: 'تطبيق تعبدي يومي في مرحلة الاختبار النهائي.', kind: 'تطبيق · تأمل يومي', description: ['يجمع BibleLink الكتاب المقدس والتأمل والتطبيق العملي والصلاة في تجربة هادئة.', 'صُمم لدعم عادة يومية للقراءة ويقدم المحتوى بتسع لغات.', 'النسخة العربية قادمة قريبًا. سيظهر رابط المتجر بعد الإطلاق العام.'] },
    'void-striker': { tagline: 'مقاتلة البشرية الأخيرة. لقد استيقظ الفراغ.', kind: 'لعبة', description: ['قاتل عبر خمسة قطاعات وستة زعماء، أو جرّب التحدي اليومي ونمط البقاء. تتوفر سبع مقاتلات وخمسة أنواع من الأسلحة.', 'افتح مقاتلات ومظاهر جديدة أثناء اللعب. تتوفر واجهة اللعبة بالإنجليزية والبرتغالية والإسبانية.', 'يجري إعداد VOID STRIKER للبيع على App Store وGoogle Play. شاهد فيديو اللعب إلى أن تتوفر روابط المتاجر.'] },
    'galaxy-forge': { tagline: 'لعبتنا الثانية، وهي قيد التطوير.', kind: 'لعبة', description: ['GALAXY FORGE هي اللعبة الثانية للاستوديو ويجري تطويرها الآن.', 'لا نصف أسلوب اللعب بعد لأن القرارات تتغير في هذه المرحلة المبكرة.'], conceptLabel: 'فن تصوري · لعبة قيد التطوير' },
  }, pageTitles: {},
};

export const localized: Partial<Record<LocaleCode, Copy>> = { pt, es, ko, ar };

const visualCopy: Partial<Record<LocaleCode, {
  demoLede: string;
  clipAlt: string;
  note: string;
  facts: { label: string; value: string }[];
  shots: { label: string; alt: string }[];
}>> = {
  pt: {
    demoLede: 'Quatorze segundos de uma partida real, gravada diretamente no jogo.',
    clipAlt: 'Partida de VOID STRIKER com a nave disparando contra ondas de inimigos.',
    note: 'Gravado na versão real. O jogo roda no navegador sem motor de jogos nem bibliotecas externas.',
    facts: [{ label: 'Gravação', value: '520 × 720, 60 fps' }, { label: 'Motor', value: 'Nenhum · Canvas 2D' }, { label: 'Áudio', value: 'Sintetizado · Web Audio' }],
    shots: [
      { label: 'Um começo diário tranquilo', alt: 'Tela inicial do BibleLink com versículo, escuta, favoritos e compartilhamento.' },
      { label: 'Leia e ouça a Bíblia', alt: 'Leitor bíblico do BibleLink com tradução, leitura paralela, áudio e texto.' },
      { label: 'Um devocional diário completo', alt: 'Momento com Deus com passagem bíblica, reflexão, oração e ação para o dia.' },
      { label: 'Orações para cada momento', alt: 'Orações do BibleLink organizadas por manhã, noite, ansiedade e gratidão.' },
      { label: 'Guarde o que fala com você', alt: 'Favoritos do BibleLink com versículos, orações, destaques e anotações.' },
      { label: 'Leitura confortável e ajustável', alt: 'Leitor bíblico com texto ampliado para uma leitura mais confortável.' },
    ],
  },
  es: {
    demoLede: 'Catorce segundos de una partida real, grabada directamente desde el juego.',
    clipAlt: 'Partida de VOID STRIKER con la nave disparando contra oleadas de enemigos.',
    note: 'Grabado desde la versión real. El juego funciona en el navegador sin motor ni bibliotecas externas.',
    facts: [{ label: 'Grabación', value: '520 × 720, 60 fps' }, { label: 'Motor', value: 'Ninguno · Canvas 2D' }, { label: 'Audio', value: 'Sintetizado · Web Audio' }],
    shots: [
      { label: 'Un comienzo diario sereno', alt: 'Inicio de BibleLink con versículo, escucha, favoritos y compartir.' },
      { label: 'Lee y escucha la Biblia', alt: 'Lector bíblico con traducción, lectura paralela, audio y texto.' },
      { label: 'Un devocional diario completo', alt: 'Momento con Dios con pasaje, reflexión, oración y acción del día.' },
      { label: 'Oraciones para cada momento', alt: 'Oraciones organizadas por mañana, noche, ansiedad y gratitud.' },
      { label: 'Guarda lo que habla contigo', alt: 'Favoritos con versículos, oraciones, resaltados y notas.' },
      { label: 'Lectura cómoda y ajustable', alt: 'Lector bíblico con texto ampliado para una lectura más cómoda.' },
    ],
  },
  ko: {
    demoLede: '실제 게임에서 직접 녹화한 14초의 플레이 영상입니다.',
    clipAlt: 'VOID STRIKER의 우주선이 적의 웨이브를 향해 발사하는 실제 게임 장면.',
    note: '실제 빌드에서 녹화했습니다. 게임 엔진과 외부 라이브러리 없이 브라우저에서 실행됩니다.',
    facts: [{ label: '녹화', value: '520 × 720, 60 fps' }, { label: '엔진', value: '없음 · Canvas 2D' }, { label: '오디오', value: '합성 · Web Audio' }],
    shots: [
      { label: '차분하게 시작하는 하루', alt: '말씀, 듣기, 즐겨찾기와 공유 기능이 있는 BibleLink 홈 화면.' },
      { label: '성경을 읽고 들으세요', alt: '번역, 병렬 읽기, 오디오와 글자 설정을 갖춘 성경 읽기 화면.' },
      { label: '완성도 높은 매일 묵상', alt: '성경 말씀, 묵상, 기도와 오늘의 실천을 보여 주는 하나님과의 시간.' },
      { label: '모든 순간을 위한 기도', alt: '아침, 밤, 불안과 감사로 정리된 BibleLink 기도 화면.' },
      { label: '마음에 남은 내용을 보관하세요', alt: '말씀, 기도, 강조 표시와 메모를 정리한 즐겨찾기 화면.' },
      { label: '편안하게 조절하는 읽기', alt: '더 편안한 읽기를 위해 글자를 키운 성경 읽기 화면.' },
    ],
  },
  ar: {
    demoLede: 'أربع عشرة ثانية من جولة حقيقية مسجّلة مباشرة من اللعبة.',
    clipAlt: 'مشهد لعب حقيقي من VOID STRIKER والسفينة تطلق النار على موجات الأعداء.',
    note: 'مسجّل من النسخة الحقيقية. تعمل اللعبة في المتصفح من دون محرك ألعاب أو مكتبات خارجية.',
    facts: [{ label: 'التسجيل', value: '520 × 720، 60 إطارًا' }, { label: 'المحرك', value: 'لا يوجد · Canvas 2D' }, { label: 'الصوت', value: 'مُولّد · Web Audio' }],
    shots: [
      { label: 'بداية يومية هادئة', alt: 'شاشة BibleLink الرئيسية مع النص والاستماع والمفضلة والمشاركة.' },
      { label: 'اقرأ الكتاب المقدس واستمع إليه', alt: 'قارئ BibleLink مع الترجمة والقراءة المتوازية والصوت وإعدادات النص.' },
      { label: 'تأمل يومي متكامل', alt: 'لحظة مع الله تعرض النص والتأمل والصلاة وخطوة اليوم.' },
      { label: 'صلوات لكل لحظة', alt: 'صلوات BibleLink مرتبة للصباح والليل والقلق والامتنان.' },
      { label: 'احتفظ بما يلامس قلبك', alt: 'المفضلة وفيها النصوص والصلوات والتمييز والملاحظات.' },
      { label: 'قراءة مريحة وقابلة للتعديل', alt: 'قارئ الكتاب المقدس بنص أكبر لقراءة أكثر راحة.' },
    ],
  },
};

export function siteContent(code: LocaleCode) {
  const copy = localized[code];
  if (!copy) return en;
  const visual = visualCopy[code];
  const site = { ...en.site, proposition: copy.proposition, blurb: copy.blurb, location: copy.location };
  const nav = en.nav.map((item, i) => ({ ...item, label: copy.nav[i] }));
  const home = {
    ...en.home,
    hero: { ...en.home.hero, eyebrow: copy.hero.eyebrow, headline: copy.hero.headline, accentWord: copy.hero.accentWord, lede: copy.proposition, primaryCta: { ...en.home.hero.primaryCta, label: copy.hero.primary }, secondaryCta: { ...en.home.hero.secondaryCta, label: copy.hero.secondary } },
    approach: { ...en.home.approach, ...copy.approach },
    portfolio: { ...en.home.portfolio, label: copy.portfolio.label, headline: copy.portfolio.headline, body: copy.portfolio.body, cta: { ...en.home.portfolio.cta, label: copy.portfolio.all } },
    demoCallout: { ...en.home.demoCallout, label: copy.demoCallout.label, headline: copy.demoCallout.headline, body: copy.demoCallout.body, cta: { ...en.home.demoCallout.cta, label: copy.demoCallout.cta } },
  };
  const apps = en.apps.map((app) => {
    const p = copy.products[app.slug];
    if (!p) return app;
    const screenshots = app.slug === 'biblelink' && visual
      ? app.screenshots.map((shot, index) => ({ ...shot, ...visual.shots[index] }))
      : app.screenshots;
    return { ...app, positioning: p.positioning, tagline: p.tagline, kind: p.kind, description: p.description, screenshots, conceptArt: app.conceptArt ? { ...app.conceptArt, label: p.conceptLabel ?? app.conceptArt.label } : undefined };
  });
  const portfolio = [
    { ...en.portfolio[0], label: copy.portfolio.apps, items: apps.filter((a) => a.category === 'app') },
    { ...en.portfolio[1], label: copy.portfolio.games, items: apps.filter((a) => a.category === 'game') },
  ];
  const appsPage = { ...en.appsPage, label: copy.appsPage.label, headline: copy.appsPage.headline, lede: copy.appsPage.lede, inDevelopmentNote: copy.appsPage.note };
  const demo = {
    ...en.demo,
    label: copy.demoCallout.label,
    lede: visual?.demoLede ?? copy.demoCallout.body,
    clipAlt: visual?.clipAlt ?? en.demo.clipAlt,
    note: visual?.note ?? en.demo.note,
    facts: visual?.facts ?? en.demo.facts,
  };
  const ui = { ...en.ui, ...copy.ui };
  const footer = { ...en.footer, blurb: copy.blurb, rightsReserved: copy.footer.rights, columns: en.footer.columns.map((col, i) => ({ ...col, title: [copy.footer.studio, copy.footer.help, copy.footer.legal][i], links: col.links.map((link) => ({ ...link, label: link.route === en.routes.apps ? copy.nav[0] : link.route === en.routes.demo ? copy.nav[1] : link.route === en.routes.support ? copy.nav[2] : link.route === en.routes.dataDeletion ? copy.ui.dataDeletion : link.route === en.routes.privacy ? copy.ui.privacy : copy.ui.terms })) })) };
  return { ...en, site, nav, home, apps, portfolio, appsPage, demo, ui, footer };
}

export function pagesFor(code: LocaleCode): PageMeta[] {
  const copy = localized[code];
  if (!copy) return enPages;
  const c = siteContent(code);
  return enPages.map((page) => {
    const appSlug = page.route.startsWith('apps/') ? page.route.split('/')[1] : '';
    const app = appSlug ? c.apps.find((item) => item.slug === appSlug) : undefined;
    const titles: Record<string, string> = {
      '': `${c.site.name} — ${copy.hero.eyebrow}`,
      apps: `${copy.nav[0]} — ${c.site.name}`,
      demo: `${copy.demoCallout.label} — ${c.site.name}`,
      support: `${copy.nav[2]} — ${c.site.name}`,
      privacy: `${copy.ui.privacy} — ${c.site.name}`,
      terms: `${copy.ui.terms} — ${c.site.name}`,
      'data-deletion': `${copy.ui.dataDeletion} — ${c.site.name}`,
    };
    const storyMeta: Partial<Record<LocaleCode, Record<'about' | 'news', [string, string]>>> = {
      pt: {
        about: ['Sobre a New AI Vision Labs', 'Conheça o estúdio independente por trás do BibleLink, VOID STRIKER e de um portfólio crescente de aplicativos e jogos originais.'],
        news: ['Novidades do estúdio — New AI Vision Labs', 'Preparação de lançamentos, avanços dos produtos e trabalhos selecionados da New AI Vision Labs.'],
      },
      es: {
        about: ['Sobre New AI Vision Labs', 'Conoce el estudio independiente detrás de BibleLink, VOID STRIKER y un portafolio creciente de aplicaciones y juegos originales.'],
        news: ['Novedades del estudio — New AI Vision Labs', 'Preparación de lanzamientos, avances de productos y trabajos seleccionados de New AI Vision Labs.'],
      },
      ko: {
        about: ['New AI Vision Labs 소개', 'BibleLink와 VOID STRIKER를 비롯한 오리지널 앱과 게임을 만드는 독립 스튜디오를 소개합니다.'],
        news: ['스튜디오 소식 — New AI Vision Labs', 'New AI Vision Labs의 출시 준비, 제품 이정표, 주요 작업을 전합니다.'],
      },
      ar: {
        about: ['عن New AI Vision Labs', 'تعرّف على الاستوديو المستقل وراء BibleLink وVOID STRIKER ومجموعة متنامية من التطبيقات والألعاب الأصلية.'],
        news: ['أخبار الاستوديو — New AI Vision Labs', 'استعدادات الإطلاق ومراحل المنتجات وأعمال مختارة من New AI Vision Labs.'],
      },
    };
    const localStory = page.route === 'about' || page.route === 'news' ? storyMeta[code]?.[page.route] : undefined;
    return {
      ...page,
      title: app ? `${app.name} — ${c.site.name}` : localStory?.[0] ?? titles[page.route] ?? page.title,
      description: app?.tagline ?? localStory?.[1] ?? (page.route === '' ? copy.proposition : page.description),
    };
  });
}

export function statusLabel(code: LocaleCode, status: string) {
  return localized[code]?.status[status] ?? status;
}
