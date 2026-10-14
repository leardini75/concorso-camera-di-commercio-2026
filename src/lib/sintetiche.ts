import type { SubjectKey } from "./exam";

export type ShortPrompt = {
  id: string;
  subject: SubjectKey;
  title: string;
  prompt: string;
  /** Schema di risposta modello (per studio; non è la sola risposta corretta) */
  modelAnswer: string;
  keypoints: string[];
  source?: string;
};

export const SHORT_PROMPTS: ShortPrompt[] = [
  {
    id: "sa-adm-01",
    subject: "amministrativo",
    title: "Nullità del provvedimento",
    prompt:
      "Illustri il candidato i casi di nullità del provvedimento amministrativo previsti dall'ordinamento.",
    keypoints: [
      "Mancanza elementi essenziali",
      "Difetto assoluto di attribuzione",
      "Violazione o elusione del giudicato",
      "Altri casi previsti dalla legge",
      "Differenza rispetto all'annullabilità",
    ],
    modelAnswer: `Il provvedimento amministrativo è nullo nei casi tipizzati dall'art. 21-septies della L. 241/1990. In particolare, è nullo quando manca degli elementi essenziali, quando è viziato da difetto assoluto di attribuzione, ovvero quando è stato adottato in violazione o elusione del giudicato, nonché negli altri casi espressamente previsti dalla legge.

La nullità comporta l'inefficacia radicale dell'atto, rilevabile d'ufficio e senza termini decadenziali tipici dell'annullabilità. Si distingue dall'annullabilità (art. 21-octies), che riguarda i vizi di legittimità (violazione di legge, eccesso di potere, incompetenza relativa) e rende l'atto impugnabile nei termini.

Nella risposta conviene richiamare esempi (atto privo di oggetto; organo radicalmente incompetente) e ricordare che l'annullamento giurisdizionale o d'ufficio opera su atti annullabili, non su quelli nulli, che sono già privi di effetti.`,
    source: "Traccia tipo prova scritta CCIAA Trento 2021",
  },
  {
    id: "sa-adm-02",
    subject: "amministrativo",
    title: "Dovere di motivazione",
    prompt:
      "Illustri il candidato il dovere di motivazione del provvedimento amministrativo.",
    keypoints: [
      "Art. 3 L. 241/1990",
      "Presupposti di fatto e ragioni giuridiche",
      "Esclusioni (atti normativi e generali)",
      "Funzioni della motivazione",
      "Motivazione per relationem",
    ],
    modelAnswer: `Ai sensi dell'art. 3 della L. 241/1990, ogni provvedimento amministrativo, compresi quelli concernenti l'organizzazione amministrativa, lo svolgimento dei pubblici concorsi e il personale, deve essere motivato, salvo che riguardino atti normativi o a contenuto generale.

La motivazione indica i presupposti di fatto e le ragioni giuridiche che hanno determinato la decisione, in relazione alle risultanze dell'istruttoria. Essa consente il controllo di legittimità, tutela il contraddittorio e rende conoscibile il percorso decisionale.

È ammessa la motivazione per relationem, purché il documento richiamato sia chiaramente identificato e messo a disposizione. L'omessa o insufficiente motivazione può determinare l'illegittimità dell'atto, salvi i casi in cui la legge esclude l'obbligo.`,
    source: "Traccia tipo prova scritta CCIAA Trento 2021",
  },
  {
    id: "sa-adm-03",
    subject: "amministrativo",
    title: "Art. 97 Cost.",
    prompt:
      "Illustri il candidato i principi costituzionali dell'azione amministrativa di cui all'articolo 97 della Costituzione.",
    keypoints: [
      "Buon andamento",
      "Imparzialità",
      "Organizzazione per legge",
      "Collegamento con L. 241/1990",
      "Trasparenza ed efficienza",
    ],
    modelAnswer: `L'art. 97 Cost. stabilisce che i pubblici uffici sono organizzati secondo disposizioni di legge, in modo che siano assicurati il buon andamento e l'imparzialità dell'amministrazione. Il buon andamento richiama efficacia, efficienza ed economicità; l'imparzialità impone trattamenti equi e non discriminatori, nonché la separazione tra politica e gestione.

Tali principi sono sviluppati dalla L. 241/1990 (art. 1) e dalla disciplina della trasparenza. Nella risposta è utile collegare l'art. 97 al dovere di motivazione, alla partecipazione procedimentale e al divieto di abuso.`,
    source: "Traccia tipo prova scritta CCIAA Trento 2021",
  },
  {
    id: "sa-adm-04",
    subject: "amministrativo",
    title: "Fasi del procedimento",
    prompt:
      "Illustri il candidato le fasi del procedimento amministrativo.",
    keypoints: [
      "Iniziativa",
      "Istruttoria",
      "Decisoria",
      "Integrativa dell'efficacia",
      "Ruolo del responsabile",
    ],
    modelAnswer: `Il procedimento amministrativo si articola tipicamente in: (1) fase di iniziativa, d'ufficio o su istanza di parte; (2) fase istruttoria, in cui il responsabile acquisisce fatti, documenti e pareri, garantendo partecipazione; (3) fase decisoria, con adozione del provvedimento; (4) eventuale fase integrativa dell'efficacia (controlli, comunicazioni, pubblicazioni).

Il responsabile del procedimento coordina l'istruttoria e può adottare l'atto se competente, ovvero proporlo all'organo decidente. Termini, comunicazione di avvio e preavviso di rigetto sono strumenti di garanzia trasversali a queste fasi.`,
    source: "Traccia tipo prova scritta CCIAA Trento 2021",
  },
  {
    id: "sa-adm-05",
    subject: "amministrativo",
    title: "Preavviso di rigetto",
    prompt:
      "Dopo aver indicato in che cosa consiste la partecipazione al procedimento, descriva il candidato la disciplina della comunicazione di avvio e del preavviso di rigetto, precisandone le differenze.",
    keypoints: [
      "Partecipazione artt. 7-10",
      "Comunicazione di avvio",
      "Art. 10-bis",
      "Destinatari diversi",
      "Effetti sul provvedimento",
    ],
    modelAnswer: `La partecipazione consente agli interessati di conoscere l'avvio del procedimento, prendere visione degli atti e presentare memorie. La comunicazione di avvio (artt. 7-8) informa sull'oggetto, sull'ufficio, sul responsabile e sui termini.

Il preavviso di rigetto (art. 10-bis) interviene prima di un provvedimento negativo su istanza: comunica i motivi ostativi e assegna almeno dieci giorni per osservazioni. Differisce dall'avvio perché presuppone un'istruttoria già orientata al diniego e mira a un contraddittorio mirato sui motivi di rigetto.`,
  },
  {
    id: "sa-adm-06",
    subject: "amministrativo",
    title: "Accesso e trasparenza",
    prompt:
      "Dopo aver indicato che cosa si intende per trasparenza amministrativa, descriva il candidato le diverse forme di accesso ai documenti, soffermandosi sull'accesso civico generalizzato.",
    keypoints: [
      "Trasparenza D.Lgs. 33/2013",
      "Accesso documentale L. 241",
      "Accesso civico semplice",
      "Accesso civico generalizzato",
      "Limiti art. 5-bis",
    ],
    modelAnswer: `La trasparenza è l'accessibilità totale dei dati e documenti detenuti dalle PA, per favorire il controllo diffuso sull'esercizio delle funzioni e sull'uso delle risorse (D.Lgs. 33/2013).

Esistono: (a) accesso documentale L. 241, basato su interesse diretto, concreto e attuale; (b) accesso civico semplice, per ottenere la pubblicazione di dati obbligatori omessi; (c) accesso civico generalizzato (FOIA), esercitabile da chiunque, salvo i limiti a tutela di interessi pubblici e privati sensibili (art. 5-bis).`,
  },
  {
    id: "sa-adm-07",
    subject: "amministrativo",
    title: "GDPR in sintesi",
    prompt:
      "Illustri il candidato i principi fondamentali del trattamento dei dati personali secondo il Regolamento (UE) 679/2016 (GDPR), con particolare attenzione al ruolo del titolare nella pubblica amministrazione.",
    keypoints: [
      "Art. 5 principi",
      "Base giuridica art. 6",
      "Titolare vs responsabile",
      "Diritti dell'interessato",
      "Accountability",
    ],
    modelAnswer: `Il GDPR impone liceità, correttezza, trasparenza, limitazione della finalità, minimizzazione, esattezza, limitazione della conservazione, integrità e riservatezza (art. 5). Ogni trattamento richiede una base giuridica (art. 6), tipicamente obbligo legale o interesse pubblico per le PA.

Il titolare determina finalità e mezzi; il responsabile tratta per conto del titolare. L'interessato ha diritti di accesso, rettifica, cancellazione (nei limiti), limitazione, opposizione e portabilità. L'accountability impone misure adeguate e dimostrabili di conformità.`,
  },
  {
    id: "sa-adm-08",
    subject: "amministrativo",
    title: "D.P.R. 445/2000",
    prompt:
      "Illustri il candidato gli strumenti di dichiarazione sostitutiva previsti dal D.P.R. 445/2000 e le conseguenze delle dichiarazioni mendaci.",
    keypoints: [
      "Art. 46 certificazioni",
      "Art. 47 atto di notorietà",
      "Controlli art. 71",
      "Decadenza art. 75",
      "Sanzioni penali art. 76",
    ],
    modelAnswer: `Il D.P.R. 445/2000 consente dichiarazioni sostitutive di certificazione (art. 46) e di atto di notorietà (art. 47), semplificando i rapporti con la PA. L'amministrazione può effettuare controlli (art. 71).

Se emerge la non veridicità, il dichiarante decade dai benefici conseguiti (art. 75) e può rispondere penalmente per false dichiarazioni (art. 76). Nella risposta è utile collegare lo strumento alle domande di concorso e alle autocertificazioni di titoli.`,
  },
  {
    id: "sa-com-01",
    subject: "commerciale",
    title: "Registro delle imprese",
    prompt:
      "Illustri il candidato il Registro delle imprese: natura, funzioni e effetti della pubblicità.",
    keypoints: [
      "Pubblico registro presso CCIAA",
      "Giudice del Registro",
      "Pubblicità legale",
      "Soggetti obbligati",
      "Rapporto con REA",
    ],
    modelAnswer: `Il Registro delle imprese è un pubblico registro tenuto dalle Camere di commercio, con vigilanza del giudice del Registro. Raccoglie iscrizioni relative a imprese individuali e società, atti modificativi e notizie rilevanti.

La pubblicità ha funzione di conoscibilità e, per molti atti, efficacia legale (opponibilità ai terzi; per le società di capitali, efficacia costitutiva dell'iscrizione). Si distingue dal REA, che raccoglie dati economico-amministrativi con regime pubblicitario diverso.`,
    source: "Traccia tipo prova scritta CCIAA Trento 2021",
  },
  {
    id: "sa-com-02",
    subject: "commerciale",
    title: "S.r.l. unipersonale",
    prompt:
      "Illustri il candidato la disciplina della S.r.l. unipersonale, con particolare riguardo alla responsabilità del socio unico.",
    keypoints: [
      "Ammissibilità del socio unico",
      "Responsabilità limitata condizionata",
      "Adempimenti pubblicitari",
      "Conferimenti",
      "Rischio di responsabilità illimitata",
    ],
    modelAnswer: `La S.r.l. può essere costituita o diventare unipersonale. In presenza degli adempimenti di pubblicità e di conferimento previsti dal codice, il socio unico beneficia della responsabilità limitata: per le obbligazioni sociali risponde solo la società.

Se tali adempimenti mancano, il socio unico può rispondere illimitatamente per le obbligazioni sorte nel periodo di unipersonalità. Nella risposta conviene richiamare l'indicazione della unipersonalità negli atti e nella corrispondenza.`,
    source: "Traccia tipo prova scritta CCIAA Trento 2021",
  },
  {
    id: "sa-com-03",
    subject: "commerciale",
    title: "Imprenditore art. 2082",
    prompt:
      "Illustri il candidato gli elementi caratterizzanti il concetto di imprenditore ai sensi dell'articolo 2082 c.c.",
    keypoints: [
      "Professionalità",
      "Attività economica",
      "Organizzazione",
      "Produzione o scambio",
      "Distinzione impresa/azienda",
    ],
    modelAnswer: `L'art. 2082 c.c. definisce imprenditore chi esercita professionalmente un'attività economica organizzata al fine della produzione o dello scambio di beni o servizi. Gli elementi sono: professionalità (abitualità e non occasionalità), economicità, organizzazione di beni/lavoro, finalità produttiva o di scambio.

Si distingue l'impresa (attività) dall'azienda (complesso di beni organizzati, art. 2555) e dall'imprenditore (soggetto). La qualifica determina obblighi pubblicitari, contabili e concorsuali, con temperamenti per il piccolo imprenditore.`,
    source: "Traccia tipo prova scritta CCIAA Trento 2021",
  },
  {
    id: "sa-com-04",
    subject: "commerciale",
    title: "Socio accomandante",
    prompt:
      "Illustri il candidato la figura del socio accomandante nella società in accomandita semplice.",
    keypoints: [
      "Responsabilità limitata",
      "Divieto di immistione",
      "Accomandatari vs accomandanti",
      "Conseguenze dell'immistione",
      "Ragione sociale",
    ],
    modelAnswer: `Nella S.a.s. coesistono accomandatari (responsabilità illimitata e solidale; amministrazione) e accomandanti (responsabilità limitata alla quota). L'accomandante non può compiere atti di amministrazione né trattare o concludere affari in nome della società, salvo procura speciale per singoli affari.

L'immistione nella gestione comporta responsabilità illimitata e solidale verso i terzi per le obbligazioni sociali e può determinare altre conseguenze previste dalla legge. La ragione sociale contiene il nome di almeno un accomandatario.`,
    source: "Traccia tipo prova scritta CCIAA Trento 2021",
  },
  {
    id: "sa-com-05",
    subject: "commerciale",
    title: "REA e Registro",
    prompt:
      "Illustri il candidato le differenze di regime pubblicitario fra Repertorio economico-amministrativo e Registro delle imprese, con esempi.",
    keypoints: [
      "Pubblicità legale vs informativa",
      "Atti iscrivibili",
      "Opponibilità",
      "Esempi pratici",
      "Ruolo camerale",
    ],
    modelAnswer: `Il Registro delle imprese assicura pubblicità legale di atti e fatti rilevanti (costituzione, modifiche, cessazione, bilanci, ecc.), con effetti di opponibilità e, per le società di capitali, costitutivi.

Il REA raccoglie notizie economiche, statistiche e amministrative (es. unità locali, addetti, attività secondarie) con funzione conoscitiva e non equivalente alla pubblicità legale tipica. Esempio: l'atto costitutivo di S.r.l. va iscritto nel Registro; l'apertura di un'unità locale è tipicamente annotata anche via REA.`,
  },
  {
    id: "sa-com-06",
    subject: "commerciale",
    title: "Società di capitali vs persone",
    prompt:
      "Confronti il candidato società di persone e società di capitali quanto a responsabilità dei soci, autonomia patrimoniale e pubblicità costitutiva.",
    keypoints: [
      "Responsabilità illimitata/limitata",
      "Autonomia patrimoniale",
      "Personalità giuridica",
      "Iscrizione costitutiva",
      "Esempi S.n.c. / S.r.l.",
    ],
    modelAnswer: `Nelle società di persone (S.s., S.n.c., S.a.s.) prevale il rilievo della persona del socio: responsabilità spesso illimitata (con temperamenti per accomandanti) e autonomia patrimoniale imperfetta.

Nelle società di capitali (S.p.A., S.a.p.A., S.r.l.) per le obbligazioni sociali risponde tipicamente solo la società; i soci rischiano quanto conferito. L'iscrizione nel Registro ha efficacia costitutiva della personalità giuridica. Nella S.n.c. tutti i soci rispondono solidalmente e illimitatamente; nella S.r.l. risponde il patrimonio sociale.`,
  },
  {
    id: "sa-com-07",
    subject: "commerciale",
    title: "Fusione – schema",
    prompt:
      "Dopo aver descritto in cosa consiste la fusione di società, illustri il candidato il procedimento, concentrandosi su progetto, atto di fusione e pubblicità.",
    keypoints: [
      "Fusione per unione / incorporazione",
      "Progetto di fusione",
      "Situazione patrimoniale e relazioni",
      "Decisione e atto",
      "Iscrizione e opponibilità",
    ],
    modelAnswer: `La fusione unisce più società in una nuova (fusione in senso stretto) o incorpora una o più società in altra esistente. Il procedimento prevede redazione e deposito/iscrizione del progetto di fusione, predisposizione della situazione patrimoniale e delle relazioni previste, decisione dei soci, stipula dell'atto di fusione e iscrizione nel Registro delle imprese, da cui decorrono gli effetti verso i terzi secondo legge.`,
  },
  {
    id: "sa-com-08",
    subject: "commerciale",
    title: "Impresa e piccolo imprenditore",
    prompt:
      "Distingua il candidato imprenditore commerciale e piccolo imprenditore, evidenziando le principali conseguenze giuridiche.",
    keypoints: [
      "Art. 2082 e 2083",
      "Obblighi contabili",
      "Registro imprese",
      "Procedure concorsuali",
      "Esempi",
    ],
    modelAnswer: `L'imprenditore commerciale esercita attività elencate o comunque commerciali e soggiace a iscrizione, scritture contabili e regime concorsuale ordinario. Il piccolo imprenditore (art. 2083: coltivatori diretti, artigiani, piccoli commercianti, attività organizzata prevalentemente con lavoro proprio e dei familiari) beneficia di semplificazioni e di un regime concorsuale attenuato.

La distinzione rileva per obblighi pubblicitari e tutele dei creditori. Nella pratica camerale, la corretta qualificazione influenza le iscrizioni e le pratiche al Registro imprese.`,
  },
];

export function getShortBySubject(subject: SubjectKey | "all"): ShortPrompt[] {
  if (subject === "all") return SHORT_PROMPTS;
  return SHORT_PROMPTS.filter((p) => p.subject === subject);
}
