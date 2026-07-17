
// 1. Importação dos módulos necessários
const express = require('express');
const helmet = require('helmet');

const app = express();

// 2. Ativa o Helmet para blindar os cabeçalhos HTTP contra vulnerabilidades web comuns
app.use(helmet());

// 3. Permite que o servidor entenda requisições com dados em formato JSON e formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 4. Exemplo de rota segura para o seu formulário de contacto ou orçamento
app.post('/enviar-pedido', (req, res) => {
    const { servico, objetivo } = req.body;

    // Se os dados existirem, o Helmet e as configurações garantem que a requisição está protegida
    if (!servico || !objetivo) {
        return res.status(400).json({ erro: 'Por favor, preencha todos os campos obrigatórios.' });
    }

    // Aqui entraria a lógica para enviar ao WhatsApp ou base de dados
    res.status(200).json({ mensagem: 'Pedido processado com segurança!' });
});

// 5. Configuração da porta e inicialização do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`[Website Solution] Servidor seguro rodando na porta ${PORT}`);
});




















