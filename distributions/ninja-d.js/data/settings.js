module.exports = {
    uiPort: process.env.PORT || 1881,
    flowFile: 'flows.json',
    editorTheme: {
        palette: {
            editable: true
        },
		projects: { enabled: false }
    },
    logging: {
        console: {
            level: "info"
        }
    },
	adminAuth: null
};
