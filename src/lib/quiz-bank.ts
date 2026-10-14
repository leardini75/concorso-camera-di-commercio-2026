import type { SubjectKey } from "./exam";

export type QuizQuestion = {
  id: string;
  subject: SubjectKey;
  topic: string;
  stem: string;
  options: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
  explanation: string;
};

/**
 * Banca quiz: le opzioni sono già bilanciate nel file, ma in sessione
 * vengono comunque rimescolate (vedi presentQuestion) per evitare pattern.
 */
export const QUIZ_BANK: QuizQuestion[] = [
  // ——— DIRITTO AMMINISTRATIVO ———
  {
    id: "adm-01",
    subject: "amministrativo",
    topic: "L. 241/1990 · Principi",
    stem: "Secondo l'art. 1 della L. 241/1990, l'attività amministrativa è retta dai principi di:",
    options: [
      "soltanto legalità, tipicità e discrezionalità tecnica dell'organo competente",
      "economicità, efficacia, imparzialità, pubblicità e trasparenza, nonché dai principi dell'ordinamento comunitario",
      "solo economicità ed efficacia, con esclusione di pubblicità e trasparenza",
      "buon andamento e imparzialità, ma solo se richiamati espressamente nel provvedimento",
    ],
    correct: 1,
    explanation:
      "L'art. 1 L. 241/90 richiama economicità, efficacia, imparzialità, pubblicità e trasparenza, oltre ai principi dell'ordinamento europeo.",
  },
  {
    id: "adm-02",
    subject: "amministrativo",
    topic: "L. 241/1990 · Responsabile",
    stem: "Il responsabile del procedimento, ai sensi della L. 241/1990:",
    options: [
      "può firmare l'atto finale solo se è anche il legale rappresentante dell'ente",
      "si limita a protocollare l'istanza e a trasmettere gli atti all'organo politico",
      "valuta, anche ai fini istruttori, ammissibilità e presupposti; accerta d'ufficio i fatti; propone o adotta l'atto se competente",
      "sostituisce sempre l'organo di indirizzo politico in tutte le decisioni discrezionali",
    ],
    correct: 2,
    explanation:
      "L'art. 6 L. 241/90 elenca i compiti istruttori e decisori del responsabile del procedimento.",
  },
  {
    id: "adm-03",
    subject: "amministrativo",
    topic: "L. 241/1990 · Comunicazione di avvio",
    stem: "La comunicazione di avvio del procedimento (art. 7 L. 241/1990):",
    options: [
      "deve indicare amministrazione competente, oggetto, ufficio e responsabile, termine di conclusione e modalità di accesso agli atti",
      "è sempre facoltativa nei procedimenti ad istanza di parte",
      "sostituisce il provvedimento finale quando decorre il termine senza risposta",
      "va inviata solo dopo l'adozione del provvedimento negativo",
    ],
    correct: 0,
    explanation:
      "L'art. 8 indica i contenuti minimi della comunicazione di avvio.",
  },
  {
    id: "adm-04",
    subject: "amministrativo",
    topic: "L. 241/1990 · Preavviso di rigetto",
    stem: "Il preavviso di rigetto (art. 10-bis L. 241/1990) prevede che:",
    options: [
      "l'amministrazione possa rigettare senza motivazione se ha già comunicato l'avvio",
      "il termine per osservazioni sia sempre di quarantotto ore dalla ricezione",
      "non si applichi mai ai procedimenti ad istanza di parte",
      "prima del provvedimento negativo siano comunicati i motivi ostativi, con termine non inferiore a dieci giorni per osservazioni",
    ],
    correct: 3,
    explanation:
      "L'art. 10-bis impone la comunicazione dei motivi ostativi e un termine ≥ 10 giorni per controdeduzioni scritte.",
  },
  {
    id: "adm-05",
    subject: "amministrativo",
    topic: "L. 241/1990 · Motivazione",
    stem: "La motivazione del provvedimento amministrativo (art. 3 L. 241/1990):",
    options: [
      "non è mai richiesta per gli atti che incidono su diritti soggettivi",
      "indica i presupposti di fatto e le ragioni giuridiche; non è richiesta per gli atti normativi e per quelli a contenuto generale",
      "deve sempre riportare per esteso i pareri di tutte le amministrazioni coinvolte",
      "è obbligatoria solo se il privato la richiede entro dieci giorni dall'adozione",
    ],
    correct: 1,
    explanation:
      "L'art. 3 richiede motivazione con fatti e ragioni giuridiche; esclude atti normativi e a contenuto generale.",
  },
  {
    id: "adm-06",
    subject: "amministrativo",
    topic: "L. 241/1990 · Termine",
    stem: "In mancanza di termini specifici, il procedimento amministrativo deve concludersi entro:",
    options: [
      "novanta giorni dalla comunicazione di avvio",
      "sessanta giorni dalla presentazione dell'istanza",
      "trenta giorni, salvo diversa disposizione di legge o di regolamento",
      "centottanta giorni, prorogabili una sola volta dal dirigente",
    ],
    correct: 2,
    explanation:
      "L'art. 2, comma 2, L. 241/90 prevede il termine generale di 30 giorni, salvo diversa disposizione.",
  },
  {
    id: "adm-07",
    subject: "amministrativo",
    topic: "L. 241/1990 · Accesso documentale",
    stem: "Il diritto di accesso ai documenti amministrativi (artt. 22 ss. L. 241/1990):",
    options: [
      "spetta a chiunque senza necessità di motivare l'interesse",
      "spetta a chi ha un interesse diretto, concreto e attuale collegato a una situazione giuridicamente tutelata",
      "è esercitabile solo dopo un ricorso al TAR o al difensore civico",
      "coincide sempre con l'accesso civico generalizzato del D.Lgs. 33/2013",
    ],
    correct: 1,
    explanation:
      "L'accesso documentale (L. 241) richiede interesse qualificato; diverso dall'accesso civico generalizzato.",
  },
  {
    id: "adm-08",
    subject: "amministrativo",
    topic: "L. 241/1990 · SCIA",
    stem: "La Segnalazione Certificata di Inizio Attività (SCIA):",
    options: [
      "è un provvedimento autorizzatorio espresso che deve intervenire prima dell'avvio",
      "consente l'inizio dell'attività dalla data di presentazione, salvi i poteri di verifica e inibitori dell'amministrazione",
      "sostituisce in ogni caso il permesso di costruire e le autorizzazioni paesaggistiche",
      "può essere presentata solo in forma cartacea presso l'ufficio protocollo",
    ],
    correct: 1,
    explanation:
      "Con la SCIA l'attività può partire subito; l'amministrazione verifica e può intervenire nei termini di legge.",
  },
  {
    id: "adm-09",
    subject: "amministrativo",
    topic: "L. 241/1990 · Silenzio",
    stem: "Il silenzio-assenso, ove previsto:",
    options: [
      "equivale sempre a un diniego tacito impugnabile entro sessanta giorni",
      "fa sì che la domanda si consideri accolta decorso inutilmente il termine, nei casi previsti dalla legge",
      "esclude qualsiasi controllo successivo dell'amministrazione",
      "si applica automaticamente a tutti i procedimenti di competenza regionale",
    ],
    correct: 1,
    explanation:
      "Il silenzio-assenso (art. 20 L. 241) produce l'accoglimento tacito dove la legge lo contempla.",
  },
  {
    id: "adm-10",
    subject: "amministrativo",
    topic: "L. 241/1990 · Partecipazione",
    stem: "I soggetti intervenienti nel procedimento possono, tra l'altro:",
    options: [
      "solo assistere alle riunioni senza depositare documenti",
      "prendere visione degli atti e presentare memorie scritte e documenti",
      "sostituirsi al responsabile del procedimento nell'adozione dell'atto",
      "annullare in autotutela il provvedimento già adottato",
    ],
    correct: 1,
    explanation:
      "L'art. 10 L. 241 riconosce visione degli atti e presentazione di memorie e documenti.",
  },
  {
    id: "adm-11",
    subject: "amministrativo",
    topic: "Patologia dell'atto",
    stem: "Il provvedimento amministrativo è nullo quando, tra l'altro:",
    options: [
      "è solo viziato da eccesso di potere o da difetto di motivazione",
      "manca degli elementi essenziali, è viziato da difetto assoluto di attribuzione, ovvero viola o elude il giudicato",
      "contiene un mero errore materiale di calcolo correggibile d'ufficio",
      "è motivato in modo sintetico ma comunque intellegibile",
    ],
    correct: 1,
    explanation:
      "L'art. 21-septies L. 241 disciplina la nullità; i vizi di legittimità meno gravi producono annullabilità.",
  },
  {
    id: "adm-12",
    subject: "amministrativo",
    topic: "Patologia dell'atto",
    stem: "L'annullamento d'ufficio (art. 21-nonies L. 241/1990) presuppone, in via generale:",
    options: [
      "solo la volontà politica dell'organo di governo dell'ente",
      "illegittimità dell'atto, interesse pubblico e, di regola, il rispetto dei termini previsti dalla norma",
      "il consenso espresso del destinatario del provvedimento",
      "sempre un ricorso del privato pendente davanti al giudice amministrativo",
    ],
    correct: 1,
    explanation:
      "L'annullamento d'ufficio richiede illegittimità, interesse pubblico e termini/condizioni previsti dalla norma.",
  },
  {
    id: "adm-13",
    subject: "amministrativo",
    topic: "Art. 97 Cost.",
    stem: "L'art. 97 della Costituzione sancisce, tra l'altro, che:",
    options: [
      "i pubblici uffici sono organizzati secondo disposizioni di legge, assicurando buon andamento e imparzialità",
      "l'amministrazione può agire senza vincolo di legge nei settori di alta amministrazione",
      "i dirigenti apicali sono eletti a suffragio universale diretto",
      "non esistono obblighi costituzionali di trasparenza dell'azione amministrativa",
    ],
    correct: 0,
    explanation:
      "Buon andamento e imparzialità sono i principi costituzionali chiave dell'azione amministrativa.",
  },
  {
    id: "adm-14",
    subject: "amministrativo",
    topic: "D.Lgs. 33/2013 · Trasparenza",
    stem: "L'accesso civico «semplice» (art. 5, comma 1, D.Lgs. 33/2013) consente di:",
    options: [
      "accedere a qualsiasi dato della PA senza limiti di riservatezza",
      "richiedere la pubblicazione di documenti o dati oggetto di pubblicazione obbligatoria omessi dall'amministrazione",
      "consultare solo l'albo pretorio cartaceo presso la sede dell'ente",
      "ottenere documenti riservati senza indicare alcun interesse",
    ],
    correct: 1,
    explanation:
      "L'accesso civico semplice fa valere l'obbligo di pubblicazione; quello generalizzato (comma 2) è più ampio.",
  },
  {
    id: "adm-15",
    subject: "amministrativo",
    topic: "D.Lgs. 33/2013 · Accesso generalizzato",
    stem: "L'accesso civico generalizzato (FOIA):",
    options: [
      "richiede un interesse diretto e concreto come l'accesso L. 241",
      "può essere esercitato da chiunque, salvi i limiti di tutela di interessi pubblici e privati",
      "sostituisce integralmente l'accesso documentale in tutti i casi",
      "è riservato ai soli giornalisti iscritti all'albo professionale",
    ],
    correct: 1,
    explanation:
      "Il FOIA (art. 5 c. 2) è esercitabile da chiunque, con i limiti degli artt. 5-bis.",
  },
  {
    id: "adm-16",
    subject: "amministrativo",
    topic: "GDPR",
    stem: "Secondo il GDPR, il trattamento dei dati personali deve rispettare, tra gli altri, i principi di:",
    options: [
      "solo sicurezza informatica e cifratura dei supporti",
      "liceità, correttezza, trasparenza, limitazione della finalità, minimizzazione, esattezza, limitazione della conservazione, integrità e riservatezza",
      "raccolta illimitata dei dati «per ogni evenienza» futura dell'ente",
      "cessione libera a terzi senza necessità di base giuridica",
    ],
    correct: 1,
    explanation:
      "L'art. 5 GDPR enuncia i principi fondamentali del trattamento.",
  },
  {
    id: "adm-17",
    subject: "amministrativo",
    topic: "GDPR",
    stem: "Il Titolare del trattamento è:",
    options: [
      "sempre il Responsabile della protezione dei dati (DPO) nominato dall'ente",
      "la persona fisica o giuridica, l'autorità pubblica o altro organismo che determina le finalità e i mezzi del trattamento",
      "solo il fornitore del servizio cloud utilizzato dalla pubblica amministrazione",
      "il Garante per la protezione dei dati personali in ogni procedimento",
    ],
    correct: 1,
    explanation:
      "Definizione di titolare ex art. 4 n. 7 GDPR; il DPO è figura distinta.",
  },
  {
    id: "adm-18",
    subject: "amministrativo",
    topic: "GDPR",
    stem: "Il diritto di accesso dell'interessato (art. 15 GDPR) consente, tra l'altro, di:",
    options: [
      "ottenere conferma che sia o meno in corso un trattamento e accedere ai dati personali",
      "cancellare i dati di terzi senza alcun titolo legittimante",
      "obbligare sempre la PA a pubblicare i propri dati sul sito istituzionale",
      "impedire ogni trattamento anche quando fondato su un obbligo di legge",
    ],
    correct: 0,
    explanation:
      "L'art. 15 riconosce conferma del trattamento e accesso ai propri dati, con le informazioni correlate.",
  },
  {
    id: "adm-19",
    subject: "amministrativo",
    topic: "D.P.R. 445/2000",
    stem: "Le dichiarazioni sostitutive di certificazione (art. 46 D.P.R. 445/2000):",
    options: [
      "non hanno valore legale nei rapporti con le pubbliche amministrazioni",
      "possono riguardare stati, qualità personali e fatti previsti dalla norma e sostituiscono i certificati",
      "sono ammesse solo se autenticate da un notaio o da un pubblico ufficiale",
      "non possono mai essere sottoposte a controllo da parte della PA",
    ],
    correct: 1,
    explanation:
      "L'art. 46 elenca i fatti autocertificabili; la PA può effettuare controlli (art. 71).",
  },
  {
    id: "adm-20",
    subject: "amministrativo",
    topic: "D.P.R. 445/2000",
    stem: "In caso di dichiarazione mendace ai sensi del D.P.R. 445/2000:",
    options: [
      "non vi sono conseguenze se la dichiarazione è stata resa in buona fede apparente",
      "il dichiarante decade dai benefici eventualmente conseguiti e può rispondere penalmente",
      "si applica solo una sanzione amministrativa pecuniaria di importo fisso",
      "la PA deve comunque mantenere i benefici già attribuiti fino a sentenza passata in giudicato",
    ],
    correct: 1,
    explanation:
      "Artt. 75 e 76 D.P.R. 445: decadenza dai benefici e responsabilità penale.",
  },
  {
    id: "adm-21",
    subject: "amministrativo",
    topic: "Fasi del procedimento",
    stem: "Le fasi tipiche del procedimento amministrativo sono:",
    options: [
      "solo decisione ed esecuzione coatta del provvedimento",
      "iniziativa, istruttoria, decisoria ed eventualmente integrativa dell'efficacia",
      "solo pubblicazione all'albo e notifica ai controinteressati",
      "esclusivamente ricorso gerarchico e giudizio di ottemperanza",
    ],
    correct: 1,
    explanation:
      "Schema classico: iniziativa → istruttoria → decisione → (eventuale) efficacia.",
  },
  {
    id: "adm-22",
    subject: "amministrativo",
    topic: "Elementi del provvedimento",
    stem: "Sono elementi essenziali del provvedimento amministrativo, tra gli altri:",
    options: [
      "solo la firma digitale del responsabile della transizione digitale",
      "soggetto, oggetto, contenuto e forma; a questi si aggiungono finalità e, ove richiesto, motivazione",
      "unicamente il parere vincolante del Collegio dei Revisori dei conti",
      "il consenso unanime dei cittadini residenti nel territorio dell'ente",
    ],
    correct: 1,
    explanation:
      "Dottrina e giurisprudenza individuano soggetto, oggetto, contenuto, forma (e finalità/motivazione).",
  },
  {
    id: "adm-23",
    subject: "amministrativo",
    topic: "L. 241/1990 · Conferenza di servizi",
    stem: "La conferenza di servizi serve tipicamente a:",
    options: [
      "sostituire il giudice amministrativo nelle controversie tra privati",
      "acquisire contestualmente intese, concerti, nulla osta o assensi di più amministrazioni",
      "emanare regolamenti regionali in materia di organizzazione degli uffici",
      "nominare i dirigenti apicali delle pubbliche amministrazioni",
    ],
    correct: 1,
    explanation:
      "È uno strumento di semplificazione e coordinamento tra amministrazioni (artt. 14 ss.).",
  },
  {
    id: "adm-24",
    subject: "amministrativo",
    topic: "Trasparenza",
    stem: "La trasparenza amministrativa, nel quadro del D.Lgs. 33/2013, è intesa come:",
    options: [
      "solo accessibilità cartacea agli uffici negli orari di apertura al pubblico",
      "accessibilità totale dei dati e documenti detenuti dalle PA, per favorire il controllo diffuso sulle funzioni e sull'uso delle risorse",
      "obbligo di pubblicare online tutti i dati sensibili dei dipendenti senza filtri",
      "divieto assoluto di qualsiasi forma di riservatezza o segreto d'ufficio",
    ],
    correct: 1,
    explanation:
      "Definizione sostanziale di trasparenza ex D.Lgs. 33/2013 (art. 1).",
  },
  {
    id: "adm-25",
    subject: "amministrativo",
    topic: "L. 241/1990 · Accesso vs FOIA",
    stem: "Quale affermazione distingue correttamente accesso documentale e accesso civico generalizzato?",
    options: [
      "L'accesso documentale richiede un interesse qualificato; il FOIA è esercitabile da chiunque, con i limiti di legge",
      "Il FOIA richiede sempre un interesse diretto; l'accesso L. 241 è libero per chiunque",
      "I due istituti coincidono e si applicano con le stesse condizioni di ammissibilità",
      "L'accesso documentale è ammesso solo dopo il diniego dell'accesso civico",
    ],
    correct: 0,
    explanation:
      "L. 241 = interesse qualificato; FOIA (D.Lgs. 33) = chiunque, salvi limiti 5-bis.",
  },
  {
    id: "adm-26",
    subject: "amministrativo",
    topic: "GDPR · Base giuridica",
    stem: "Per una pubblica amministrazione che tratta dati personali nell'esercizio di pubblici poteri, la base giuridica tipica ex art. 6 GDPR è:",
    options: [
      "il consenso libero e revocabile dell'interessato in ogni caso",
      "l'interesse legittimo del titolare, senza altri presupposti",
      "l'obbligo legale o l'esecuzione di un compito di interesse pubblico / esercizio di pubblici poteri",
      "la mera pubblicazione dei dati nella sezione Amministrazione trasparente",
    ],
    correct: 2,
    explanation:
      "Per le PA prevalgono obbligo legale e interesse pubblico / pubblici poteri (art. 6).",
  },
  {
    id: "adm-27",
    subject: "amministrativo",
    topic: "L. 241/1990 · Motivazione per relationem",
    stem: "La motivazione per relationem è ammissibile quando:",
    options: [
      "il provvedimento rinvia a un documento chiaramente identificato e messo a disposizione",
      "l'amministrazione omette qualsiasi riferimento agli atti istruttori",
      "il privato non ha presentato osservazioni nel termine di dieci giorni",
      "l'atto ha natura normativa o a contenuto generale",
    ],
    correct: 0,
    explanation:
      "È ammessa se il documento richiamato è individuato e conoscibile dall'interessato.",
  },
  {
    id: "adm-28",
    subject: "amministrativo",
    topic: "D.P.R. 445/2000 · Controlli",
    stem: "I controlli sulle dichiarazioni sostitutive (art. 71 D.P.R. 445/2000):",
    options: [
      "sono vietati dopo l'accoglimento dell'istanza",
      "possono essere effettuati dalla PA anche a campione e in caso di fondato dubbio",
      "spettano esclusivamente alla Guardia di Finanza",
      "richiedono sempre l'autorizzazione del giudice penale",
    ],
    correct: 1,
    explanation:
      "L'art. 71 consente controlli, anche a campione, sulla veridicità delle dichiarazioni.",
  },

  // ——— DIRITTO COMMERCIALE ———
  {
    id: "com-01",
    subject: "commerciale",
    topic: "Imprenditore · art. 2082 c.c.",
    stem: "Ai sensi dell'art. 2082 c.c., è imprenditore chi:",
    options: [
      "esercita professionalmente un'attività economica organizzata al fine della produzione o dello scambio di beni o di servizi",
      "possiede un titolo di studio in materie economiche o giuridiche",
      "lavora come dipendente con poteri di firma nell'impresa altrui",
      "gestisce un patrimonio familiare senza alcuna organizzazione produttiva",
    ],
    correct: 0,
    explanation:
      "Definizione legale di imprenditore: professionalità, attività economica, organizzazione, produzione/scambio.",
  },
  {
    id: "com-02",
    subject: "commerciale",
    topic: "Impresa e azienda",
    stem: "L'azienda, ai sensi dell'art. 2555 c.c., è:",
    options: [
      "sinonimo di società di capitali quotata in mercati regolamentati",
      "il complesso dei beni organizzati dall'imprenditore per l'esercizio dell'impresa",
      "solo l'immobile in cui ha sede legale l'impresa",
      "il patrimonio netto risultante dall'ultimo bilancio approvato",
    ],
    correct: 1,
    explanation:
      "Azienda = complesso di beni organizzati; impresa = attività; imprenditore = soggetto.",
  },
  {
    id: "com-03",
    subject: "commerciale",
    topic: "Imprenditore commerciale",
    stem: "L'imprenditore commerciale è soggetto, tra l'altro, a:",
    options: [
      "nessun obbligo di pubblicità legale delle vicende dell'impresa",
      "iscrizione nel Registro delle imprese e, di regola, tenuta delle scritture contabili e assoggettabilità alle procedure concorsuali, salve le eccezioni di legge",
      "solo l'obbligo di partita IVA, senza iscrizione al Registro imprese",
      "divieto assoluto di assumere lavoratori subordinati",
    ],
    correct: 1,
    explanation:
      "Lo status di imprenditore commerciale comporta pubblicità, contabilità e regime concorsuale tipici.",
  },
  {
    id: "com-04",
    subject: "commerciale",
    topic: "Piccolo imprenditore",
    stem: "Il piccolo imprenditore (art. 2083 c.c.) comprende tipicamente:",
    options: [
      "solo le S.p.A. con capitale inferiore a cinquantamila euro",
      "i coltivatori diretti, gli artigiani, i piccoli commercianti e chi esercita un'attività organizzata prevalentemente con il lavoro proprio e dei familiari",
      "esclusivamente le società cooperative a mutualità prevalente",
      "gli enti pubblici economici e le aziende speciali",
    ],
    correct: 1,
    explanation:
      "L'art. 2083 elenca le categorie di piccolo imprenditore.",
  },
  {
    id: "com-05",
    subject: "commerciale",
    topic: "Società di persone",
    stem: "Nella società in nome collettivo (S.n.c.):",
    options: [
      "i soci rispondono limitatamente alla quota conferita",
      "tutti i soci rispondono solidalmente e illimitatamente per le obbligazioni sociali",
      "è obbligatorio un consiglio di amministrazione con almeno tre membri",
      "l'atto costitutivo può essere concluso oralmente senza alcuna pubblicità",
    ],
    correct: 1,
    explanation:
      "Nella S.n.c. la responsabilità dei soci è solidale e illimitata (art. 2291 c.c.).",
  },
  {
    id: "com-06",
    subject: "commerciale",
    topic: "S.a.s.",
    stem: "Nella società in accomandita semplice, il socio accomandante:",
    options: [
      "risponde illimitatamente e gestisce ordinariamente l'impresa",
      "risponde limitatamente alla quota conferita e, di regola, non può compiere atti di amministrazione",
      "è sempre amministratore unico della società",
      "non può in alcun caso percepire utili della gestione",
    ],
    correct: 1,
    explanation:
      "Gli accomandanti hanno responsabilità limitata e divieto di immistione nella gestione.",
  },
  {
    id: "com-07",
    subject: "commerciale",
    topic: "S.r.l.",
    stem: "Nella società a responsabilità limitata:",
    options: [
      "i soci rispondono illimitatamente e solidalmente verso i creditori sociali",
      "per le obbligazioni sociali risponde soltanto la società con il suo patrimonio",
      "è obbligatorio il capitale minimo di centoventimila euro",
      "non può avere un solo socio in nessun caso",
    ],
    correct: 1,
    explanation:
      "Nella S.r.l. (art. 2462 c.c.) la responsabilità è limitata al patrimonio sociale.",
  },
  {
    id: "com-08",
    subject: "commerciale",
    topic: "S.r.l. unipersonale",
    stem: "Nella S.r.l. unipersonale, la responsabilità limitata:",
    options: [
      "non è mai riconosciuta al socio unico",
      "è riconosciuta se sono rispettati gli adempimenti pubblicitari e di conferimento; in mancanza, il socio unico può rispondere illimitatamente per le obbligazioni del periodo di unipersonalità",
      "richiede sempre la nomina di almeno due amministratori",
      "esclude l'iscrizione della società nel Registro delle imprese",
    ],
    correct: 1,
    explanation:
      "La responsabilità limitata del socio unico è subordinata a pubblicità e versamenti; altrimenti scatta la responsabilità illimitata.",
  },
  {
    id: "com-09",
    subject: "commerciale",
    topic: "S.p.A.",
    stem: "Il capitale minimo per costituire una S.p.A. ordinaria è:",
    options: [
      "un euro, con versamento integrale alla sottoscrizione",
      "diecimila euro, come nella S.r.l. ordinaria",
      "cinquantamila euro",
      "centoventimila euro",
    ],
    correct: 2,
    explanation:
      "Per le S.p.A. il capitale minimo è di 50.000 euro (art. 2327 c.c.).",
  },
  {
    id: "com-10",
    subject: "commerciale",
    topic: "Registro delle imprese",
    stem: "Il Registro delle imprese:",
    options: [
      "è tenuto esclusivamente dal Ministero dell'Economia e delle Finanze",
      "è un pubblico registro tenuto dalle Camere di commercio sotto la vigilanza di un giudice del Registro",
      "raccoglie solo i bilanci delle pubbliche amministrazioni",
      "non produce effetti di pubblicità legale verso i terzi",
    ],
    correct: 1,
    explanation:
      "Il Registro imprese (L. 580/1993 e c.c.) è tenuto dalle CCIAA con pubblicità legale.",
  },
  {
    id: "com-11",
    subject: "commerciale",
    topic: "REA",
    stem: "Il Repertorio economico-amministrativo (REA):",
    options: [
      "sostituisce integralmente il Registro delle imprese per le società di capitali",
      "è una sezione del sistema camerale che raccoglie notizie economico-statistiche e amministrative con regime pubblicitario diverso da quello tipico del Registro",
      "è riservato alle sole società quotate nei mercati regolamentati",
      "non è gestito dalle Camere di commercio",
    ],
    correct: 1,
    explanation:
      "REA e Registro imprese hanno regimi pubblicitari diversi: il REA ha funzione informativa/statistica.",
  },
  {
    id: "com-12",
    subject: "commerciale",
    topic: "Pubblicità",
    stem: "L'iscrizione nel Registro delle imprese di atti soggetti a iscrizione obbligatoria produce tipicamente:",
    options: [
      "effetti solo interni tra i soci, senza rilevanza verso i terzi",
      "pubblicità legale, opponibile ai terzi secondo le regole del codice civile",
      "nessun effetto verso i terzi fino alla pubblicazione in Gazzetta Ufficiale",
      "solo un vincolo fiscale nei confronti dell'Agenzia delle Entrate",
    ],
    correct: 1,
    explanation:
      "La pubblicità legale rende opponibili ai terzi gli atti iscritti (con le regole di conoscibilità).",
  },
  {
    id: "com-13",
    subject: "commerciale",
    topic: "Società semplice",
    stem: "La società semplice:",
    options: [
      "può esercitare liberamente attività commerciale",
      "può avere solo oggetto non commerciale (tipicamente agricolo) e non è soggetta al fallimento tipico dell'imprenditore commerciale",
      "richiede atto pubblico a pena di nullità in ogni caso",
      "è una società di capitali con personalità giuridica piena",
    ],
    correct: 1,
    explanation:
      "La società semplice (artt. 2251 ss.) non può avere oggetto commerciale.",
  },
  {
    id: "com-14",
    subject: "commerciale",
    topic: "Cooperativa",
    stem: "La società cooperativa si caratterizza principalmente per:",
    options: [
      "lo scopo di lucro esclusivo dei soci finanziatori di maggioranza",
      "lo scopo mutualistico di fornire beni, servizi o occasioni di lavoro ai soci a condizioni più vantaggiose",
      "l'obbligo di quotazione in un mercato regolamentato entro tre anni",
      "l'assenza di un atto costitutivo scritto",
    ],
    correct: 1,
    explanation:
      "Elemento tipico è lo scopo mutualistico (art. 2511 c.c.).",
  },
  {
    id: "com-15",
    subject: "commerciale",
    topic: "Fusione",
    stem: "Nel procedimento di fusione societaria, il progetto di fusione:",
    options: [
      "non richiede alcuna forma di pubblicità legale",
      "deve essere iscritto o depositato secondo le modalità di legge prima della decisione di fusione",
      "sostituisce integralmente l'atto di fusione",
      "è redatto solo dopo l'estinzione delle società incorporate",
    ],
    correct: 1,
    explanation:
      "Il progetto di fusione è soggetto a deposito/iscrizione prima della delibera (artt. 2501-ter ss.).",
  },
  {
    id: "com-16",
    subject: "commerciale",
    topic: "Impresa individuale",
    stem: "Nell'impresa individuale:",
    options: [
      "esiste autonomia patrimoniale perfetta come nella S.p.A.",
      "l'imprenditore risponde delle obbligazioni d'impresa con il proprio patrimonio, salve le discipline speciali",
      "non è mai richiesta l'iscrizione al Registro delle imprese",
      "devono esserci almeno due titolari con poteri congiunti",
    ],
    correct: 1,
    explanation:
      "Nell'impresa individuale non c'è separazione patrimoniale tipica delle società di capitali.",
  },
  {
    id: "com-17",
    subject: "commerciale",
    topic: "Amministrazione S.r.l.",
    stem: "L'amministrazione di una S.r.l. può essere affidata:",
    options: [
      "solo a un consiglio di sorveglianza sul modello dualistico",
      "a un amministratore unico, a più amministratori con amministrazione congiunta o disgiunta, o a un consiglio di amministrazione, secondo lo statuto",
      "esclusivamente ai sindaci effettivi",
      "solo a soggetti estranei alla compagine sociale",
    ],
    correct: 1,
    explanation:
      "La S.r.l. ha ampia flessibilità nell'organizzazione amministrativa (art. 2475 c.c.).",
  },
  {
    id: "com-18",
    subject: "commerciale",
    topic: "Capitale S.r.l.",
    stem: "Il capitale minimo di una S.r.l. «ordinaria» è:",
    options: [
      "un euro, senza alcuna regola rafforzata sui conferimenti",
      "diecimila euro (con possibilità di capitale inferiore a condizioni di legge)",
      "cinquantamila euro",
      "centoventimila euro",
    ],
    correct: 1,
    explanation:
      "Capitale minimo S.r.l. = 10.000 euro; sotto soglia valgono regole particolari sui conferimenti.",
  },
  {
    id: "com-19",
    subject: "commerciale",
    topic: "Conservatore",
    stem: "Il Conservatore del Registro delle imprese:",
    options: [
      "è un notaio privato senza poteri pubblicistici",
      "cura, presso la Camera di commercio, la tenuta del Registro e la regolarità formale delle iscrizioni, sotto la vigilanza del giudice del Registro",
      "sostituisce il tribunale nelle procedure di liquidazione giudiziale",
      "emana sentenze vincolanti in materia societaria",
    ],
    correct: 1,
    explanation:
      "Il Conservatore gestisce il Registro presso la CCIAA, con controllo di legittimità formale.",
  },
  {
    id: "com-20",
    subject: "commerciale",
    topic: "Società di capitali",
    stem: "Sono società di capitali:",
    options: [
      "S.n.c., S.a.s. e società semplice",
      "S.p.A., S.a.p.A. e S.r.l.",
      "solo le società cooperative",
      "le associazioni non riconosciute e le fondazioni",
    ],
    correct: 1,
    explanation:
      "Le società di capitali tipiche sono S.p.A., S.a.p.A. e S.r.l.",
  },
  {
    id: "com-21",
    subject: "commerciale",
    topic: "Impresa artigiana",
    stem: "L'impresa artigiana si caratterizza, in sintesi, per:",
    options: [
      "l'assenza di qualsiasi prestazione di lavoro manuale del titolare",
      "la prevalenza del lavoro del titolare (e, nei limiti, dei familiari) nell'attività produttiva, secondo la disciplina speciale",
      "l'obbligo di adottare la forma di S.p.A.",
      "l'esclusione dal Registro delle imprese in ogni caso",
    ],
    correct: 1,
    explanation:
      "L'artigiano è tipicamente piccolo imprenditore con prevalenza del lavoro proprio.",
  },
  {
    id: "com-22",
    subject: "commerciale",
    topic: "Azioni e quote",
    stem: "Nelle S.p.A. la partecipazione sociale è rappresentata da:",
    options: [
      "quote non trasferibili se non con atto pubblico",
      "azioni",
      "solo obbligazioni convertibili emesse dalla società",
      "diritti di usufrutto costituiti obbligatoriamente sui conferimenti",
    ],
    correct: 1,
    explanation:
      "Nelle S.p.A. la partecipazione è azionaria; nelle S.r.l. è in quote.",
  },
  {
    id: "com-23",
    subject: "commerciale",
    topic: "Conferimenti",
    stem: "I conferimenti in società possono avere a oggetto:",
    options: [
      "solo denaro versato in contanti presso la sede sociale",
      "denaro, beni in natura e crediti, secondo le regole tipiche di ciascun tipo societario",
      "esclusivamente immobili iscritti nei pubblici registri",
      "solo prestazioni d'opera senza alcuna stima",
    ],
    correct: 1,
    explanation:
      "Il codice civile ammette conferimenti in denaro, beni e crediti, con regole diverse per tipo di società.",
  },
  {
    id: "com-24",
    subject: "commerciale",
    topic: "Pubblicità costitutiva",
    stem: "Per le società di capitali, l'iscrizione nel Registro delle imprese dell'atto costitutivo:",
    options: [
      "è irrilevante ai fini dell'acquisto della personalità giuridica",
      "ha di regola efficacia costitutiva: la società acquista la personalità giuridica con l'iscrizione",
      "serve solo a fini statistici del sistema camerale",
      "può essere omessa se tutti i soci sono d'accordo per iscritto",
    ],
    correct: 1,
    explanation:
      "Con l'iscrizione le società di capitali acquistano personalità giuridica (efficacia costitutiva).",
  },
  {
    id: "com-25",
    subject: "commerciale",
    topic: "S.a.s. · Immistione",
    stem: "Se il socio accomandante compie atti di amministrazione in violazione del divieto di immistione:",
    options: [
      "decade automaticamente dalla qualità di socio senza altre conseguenze",
      "può rispondere illimitatamente e solidalmente verso i terzi per le obbligazioni sociali, oltre alle altre conseguenze di legge",
      "l'atto è sempre inefficace anche nei confronti dei terzi di buona fede",
      "la società si trasforma automaticamente in S.r.l.",
    ],
    correct: 1,
    explanation:
      "L'immistione espone l'accomandante a responsabilità illimitata e solidale verso i terzi.",
  },
  {
    id: "com-26",
    subject: "commerciale",
    topic: "Registro vs REA",
    stem: "Quale esempio illustra correttamente la differenza tra Registro imprese e REA?",
    options: [
      "L'atto costitutivo di una S.r.l. va iscritto nel Registro; dati su unità locali o addetti rilevano tipicamente anche via REA",
      "Il REA ha efficacia costitutiva della personalità giuridica; il Registro ha solo funzione statistica",
      "Entrambi producono gli stessi effetti di pubblicità legale in ogni caso",
      "Il REA sostituisce il Registro per le imprese individuali",
    ],
    correct: 0,
    explanation:
      "Registro = pubblicità legale (spesso costitutiva); REA = notizie economico-amministrative.",
  },
  {
    id: "com-27",
    subject: "commerciale",
    topic: "Responsabilità S.n.c. vs S.r.l.",
    stem: "La differenza essenziale tra S.n.c. e S.r.l. quanto alla responsabilità è che:",
    options: [
      "nella S.n.c. i soci rispondono solidalmente e illimitatamente; nella S.r.l. risponde di regola solo il patrimonio sociale",
      "nella S.r.l. i soci rispondono sempre illimitatamente; nella S.n.c. mai",
      "in entrambe i soci rischiano solo quanto conferito, senza eccezioni",
      "in entrambe non esiste alcuna autonomia patrimoniale",
    ],
    correct: 0,
    explanation:
      "S.n.c. = responsabilità personale dei soci; S.r.l. = autonomia patrimoniale perfetta.",
  },
  {
    id: "com-28",
    subject: "commerciale",
    topic: "Imprenditore · Elementi",
    stem: "Quale elemento NON rientra nella nozione di imprenditore ex art. 2082 c.c.?",
    options: [
      "la professionalità dell'esercizio",
      "l'organizzazione dell'attività economica",
      "il fine di produzione o scambio di beni o servizi",
      "il possesso di un diploma di maturità quinquennale",
    ],
    correct: 3,
    explanation:
      "Il titolo di studio non è elemento della fattispecie 2082; contano professionalità, economicità, organizzazione, produzione/scambio.",
  },
];

