exports.agendarHorario = (req, res) => {
  const { nome, servico, data, horario } = req.body;

  console.log(`Novo agendamento: ${nome} - ${servico} - ${data} às ${horario}`);
  res.json({ mensagem: 'Agendamento realizado com sucesso!' });
};
