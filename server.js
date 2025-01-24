import express from 'express';
import path from 'path';
import obtenerPrecioCafe from './index.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (como tu HTML)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/precio-cafe', async (req, res) => {
  try {
    const precios = await obtenerPrecioCafe();
    res.json({ precios });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
