import { privacy as enPrivacy, terms as enTerms, type LegalDoc, type Section } from './en/legal.ts';
import { support as enSupport, dataDeletion as enDataDeletion } from './en/help.ts';
import { bibleLinkPrivacy, bibleLinkSupport } from './en/biblelink.ts';
import type { LocaleCode } from './locales.ts';

type LocalDocs = {
  privacy: LegalDoc;
  terms: LegalDoc;
  support: typeof enSupport;
  dataDeletion: typeof enDataDeletion;
};

const makeDoc = (title: string, description: string, updated: string, intro: string[], sections: Section[]): LegalDoc => ({ title, description, updated, intro, sections });

const pt: LocalDocs = {
  privacy: makeDoc('Política de Privacidade', 'Como a New AI Vision Labs trata informações em seus aplicativos e neste site.', '19 de setembro de 2026',
    ['Esta política explica o tratamento de informações pela New AI Vision Labs LLC, em Kennesaw, Geórgia, Estados Unidos. Nosso princípio é simples: coletar o mínimo necessário e explicar cada uso com clareza.'], [
      { heading: 'Quem somos', body: ['A controladora responsável é a New AI Vision Labs LLC. Contato: support@newaivisionlabs.com.'] },
      { heading: 'Este site', body: ['O site não cria contas, não usa cookies de publicidade e não utiliza ferramentas de análise ou rastreamento. O servidor pode processar dados técnicos básicos, como endereço IP, para entregar a página com segurança.'] },
      { heading: 'Nossos aplicativos', body: ['VOID STRIKER mantém pontuações e preferências no aparelho. BibleLink mantém leitura e preferências localmente e pode sincronizar categorias escolhidas no banco privado do CloudKit do usuário. Datas protegidas da avaliação podem ficar no Keychain ou iCloud Keychain.', 'A New AI Vision Labs não consegue ler o conteúdo privado do CloudKit ou do Keychain do usuário.'] },
      { heading: 'Como usamos informações', body: ['Não recebemos atividade de leitura para publicidade, perfil ou venda. Se você nos enviar um e-mail, usamos o endereço e a mensagem apenas para responder e manter o histórico necessário do suporte.'] },
      { heading: 'Serviços da Apple e terceiros', body: ['A Apple processa downloads, compras, CloudKit e iCloud Keychain de acordo com suas próprias políticas. Não usamos redes de anúncios, atribuição ou análise no site ou no BibleLink.'] },
      { heading: 'Retenção e exclusão', body: ['Os dados locais permanecem até serem apagados no aplicativo ou no aparelho. Dados sincronizados do BibleLink podem ser apagados em Ajustes → Privacidade. E-mails de suporte podem ser excluídos mediante solicitação.'] },
      { heading: 'Seus direitos', body: ['Dependendo do local onde você mora, pode pedir acesso, correção, cópia ou exclusão das informações que mantemos. Escreva para support@newaivisionlabs.com.'] },
      { heading: 'Crianças', body: ['Cada aplicativo possui sua própria classificação etária. Não coletamos intencionalmente informações de crianças quando a lei exige consentimento parental que não foi obtido.'] },
      { heading: 'Segurança e transferências', body: ['O site usa HTTPS. O e-mail de suporte é hospedado nos Estados Unidos. Serviços privados da Apple seguem a infraestrutura e os termos da Apple. Nenhum sistema é perfeitamente seguro.'] },
      { heading: 'Alterações e contato', body: ['Podemos atualizar esta política quando os produtos mudarem. Dúvidas: support@newaivisionlabs.com.'] },
    ]),
  terms: makeDoc('Termos de Uso', 'Termos aplicáveis aos aplicativos e ao site da New AI Vision Labs.', '19 de setembro de 2026',
    ['Ao instalar um aplicativo da New AI Vision Labs LLC ou usar este site, você concorda com estes termos.'], [
      { heading: 'Licença dos aplicativos', body: ['Concedemos uma licença pessoal, não exclusiva, intransferível e revogável para uso não comercial em aparelhos que você possui ou controla. Não copie, revenda ou faça engenharia reversa, salvo quando a lei permitir.'] },
      { heading: 'Aplicativos da App Store', body: ['O contrato é entre você e a New AI Vision Labs LLC. A Apple não é responsável pelo aplicativo, conteúdo, suporte, garantias ou reclamações. A licença também segue as Regras de Uso dos Termos de Serviços de Mídia da Apple.', 'A Apple e suas subsidiárias são beneficiárias destes termos e podem aplicá-los diretamente.'] },
      { heading: 'Compras', body: ['BibleLink oferece sete dias de avaliação e uma compra única opcional para acesso permanente. Não é assinatura e não há renovação automática. A loja mostra o preço localizado antes da confirmação e processa pagamentos e reembolsos.'] },
      { heading: 'Conteúdo do usuário', body: ['Notas, destaques e outros conteúdos pessoais do BibleLink permanecem no aparelho e podem sincronizar pelo CloudKit privado do usuário. Eles não são publicados em um servidor ou comunidade da NAVL.'] },
      { heading: 'Uso aceitável', body: ['Não use nossos produtos para violar a lei, comprometer sistemas, obter acesso indevido ou prejudicar outras pessoas.'] },
      { heading: 'Disponibilidade', body: ['Podemos alterar, suspender ou encerrar produtos ou recursos. Quando possível, comunicaremos mudanças relevantes.'] },
      { heading: 'Isenções e responsabilidade', body: ['Os produtos são fornecidos “como estão” e “conforme disponíveis”, dentro dos limites permitidos por lei. Direitos obrigatórios do consumidor continuam válidos.', 'Na extensão permitida por lei, não respondemos por danos indiretos ou perda de lucros, receita ou dados.'] },
      { heading: 'Encerramento', body: ['Você pode parar de usar um aplicativo a qualquer momento. Podemos suspender o acesso em caso de violação material destes termos.'] },
      { heading: 'Lei aplicável', body: ['Estes termos seguem as leis do Estado da Geórgia, Estados Unidos, sem retirar direitos obrigatórios de proteção ao consumidor no país onde você vive.'] },
      { heading: 'Contato', body: ['Dúvidas ou reclamações: support@newaivisionlabs.com.'] },
    ]),
  support: { ...enSupport, title: 'Suporte', description: 'Entre em contato com a New AI Vision Labs.', headline: 'Fale com quem constrói.', lede: 'Seu e-mail chega diretamente às pessoas que desenvolvem os produtos.', emailLabel: 'E-mail de suporte', phoneLabel: 'Telefone', helpful: { heading: 'O que ajuda no diagnóstico', body: ['Você pode escrever mesmo sem estes detalhes. Quando possível, inclua:', ['Aplicativo e versão', 'Aparelho e versão do sistema', 'O que você esperava e o que aconteceu', 'Captura ou gravação da tela']] }, sections: [
    { heading: 'Erros e falhas', body: ['Envie as informações que tiver. Preferimos receber um relato simples e fazer perguntas depois.'] },
    { heading: 'Reembolsos', body: ['Compras são processadas pela App Store ou Google Play e seguem a política da loja. Se precisar de orientação, escreva para nós.'] },
    { heading: 'Privacidade e dados', body: ['Pedidos de acesso, correção ou exclusão podem ser enviados ao mesmo endereço.'] },
    { heading: 'Sugestões', body: ['Lemos todas as sugestões, embora não possamos prometer prazo ou implementação.'] },
  ] },
  dataDeletion: { ...enDataDeletion, title: 'Exclusão de Dados', description: 'Como excluir dados locais e privados do iCloud.', updated: '19 de setembro de 2026', headline: 'Você controla seus dados.', lede: 'Não operamos contas de usuário nem um servidor de dados dos aplicativos.', intro: ['A NAVL não consegue acessar o conteúdo privado do CloudKit ou do Keychain. Use os controles abaixo para apagar os dados armazenados.'], steps: { heading: 'Como excluir', items: [
    { title: 'No navegador', body: 'Limpar os dados de newaivisionlabs.com remove pontuações, conquistas e preferências locais do VOID STRIKER.' },
    { title: 'No telefone', body: 'Apagar o aplicativo remove os dados locais. Uma cópia privada sincronizada no iCloud pode permanecer.' },
    { title: 'No BibleLink', body: 'Abra Ajustes → Privacidade para exportar ou apagar dados de leitura do aparelho e do CloudKit privado.' },
    { title: 'E-mails enviados à NAVL', body: 'Peça a exclusão da conversa em support@newaivisionlabs.com.' },
  ] }, inApp: { heading: 'Exclusão de conta', body: ['Nossos aplicativos não possuem contas de usuário, portanto não existe uma conta da NAVL para excluir.'] }, whatHappens: { heading: 'O que acontece com o pedido', body: ['Apagamos o histórico de suporte quando solicitado. Não conseguimos recuperar ou excluir conteúdo dentro do CloudKit ou Keychain privado do usuário.'] }, storeNote: { heading: 'Compras', body: ['Compras pertencem à conta da loja. Excluir dados não remove uma compra; o acesso permanente do BibleLink pode ser restaurado com a mesma Conta Apple.'] } },
};

