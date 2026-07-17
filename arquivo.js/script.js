
//Interatividadecom javascript para serviços

        const tipoServico = document.getElementById('tipoServico');
        const prazo = document.getElementById('prazo');
        const detalhes = document.getElementById('detalhes');
        const resumoJanela = document.getElementById('resumoJanela');
        const resumoTexto = document.getElementById('resumoTexto');
        const form = document.getElementById('formPedido');

        // Atualização em tempo real do resumo para dar interatividade ao cliente
        function atualizarResumo() {
            if(tipoServico.value) {
                resumoJanela.style.display = 'block';
                resumoTexto.innerHTML = `Solicitação para <strong>${tipoServico.value}</strong> com prioridade <strong>${prazo.value}</strong>.`;
            } else {
                resumoJanela.style.display = 'none';
            }
        }

        tipoServico.addEventListener('change', atualizarResumo);
        prazo.addEventListener('change', atualizarResumo);

        // Processa o formulário e envia os dados formatados diretamente para o seu WhatsApp corporativo
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const numeroTelefone = "244937291459"; // Seu contacto configurado
            const textoMensagem = `Olá Felisberto, gostaria de solicitar um orçamento:\n\n` +
                                  `*Serviço:* ${tipoServico.value}\n` +
                                  `*Prazo:* ${prazo.value}\n` +
                                  `*Detalhes:* ${detalhes.value}`;
            
            const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefone}&text=${encodeURIComponent(textoMensagem)}`;
            
            window.open(urlWhatsApp, '_blank');
        });


        
// Aguarda o DOM estar completamente carregado para garantir que os elementos existem, TESTEMUNHO
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SELECIONA O CONTENTOR E OS CARTÕES
    // Substitui '.testemunhos-container' e '.testemunho-card' pelas classes reais que usaste no teu HTML
    const container = document.querySelector('.testemunhos-grid'); 
    const cards = Array.from(container.querySelectorAll('.testemunho-card'));

    // Verifica se os elementos foram encontrados para evitar erros
    if (!container || cards.length === 0) {
        console.error("Não foi possível encontrar o contentor (.testemunhos-grid) ou os cartões (.testemunho-card). Verifica as tuas classes no HTML.");
        return;
    }

    // 2. CONFIGURAÇÃO INICIAL (Opcional, mas boa prática)
    // Garante que, ao carregar, apenas os 3 primeiros são visíveis e o resto está escondido.
    function renderizarInicial() {
        cards.forEach((card, index) => {
            if (index < 3) {
                card.style.display = 'block'; // Mostra os primeiros 3
            } else {
                card.style.display = 'none';  // Esconde o resto
            }
        });
    }
    
    // Executa a configuração inicial
    renderizarInicial();

    // 3. A FUNÇÃO DE ROTAÇÃO INFINITA
    function rodarTestemunhos() {
        // Seleciona todos os cartões *atuais* dentro do container (a ordem muda a cada rotação)
        const cartoesAtuais = container.querySelectorAll('.testemunho-card');
        
        // Se houver cartões suficientes para rodar
        if (cartoesAtuais.length > 3) {
            
            // Pega o primeiro cartão (o que está mais à esquerda)
            const primeiroCard = cartoesAtuais[0];
            
            // Move-o para o final do container.
            // O navegador cuida automaticamente de ajustar a visualização.
            // O 4º cartão (índice 3, escondido) passará a ser o 3º (índice 2, visível).
            // O 1º cartão que movemos para o final ficará escondido.
            container.appendChild(primeiroCard);
            
            // Re-aplica a lógica de visibilidade para garantir que apenas os 3 primeiros no DOM atual estão visíveis
            const novosCartoes = container.querySelectorAll('.testemunho-card');
            novosCartoes.forEach((card, index) => {
                if (index < 3) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    }

    // 4. CONFIGURA O TEMPORIZADOR (4.5 SEGUNDOS)
    // 4500 milissegundos = 4.5 segundos
    setInterval(rodarTestemunhos, 30000);

    console.log("Carrossel automático de testemunhos ativado. Rotação a cada 4.5 segundos.");
});
















































// Aguarda o DOM estar completamente carregado para garantir que os elementos existem
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SELECIONA O CONTENTOR E OS CARTÕES
    // Substitui '.testemunhos-container' e '.testemunho-card' pelas classes reais que usaste no teu HTML
    const container = document.querySelector('.testemunhos-grid'); 
    const cards = Array.from(container.querySelectorAll('.testemunho-card'));

    // Verifica se os elementos foram encontrados para evitar erros
    if (!container || cards.length === 0) {
        console.error("Não foi possível encontrar o contentor (.testemunhos-grid) ou os cartões (.testemunho-card). Verifica as tuas classes no HTML.");
        return;
    }

    // 2. CONFIGURAÇÃO INICIAL (Opcional, mas boa prática)
    // Garante que, ao carregar, apenas os 3 primeiros são visíveis e o resto está escondido.
    function renderizarInicial() {
        cards.forEach((card, index) => {
            if (index < 3) {
                card.style.display = 'block'; // Mostra os primeiros 3
            } else {
                card.style.display = 'none';  // Esconde o resto
            }
        });
    }
    
    // Executa a configuração inicial
    renderizarInicial();

    // 3. A FUNÇÃO DE ROTAÇÃO INFINITA
    function rodarTestemunhos() {
        // Seleciona todos os cartões *atuais* dentro do container (a ordem muda a cada rotação)
        const cartoesAtuais = container.querySelectorAll('.testemunho-card');
        
        // Se houver cartões suficientes para rodar
        if (cartoesAtuais.length > 3) {
            
            // Pega o primeiro cartão (o que está mais à esquerda)
            const primeiroCard = cartoesAtuais[0];
            
            // Move-o para o final do container.
            // O navegador cuida automaticamente de ajustar a visualização.
            // O 4º cartão (índice 3, escondido) passará a ser o 3º (índice 2, visível).
            // O 1º cartão que movemos para o final ficará escondido.
            container.appendChild(primeiroCard);
            
            // Re-aplica a lógica de visibilidade para garantir que apenas os 3 primeiros no DOM atual estão visíveis
            const novosCartoes = container.querySelectorAll('.testemunho-card');
            novosCartoes.forEach((card, index) => {
                if (index < 3) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    }

    // 4. CONFIGURA O TEMPORIZADOR (4.5 SEGUNDOS)
    // 4500 milissegundos = 4.5 segundos
    setInterval(rodarTestemunhos, 30000);

    console.log("Carrossel automático de testemunhos ativado. Rotação a cada 4.5 segundos.");
});






