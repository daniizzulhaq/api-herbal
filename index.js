const express = require('express');
const app = express();
const plantsData = require('./plants.json');

// Endpoint untuk menampilkan semua data tanaman
app.get('/api/plants', (req, res) => {
    res.json(plantsData);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server berjalan pada port ${PORT}`);
});
