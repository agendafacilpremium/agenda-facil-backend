const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const agendamentoRoutes = require('./routes/agendamentoRoutes');
const { criarPagamento } = require('./services/mercadoPagoService');

app.use('/api', agendamentoRoutes);
app.post('/api/pagamento', criarPagamento);

app.get('/', (req, res) => {
  res.send('API Agenda Fácil Premium rodando com sucesso!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
