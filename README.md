# Prova Unica B3 · Studio

Web app per esercitarsi alla **prova unica** del concorso pubblico per esami per la copertura di n. 5 posti a tempo indeterminato nel profilo di **Assistente tecnico-amministrativo, posizione economico-professionale B3** (Camera di Commercio I.A.T.A. di Trento, 2026).

Pensata per chi ha già superato la prova preselettiva e si prepara alla prova del **21 ottobre 2026**.

## Cosa include

- **Schede di studio ampliate**: 8 argomenti e 41 punti con materiale completo (spiegazione, glossario, «In prova», riferimenti) su L. 241/1990, GDPR, D.Lgs. 33/2013, D.P.R. 445/2000 e diritto commerciale (imprenditore, società, Registro imprese / REA)
- **Audio accessibile**: lettura ad alta voce del materiale Studio (scheda intera o singolo punto) tramite sintesi vocale del browser in italiano, con play/pausa/stop e velocità
- **Banca quiz** a risposta multipla con spiegazioni
- **Allenamento risposte sintetiche** (limite 1800 battute, schemi modello, autovalutazione /4)
- **Simulazione d’esame** in formato ufficiale: 14 quiz + 4 sintetiche, timer 180 minuti, soglia 18/30
- **Tracce storiche** (Trento 2021) e criteri ufficiali 2026
- Progressi salvati in locale nel browser

## Avvio locale

```bash
npm install
npm run dev
```

Apri [http://127.0.0.1:43127](http://127.0.0.1:43127).

## Deploy su Vercel

1. Collega il repository GitHub del progetto a [Vercel](https://vercel.com).
2. Framework: **Next.js** (rilevato automaticamente).
3. Build Command: `npm run build` · Output: gestito da Next.js.
4. In **Settings → General → Node.js Version** scegli **22.x** (o 20.x).
5. Ridistribuisci dopo ogni push su `main`.

Il messaggio Vercel su *anonymous telemetry* di Next.js **non è un errore**: la build continua dopo quella riga.

## Script

| Comando | Descrizione |
| --- | --- |
| `npm run dev` | Server di sviluppo (porta 43127) |
| `npm run build` | Build di produzione |
| `npm run start` | Avvio della build |
| `npm run lint` | ESLint |

## Nota

Materiale di studio **non ufficiale**. Per date, criteri e documenti aggiornati consulta sempre il [sito della Camera di Commercio di Trento](https://www.tn.camcom.it/concorso-pubblico-tempo-indeterminato-b3-anno-2026).