const es = JSON.parse(JSON.stringify(pt)) as LocalDocs;
es.privacy = makeDoc('Política de Privacidad', 'Cómo New AI Vision Labs trata la información en sus aplicaciones y en este sitio.', '19 de septiembre de 2026',
  ['Esta política explica el tratamiento de información por New AI Vision Labs LLC. Nuestro principio es recopilar lo mínimo necesario y explicar cada uso con claridad.'], [
    { heading: 'Quiénes somos', body: ['La entidad responsable es New AI Vision Labs LLC, en Kennesaw, Georgia, Estados Unidos. Contacto: support@newaivisionlabs.com.'] },
    { heading: 'Este sitio', body: ['No crea cuentas, no usa cookies publicitarias ni herramientas de análisis o seguimiento. El servidor puede procesar datos técnicos básicos para entregar la página con seguridad.'] },
    { heading: 'Nuestras aplicaciones', body: ['VOID STRIKER guarda resultados y preferencias en el dispositivo. BibleLink guarda lectura y preferencias localmente y puede sincronizar categorías elegidas en la base privada de CloudKit del usuario. Fechas protegidas pueden permanecer en Keychain o iCloud Keychain.', 'New AI Vision Labs no puede leer el contenido privado de CloudKit o Keychain.'] },
    { heading: 'Uso de información', body: ['No recibimos actividad de lectura para publicidad, perfiles o venta. Si nos escribes, usamos el correo y el mensaje para responder y mantener el historial necesario de soporte.'] },
    { heading: 'Apple y terceros', body: ['Apple procesa descargas, compras, CloudKit y iCloud Keychain según sus políticas. No usamos redes publicitarias, de atribución o analítica en el sitio ni en BibleLink.'] },
    { heading: 'Conservación y eliminación', body: ['Los datos locales permanecen hasta que se eliminan en la aplicación o el dispositivo. Los datos sincronizados de BibleLink se eliminan desde Ajustes → Privacidad.'] },
    { heading: 'Tus derechos', body: ['Según tu país, puedes pedir acceso, corrección, copia o eliminación de información. Escribe a support@newaivisionlabs.com.'] },
    { heading: 'Menores', body: ['Cada aplicación tiene su propia clasificación. No recopilamos deliberadamente información de menores cuando la ley exige consentimiento parental no obtenido.'] },
    { heading: 'Seguridad y transferencias', body: ['El sitio usa HTTPS. El correo de soporte se aloja en Estados Unidos. Los servicios privados de Apple siguen los términos de Apple.'] },
    { heading: 'Cambios y contacto', body: ['Podemos actualizar esta política cuando cambien los productos. Consultas: support@newaivisionlabs.com.'] },
  ]);
