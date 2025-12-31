const activities = msg.payload;
let ganttCode = "";
let taskIdCounter = 1;

const cleanKey = (key) => {
    return key.replace(/[\uFEFF\u200B\u200C\u200D\u200E\u200F]/g, "").trim();
};

const parseDateItalian = (dateString) => {
    const parts = dateString.split(' ');
    const datePart = parts[0];
    const timePart = parts[1] || '00:00';
    const dateComponents = datePart.split('/');
    if (dateComponents.length < 3) return new Date('Invalid Date');
    const YYYY = dateComponents[2];
    const MM = dateComponents[1];
    const DD = dateComponents[0];
    const isoString = `${YYYY}-${MM}-${DD}T${timePart}:00`;
    return new Date(isoString);
};


/*ganttCode += `
---
displayMode: compact
---
gantt */
ganttCode += `gantt
    dateFormat  YYYY-MM-DD
    axisFormat %Y-%m-%d\n`;

activities.forEach(activity => {
    const cleanedActivity = {};
    for (const key in activity) {
        if (activity.hasOwnProperty(key)) {
            cleanedActivity[cleanKey(key)] = activity[key];
        }
    }

    const taskName = cleanedActivity.task_name;
    const startDateString = cleanedActivity.start_date;
    const endDateString = cleanedActivity.end_date;
    const stateString = cleanedActivity.state;

    if (!taskName) {
        node.warn("Nome task non trovato");
        return;
    }

    const startDate = parseDateItalian(startDateString);
    const endDate = parseDateItalian(endDateString);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        node.warn(`Date non valide; task "${taskName}".`);
        return;
    }

    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const startYMD = startDate.toISOString().split('T')[0];
    const taskId = `t${taskIdCounter++}`;
    const taskLine = `    ${taskName} :${stateString}, ${taskId}, ${startYMD}, ${diffDays}d\n`;

    //GLR.Sost: aggiunta link ipertestuali d'esempio  ganttCode += taskLine;
    ganttCode += taskLine;

});

msg.payload = ganttCode;


return msg;