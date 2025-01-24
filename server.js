import express from 'express';
import path from 'path';
import obtenerPrecioCafe from './index.js';
import cors from 'cors';
import { fileURLToPath } from 'url';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.get('/precio-cafe', async (req, res) => {
  try {
    const precios = await obtenerPrecioCafe();
    res.json({ precios });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