export function getQuizBySubject(subject: SubjectKey | "all"): QuizQuestion[] {
  if (subject === "all") return QUIZ_BANK;
  return QUIZ_BANK.filter((q) => q.subject === subject);
}

export function shuffle<T>(items: T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Rimescola A/B/C/D aggiornando l'indice della risposta corretta. */
export function presentQuestion(q: QuizQuestion): QuizQuestion {
  const paired = q.options.map((opt, i) => ({
    opt,
    isCorrect: i === q.correct,
  }));
  const shuffled = shuffle(paired);
  const correct = shuffled.findIndex((p) => p.isCorrect) as 0 | 1 | 2 | 3;
  return {
    ...q,
    options: shuffled.map((p) => p.opt) as QuizQuestion["options"],
    correct,
  };
}

/** Mescola l'ordine dei quesiti e, per ciascuno, l'ordine delle opzioni. */
export function presentDeck(questions: QuizQuestion[]): QuizQuestion[] {
  return shuffle(questions).map(presentQuestion);
}

export function pickSimulationQuestions(): {
  quiz: QuizQuestion[];
  adminQuiz: QuizQuestion[];
  commercialQuiz: QuizQuestion[];
} {
  const adminQuiz = presentDeck(getQuizBySubject("amministrativo")).slice(0, 7);
  const commercialQuiz = presentDeck(getQuizBySubject("commerciale")).slice(0, 7);
  return {
    adminQuiz,
    commercialQuiz,
    quiz: [...adminQuiz, ...commercialQuiz],
  };
}
