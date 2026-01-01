## Contesto accademico / Avvertenze

Questo folder contiene un mirror e fork evolutivo del repository https://github.com/grivalta/ninja-d.js contenente materiale sviluppato nell’ambito di un
**project work universitario per laurea triennale in Informatica**.

Il repository originario citato svolge la funzione di:
- documentazione progettuale
- PoC per una distribuzione del progetto NINJA[D] in ambiente Javascript
- contenitore per codice sorgente sperimentale
- testi e riferimenti bibliografici.

## Istruzioni

**N.B.:** il repository è predisposto per il lavoro in ambiente Windows
1. Clonare il presente repository
2. cd ninja-d\distributions\ninja-d.js
3. Dezippare la versione portabile di Node.js "Standalone Binary (.zip)" scaricandola dal sito https://nodejs.org/en/download/current
4. Aprire un prompt comandi nel percorso individuato ed eseguire il comando seguente (compresi i punti, virgolette escluse):
".\node\npm.cmd install node-red --no-package-lock --prefix ."
5. Avviare l'applicazione lanciando il file di avvio "start-ninjad.cmd"; la dashboard risponde alla URL http://127.0.0.1:1881/dashboard; l'editor dei flussi Node-RED è accessibile alla URL http://127.0.0.1:1881/


Un **setup completo e di immediato utilizzo** della dashboard Ninja-d.js si trova alla release https://github.com/grivalta/ninja-d/releases/tag/v1.0.0 (o successive, se presenti).
Seguire le istruzioni indicate al precedente link (è anche presente il codice sorgente dell'intero repository alla data della release).  


## DISCLAIMER

Il materiale pubblicato è fornito **“così com’è”** (*as is*); in particolare esso:
- non costituisce consulenza professionale
- non è soggetto a garanzia di completezza, correttezza e aggiornamento (anche in termini di sicurezza)
- non è destinato ad ambienti produttivi o commerciali.

L’autore **non garantisce** in alcun modo supporto, manutenzione o riscontri alle eventuali issue o richieste ricevute.

L’utilizzo del repository è ad **esclusiva responsabilità dell’utente**.

Grazie.
