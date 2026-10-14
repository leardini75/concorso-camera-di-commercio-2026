import type { StudyTopic } from "./types";

export const AMMINISTRATIVO_TOPICS: StudyTopic[] = [
  {
    id: "t-adm-241",
    subject: "amministrativo",
    title: "L. 241/1990 — mappa mentale",
    summary:
      "La legge sul procedimento è il cuore della prova di amministrativo: principi, responsabile, tempi, partecipazione, motivazione, accesso, semplificazioni e patologia dell'atto.",
    remember:
      "In una risposta sintetica: norma → contenuto essenziale → effetto pratico → (se serve) differenza con istituto affine.",
    points: [
      {
        id: "principi-art1",
        title: "Art. 1 — principi dell'azione amministrativa",
        lead:
          "L'attività amministrativa è retta da economicità, efficacia, imparzialità, pubblicità e trasparenza, oltre che dai principi dell'ordinamento europeo.",
        body: [
          "L'articolo 1 della L. 7 agosto 1990, n. 241 enuncia i principi che devono guidare l'azione amministrativa. Non sono slogan: vincolano l'organizzazione degli uffici e lo svolgimento dei procedimenti. Economicità ed efficacia richiamano l'uso razionale delle risorse e il raggiungimento del risultato; imparzialità esclude favoritismi e impone parità di trattamento; pubblicità e trasparenza rendono conoscibile l'azione dell'ente.",
          "Il rinvio ai principi dell'ordinamento comunitario (oggi europeo) collega la L. 241 a proporzionalità, legittimo affidamento, buona amministrazione. In sede di prova conviene collegare l'art. 1 all'art. 97 Cost. (buon andamento e imparzialità): la Costituzione fissa il quadro, la 241 lo traduce in regole procedimentali.",
          "Per un assistente tecnico-amministrativo camerale questi principi orientano la gestione delle pratiche, la redazione degli atti e il rapporto con l'utenza: tempi certi, motivazioni chiare, accesso agli atti dove dovuto, semplificazione degli adempimenti.",
        ],
        terms: [
          {
            term: "Imparzialità",
            def: "Divieto di discriminazioni e di preferenze arbitrarie; obbligo di trattare situazioni uguali in modo uguale.",
          },
          {
            term: "Trasparenza",
            def: "Conoscibilità dell'azione amministrativa; si collega anche al D.Lgs. 33/2013.",
          },
        ],
        examTip:
          "Se chiedono i principi della L. 241, elenca tutti e cinque + UE. Non fermarti a «legalità» da sola.",
        refs: ["L. 241/1990, art. 1", "Cost., art. 97"],
      },
      {
        id: "termine-art2",
        title: "Art. 2 — obbligo di conclusione e termine",
        lead:
          "Il procedimento deve concludersi con un provvedimento espresso; in mancanza di termini speciali vale, di regola, il termine di 30 giorni.",
        body: [
          "L'art. 2 impone alla pubblica amministrazione di concludere i procedimenti con un provvedimento espresso. Il silenzio non è la regola ordinaria: il cittadino ha diritto a una decisione. La norma fissa anche i termini: se una disposizione speciale non prevede diversamente, il termine generale è di trenta giorni.",
          "Per i procedimenti di competenza statale possono valere termini diversi previsti da regolamenti o da leggi di settore; le amministrazioni possono individuarli nei limiti di legge. Il mancato rispetto del termine può far sorgere responsabilità e, nei casi previsti, rimedi contro il silenzio.",
          "In prova: distinzione tra termine del procedimento e termini interni di fase; ricorda che la comunicazione di avvio deve indicare la data entro cui il procedimento dovrebbe concludersi. Per le Camere di commercio molti procedimenti (Registro imprese, pratiche SUAP, ecc.) hanno tempistiche di settore: cita sempre la regola generale 241 e poi l'eventuale disciplina speciale.",
        ],
        terms: [
          {
            term: "Provvedimento espresso",
            def: "Atto scritto (anche digitale) che manifesta la decisione dell'amministrazione.",
          },
        ],
        examTip:
          "Quiz tipico: termine generale = 30 giorni. Sintetica: obbligo di conclusione + conseguenze del ritardo in sintesi.",
        refs: ["L. 241/1990, art. 2"],
      },
      {
        id: "responsabile",
        title: "Artt. 4–6 — responsabile del procedimento",
        lead:
          "Ogni procedimento ha un responsabile che cura l'istruttoria, comunica con i privati e può adottare l'atto se competente, oppure proporlo all'organo decidente.",
        body: [
          "Gli artt. 4–6 della L. 241 organizzano l'individuazione del responsabile del procedimento. L'amministrazione deve assicurare la certezza del soggetto a cui rivolgersi: nome, ufficio, contatti. Il responsabile non è una figura simbolica: è il perno dell'istruttoria.",
          "Tra i compiti tipici (art. 6): valutare ammissibilità, legittimazione e presupposti; accertare d'ufficio i fatti; chiedere il ripristino di dichiarazioni o istanze incomplete; acquisire pareri e valutazioni tecniche; curare le comunicazioni; adottare il provvedimento finale se ne ha la competenza, oppure trasmettere gli atti all'organo competente per la decisione proponendo le risultanze istruttorie.",
          "In ambito camerale il responsabile può essere un funzionario dell'area amministrativa o del Registro imprese, a seconda del procedimento. In risposta d'esame evita di confonderlo con il dirigente politico o con il solo protocollo: è figura di garanzia procedimentale.",
        ],
        terms: [
          {
            term: "Istruttoria",
            def: "Fase in cui si acquisiscono fatti, documenti, pareri e si prepara la decisione.",
          },
        ],
        examTip:
          "Elenca 4–5 poteri/doveri dell'art. 6. Distingui «adotta» (se competente) e «propone» (se decide altro organo).",
        refs: ["L. 241/1990, artt. 4–6"],
      },
      {
        id: "partecipazione",
        title: "Artt. 7–10 — avvio e partecipazione",
        lead:
          "La comunicazione di avvio informa gli interessati; la partecipazione consente visione degli atti e deposito di memorie e documenti.",
        body: [
          "Salvi i casi di esclusione previsti dalla legge, l'amministrazione comunica l'avvio del procedimento ai soggetti nei confronti dei quali il provvedimento finale è destinato a produrre effetti diretti e a quelli che per legge devono intervenirvi. L'art. 8 indica i contenuti minimi: amministrazione competente, oggetto, ufficio e responsabile, data di conclusione, modalità per prendere visione degli atti.",
          "Gli artt. 9–10 regolano l'intervento e i diritti partecipativi: chi ha un interesse può intervenire; gli intervenuti possono prendere visione degli atti del procedimento e presentare memorie scritte e documenti, che l'amministrazione deve valutare ove pertinenti e non manifestamente inammissibili.",
          "Differenza utile in prova: la comunicazione di avvio apre il contraddittorio generico; il preavviso di rigetto (10-bis) è un contraddittorio mirato sui motivi di diniego. Non confondere i due istituti.",
        ],
        terms: [
          {
            term: "Comunicazione di avvio",
            def: "Atto con cui l'ente informa dell'apertura del procedimento e dei dati essenziali (artt. 7–8).",
          },
        ],
        examTip:
          "Contenuti art. 8 a memoria. Poi: partecipazione = visione atti + memorie (art. 10).",
        refs: ["L. 241/1990, artt. 7–10"],
      },
      {
        id: "preavviso-rigetto",
        title: "Art. 10-bis — preavviso di rigetto",
        lead:
          "Prima di un provvedimento negativo su istanza, l'amministrazione comunica i motivi ostativi e assegna almeno dieci giorni per osservazioni.",
        body: [
          "Nei procedimenti ad istanza di parte, l'art. 10-bis impone che, prima della formale adozione di un provvedimento negativo, siano comunicati tempestivamente all'istante i motivi che ostano all'accoglimento. L'interessato può presentare per iscritto le proprie osservazioni, eventualmente corredate da documenti, entro un termine non inferiore a dieci giorni.",
          "Non è una mera cortesia: è garanzia di contraddittorio e di buona istruttoria. Se emergono nuove ragioni di diniego, il ciclo comunicativo va rispettato. La norma non si applica in alcuni casi (es. procedimenti concorsuali e rischi per lo svolgimento), ma la regola generale è chiara.",
          "In sintetica confronta avvio (art. 7) e 10-bis: destinatari, momento, contenuto (motivi ostativi), termine (≥ 10 giorni), effetto sul provvedimento. È traccia tipica nei concorsi camerali.",
        ],
        terms: [
          {
            term: "Motivi ostativi",
            def: "Ragioni di fatto o di diritto che, allo stato dell'istruttoria, impedirebbero l'accoglimento dell'istanza.",
          },
        ],
        examTip:
          "Ricorda: ≥ 10 giorni; solo prima del diniego su istanza; diverso dalla comunicazione di avvio.",
        refs: ["L. 241/1990, art. 10-bis"],
      },
      {
        id: "motivazione",
        title: "Art. 3 — dovere di motivazione",
        lead:
          "Ogni provvedimento deve indicare i presupposti di fatto e le ragioni giuridiche, salvo atti normativi e a contenuto generale.",
        body: [
          "L'art. 3 L. 241 impone la motivazione dei provvedimenti amministrativi, anche di quelli su organizzazione, concorsi e personale. La motivazione rende espliciti i presupposti di fatto e le ragioni giuridiche della decisione in relazione alle risultanze dell'istruttoria.",
          "Sono esclusi gli atti normativi e quelli a contenuto generale. È ammessa la motivazione per relationem, purché il documento richiamato sia chiaramente identificato e messo a disposizione dell'interessato. L'omessa o insufficiente motivazione è tipicamente vizio di legittimità (annullabilità), non nullità, salve le ipotesi estreme.",
          "Funzioni della motivazione: controllo di legittimità, tutela del contraddittorio, autotutela consapevole, trasparenza. In una Camera di commercio rileva nella gestione di dinieghi, sanzioni, provvedimenti su Registro imprese e atti di organizzazione.",
        ],
        terms: [
          {
            term: "Motivazione per relationem",
            def: "Motivazione che rinvia a un altro atto o documento, purché individuato e accessibile.",
          },
        ],
        examTip:
          "Traccia classica Trento 2021: dovere di motivazione. Schema: obbligo → contenuto → esclusioni → per relationem → funzioni.",
        refs: ["L. 241/1990, art. 3"],
      },
      {
        id: "semplificazioni",
        title: "Conferenza di servizi, SCIA e silenzio-assenso",
        lead:
          "Strumenti di semplificazione: coordinamento tra amministrazioni (conferenza), inizio attività su segnalazione (SCIA), accoglimento tacito nei casi di legge (silenzio-assenso).",
        body: [
          "La conferenza di servizi (artt. 14 ss.) consente di acquisire in modo contestuale intese, concerti, nulla osta o assensi di più amministrazioni, evitando il «giro» sequenziale dei pareri. È tipica nei procedimenti complessi (anche urbanistico-edilizi o di sportello unico).",
          "La SCIA (art. 19) permette, nei casi previsti, di iniziare l'attività dalla data di presentazione della segnalazione certificata, salvi i poteri di verifica e di inibizione dell'amministrazione entro i termini di legge. Non è un'autorizzazione preventiva classica.",
          "Il silenzio-assenso (art. 20) opera solo dove la legge lo contempla: decorso inutilmente il termine del procedimento, la domanda si considera accolta. Non è generale e non esclude controlli successivi nei limiti di legge. In prova non confondere silenzio-assenso, silenzio-diniego e silenzio-inadempimento.",
        ],
        terms: [
          {
            term: "SCIA",
            def: "Segnalazione Certificata di Inizio Attività: l'attività può partire con la presentazione, salvi poteri di controllo.",
          },
          {
            term: "Silenzio-assenso",
            def: "Accoglimento tacito dell'istanza per decorso del termine, nei casi previsti.",
          },
        ],
        examTip:
          "Per ciascuno: presupposti + effetto. SCIA ≠ autorizzazione espressa; silenzio-assenso ≠ regola per tutti i procedimenti.",
        refs: ["L. 241/1990, artt. 14 ss., 19, 20"],
      },
      {
        id: "patologia",
        title: "Nullità, annullabilità, annullamento d'ufficio",
        lead:
          "Nullità per vizi radicali (21-septies); annullabilità per illegittimità (21-octies); annullamento d'ufficio in autotutela (21-nonies).",
        body: [
          "L'art. 21-septies disciplina la nullità: provvedimento che manca degli elementi essenziali, viziato da difetto assoluto di attribuzione, adottato in violazione o elusione del giudicato, o in altri casi previsti dalla legge. L'atto nullo è radicalmente inefficace.",
          "L'annullabilità (art. 21-octies) riguarda i vizi di legittimità (violazione di legge, eccesso di potere, incompetenza relativa). L'atto produce effetti finché non è annullato; l'impugnazione ha termini decadenziali. La norma tempera l'annullamento quando il contenuto non avrebbe potuto essere diverso (salvo vizi di forma/procedura non essenziali in certi casi).",
          "L'annullamento d'ufficio (art. 21-nonies) è autotutela: richiede illegittimità, interesse pubblico attuale e rispetto dei termini/condizioni di legge, con valutazione anche dell'interesse del destinatario. Traccia tipica: distinguere nullità vs annullabilità con esempi.",
        ],
        terms: [
          {
            term: "Difetto assoluto di attribuzione",
            def: "Atto adottato da un soggetto radicalmente privo del potere (non mera incompetenza relativa).",
          },
          {
            term: "Autotutela",
            def: "Potere della PA di rivivere i propri atti (annullamento, revoca, ecc.) nei limiti di legge.",
          },
        ],
        examTip:
          "Tabella mentale: nullità = radicale; annullabilità = illegittimità impugnabile; 21-nonies = d'ufficio con interesse pubblico.",
        refs: ["L. 241/1990, artt. 21-septies, 21-octies, 21-nonies"],
      },
      {
        id: "accesso-documentale",
        title: "Artt. 22 ss. — accesso documentale",
        lead:
          "Chi ha un interesse diretto, concreto e attuale collegato a una situazione giuridicamente tutelata può accedere ai documenti amministrativi.",
        body: [
          "L'accesso documentale della L. 241 è diverso dall'accesso civico del D.Lgs. 33/2013. Qui serve un interesse qualificato: diretto, concreto e attuale, corrispondente a una situazione giuridicamente tutelata e collegata al documento di cui si chiede l'ostensione.",
          "Esistono esclusi e limitazioni (segreto di Stato, ordine pubblico, privacy di terzi in certi casi, ecc.). Il diniego, espresso o tacito, è impugnabile. L'accesso può essere formale o informale secondo le prassi, ma i presupposti sostanziali restano quelli di legge.",
          "In Camera di commercio l'accesso può riguardare fascicoli di pratiche, atti del Registro (nel rispetto della disciplina pubblicitaria), provvedimenti interni. In prova: se la domanda parla di interesse al documento → 241; se parla di chiunque/controllo diffuso → D.Lgs. 33.",
        ],
        terms: [
          {
            term: "Interesse diretto, concreto e attuale",
            def: "Requisito tipico dell'accesso documentale L. 241; non basta la mera curiosità.",
          },
        ],
        examTip:
          "Non confondere con FOIA. Schema: legittimazione → documento → limiti → rimedi contro il diniego.",
        refs: ["L. 241/1990, artt. 22 ss."],
      },
    ],
  },
  {
    id: "t-adm-33",
    subject: "amministrativo",
    title: "D.Lgs. 33/2013 — trasparenza e accessi",
    summary:
      "Trasparenza come accessibilità totale; tre porte di accesso diverse da non confondere.",
    remember:
      "Se la domanda parla di «chiunque» senza interesse: pensa FOIA. Se parla di interesse al documento: L. 241.",
    points: [
      {
        id: "nozione-trasparenza",
        title: "Trasparenza come accessibilità totale",
        lead:
          "La trasparenza è l'accessibilità totale dei dati e documenti detenuti dalle PA per favorire il controllo diffuso su funzioni e risorse.",
        body: [
          "Il D.Lgs. 14 marzo 2013, n. 33 definisce la trasparenza come accessibilità totale delle informazioni concernenti l'organizzazione e l'attività delle pubbliche amministrazioni, allo scopo di favorire forme diffuse di controllo sul perseguimento delle funzioni istituzionali e sull'utilizzo delle risorse pubbliche.",
          "Non si riduce alla pubblicazione di qualche atto in albo: è un sistema di obblighi di pubblicazione, di qualità dei dati e di diritti di accesso. Si collega ai principi di buon andamento e imparzialità e alla prevenzione della corruzione.",
          "Per l'ente camerale la sezione «Amministrazione trasparente» del sito è lo strumento tipico di adempimento. In prova, parti dalla definizione e poi scendi sugli istituti (pubblicazione, accesso civico).",
        ],
        terms: [
          {
            term: "Controllo diffuso",
            def: "Controllo esercitabile dalla collettività grazie alla conoscibilità dei dati pubblici.",
          },
        ],
        examTip:
          "Apri sempre con la definizione del D.Lgs. 33, poi distingue pubblicazione obbligatoria e accessi.",
        refs: ["D.Lgs. 33/2013, art. 1"],
      },
      {
        id: "accesso-241",
        title: "Accesso documentale (L. 241)",
        lead:
          "Resta lo strumento per chi ha un interesse qualificato a un documento specifico del procedimento o dell'archivio.",
        body: [
          "Anche dopo il D.Lgs. 33, l'accesso documentale della L. 241 continua a vivere. Serve quando il privato deve conoscere atti che riguardano una sua posizione giuridica (es. difesa in un procedimento, tutela di un interesse legittimo).",
          "Requisito chiave: interesse diretto, concreto e attuale. Non è lo strumento del «cittadino vigilante» generico: per quello c'è l'accesso civico.",
          "In una risposta comparativa costruisci una tabella a tre colonne: legittimazione, scopo, limiti. È il modo più chiaro per prendere punti in sintetica.",
        ],
        examTip:
          "Usa L. 241 quando la traccia parla di fascicolo, controinteressati, interesse personale al documento.",
        refs: ["L. 241/1990, artt. 22 ss.", "D.Lgs. 33/2013"],
      },
      {
        id: "accesso-semplice",
        title: "Accesso civico semplice",
        lead:
          "Serve a ottenere la pubblicazione di dati o documenti che l'amministrazione aveva l'obbligo di pubblicare e ha omesso.",
        body: [
          "L'accesso civico «semplice» (art. 5, comma 1, D.Lgs. 33/2013) è lo strumento per far rispettare gli obblighi di pubblicazione. Chiunque può richiedere documenti, informazioni o dati oggetto di pubblicazione obbligatoria quando l'amministrazione ne abbia omesso la pubblicazione.",
          "Non richiede interesse qualificato. L'effetto tipico non è tanto «vedere un fascicolo riservato», quanto ripristinare la trasparenza mancante sul sito.",
          "Esempio camerale: mancata pubblicazione di dati dovuti in Amministrazione trasparente (organi, bilanci nei limiti di legge, incarichi, ecc.).",
        ],
        terms: [
          {
            term: "Obbligo di pubblicazione",
            def: "Dovere di mettere online, nella sezione trasparenza, specifiche categorie di dati previste dal D.Lgs. 33.",
          },
        ],
        examTip:
          "Parola chiave: «doveva già essere pubblicato». Se non c'è obbligo di pubblicazione, non è accesso semplice.",
        refs: ["D.Lgs. 33/2013, art. 5 c. 1"],
      },
      {
        id: "foia",
        title: "Accesso civico generalizzato (FOIA)",
        lead:
          "Chiunque può chiedere dati e documenti ulteriori rispetto a quelli oggetto di pubblicazione obbligatoria, salvi i limiti di tutela di interessi pubblici e privati.",
        body: [
          "L'accesso civico generalizzato (art. 5, comma 2) è il FOIA italiano: indipendenza da un interesse qualificato, finalità di controllo diffuso. L'amministrazione deve consentire l'accesso salvo i limiti dell'art. 5-bis (sicurezza, difesa, politica monetaria, stabilità finanziaria, conduzione di indagini, segreto, privacy, interessi economici e commerciali, ecc.).",
          "Il bilanciamento tra trasparenza e riservatezza è il cuore applicativo. Possono esserci controinteressati da notificare. Il diniego va motivato con riferimento ai limiti di legge.",
          "In prova: non dire che il FOIA «cancella» l'accesso 241. Coesistono con presupposti diversi.",
        ],
        terms: [
          {
            term: "FOIA",
            def: "Freedom of Information Act: accesso generalizzato del D.Lgs. 33/2013, art. 5 c. 2.",
          },
        ],
        examTip:
          "Chiunque + limiti 5-bis. Confronta sempre con accesso documentale e accesso semplice.",
        refs: ["D.Lgs. 33/2013, artt. 5 e 5-bis"],
      },
      {
        id: "amm-trasparente",
        title: "Obblighi di pubblicazione — Amministrazione trasparente",
        lead:
          "Le PA devono pubblicare in modo organizzato, aggiornato e di qualità i dati previsti dal decreto nella sezione Amministrazione trasparente.",
        body: [
          "Il D.Lgs. 33 prevede una serie articolata di obblighi di pubblicazione (organizzazione, consulenti, bandi, bilanci, performance, ecc., nei limiti e con le modalità aggiornate dalla normativa). I dati devono essere di qualità: completi, aggiornati, di facile consultazione.",
          "La violazione degli obblighi può rilevare anche ai fini della responsabilità dirigenziale e del sistema anticorruzione. L'accesso civico semplice è il rimedio del cittadino quando manca la pubblicazione.",
          "Per la CCIAA: conoscere l'esistenza della sezione e la logica degli obblighi conta più dell'elenco mnemonico di tutte le sotto-sezioni.",
        ],
        examTip:
          "Collega pubblicazione obbligatoria ↔ accesso civico semplice. Cita «qualità dei dati» e aggiornamento.",
        refs: ["D.Lgs. 33/2013"],
      },
    ],
  },
  {
    id: "t-adm-gdpr",
    subject: "amministrativo",
    title: "GDPR — cosa serve in prova",
    summary:
      "Non serve tutto il regolamento: principi, basi giuridiche, ruoli e diritti dell'interessato.",
    remember:
      "Collega sempre trattamento → base giuridica → minimizzazione. Evita elenchi vuoti senza esempio PA.",
    points: [
      {
        id: "principi-art5",
        title: "Art. 5 — principi del trattamento",
        lead:
          "Liceità, correttezza, trasparenza, limitazione della finalità, minimizzazione, esattezza, limitazione della conservazione, integrità, riservatezza e accountability.",
        body: [
          "L'art. 5 del Regolamento (UE) 2016/679 (GDPR) è la bussola del trattamento. Ogni operazione su dati personali deve essere lecita, corretta e trasparente; raccolta per finalità determinate; limitata a quanto necessario (minimizzazione); esatta e aggiornata; conservata solo per il tempo necessario; protetta con misure adeguate.",
          "L'accountability impone al titolare di rispettare i principi e di essere in grado di dimostrarlo (policy, registri, DPIA ove dovuta, formazione, misure tecniche e organizzative).",
          "Esempio camerale: gestione anagrafiche del Registro imprese, pratiche SUAP, mailing istituzionali: raccogli solo i dati necessari, indica la finalità, definisci i tempi di conservazione.",
        ],
        terms: [
          {
            term: "Minimizzazione",
            def: "Trattare solo i dati adeguati, pertinenti e limitati a quanto necessario rispetto alle finalità.",
          },
          {
            term: "Accountability",
            def: "Responsabilizzazione: rispettare il GDPR e poter dimostrare la conformità.",
          },
        ],
        examTip:
          "Non elencare i principi a caso: aggiungi una riga di esempio PA per almeno tre di essi.",
        refs: ["Reg. UE 679/2016, art. 5"],
      },
      {
        id: "basi-giuridiche",
        title: "Art. 6 — basi giuridiche",
        lead:
          "Per le PA tipicamente rilevano obbligo legale ed esecuzione di un compito di interesse pubblico / esercizio di pubblici poteri; il consenso non è la base ordinaria.",
        body: [
          "Il trattamento è lecito solo se ricorre almeno una base dell'art. 6: consenso, contratto, obbligo legale, interessi vitali, interesse pubblico/pubblici poteri, interesse legittimo (con limiti per le autorità pubbliche nell'esercizio dei loro compiti).",
          "Nella pubblica amministrazione il consenso è spesso inappropriato (squilibrio tra ente e cittadino). Si ragiona su obbligo di legge o su compiti di interesse pubblico previsti dal diritto dell'Unione o dello Stato membro.",
          "In prova: individua la base prima di parlare di diritti o di misure di sicurezza. Senza base, il trattamento non regge.",
        ],
        examTip:
          "Domanda tipica PA: non rispondere «sempre il consenso». Spiega obbligo legale / interesse pubblico.",
        refs: ["Reg. UE 679/2016, art. 6"],
      },
      {
        id: "ruoli",
        title: "Titolare, responsabile, DPO",
        lead:
          "Il titolare decide finalità e mezzi; il responsabile tratta per conto del titolare; il DPO è figura di consulenza e controllo, distinta dai primi due.",
        body: [
          "Il titolare del trattamento determina le finalità e i mezzi. Nelle PA è di regola l'ente (Camera di commercio), che opera tramite strutture e personale autorizzato.",
          "Il responsabile (processor) tratta dati per conto del titolare sulla base di un contratto o atto giuridico che disciplina oggetto, durata, natura, misure di sicurezza e divieto di sub-responsabili non autorizzati.",
          "Il DPO (Data Protection Officer / RPD) supporta, sorveglia e collabora con il Garante; non «è» il titolare e non sostituisce le decisioni di merito dell'ente. Confondere DPO e titolare è errore frequente nei quiz.",
        ],
        terms: [
          {
            term: "Titolare",
            def: "Chi determina finalità e mezzi del trattamento (art. 4 n. 7 GDPR).",
          },
          {
            term: "DPO / RPD",
            def: "Responsabile della protezione dei dati: consulenza, sorveglianza, punto di contatto con il Garante.",
          },
        ],
        examTip:
          "Triangolo chiaro: titolare decide · responsabile esegue su incarico · DPO consiglia/controlla.",
        refs: ["Reg. UE 679/2016, artt. 4, 28, 37 ss."],
      },
      {
        id: "diritti-interessato",
        title: "Diritti dell'interessato",
        lead:
          "Accesso, rettifica, cancellazione (nei limiti), limitazione, opposizione, portabilità: diritti da conoscere in sintesi, con i temperamenti tipici della PA.",
        body: [
          "L'interessato può ottenere conferma del trattamento e accesso ai propri dati (art. 15), chiederne la rettifica, la cancellazione («diritto all'oblio») quando ne ricorrano i presupposti, la limitazione, opporsi in certi casi, ottenere la portabilità ove applicabile.",
          "Nella PA molti trattamenti fondati su obbligo legale o interesse pubblico limitano cancellazione e opposizione: non si può «cancellare» un dato che l'ente deve conservare per legge (es. iscrizioni, atti pubblicitari). Va spiegato all'interessato.",
          "In prova: cita 4–5 diritti e precisa che non sono assoluti; collega alla base giuridica.",
        ],
        examTip:
          "Art. 15 = conferma + accesso. Non promettere cancellazione illimitata nei registri pubblici.",
        refs: ["Reg. UE 679/2016, artt. 15–22"],
      },
      {
        id: "data-breach",
        title: "Data breach — notifica e comunicazione",
        lead:
          "In caso di violazione dei dati personali: valutazione del rischio, notifica al Garante (di regola entro 72 ore) e, se rischio alto, comunicazione agli interessati.",
        body: [
          "La violazione di dati personali (data breach) è una violazione di sicurezza che comporta accidentalmente o in modo illecito distruzione, perdita, modifica, divulgazione non autorizzata o accesso ai dati.",
          "Il titolare, senza ingiustificato ritardo e ove possibile entro 72 ore dalla conoscenza, notifica al Garante salvo che sia improbabile il rischio per i diritti e le libertà. Se il rischio è elevato, comunica anche agli interessati, salvo eccezioni.",
          "Operativamente servono procedure interne, logging, escalation al DPO/RTD/IT security. In quiz conta la scansione: rilevazione → valutazione → notifica → eventuale comunicazione.",
        ],
        terms: [
          {
            term: "Data breach",
            def: "Violazione di sicurezza che compromette dati personali (riservatezza, integrità o disponibilità).",
          },
        ],
        examTip:
          "72 ore verso il Garante (regola); comunicazione agli interessati se rischio alto.",
        refs: ["Reg. UE 679/2016, artt. 33–34"],
      },
    ],
  },
  {
    id: "t-adm-445",
    subject: "amministrativo",
    title: "D.P.R. 445/2000 — autocertificazioni",
    summary:
      "Strumento quotidiano del lavoro amministrativo e delle domande di concorso.",
    remember:
      "Schema risposta: cosa si può dichiarare → come → controlli → conseguenze del falso.",
    points: [
      {
        id: "art46",
        title: "Art. 46 — dichiarazioni sostitutive di certificazione",
        lead:
          "Consentono di sostituire certificati relativi a stati, qualità personali e fatti tipizzati (nascita, residenza, titoli di studio, ecc.).",
        body: [
          "L'art. 46 del D.P.R. 28 dicembre 2000, n. 445 elenca i casi in cui è ammessa la dichiarazione sostitutiva di certificazione. Il cittadino dichiara in autonomia dati che altrimenti richiederebbero un certificato dell'amministrazione competente.",
          "È uno strumento di semplificazione nei rapporti con la PA e i gestori di pubblici servizi. Nelle domande di concorso (come quella B3) è lo strumento tipico per dichiarare titoli, requisiti, preferenze.",
          "Attenzione al perimetro: non tutto è certificabile con art. 46; per fatti a diretta conoscenza diversi si usa spesso l'art. 47.",
        ],
        terms: [
          {
            term: "Dichiarazione sostitutiva di certificazione",
            def: "Dichiarazione che sostituisce i certificati per gli stati/fatti dell'art. 46.",
          },
        ],
        examTip:
          "Esempi tipici: residenza, titolo di studio, assenza di condanne (nei limiti). Collega al bando di concorso.",
        refs: ["D.P.R. 445/2000, art. 46"],
      },
      {
        id: "art47",
        title: "Art. 47 — dichiarazioni sostitutive di atto di notorietà",
        lead:
          "Concernono stati, qualità personali o fatti a diretta conoscenza del dichiarante che non rientrano nell'art. 46, nei rapporti con la PA.",
        body: [
          "L'art. 47 consente dichiarazioni sostitutive di atto di notorietà relative a fatti, stati o qualità personali a diretta conoscenza dell'interessato. È più flessibile dell'art. 46, ma non è un «liberi tutti»: restano limiti di legge e di veridicità.",
          "Nei rapporti tra privati l'utilizzo ha regole diverse e spesso richiede autentica; nei rapporti con la PA la semplificazione è più ampia.",
          "In prova distingue nettamente 46 (certificati tipizzati) e 47 (atto di notorietà / fatti a conoscenza).",
        ],
        examTip:
          "Se il fatto non è in elenco art. 46 ma è a tua conoscenza → ragiona su art. 47.",
        refs: ["D.P.R. 445/2000, art. 47"],
      },
      {
        id: "controlli",
        title: "Art. 71 — controlli",
        lead:
          "Le amministrazioni controllano la veridicità anche a campione e ogni volta che sorge un fondato dubbio.",
        body: [
          "L'art. 71 prevede controlli sulle dichiarazioni sostitutive. Non è un adempimento facoltativo di cortesia: è parte del sistema di affidamento sull'autocertificazione.",
          "I controlli possono essere a più ampio spettro o mirati. Se emergono irregolarità, scattano le conseguenze degli artt. 75 e 76.",
          "Per l'operatore camerale: acquisire dichiarazioni ≠ rinunciare a verificare quando il procedimento lo richiede o quando i dati non tornano.",
        ],
        examTip:
          "Autocertificazione + controlli: le due cose stanno insieme, non in alternativa.",
        refs: ["D.P.R. 445/2000, art. 71"],
      },
      {
        id: "decadenza",
        title: "Art. 75 — decadenza dai benefici",
        lead:
          "Se dal controllo emerge la non veridicità del contenuto della dichiarazione, il dichiarante decade dai benefici conseguiti.",
        body: [
          "L'art. 75 collega il falso dichiarativo alla perdita dei benefici ottenuti grazie alla dichiarazione mendace. È conseguenza amministrativa autonoma rispetto al profilo penale.",
          "Esempio: ammissione a un concorso o attribuzione di un punteggio/preferenza sulla base di un titolo inesistente → decadenza.",
          "In risposta completa cita sempre 75 + 76: decadenza e responsabilità penale.",
        ],
        examTip:
          "Non dimenticare la decadenza: non è «solo» un problema penale.",
        refs: ["D.P.R. 445/2000, art. 75"],
      },
      {
        id: "penale",
        title: "Art. 76 — responsabilità penale",
        lead:
          "Chi rilascia dichiarazioni mendaci, forma atti falsi o ne fa uso è punito ai sensi del codice penale e delle disposizioni speciali richiamate.",
        body: [
          "L'art. 76 richiama le sanzioni penali per falsità nelle dichiarazioni sostitutive e per l'uso di atti falsi. È il contrappeso della semplificazione: meno certificati, più responsabilità personale del dichiarante.",
          "La consapevolezza di queste conseguenze è anche un contenuto tipico delle informative nelle domande di partecipazione ai concorsi.",
          "In prova: tono sobrio, cita art. 76 e il collegamento con art. 75; evita dettagli di pena non richiesti se non li ricordi con certezza.",
        ],
        examTip:
          "Schema chiuso: art. 46/47 (cosa) → 71 (controlli) → 75 (decadenza) → 76 (penale).",
        refs: ["D.P.R. 445/2000, art. 76"],
      },
    ],
  },
];
