let annoScelto = msg.anno || "2025"; 

if (Array.isArray(msg.payload)) {
    let dati = msg.payload;

    let datiPuliti = dati.map(obj => {  //Pulizia caratteri spuri
        let newObj = {};
        for (let key in obj) {
            let cleanKey = key.replace(/[\uFEFF\u200B-\u200D\u2060]/g, '').trim();
            let val = obj[key];
            if (typeof val === 'string') val = val.replace(/[\uFEFF\u200B-\u200D\u2060]/g, '').trim();
            newObj[cleanKey] = val;
        }
        return newObj;
    });

    const riga = datiPuliti.find(r => String(r.anno) === String(annoScelto));

    if (riga) {
        node.status({fill:"green", shape:"dot", text:"Visualizzo: " + annoScelto});
        const common = { anno_rif: annoScelto };

        return [[  //Il nodo invierà tutti i messaggi in sequenza sulla porta 1 (uscita del nodo function)
        //Indici REDDITIVITA'
        { topic: "ROE", payload: { valore: parseFloat(riga.ROE), obi: parseFloat(riga.Obi_ROE), label: "RN / KN" }, ...common },
        { topic: "ROI", payload: { valore: parseFloat(riga.ROI), obi: parseFloat(riga.Obi_ROI), label: "RO / KI" }, ...common },
        { topic: "ROS", payload: { valore: parseFloat(riga.ROS), obi: parseFloat(riga.Obi_ROS), label: "RO / PLV" }, ...common },
        { topic: "ROD", payload: { valore: parseFloat(riga.ROD), obi: parseFloat(riga.Obi_ROD), label: "OF / KT" }, ...common },
        //Indici CONTO ECONOMICO
        { topic: "PLV",    payload: { valore: parseFloat(riga.PLV),    obi: parseFloat(riga.Obi_PLV),    label: "Prod. Lorda Vendibile" }, ...common },
        { topic: "CC",     payload: { valore: parseFloat(riga.CC),     obi: parseFloat(riga.Obi_CC),     label: "Costi Correnti" }, ...common },
        { topic: "VA",     payload: { valore: parseFloat(riga.VA),     obi: parseFloat(riga.Obi_VA),     label: "Valore Aggiunto" }, ...common },
        { topic: "RN",     payload: { valore: parseFloat(riga.RN),     obi: parseFloat(riga.Obi_RN),     label: "Reddito Netto" }, ...common },
        { topic: "EBITDA", payload: { valore: parseFloat(riga.EBITDA), obi: parseFloat(riga.Obi_EBITDA), label: "Margine Op. Lordo" }, ...common },
        { topic: "PNA",    payload: { valore: parseFloat(riga.PNA),    obi: parseFloat(riga.Obi_PNA),    label: "Prod. Netto Aziendale" }, ...common },
        { topic: "RO",     payload: { valore: parseFloat(riga.RO),     obi: parseFloat(riga.Obi_RO),     label: "Reddito Operativo" }, ...common },
        { topic: "DIST",   payload: { valore: 158.0,                   obi: 200.0,                       label: "Redditi Distribuiti" }, ...common },
        //Indici STATO PATRIMONIALE
        { topic: "KF", payload: { valore: parseFloat(riga.KF), obi: parseFloat(riga.Obi_KF), label: "Capitale Fisso" }, ...common },
        { topic: "KC", payload: { valore: parseFloat(riga.KC), obi: parseFloat(riga.Obi_KC), label: "Capitale Circolante" }, ...common },
        { topic: "KI", payload: { valore: parseFloat(riga.KI), obi: parseFloat(riga.Obi_KI), label: "Impieghi Totali" }, ...common },
        { topic: "KN", payload: { valore: parseFloat(riga.KN), obi: parseFloat(riga.Obi_KN), label: "Patrimonio Netto" }, ...common },
        { topic: "KT", payload: { valore: parseFloat(riga.KT), obi: parseFloat(riga.Obi_KT), label: "Capitale di Terzi" }, ...common }
    ]];
    } else {
        node.status({fill:"red", shape:"ring", text:"Anno " + annoScelto + " inesistente sul file"});
    }
}
return null;