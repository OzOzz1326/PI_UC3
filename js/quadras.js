// Script de Interatividade para a Página de Quadras SportInCity

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar Tabs de Filtros (Horário vs Data)
    const tabHorario = document.getElementById('tab-horario-btn');
    const tabData = document.getElementById('tab-data-btn');
    const conteudohorario = document.getElementById('tab-horario');
    const conteudoData = document.getElementById('tab-data');

    if (tabHorario && tabData) {
        tabHorario.addEventListener('click', () => {
            tabHorario.classList.add('active');
            tabData.classList.remove('active');
            conteudohorario.classList.add('active');
            conteudoData.classList.remove('active');
        });

        tabData.addEventListener('click', () => {
            tabData.classList.add('active');
            tabHorario.classList.remove('active');
            conteudoData.classList.add('active');
            conteudohorario.classList.remove('active');
        });
    }

    // 2. Gerar Meses Dinâmicos (Próximos 3 meses a partir do mês atual)
    const listaMesesContainer = document.getElementById('lista-meses');
    if (listaMesesContainer) {
        const nomesMeses = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        const dataAtual = new Date();
        const mesAtualIndex = dataAtual.getMonth();

        // Limita a 3 meses a partir de agora
        for (let i = 0; i < 3; i++) {
            const index = (mesAtualIndex + i) % 12;
            const nomeMes = nomesMeses[index];

            const label = document.createElement('label');
            label.className = 'checkbox-item';
            label.innerHTML = `
                <input type="checkbox" name="mes" value="${nomeMes}">
                ${nomeMes}
            `;
            listaMesesContainer.appendChild(label);
        }
    }

    // 3. Dados das Quadras para o Modal estilo Shein (Slide 5 do Protótipo)
    const quadrasDados = {
        1: {
            titulo: "QUADRA 01",
            subtitulo: "Fut5 / Fut7 Sintético",
            fotos: [
                "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop"
            ],
            rating: "5,0",
            avaliacoesCount: "3 avaliações",
            preco: "R$ 150,00/hora",
            endereco: "Mult Sport - Unidade Centro, São Carlos - SP",
            capacidade: "5 pessoas por time (4 na linha + 1 no gol)",
            coberta: "Não possui (Descoberta)",
            churrasco: "Possui (Agendamento prévio / 2 Banheiros / Mesa de Sinuca)",
            cameraView: "Disponível (Transmissão em tempo real no app)",
            vestiarios: "Sim (Vestiários Masculino e Feminino com chuveiro)"
        },
        2: {
            titulo: "QUADRA 02",
            subtitulo: "Futbol de Salão / Futsal",
            fotos: [
                "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop"
            ],
            rating: "4,9",
            avaliacoesCount: "5 avaliações",
            preco: "R$ 140,00/hora",
            endereco: "Mult Sport - Unidade Getúlio Vargas, São Carlos - SP",
            capacidade: "5 pessoas por time (Futsal Oficial)",
            coberta: "Sim (Cobertura Térmica)",
            churrasco: "Possui (Agendamento prévio com churrasqueira gourmet)",
            cameraView: "Disponível",
            vestiarios: "Sim (Feminino e Masculino)"
        },
        3: {
            titulo: "QUADRA 03",
            subtitulo: "Beach Tennis / FutVôlei",
            fotos: [
                "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1000&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1000&auto=format&fit=crop"
            ],
            rating: "5,0",
            avaliacoesCount: "8 avaliações",
            preco: "R$ 120,00/hora",
            endereco: "SportInCity Arena Areia, São Carlos - SP",
            capacidade: "4 pessoas (Duplas)",
            coberta: "Não possui (Iluminação LED Noturna)",
            churrasco: "Possui área integrada com quiosque",
            cameraView: "Disponível",
            vestiarios: "Sim (Com duchas externas e vestiários)"
        }
    };

    // Controladores do Modal Shein
    const modalShein = document.getElementById('modal-shein-overlay');
    const btnFecharModal = document.getElementById('modal-fechar-btn');
    let fotoAtualIndex = 0;
    let fotosAtuais = [];

    window.abrirModalQuadra = function(id) {
        const dados = quadrasDados[id] || quadrasDados[1];
        
        document.getElementById('shein-titulo').textContent = dados.titulo;
        document.getElementById('shein-rating').textContent = `★ ${dados.rating} · ${dados.avaliacoesCount}`;
        document.getElementById('shein-preco').textContent = `Valor: ${dados.preco}`;
        document.getElementById('shein-endereco').textContent = dados.endereco;
        document.getElementById('shein-cap').textContent = dados.capacidade;
        document.getElementById('shein-coberta').textContent = dados.coberta;
        document.getElementById('shein-churras').textContent = dados.churrasco;
        document.getElementById('shein-camera').textContent = dados.cameraView;
        document.getElementById('shein-vestiario').textContent = dados.vestiarios;

        fotosAtuais = dados.fotos;
        fotoAtualIndex = 0;
        atualizarFotoGaleria();

        if (modalShein) {
            modalShein.classList.add('active');
        }
    };

    function atualizarFotoGaleria() {
        const imgElement = document.getElementById('shein-img');
        if (imgElement && fotosAtuais.length > 0) {
            imgElement.src = fotosAtuais[fotoAtualIndex];
        }
    }

    const btnPrev = document.getElementById('galeria-prev');
    const btnNext = document.getElementById('galeria-next');

    if (btnPrev && btnNext) {
        btnPrev.addEventListener('click', () => {
            fotoAtualIndex = (fotoAtualIndex - 1 + fotosAtuais.length) % fotosAtuais.length;
            atualizarFotoGaleria();
        });

        btnNext.addEventListener('click', () => {
            fotoAtualIndex = (fotoAtualIndex + 1) % fotosAtuais.length;
            atualizarFotoGaleria();
        });
    }

    if (btnFecharModal) {
        btnFecharModal.addEventListener('click', () => {
            modalShein.classList.remove('active');
        });
    }

    if (modalShein) {
        modalShein.addEventListener('click', (e) => {
            if (e.target === modalShein) {
                modalShein.classList.remove('active');
            }
        });
    }

    // Modal de Agendamento Simulado
    window.agendarQuadra = function() {
        alert("🎉 Agendamento solicitado com sucesso! Você será redirecionado para a escolha de pagamento (PIX / Cartão).");
    };

    // 4. Sistema de Comentários / Feedbacks (Usuário Logado Simulação)
    let usuarioLogado = true; // Por padrão simula logado
    const statusLoginText = document.getElementById('status-login-text');
    const btnToggleLogin = document.getElementById('btn-toggle-login');
    const inputComentario = document.getElementById('input-comentario');
    const btnEnviarComentario = document.getElementById('btn-enviar-comentario');
    const listaFeedbacks = document.getElementById('lista-feedbacks');

    function atualizarEstadoLogin() {
        if (usuarioLogado) {
            statusLoginText.textContent = "Logado como: Vitor Eduardo (Você pode comentar abaixo)";
            btnToggleLogin.textContent = "Simular Deslogar";
            inputComentario.disabled = false;
            inputComentario.placeholder = "Escreva o seu comentário sobre a experiência nesta quadra...";
            btnEnviarComentario.disabled = false;
        } else {
            statusLoginText.textContent = "Você precisa estar logado para comentar.";
            btnToggleLogin.textContent = "Simular Login";
            inputComentario.disabled = true;
            inputComentario.placeholder = "Faça login para poder comentar sobre a quadra.";
            btnEnviarComentario.disabled = true;
        }
    }

    if (btnToggleLogin) {
        btnToggleLogin.addEventListener('click', () => {
            usuarioLogado = !usuarioLogado;
            atualizarEstadoLogin();
        });
    }

    if (btnEnviarComentario) {
        btnEnviarComentario.addEventListener('click', () => {
            const texto = inputComentario.value.trim();
            if (texto === "") {
                alert("Por favor, digite um comentário antes de enviar.");
                return;
            }

            // Adicionar novo comentário na lista
            const novoFeedback = document.createElement('div');
            novoFeedback.className = 'feedback-card';
            novoFeedback.innerHTML = `
                <img src="../imagens/perfilpciture.jpg" alt="Foto Perfil" class="feedback-avatar" onerror="this.src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png'">
                <div class="feedback-conteudo">
                    <span class="feedback-usuario">Vitor Eduardo da Silva</span>
                    <p class="feedback-texto">${texto}</p>
                </div>
            `;

            listaFeedbacks.prepend(novoFeedback);
            inputComentario.value = "";
            alert("Comentário publicado com sucesso!");
        });
    }

    // Inicializar estado de login
    atualizarEstadoLogin();
});
