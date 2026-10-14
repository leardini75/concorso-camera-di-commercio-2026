import type { StudyTopic } from "./types";

export const COMMERCIALE_TOPICS: StudyTopic[] = [
  {
    id: "t-com-2082",
    subject: "commerciale",
    title: "Imprenditore, impresa, azienda",
    summary:
      "Tre nozioni da non confondere: soggetto, attività, beni organizzati.",
    remember:
      "Inizi sempre dalla definizione 2082 e poi qualifiche (piccolo / commerciale) con effetti.",
    points: [
      {
        id: "imprenditore-2082",
        title: "Imprenditore ex art. 2082 c.c.",
        lead:
          "È imprenditore chi esercita professionalmente un'attività economica organizzata al fine della produzione o dello scambio di beni o di servizi.",
        body: [
          "L'art. 2082 c.c. fissa gli elementi tipici: professionalità (abitualità, non occasionalità), attività economica, organizzazione di beni e lavoro, finalità di produzione o di scambio. Non conta il titolo di studio né la sola volontà di «fare impresa» senza organizzazione.",
          "La qualifica di imprenditore è il punto di partenza per obblighi pubblicitari, contabili e concorsuali. In una Camera di commercio è la nozione che sostiene iscrizioni, modificazioni e cancellazioni nel Registro delle imprese.",
          "Traccia tipica Trento 2021: «elementi caratterizzanti il concetto di imprenditore ai sensi dell'art. 2082». Rispondi elencando gli elementi e poi distinguendo impresa e azienda.",
        ],
        terms: [
          {
            term: "Professionalità",
            def: "Esercizio abituale e non occasionale dell'attività economica.",
          },
          {
            term: "Organizzazione",
            def: "Combinazione di beni e lavoro strumentale all'attività produttiva o di scambio.",
          },
        ],
        examTip:
          "Elenca i 4 elementi 2082 e aggiungi un esempio (negozio, artigiano, srl operativa).",
        refs: ["Codice civile, art. 2082"],
      },
      {
        id: "impresa-azienda",
        title: "Impresa e azienda (art. 2555)",
        lead:
          "Impresa è l'attività; azienda è il complesso dei beni organizzati dall'imprenditore per esercitarla.",
        body: [
          "Confondere impresa e azienda è errore classico. L'impresa è l'attività economica organizzata; l'azienda (art. 2555 c.c.) è il complesso di beni organizzati dall'imprenditore per l'esercizio dell'impresa (locali, macchinari, scorte, avviamento, ecc.).",
          "L'imprenditore è il soggetto; l'impresa l'attività; l'azienda lo strumento patrimoniale organizzato. Su questi tre livelli si innestano contratti di trasferimento d'azienda, affitto d'azienda, segnalazioni al Registro.",
          "In sintetica apri con la distinzione in una frase e poi sviluppa un esempio concreto.",
        ],
        terms: [
          {
            term: "Azienda",
            def: "Complesso dei beni organizzati dall'imprenditore per l'esercizio dell'impresa (art. 2555 c.c.).",
          },
        ],
        examTip:
          "Frase da stampare in mente: imprenditore = chi · impresa = attività · azienda = beni organizzati.",
        refs: ["Codice civile, artt. 2082 e 2555"],
      },
      {
        id: "piccolo-imprenditore",
        title: "Piccolo imprenditore (art. 2083)",
        lead:
          "Coltivatori diretti, artigiani, piccoli commercianti e chi esercita un'attività organizzata prevalentemente con il lavoro proprio e dei familiari.",
        body: [
          "L'art. 2083 descrive il piccolo imprenditore. La prevalenza del lavoro proprio (e familiare) è il tratto distintivo rispetto all'impresa capitalistica organizzata prevalentemente con lavoro altrui e capitali.",
          "La qualifica rileva per semplificazioni e per il regime concorsuale attenuato rispetto all'imprenditore commerciale «pieno». Non elimina però, in molti casi, obblighi di iscrizione o di comunicazione al sistema camerale secondo le norme di settore.",
          "Esempio: l'artigiano tipico è piccolo imprenditore; una S.r.l. strutturata con molti dipendenti non lo è solo perché «piccola di fatturato».",
        ],
        examTip:
          "Cita le categorie 2083 e il criterio del lavoro prevalente proprio/familiare.",
        refs: ["Codice civile, art. 2083"],
      },
      {
        id: "imprenditore-commerciale",
        title: "Imprenditore commerciale — effetti",
        lead:
          "Lo status comporta, di regola, iscrizione nel Registro delle imprese, scritture contabili e assoggettabilità alle procedure concorsuali, salve le eccezioni di legge.",
        body: [
          "L'imprenditore commerciale (artt. 2195 ss. e disciplina correlata) è al centro del diritto commerciale. Gli obblighi tipici includono la pubblicità legale tramite Registro imprese e la tenuta delle scritture contabili, oltre al regime delle crisi d'impresa secondo le norme vigenti.",
          "La distinzione tra imprenditore civile/agricolo e commerciale, e tra piccolo e non piccolo, serve a calibrare gli effetti. In sede camerale è quotidiana: chi iscrivere, con quale codice attività, quali adempimenti successivi.",
          "In prova: dopo la definizione 2082, spiega perché «commerciale» cambia gli obblighi.",
        ],
        examTip:
          "Collega commerciale → Registro + contabilità + concorso. Ricorda le eccezioni/semplificazioni del piccolo.",
        refs: ["Codice civile, artt. 2195 ss."],
      },
    ],
  },
  {
    id: "t-com-societa",
    subject: "commerciale",
    title: "Società di persone e di capitali",
    summary: "Tabella mentale per quiz e risposte sintetiche.",
    remember: "Per ogni tipo: chi risponde? Chi amministra? Quale pubblicità?",
    points: [
      {
        id: "persone",
        title: "Società di persone (S.s., S.n.c., S.a.s.)",
        lead:
          "Nelle società di persone rileva la persona del socio: responsabilità spesso illimitata (con temperamenti) e autonomia patrimoniale imperfetta.",
        body: [
          "La società semplice può avere solo oggetto non commerciale (tipicamente agricolo). Nella S.n.c. tutti i soci rispondono solidalmente e illimitatamente. Nella S.a.s. coesistono accomandatari (illimitati, amministratori) e accomandanti (limitati, con divieto di immistione).",
          "L'autonomia patrimoniale è imperfetta: i creditori sociali, in via di regola e con le modalità di legge, possono rivalersi anche sui soci illimitatamente responsabili.",
          "In quiz, memorizza per ciascuna: responsabilità + amministrazione + oggetto ammesso (per la S.s.).",
        ],
        terms: [
          {
            term: "Responsabilità illimitata e solidale",
            def: "Il socio risponde con tutto il patrimonio e insieme agli altri per le obbligazioni sociali.",
          },
        ],
        examTip:
          "Mini-tabella S.s. / S.n.c. / S.a.s. in tre righe: oggetto, responsabilità, chi amministra.",
        refs: ["Codice civile, libri V, società di persone"],
      },
      {
        id: "capitali",
        title: "Società di capitali (S.p.A., S.a.p.A., S.r.l.)",
        lead:
          "Per le obbligazioni sociali risponde tipicamente solo la società; i soci rischiano quanto conferito. Capitale minimo: S.p.A. 50.000; S.r.l. 10.000.",
        body: [
          "S.p.A., S.a.p.A. e S.r.l. sono società di capitali con personalità giuridica e autonomia patrimoniale perfetta. La partecipazione è azionaria nelle S.p.A./S.a.p.A. e in quote nella S.r.l.",
          "Capitale minimo ordinario: 50.000 euro per la S.p.A.; 10.000 euro per la S.r.l. (con possibilità di capitale inferiore a condizioni di legge e regole rafforzate sui conferimenti).",
          "L'iscrizione nel Registro delle imprese ha efficacia costitutiva della personalità giuridica. È punto fisso in quiz e sintetiche.",
        ],
        examTip:
          "Numeri da ricordare: 50.000 (S.p.A.) e 10.000 (S.r.l.). Poi: autonomia patrimoniale perfetta.",
        refs: ["Codice civile, artt. 2325 ss., 2462 ss."],
      },
      {
        id: "srl-uni",
        title: "S.r.l. unipersonale",
        lead:
          "Ammessa; la responsabilità limitata del socio unico dipende dal rispetto di pubblicità e conferimenti.",
        body: [
          "La S.r.l. può nascere o diventare unipersonale. Il socio unico, se adempie agli obblighi di pubblicità e di conferimento previsti, beneficia della responsabilità limitata: per le obbligazioni sociali risponde la società.",
          "Se gli adempimenti mancano, può scattare la responsabilità illimitata del socio unico per le obbligazioni sorte nel periodo di unipersonalità. È tema già uscito a Trento nel 2021.",
          "In risposta: costituzione → iscrizione → indicazioni negli atti → conferimenti → rischio di responsabilità illimitata.",
        ],
        examTip:
          "Non dire «il socio unico non risponde mai». Condiziona la limitazione agli adempimenti.",
        refs: ["Codice civile, disciplina S.r.l. unipersonale"],
      },
      {
        id: "iscrizione-costitutiva",
        title: "Iscrizione nel Registro — efficacia costitutiva",
        lead:
          "Con l'iscrizione nel Registro delle imprese le società di capitali acquistano la personalità giuridica.",
        body: [
          "Per le società di capitali l'iscrizione dell'atto costitutivo non è un adempimento statistico: è il momento costitutivo della personalità giuridica. Prima dell'iscrizione il regime dei rapporti è peculiare e più rischioso per chi agisce.",
          "Da qui l'importanza del controllo di legittimità formale del Conservatore e della completezza della pratica presentata alla CCIAA.",
          "Collega sempre questo punto alla differenza con il REA, che non ha la stessa efficacia costitutiva.",
        ],
        examTip:
          "Frase chiave: iscrizione = personalità giuridica (società di capitali).",
        refs: ["Codice civile", "L. 580/1993"],
      },
      {
        id: "cooperativa",
        title: "Società cooperativa — scopo mutualistico",
        lead:
          "La cooperativa si caratterizza per lo scopo mutualistico: fornire beni, servizi o occasioni di lavoro ai soci a condizioni più vantaggiose.",
        body: [
          "A differenza delle società lucrative «pure», la cooperativa ha scopo mutualistico (art. 2511 c.c.). Può avere discipline pubblicitarie e organizzative specifiche, ma resta un tipo societario con regole proprie su soci, quote/azioni e devoluzione.",
          "In quiz, se chiedono l'elemento tipico: non rispondere «il lucro» ma «la mutualità».",
          "Può comparire in tracce generali sulle società; basta una definizione corretta e un tratto distintivo.",
        ],
        examTip:
          "Parola d'ordine: mutualità. Confronta in una riga con S.r.l./S.p.A. lucrative.",
        refs: ["Codice civile, art. 2511 ss."],
      },
    ],
  },
  {
    id: "t-com-registro",
    subject: "commerciale",
    title: "Registro imprese e REA",
    summary: "Materia tipicamente camerale: conoscerla bene fa la differenza.",
    remember:
      "Se chiedono «differenza Registro/REA», centra pubblicità legale vs informativa.",
    points: [
      {
        id: "registro",
        title: "Registro delle imprese — natura e soggetti",
        lead:
          "Pubblico registro tenuto dalle Camere di commercio, con Conservatore e vigilanza del giudice del Registro.",
        body: [
          "Il Registro delle imprese è istituito dalla L. 580/1993 e disciplinato dal codice civile. È tenuto presso le Camere di commercio. Il Conservatore cura la tenuta e la regolarità formale delle iscrizioni; il giudice del Registro esercita la vigilanza e decide sui ricorsi in materia di iscrizione.",
          "Vi si iscrivono imprese individuali e società, atti modificativi, cancellazioni, bilanci delle società di capitali e altri atti previsti dalla legge.",
          "Per un B3 camerale è materia «di mestiere»: conoscere ruoli e finalità conta quanto i dettagli societari.",
        ],
        terms: [
          {
            term: "Conservatore",
            def: "Figura presso la CCIAA che cura la tenuta del Registro e i controlli di legittimità formale sulle iscrizioni.",
          },
          {
            term: "Giudice del Registro",
            def: "Organo giudiziario di vigilanza sulle funzioni del Registro imprese.",
          },
        ],
        examTip:
          "Traccia 2021 «Il Registro delle imprese»: natura, Commissione/Camera, Conservatore, pubblicità, soggetti obbligati.",
        refs: ["L. 580/1993", "Codice civile"],
      },
      {
        id: "pubblicita-legale",
        title: "Pubblicità legale e opponibilità",
        lead:
          "L'iscrizione produce pubblicità legale: gli atti iscritti sono conoscibili e, secondo le regole di legge, opponibili ai terzi.",
        body: [
          "La pubblicità legale del Registro serve alla sicurezza dei traffici: i terzi devono poter fare affidamento su quanto risulta dal registro. L'opponibilità degli atti segue le regole del codice (iscrizione, omissione, conoscenza effettiva).",
          "Per le società di capitali l'iscrizione costitutiva aggiunge l'effetto di far nascere la persona giuridica.",
          "In sintetica distingui funzione conoscitiva e effetti giuridici (opponibilità / costitutività).",
        ],
        examTip:
          "Non ridurre il Registro a «archivio». Parla di pubblicità legale ed effetti verso i terzi.",
        refs: ["Codice civile — pubblicità delle imprese"],
      },
      {
        id: "rea",
        title: "REA — Repertorio economico-amministrativo",
        lead:
          "Sezione del sistema camerale che raccoglie notizie economico-statistiche e amministrative con regime pubblicitario diverso da quello tipico del Registro.",
        body: [
          "Il REA non «sostituisce» il Registro. Raccoglie informazioni di carattere economico, statistico e amministrativo (es. unità locali, addetti, attività secondarie) utili alla conoscenza del tessuto produttivo e alla gestione dei fascicoli.",
          "Il regime pubblicitario è diverso: non ha la stessa portata di pubblicità legale tipica degli atti soggetti a iscrizione obbligatoria nel Registro.",
          "Confrontare Registro e REA è esercizio tipico anche nei concorsi di altre Camere: tieni pronta una definizione netta.",
        ],
        terms: [
          {
            term: "REA",
            def: "Repertorio economico-amministrativo: notizie informative/statistiche collegate al fascicolo d'impresa.",
          },
        ],
        examTip:
          "Registro = atti con pubblicità legale; REA = notizie economico-amministrative.",
        refs: ["Normativa camerale sul REA"],
      },
      {
        id: "esempi",
        title: "Esempi pratici Registro vs REA",
        lead:
          "Costituzione di S.r.l. → iscrizione in Registro; apertura unità locale / dati addetti → tipicamente annotazioni anche via REA.",
        body: [
          "Esempio 1: atto costitutivo e statuto di S.r.l. vanno iscritti nel Registro imprese → effetto costitutivo e pubblicità legale. Esempio 2: variazione di un'unità locale o aggiornamento di dati sull'occupazione rilevano nel fascicolo anche attraverso il REA.",
          "Esempio 3: bilancio di esercizio delle società di capitali → deposito/iscrizione secondo le regole del Registro, non come mera statistica REA.",
          "Usare esempi concreti nelle sintetiche aumenta aderenza e chiarezza (criteri di valutazione della prova unica).",
        ],
        examTip:
          "Prepara 2 esempi opposti (atto societario vs dato economico) e usali in chiusura di risposta.",
        refs: ["Prassi Registro imprese / REA"],
      },
    ],
  },
  {
    id: "t-com-sas-srl",
    subject: "commerciale",
    title: "Focus: accomandante e S.r.l.",
    summary: "Due temi già usciti nelle tracce di Trento 2021.",
    remember:
      "Nelle sintetiche usa esempi concreti (nome in ragione sociale; atti di gestione).",
    points: [
      {
        id: "accomandante",
        title: "Socio accomandante in S.a.s.",
        lead:
          "Responsabilità limitata alla quota e divieto di immistione nella gestione; se viola il divieto rischia responsabilità illimitata verso i terzi.",
        body: [
          "Nella S.a.s. gli accomandanti conferiscono capitale e rispondono limitatamente alla quota, mentre gli accomandatari amministrano e rispondono illimitatamente e solidalmente. La ragione sociale contiene il nome di almeno un accomandatario.",
          "Il divieto di immistione impedisce all'accomandante di compiere atti di amministrazione o di trattare affari in nome della società (salvo procura speciale per singoli affari). La violazione espone a responsabilità illimitata e solidale verso i terzi.",
          "Traccia Trento 2021: sviluppa definizione → diritti patrimoniali → divieto → conseguenze dell'immistione → confronto con accomandatario.",
        ],
        terms: [
          {
            term: "Immistione",
            def: "Ingerenza dell'accomandante nella gestione, vietata e sanzionata con responsabilità illimitata.",
          },
        ],
        examTip:
          "Non dimenticare le conseguenze dell'immistione: è spesso il cuore della valutazione.",
        refs: ["Codice civile, società in accomandita semplice"],
      },
      {
        id: "srl-autonomia",
        title: "S.r.l. — autonomia e amministrazione",
        lead:
          "Autonomia patrimoniale perfetta; amministrazione flessibile (unico, plurimo congiunto/disgiunto, consiglio di amministrazione).",
        body: [
          "Nella S.r.l. per le obbligazioni sociali risponde la società con il suo patrimonio. I soci, di regola, rischiano solo quanto conferito (salvo ipotesi patologiche o di unipersonalità senza adempimenti).",
          "L'organizzazione amministrativa è duttile: amministratore unico, più amministratori con poteri congiunti o disgiunti, consiglio di amministrazione, secondo lo statuto (art. 2475 c.c.).",
          "Questa flessibilità spiega la diffusione della S.r.l. tra le PMI iscritte al Registro imprese.",
        ],
        examTip:
          "Cita autonomia patrimoniale + almeno due modelli di amministrazione.",
        refs: ["Codice civile, artt. 2462, 2475"],
      },
      {
        id: "srl-unipersonale-focus",
        title: "S.r.l. unipersonale — adempimenti a pena di responsabilità",
        lead:
          "Pubblicità della unipersonalità e regole sui conferimenti: senza di essi il socio unico può rispondere illimitatamente.",
        body: [
          "Tema già oggetto di traccia a Trento: non basta dire che «la S.r.l. unipersonale esiste». Serve spiegare il regime di responsabilità condizionata.",
          "Gli adempimenti pubblicitari (indicazione della unipersonalità negli atti e nel Registro) e quelli sui conferimenti proteggono i terzi e giustificano il beneficio della responsabilità limitata.",
          "In chiusura di sintetica: spiega il razionale — i terzi devono sapere di trattare con una società unipersonale e che il capitale è stato effettivamente formato secondo legge.",
        ],
        examTip:
          "Struttura: ammissibilità → beneficio → condizioni → conseguenza della violazione.",
        refs: ["Codice civile — S.r.l. a socio unico"],
      },
      {
        id: "capitale-conferimenti",
        title: "Capitale e conferimenti (anche sotto soglia)",
        lead:
          "Capitale minimo ordinario 10.000 euro; sotto soglia valgono regole rafforzate (es. versamenti e vincoli sugli utili) secondo la disciplina vigente.",
        body: [
          "I conferimenti possono essere in denaro, beni in natura o crediti, con stime e responsabilità tipiche del tipo societario. Nella S.r.l. la legge ammette anche capitali inferiori a 10.000 euro a condizioni particolari.",
          "Le regole rafforzate (versamento integrale, riserve, limiti alla distribuzione) proteggono i creditori quando il capitale nominale è molto basso.",
          "In quiz, se chiedono il minimo «ordinario», rispondi 10.000; se la domanda richiama la S.r.l. semplificata/sotto soglia, spiega le condizioni invece di negarne l'esistenza.",
        ],
        examTip:
          "10.000 euro = regola ordinaria. Sotto soglia = possibile ma con cautele rafforzate.",
        refs: ["Codice civile, disciplina del capitale nella S.r.l."],
      },
    ],
  },
];
