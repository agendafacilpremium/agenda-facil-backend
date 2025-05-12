const mercadopago = require('mercadopago');
mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN,
});

exports.criarPagamento = async (req, res) => {
  try {
    const { valor, descricao } = req.body;

    const pagamento = {
      transaction_amount: parseFloat(valor),
      description: descricao,
      payment_method_id: 'pix',
      payer: { email: 'cliente@exemplo.com' },
    };

    const resposta = await mercadopago.payment.create(pagamento);
    res.json({ qr_code: resposta.body.point_of_interaction.transaction_data.qr_code_base64 });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Erro ao criar pagamento' });
  }
};