es.terms = makeDoc('Términos de Uso', 'Términos para las aplicaciones y el sitio de New AI Vision Labs.', '19 de septiembre de 2026', ['Al instalar una aplicación de New AI Vision Labs LLC o usar este sitio, aceptas estos términos.'], [
  { heading: 'Licencia', body: ['Concedemos una licencia personal, no exclusiva, intransferible y revocable para uso no comercial en dispositivos que poseas o controles.'] },
  { heading: 'Aplicaciones de App Store', body: ['El acuerdo es entre tú y New AI Vision Labs LLC. Apple no es responsable de la aplicación, su contenido, soporte, garantías o reclamaciones. Apple y sus subsidiarias son beneficiarios de estos términos.'] },
  { heading: 'Compras', body: ['BibleLink ofrece siete días de evaluación y una compra única opcional. No es una suscripción ni se renueva automáticamente. La tienda muestra el precio local antes de confirmar.'] },
  { heading: 'Contenido del usuario', body: ['Notas y destacados de BibleLink permanecen en el dispositivo y pueden sincronizarse por el CloudKit privado del usuario.'] },
  { heading: 'Uso aceptable', body: ['No uses nuestros productos para infringir la ley, comprometer sistemas, acceder sin autorización o dañar a terceros.'] },
  { heading: 'Disponibilidad', body: ['Podemos cambiar, suspender o retirar productos o funciones.'] },
  { heading: 'Garantías y responsabilidad', body: ['Los productos se ofrecen “tal cual” y “según disponibilidad”, dentro de lo permitido por la ley. Los derechos obligatorios del consumidor siguen vigentes.'] },
  { heading: 'Terminación', body: ['Puedes dejar de usar una aplicación en cualquier momento. Podemos suspender el acceso ante un incumplimiento material.'] },
  { heading: 'Ley aplicable', body: ['Estos términos se rigen por las leyes del Estado de Georgia sin eliminar los derechos obligatorios del consumidor en tu país.'] },
  { heading: 'Contacto', body: ['Consultas o reclamaciones: support@newaivisionlabs.com.'] },
]);
es.support = {
  ...enSupport,
  title: 'Soporte',
  description: 'Cómo contactar con New AI Vision Labs.',
  headline: 'Habla con quienes lo construyen.',
  lede: 'Tu correo llega directamente a las personas que desarrollan nuestros productos.',
  emailLabel: 'Correo de soporte', phoneLabel: 'Teléfono',
  helpful: { heading: 'Qué información ayuda', body: ['Puedes escribirnos sin estos datos. Cuando sea posible, incluye:', ['Aplicación y versión', 'Dispositivo y versión del sistema', 'Qué esperabas y qué ocurrió', 'Una captura o grabación si el problema es visible']] },
  sections: [
    { heading: 'Errores y cierres', body: ['Envíanos la información que tengas. Preferimos recibir un informe sencillo y hacer preguntas después.'] },
    { heading: 'Reembolsos', body: ['Las compras las procesa App Store o Google Play y siguen las políticas de la tienda. Si necesitas orientación, escríbenos.'] },
    { heading: 'Privacidad y datos', body: ['Las solicitudes de acceso, corrección o eliminación pueden enviarse al mismo correo.'] },
    { heading: 'Sugerencias', body: ['Leemos todas las sugerencias, aunque no podemos prometer una fecha o implementación.'] },
  ],
};
es.dataDeletion = {
  ...enDataDeletion,
  title: 'Eliminación de Datos', description: 'Cómo eliminar datos locales y privados de iCloud.', updated: '19 de septiembre de 2026',
  headline: 'Tú controlas tus datos.', lede: 'No operamos cuentas de usuario ni un servidor con los datos de las aplicaciones.',
  intro: ['NAVL no puede acceder al contenido privado de CloudKit o Llavero. Usa los controles siguientes para borrar los datos almacenados.'],
  steps: { heading: 'Cómo eliminar los datos', items: [
    { title: 'En el navegador', body: 'Borrar los datos de newaivisionlabs.com elimina puntuaciones, logros y preferencias locales de VOID STRIKER.' },
    { title: 'En el teléfono', body: 'Eliminar la aplicación borra los datos locales. Una copia privada sincronizada en iCloud puede permanecer.' },
    { title: 'En BibleLink', body: 'Abre Ajustes → Privacidad para exportar o eliminar los datos de lectura del dispositivo y de la base privada de iCloud.' },
    { title: 'Correos enviados a NAVL', body: 'Solicita la eliminación de la conversación escribiendo a support@newaivisionlabs.com.' },
  ] },
  inApp: { heading: 'Eliminación de cuenta', body: ['Nuestras aplicaciones no tienen cuentas de usuario; por eso no existe una cuenta de NAVL que eliminar.'] },
  whatHappens: { heading: 'Qué ocurre con la solicitud', body: ['Eliminamos el historial de soporte cuando se solicita. No podemos recuperar ni eliminar contenido del CloudKit o Llavero privado del usuario.'] },
  storeNote: { heading: 'Compras', body: ['Las compras pertenecen a la cuenta de la tienda. Eliminar datos no borra una compra; el acceso permanente de BibleLink puede restaurarse con la misma Cuenta de Apple.'] },
};

