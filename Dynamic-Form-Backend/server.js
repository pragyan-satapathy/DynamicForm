const express = require('express');
const cors = require('cors');
const {formConfig} = require('./constants')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.json(formConfig);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
