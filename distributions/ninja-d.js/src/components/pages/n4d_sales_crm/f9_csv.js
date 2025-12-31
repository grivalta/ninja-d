const rows = msg.payload;
if (!rows || rows.length === 0) return null;

const keys = Object.keys(rows[0]);
const labelColumn = keys[0];
const typeColumn = keys[1];
const mesiKeys = keys.slice(2);

const ortaggi = rows.map(row => {
    const dataValues = mesiKeys.map(meseKey => {
        let val = row[meseKey];
        if (typeof val === 'string') val = val.replace(',', '.').trim();
        return parseFloat(val) || 0;
    });

    return {
        name: row[labelColumn],
        type: row[typeColumn] || 'line',
        data: dataValues
    };
});

msg.payload = {
    mesi: mesiKeys,
    prodotti: ortaggi
};

return msg;