const ko = JSON.parse(JSON.stringify(pt)) as LocalDocs;
ko.privacy = makeDoc('개인정보 처리방침', 'New AI Vision Labs가 웹사이트와 앱에서 정보를 처리하는 방식입니다.', '2026년 9월 19일', ['이 정책은 New AI Vision Labs LLC의 정보 처리 방식을 설명합니다. 필요한 정보만 최소한으로 사용하고 그 목적을 명확히 밝히는 것이 원칙입니다.'], [
  { heading: '운영자', body: ['책임 주체는 미국 조지아주 케네소의 New AI Vision Labs LLC입니다. 문의: support@newaivisionlabs.com.'] },
  { heading: '이 웹사이트', body: ['계정을 만들지 않으며 광고 쿠키, 분석 도구 또는 추적 기술을 사용하지 않습니다. 서버는 페이지를 안전하게 제공하기 위해 기본 기술 정보를 처리할 수 있습니다.'] },
  { heading: '앱 데이터', body: ['VOID STRIKER는 점수와 설정을 기기에 저장합니다. BibleLink는 읽기 데이터와 설정을 로컬에 저장하며 사용자가 선택하면 개인 CloudKit 데이터베이스와 동기화할 수 있습니다. 평가 보호 날짜는 Keychain 또는 iCloud Keychain에 남을 수 있습니다.', 'New AI Vision Labs는 사용자의 개인 CloudKit 또는 Keychain 내용을 읽을 수 없습니다.'] },
  { heading: '정보 사용', body: ['읽기 활동을 광고, 프로파일링 또는 판매에 사용하지 않습니다. 이메일 문의를 보내면 답변과 지원 기록을 위해 주소와 내용을 사용합니다.'] },
  { heading: 'Apple 서비스', body: ['다운로드, 구매, CloudKit 및 iCloud Keychain은 Apple 정책에 따라 Apple이 처리합니다. BibleLink와 이 사이트에는 광고, 분석 또는 어트리뷰션 네트워크가 없습니다.'] },
  { heading: '보관 및 삭제', body: ['로컬 데이터는 앱이나 기기에서 삭제할 때까지 유지됩니다. BibleLink 동기화 데이터는 설정 → 개인정보에서 삭제할 수 있습니다.'] },
  { heading: '사용자의 권리', body: ['거주 지역의 법에 따라 접근, 정정, 사본 또는 삭제를 요청할 수 있습니다. support@newaivisionlabs.com으로 연락하세요.'] },
  { heading: '아동', body: ['각 앱은 별도의 연령 등급을 가집니다. 법이 요구하는 부모 동의 없이 아동 정보를 의도적으로 수집하지 않습니다.'] },
  { heading: '보안과 국제 이전', body: ['사이트는 HTTPS를 사용합니다. 지원 이메일은 미국에 보관되며 Apple의 개인 서비스는 Apple의 인프라와 약관을 따릅니다.'] },
  { heading: '변경 및 문의', body: ['제품 변경에 따라 정책을 업데이트할 수 있습니다. 문의: support@newaivisionlabs.com.'] },
]);
ko.terms = makeDoc('이용 약관', 'New AI Vision Labs 앱과 웹사이트에 적용되는 약관입니다.', '2026년 9월 19일', ['New AI Vision Labs LLC 앱을 설치하거나 이 사이트를 사용하면 본 약관에 동의하는 것입니다.'], [
  { heading: '앱 사용권', body: ['소유하거나 관리하는 기기에서 비상업적으로 사용할 수 있는 개인적이고 비독점적이며 양도할 수 없는 취소 가능한 사용권을 제공합니다.'] },
  { heading: 'App Store 앱', body: ['계약은 사용자와 New AI Vision Labs LLC 사이에 체결됩니다. Apple은 앱, 콘텐츠, 지원, 보증 또는 청구에 책임이 없습니다. Apple과 그 자회사는 본 약관의 제3자 수익자입니다.'] },
  { heading: '구매', body: ['BibleLink는 7일 평가 후 선택 가능한 일회성 영구 잠금 해제를 제공합니다. 구독이나 자동 갱신이 아닙니다. 확인 전에 스토어가 현지 가격을 표시합니다.'] },
  { heading: '사용자 콘텐츠', body: ['BibleLink의 메모와 강조 표시는 기기에 남으며 사용자의 개인 CloudKit을 통해 동기화될 수 있습니다.'] },
  { heading: '허용되는 사용', body: ['불법 행위, 시스템 침해, 무단 접근 또는 타인에게 피해를 주는 용도로 제품을 사용하지 마십시오.'] },
  { heading: '제공 여부', body: ['제품 또는 기능을 변경, 중단하거나 종료할 수 있습니다.'] },
  { heading: '보증과 책임', body: ['제품은 법이 허용하는 범위에서 “있는 그대로” 제공됩니다. 강행 소비자 권리는 유지됩니다.'] },
  { heading: '종료', body: ['언제든 앱 사용을 중단할 수 있습니다. 중대한 약관 위반 시 접근을 중지할 수 있습니다.'] },
  { heading: '준거법', body: ['본 약관은 미국 조지아주 법을 따르며 사용자가 거주하는 국가의 강행 소비자 권리를 제한하지 않습니다.'] },
  { heading: '문의', body: ['문의 또는 불만: support@newaivisionlabs.com.'] },
]);
ko.support = {
  ...enSupport,
  title: '지원', description: 'New AI Vision Labs에 문의하는 방법입니다.', headline: '제품을 만드는 사람에게 직접 문의하세요.', lede: '이메일은 제품을 개발하는 사람들에게 직접 전달됩니다.', emailLabel: '지원 이메일', phoneLabel: '전화',
  helpful: { heading: '문제 해결에 도움이 되는 정보', body: ['다음 정보가 없어도 문의할 수 있습니다. 가능하면 포함해 주세요:', ['앱 이름과 버전', '기기와 운영 체제 버전', '예상한 동작과 실제 결과', '문제가 보이는 화면 캡처 또는 녹화']] },
  sections: [
    { heading: '오류 및 충돌', body: ['가지고 있는 정보를 보내 주세요. 간단한 설명을 받은 뒤 필요한 질문을 드리겠습니다.'] },
    { heading: '환불', body: ['구매는 App Store 또는 Google Play가 처리하며 해당 스토어의 정책이 적용됩니다. 안내가 필요하면 문의해 주세요.'] },
    { heading: '개인정보 및 데이터', body: ['정보 접근, 정정 또는 삭제 요청은 같은 이메일 주소로 보내 주세요.'] },
    { heading: '기능 제안', body: ['모든 제안을 검토하지만 일정이나 구현을 약속할 수는 없습니다.'] },
  ],
};
ko.dataDeletion = {
  ...enDataDeletion,
  title: '데이터 삭제', description: '로컬 및 개인 iCloud 데이터를 삭제하는 방법입니다.', updated: '2026년 9월 19일', headline: '데이터는 사용자가 관리합니다.', lede: '사용자 계정이나 앱 데이터 서버를 운영하지 않습니다.',
  intro: ['NAVL은 사용자의 비공개 CloudKit 또는 키체인 내용을 볼 수 없습니다. 아래 방법으로 저장된 데이터를 삭제할 수 있습니다.'],
  steps: { heading: '삭제 방법', items: [
    { title: '브라우저', body: 'newaivisionlabs.com의 사이트 데이터를 지우면 VOID STRIKER의 로컬 점수, 업적 및 설정이 삭제됩니다.' },
    { title: '휴대전화', body: '앱을 삭제하면 로컬 데이터가 제거됩니다. iCloud에 동기화된 비공개 사본은 남을 수 있습니다.' },
    { title: 'BibleLink', body: '설정 → 개인정보에서 읽기 데이터를 JSON으로 내보내거나 기기와 비공개 iCloud 데이터베이스에서 삭제할 수 있습니다.' },
    { title: 'NAVL에 보낸 이메일', body: 'support@newaivisionlabs.com으로 대화 삭제를 요청하세요.' },
  ] },
  inApp: { heading: '계정 삭제', body: ['앱에 사용자 계정이 없으므로 삭제할 NAVL 계정도 없습니다.'] },
  whatHappens: { heading: '요청 처리', body: ['요청하면 지원 기록을 삭제합니다. 사용자의 비공개 CloudKit 또는 키체인 안의 내용은 당사가 검색하거나 삭제할 수 없습니다.'] },
  storeNote: { heading: '구매', body: ['구매는 스토어 계정에 속합니다. 데이터를 삭제해도 구매는 사라지지 않으며 동일한 Apple 계정으로 BibleLink 영구 이용 권한을 복원할 수 있습니다.'] },
};

