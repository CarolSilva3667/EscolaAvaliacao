require('dotenv').config();
const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors({
  origin: 'http://127.0.0.1:5500',
  credentials: true
}));

const turmasRoutes = require('./src/routes/turmas.routes');
app.use('/turmas', turmasRoutes);

const professoresRoutes = require('./src/routes/professores.routes');
app.use('/professores', professoresRoutes);

app.post('/login', (req, res) => {
  console.log("Dados recebidos no servidor:", req.body);

  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({
      message: "Por favor, informe o e-mail e a senha."
    });
  }

  return res.status(200).json({
    message: "Login aceito!",
    nome: "Professor Hendrigue"
  });
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

