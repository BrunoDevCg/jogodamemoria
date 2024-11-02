Jogo da Memória

Este projeto é um Jogo da Memória simples e interativo, desenvolvido em JavaScript, HTML e CSS. O objetivo do jogo é encontrar todos os pares de cartas no menor número de jogadas e no menor tempo possível. Esse jogo é uma ótima maneira de desafiar a memória e melhorar habilidades cognitivas, sendo adequado para todas as idades.
Funcionalidades

    Tabuleiro Aleatório: Ao iniciar, as cartas são dispostas aleatoriamente, garantindo que cada jogo seja único.
    Contador de Movimentos: Exibe o número total de movimentos feitos pelo jogador.
    Temporizador: Conta o tempo total decorrido desde o início da partida.
    Ranking de Pontuações: Armazena as pontuações dos 10 melhores jogadores, classificados pelo menor número de movimentos e tempo mais rápido.
    Reinício de Jogo: Um botão "Reiniciar Jogo" permite começar uma nova partida sem resetar o ranking.
    Resetar Ranking: O jogador pode limpar o ranking de pontuações salvas, caso queira iniciar um novo histórico de pontuações.

Como Jogar

    Clique em uma carta para virá-la e tentar memorizar sua posição.
    Em seguida, clique em outra carta para tentar encontrar o par correspondente.
    Se as cartas combinarem, elas permanecem viradas. Caso contrário, elas voltam para o estado original.
    Continue jogando até encontrar todos os pares. Ao finalizar, você pode salvar sua pontuação no ranking com seu nome.
    Utilize o botão "Reiniciar Jogo" para uma nova rodada, mantendo seu progresso no ranking intacto, ou "Resetar Ranking" para limpar os registros.

Tecnologias Utilizadas

    HTML: Estrutura do jogo e layout dos elementos.
    CSS: Estilo visual para as cartas, tabuleiro, botões e demais componentes.
    JavaScript: Lógica de jogo, gerenciamento de estado, contador de movimentos, temporizador e armazenamento de pontuações no localStorage.

Estrutura do Código

    createBoard: Inicializa o tabuleiro de jogo embaralhando as cartas e criando os elementos HTML para cada uma.
    flipCard: Responsável por virar as cartas e verificar pares.
    checkForMatch: Avalia se as cartas selecionadas formam um par. Em caso positivo, registra a vitória do par, caso contrário, esconde as cartas novamente.
    startTimer: Inicia o temporizador quando o jogo começa e atualiza o tempo em segundos.
    saveScore: Salva a pontuação dos jogadores no localStorage, classificando as melhores pontuações.
    displayRanking: Exibe o ranking com as pontuações dos melhores jogadores.
    resetGame: Reinicia as variáveis e o estado do jogo, pronto para uma nova partida.
    restartGame: Reinicia o jogo sem resetar o ranking de pontuações.

Como Executar o Projeto

    Faça o download ou clone este repositório.
    Abra o arquivo index.html em um navegador de sua preferência.
    Divirta-se jogando e tente bater seu recorde no menor número de movimentos e tempo!

Funcionalidades Futuras

    Níveis de Dificuldade: Adicionar diferentes tamanhos de tabuleiros para aumentar a dificuldade.
    Temas Personalizados: Permitir que os jogadores escolham entre diferentes temas visuais para as cartas.

Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com sugestões e melhorias.

Esse README.md ajuda os usuários a entender o propósito e funcionamento do jogo, além de como executá-lo e contribuir.