const ar = JSON.parse(JSON.stringify(pt)) as LocalDocs;
ar.privacy = makeDoc('سياسة الخصوصية', 'كيف تتعامل New AI Vision Labs مع المعلومات في التطبيقات وهذا الموقع.', '19 سبتمبر 2026', ['توضح هذه السياسة طريقة معالجة New AI Vision Labs LLC للمعلومات. مبدؤنا هو استخدام الحد الأدنى الضروري وشرح كل استخدام بوضوح.'], [
  { heading: 'من نحن', body: ['الجهة المسؤولة هي New AI Vision Labs LLC في كينيساو، جورجيا، الولايات المتحدة. التواصل: support@newaivisionlabs.com.'] },
  { heading: 'هذا الموقع', body: ['لا ينشئ حسابات ولا يستخدم ملفات تعريف ارتباط إعلانية أو أدوات تحليل أو تتبع. قد يعالج الخادم بيانات تقنية أساسية لتسليم الصفحة بأمان.'] },
  { heading: 'بيانات التطبيقات', body: ['يحفظ VOID STRIKER النتائج والإعدادات على الجهاز. ويحفظ BibleLink بيانات القراءة محليًا ويمكنه مزامنة الفئات التي يختارها المستخدم عبر قاعدة CloudKit الخاصة به. وقد تبقى تواريخ حماية التجربة في Keychain أو iCloud Keychain.', 'لا تستطيع New AI Vision Labs قراءة المحتوى الخاص في CloudKit أو Keychain.'] },
  { heading: 'استخدام المعلومات', body: ['لا نتلقى نشاط القراءة للإعلان أو بناء الملفات الشخصية أو البيع. إذا أرسلت إلينا بريدًا نستخدم العنوان والرسالة للرد والاحتفاظ بسجل الدعم اللازم.'] },
  { heading: 'خدمات Apple', body: ['تعالج Apple التنزيلات والمشتريات وCloudKit وiCloud Keychain وفق سياساتها. لا نستخدم شبكات إعلانات أو تحليلات أو إحالة في الموقع أو BibleLink.'] },
  { heading: 'الاحتفاظ والحذف', body: ['تبقى البيانات المحلية حتى تحذفها من التطبيق أو الجهاز. يمكن حذف بيانات BibleLink المتزامنة من الإعدادات ← الخصوصية.'] },
  { heading: 'حقوقك', body: ['بحسب مكان إقامتك يمكنك طلب الوصول أو التصحيح أو النسخ أو الحذف عبر support@newaivisionlabs.com.'] },
  { heading: 'الأطفال', body: ['لكل تطبيق تصنيف عمري مستقل. لا نجمع عمدًا معلومات الأطفال عندما يتطلب القانون موافقة والدية لم نحصل عليها.'] },
  { heading: 'الأمان والنقل الدولي', body: ['يستخدم الموقع HTTPS. يُستضاف بريد الدعم في الولايات المتحدة، وتتبع خدمات Apple الخاصة بنيتها وشروطها.'] },
  { heading: 'التغييرات والتواصل', body: ['قد نحدّث السياسة مع تغير المنتجات. الاستفسارات: support@newaivisionlabs.com.'] },
]);
ar.terms = makeDoc('شروط الاستخدام', 'الشروط المطبقة على تطبيقات وموقع New AI Vision Labs.', '19 سبتمبر 2026', ['بتثبيت تطبيق من New AI Vision Labs LLC أو استخدام الموقع فإنك توافق على هذه الشروط.'], [
  { heading: 'ترخيص التطبيقات', body: ['نمنحك ترخيصًا شخصيًا غير حصري وغير قابل للتحويل وقابلًا للإلغاء للاستخدام غير التجاري على الأجهزة التي تملكها أو تتحكم فيها.'] },
  { heading: 'تطبيقات App Store', body: ['الاتفاق بينك وبين New AI Vision Labs LLC. لا تتحمل Apple مسؤولية التطبيق أو محتواه أو دعمه أو ضماناته أو المطالبات المتعلقة به. وتُعد Apple وشركاتها التابعة مستفيدًا من هذه الشروط.'] },
  { heading: 'المشتريات', body: ['يقدم BibleLink تجربة لمدة سبعة أيام ثم شراءً اختياريًا لمرة واحدة لفتح دائم. ليس اشتراكًا ولا يتجدد تلقائيًا، ويعرض المتجر السعر المحلي قبل التأكيد.'] },
  { heading: 'محتوى المستخدم', body: ['تبقى ملاحظات BibleLink وتمييزاته على الجهاز ويمكن مزامنتها عبر CloudKit الخاص بالمستخدم.'] },
  { heading: 'الاستخدام المقبول', body: ['لا تستخدم منتجاتنا لمخالفة القانون أو اختراق الأنظمة أو الوصول غير المصرح به أو إلحاق الضرر بالآخرين.'] },
  { heading: 'التوفر', body: ['قد نغيّر المنتجات أو الميزات أو نوقفها أو ننهيها.'] },
  { heading: 'الضمان والمسؤولية', body: ['تُقدّم المنتجات «كما هي» و«حسب التوفر» ضمن ما يسمح به القانون، وتبقى حقوق المستهلك الإلزامية سارية.'] },
  { heading: 'الإنهاء', body: ['يمكنك التوقف عن استخدام التطبيق في أي وقت. وقد نوقف الوصول عند حدوث خرق جوهري للشروط.'] },
  { heading: 'القانون الحاكم', body: ['تخضع الشروط لقوانين ولاية جورجيا ولا تنتقص من حقوق المستهلك الإلزامية في بلدك.'] },
  { heading: 'التواصل', body: ['الأسئلة أو الشكاوى: support@newaivisionlabs.com.'] },
]);
ar.support = {
  ...enSupport,
  title: 'الدعم', description: 'طريقة التواصل مع New AI Vision Labs.', headline: 'تحدث مباشرة مع من يصنع المنتج.', lede: 'يصل بريدك مباشرة إلى الأشخاص الذين يطوّرون منتجاتنا.', emailLabel: 'بريد الدعم', phoneLabel: 'الهاتف',
  helpful: { heading: 'معلومات تساعدنا', body: ['يمكنك مراسلتنا من دون هذه التفاصيل. وعند الإمكان أرفق:', ['اسم التطبيق وإصداره', 'نوع الجهاز وإصدار النظام', 'ما توقعت حدوثه وما حدث فعليًا', 'لقطة شاشة أو تسجيل إذا كانت المشكلة ظاهرة']] },
  sections: [
    { heading: 'الأخطاء والتوقف', body: ['أرسل ما لديك من معلومات. نفضّل استلام وصف بسيط ثم طرح الأسئلة اللازمة.'] },
    { heading: 'المبالغ المستردة', body: ['تعالج App Store أو Google Play المشتريات وفق سياسة المتجر. إذا احتجت إلى إرشاد فتواصل معنا.'] },
    { heading: 'الخصوصية والبيانات', body: ['يمكن إرسال طلبات الوصول أو التصحيح أو الحذف إلى عنوان البريد نفسه.'] },
    { heading: 'الاقتراحات', body: ['نقرأ جميع الاقتراحات، لكن لا يمكننا التعهد بموعد أو تنفيذ محدد.'] },
  ],
};
ar.dataDeletion = {
  ...enDataDeletion,
  title: 'حذف البيانات', description: 'طريقة حذف البيانات المحلية والخاصة في iCloud.', updated: '19 سبتمبر 2026', headline: 'أنت تتحكم في بياناتك.', lede: 'لا ندير حسابات مستخدمين أو خادمًا لبيانات التطبيقات.',
  intro: ['لا تستطيع NAVL الوصول إلى محتوى CloudKit أو Keychain الخاص بالمستخدم. استخدم الخيارات التالية لحذف البيانات المخزنة.'],
  steps: { heading: 'طريقة الحذف', items: [
    { title: 'في المتصفح', body: 'يؤدي مسح بيانات newaivisionlabs.com إلى حذف نتائج VOID STRIKER وإنجازاته وتفضيلاته المحلية.' },
    { title: 'على الهاتف', body: 'يؤدي حذف التطبيق إلى إزالة البيانات المحلية. وقد تبقى نسخة خاصة متزامنة في iCloud.' },
    { title: 'داخل BibleLink', body: 'افتح الإعدادات ← الخصوصية لتصدير بيانات القراءة أو حذفها من الجهاز وقاعدة iCloud الخاصة.' },
    { title: 'الرسائل المرسلة إلى NAVL', body: 'اطلب حذف المحادثة عبر support@newaivisionlabs.com.' },
  ] },
  inApp: { heading: 'حذف الحساب', body: ['لا تحتوي تطبيقاتنا على حسابات مستخدمين، لذلك لا يوجد حساب NAVL لحذفه.'] },
  whatHappens: { heading: 'ما يحدث للطلب', body: ['نحذف سجل الدعم عند الطلب. لا يمكننا استرجاع أو حذف المحتوى داخل CloudKit أو Keychain الخاص بالمستخدم.'] },
  storeNote: { heading: 'المشتريات', body: ['ترتبط المشتريات بحساب المتجر. لا يؤدي حذف البيانات إلى إزالة الشراء، ويمكن استعادة وصول BibleLink الدائم باستخدام حساب Apple نفسه.'] },
};

