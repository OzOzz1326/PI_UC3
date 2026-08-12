# Página de Quadras do Site Sportincity

    - Não instale nada neste projeto
    - **NÃO USE** java script e nem uma outra linguagem neste projeto além de html e css.

## Objetivo da Página
Essas páginas servem para o usuário visualizar as quadras disponíveis em São Carlos, podendo filtrar por filial, espaço, horário e data.

## Estruturação da Página
A página é composta por uma navbar no topo, um menu com área de filtros (por horário e data disponíveis) no canto esquerdo central e exibição de quadras disponíveis para o resto da página.
    - A navbar tem a logo no lado esquerdo, quatro categorias, uma barra de busca e um botão de login. A navbar fica fixa no topo da página, acompanhando o scroll.
    - As categorias do menu são "Início", "Quadras" (que está selecionada agora), "Filiais" e "Torneios"
    - O menu na parte lateral esquerda deverá ser correpondente a parte de filtragem do site, por horário e data. Haverá uma separação em 3 partes, onde em cada uma delas, ao o usuário clicar no período de preferência, abrirá abaixo 4 opções de horários:
        - Horário (representado por um ícone de reloginho):
            - Manhã (4 checkbox, cada um intervalo de 1 hora, começando em 8h e terminando em 12h, por exemplo)
            - Tarde (4 checkbox, cada um intervalo de 1 hora, começando em 13h e terminando em 17h, por exemplo)
            - Noite (4 checkbox, cada um intervalo de 1 hora, começando em 18h e terminando em 22h, por exemplo)
        - Data (representada por um ícone de calendário):
            - Mês (12 checkbox, uma pra cada mês do ano, porém, se ja passou o mês, ele não deve aparecer, e sim apenas os próximos meses do ano, limitando a cada 3 meses, e a partir do momento que acabou um dos meses, adicionar o próximo mais perto)
            - Dia (7 checkbox, cada uma referente aos dias da semana, ex. Seg, Ter, Qua, etc)
    - Ao clicar em uma quadra, leva para uma página estilo o da Shein, onde mostra em destaque a quadra escolhida com as seguintes informações:
        - Foto da Quadra
        - Título "Quadra 01" (ou um nome, caso tenha)
        - Avaliações (quantas estrelas e nº de avaliações) e Valor (ex: Valor: R$ 100,00/hora)
        - Endereço da quadra
        - Descrição do ambiente:
            - Capacidade: 5 pessoas (4 linha)
            - Quadra coberta: (Sim ou Não)
            - Área para churrasco (Agendamento prévio / 2 banheiros / Mesa de Sinuca)
            - Câmera View
            - Vestiários (Sim ou Não / Feminino/Masculino)
        - E um botão de "Agendar Agora" ou "Reservar" com as opções de horário e data, conforme a disponibilidade, com a opção de agendamento prévio, e formas de pagamento.
        - Adicione uma seção com feedbacks, apenas de comentários, sem chat, onde um usuário pode comentar sobre a quadra, de forma que qualquer usuário possa ver, mas apenas usuários logados podem comentar. O feedback deve ter as seguintes informações:
            - Nome do usuário
            - Foto do perfil do usuário
            - Comentário sobre sua experiência

## Estilização da Página
A página deve ter um estilo verde, com um fundo com foto de um campo de futebol sendo esverdeada
- O menu deve ficar fixo no topo da página, acompanhando o scroll
    