const docs: Partial<Record<LocaleCode, LocalDocs>> = { pt, es, ko, ar };

export function docsFor(code: LocaleCode) {
  return docs[code] ?? { privacy: enPrivacy, terms: enTerms, support: enSupport, dataDeletion: enDataDeletion };
}

export function bibleLinkDocsFor(code: LocaleCode) {
  const headings: Partial<Record<LocaleCode, {
    privacy: [string, string, string];
    support: [string, string];
  }>> = {
    pt: {
      privacy: ['Política de Privacidade do BibleLink', 'Como o BibleLink armazena, sincroniza, exporta e exclui dados de leitura.', '19 de setembro de 2026'],
      support: ['Suporte do BibleLink', 'Ajuda com leitura, widgets, lembretes, áudio, sincronização pelo iCloud, compra e restauração.'],
    },
    es: {
      privacy: ['Política de Privacidad de BibleLink', 'Cómo BibleLink almacena, sincroniza, exporta y elimina los datos de lectura.', '19 de septiembre de 2026'],
      support: ['Soporte de BibleLink', 'Ayuda con lectura, widgets, recordatorios, audio, sincronización con iCloud, compra y restauración.'],
    },
    ko: {
      privacy: ['BibleLink 개인정보 처리방침', 'BibleLink가 읽기 데이터를 저장, 동기화, 내보내기 및 삭제하는 방법입니다.', '2026년 9월 19일'],
      support: ['BibleLink 지원', '읽기, 위젯, 알림, 오디오, iCloud 동기화, 구매 및 복원에 관한 도움말입니다.'],
    },
    ar: {
      privacy: ['سياسة خصوصية BibleLink', 'طريقة تخزين BibleLink لبيانات القراءة ومزامنتها وتصديرها وحذفها.', '19 سبتمبر 2026'],
      support: ['دعم BibleLink', 'مساعدة في القراءة والأدوات والتذكيرات والصوت ومزامنة iCloud والشراء والاستعادة.'],
    },
  };
  const copy = headings[code];
  if (!copy) return { bibleLinkPrivacy, bibleLinkSupport };
  return {
    bibleLinkPrivacy: { ...bibleLinkPrivacy, title: copy.privacy[0], lede: copy.privacy[1], updated: copy.privacy[2] },
    bibleLinkSupport: { ...bibleLinkSupport, title: copy.support[0], lede: copy.support[1] },
  };
}
