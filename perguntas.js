// perguntas.js
const perguntasAdicionais = [
    {
        pergunta: "Qual o processador da marca AMD listado como requisito mínimo de hardware para o FCM 26?",
        opcoes: ["A) Ryzen 3 1200", "B) Ryzen 5 1600 ou equivalente", "C) Ryzen 7 3700X", "D) FX 8350"],
        correta: "B"
    },
    {
        pergunta: "Qual o processador da marca Intel indicado como requisito mínimo para rodar o FCM 26?",
        opcoes: ["A) Core i3 4130", "B) Core i5 6600K ou equivalente", "C) Core i7 4770", "D) Core i5 10400"],
        correta: "B"
    },
    {
        pergunta: "Qual placa de vídeo da AMD é listada nas especificações mínimas de hardware do patch?",
        opcoes: ["A) Radeon RX 550", "B) Radeon RX 570 ou equivalente", "C) Radeon RX 580", "D) Radeon RX 6600"],
        correta: "B"
    },
    {
        pergunta: "Qual versão do DirectX é obrigatória para a compatibilidade com o FCM 26?",
        opcoes: ["A) DirectX 11", "B) DirectX 12 (nível de recursos 12_0)", "C) DirectX 12 Ultimate", "D) DirectX 10"],
        correta: "B"
    },
    {
        pergunta: "Qual a velocidade mínima de internet exigida para o download e validação do infoproduto?",
        opcoes: ["A) 5 Mbps", "B) 10 Mbps", "C) 25 Mbps", "D) 50 Mbps"],
        correta: "B"
    },
    {
        pergunta: "Qual a velocidade de internet recomendada pela equipe do FC Mania?",
        opcoes: ["A) 20 Mbps", "B) 30 Mbps", "C) 50 Mbps", "D) 100 Mbps"],
        correta: "C"
    },
    {
        pergunta: "O que é recomendado em relação ao armazenamento para instalar o patch?",
        opcoes: ["A) HD Externo", "B) SSD (recomendado NVMe ou M1)", "C) HD SATA interno comum", "D) Cartão de memória de alta velocidade"],
        correta: "B"
    },
    {
        pergunta: "De acordo com os avisos do fórum, qual a numeração do update liberado pela EA no dia 03/06?",
        opcoes: ["A) Update v1.5.0", "B) Update v1.6.1", "C) Update v2.0.1", "D) Update v1.4.2"],
        correta: "B"
    },
    {
        pergunta: "Ao atualizar o patch para a versão V4.0 (03.06.2025), o que o usuário deve obrigatoriamente fazer dentro do jogo?",
        opcoes: ["A) Reiniciar o Modo Carreira", "B) Carregar e salvar a nova squad", "C) Apagar o perfil de usuário", "D) Mudar o idioma para inglês"],
        correta: "B"
    },
    {
        pergunta: "Qual o primeiro passo indicado no tutorial para desinstalar a versão antiga do patch antes de colocar a nova?",
        opcoes: ["A) Deletar a pasta do jogo", "B) Abrir o 'FCM LAUNCHER' na raiz e clicar em 'Configurações'", "C) Usar o desinstalador do Windows", "D) Apagar o arquivo da Squad"],
        correta: "B"
    },
    {
        pergunta: "Para qual destes clubes o patch FCM 26 offers a coleção completa de uniformes (ALL)?",
        opcoes: ["A) Athletic Clube/MG", "B) Athletico PR 2026", "C) Cruzeiro 2025", "D) SC Internacional 2026"],
        correta: "B"
    },
    {
        pergunta: "O clube Cruzeiro possui qual uniforme específico listado para o ano de 2025 no design de números?",
        opcoes: ["A) Home (Principal)", "B) Away (Reserva)", "C) Third (Terceiro)", "D) GK (Goleiro)"],
        correta: "C"
    },
    {
        pergunta: "Qual o status de kits fornecido para o Flamengo no ano de 2026?",
        opcoes: ["A) Apenas o Home", "B) Apenas o Third", "C) ALL (Todos) e também uma menção ao THIRD", "D) Apenas uniformes de treino"],
        correta: "C"
    },
    {
        pergunta: "O Santos FC conta com qual especificação de kit para a temporada de 2026 no patch?",
        opcoes: ["A) Santos 2026 (ALL)", "B) Santos 2026 (HOME)", "C) Santos 2026 (THIRD)", "D) Santos 2026 (AWAY)"],
        correta: "B"
    },
    {
        pergunta: "Para o SC Internacional em 2025, quais kits foram corrigidos ou adicionados?",
        opcoes: ["A) Apenas o Home", "B) Away, Third e GK", "C) Apenas o uniforme de treino", "D) Todos os uniformes históricos"],
        correta: "B"
    },
    {
        pergunta: "Qual marca esportiva tem uma linha de design de números completa (ALL) datada de 2026 no mod?",
        opcoes: ["A) Nike", "B) Adidas", "C) Kappa", "D) Puma"],
        correta: "C"
    },
    {
        pergunta: "Qual time catarinense da Série B tem seus kits e jaquetas corrigidos listados no material?",
        opcoes: ["A) Criciúma", "B) Avaí FC", "C) Chapecoense", "D) Brusque"],
        correta: "B"
    },
    {
        pergunta: "Dentre os clubes paulistas de divisões menores, qual deles aparece na lista de jaquetas/camisas corrigidas?",
        opcoes: ["A) Inter de Limeira", "B) Noroeste", "C) São Bernardo", "D) Primavera SP"],
        correta: "C"
    },
    {
        pergunta: "Qual clube do Nordeste tem uma linha específica corrigida de kits para a Copa do Nordeste e ALL para 2026?",
        opcoes: ["A) Bahia", "B) Sport Recife", "C) Fortaleza EC", "D) Ceará SC"],
        correta: "C"
    },
    {
        pergunta: "Quais ligas estaduais contam com a marcação de dois asteriscos (**) indicando formatação ou conteúdo especial?",
        opcoes: ["A) Cearense e Goiano", "B) Carioca, Gaúcho, Mineiro, Paranaense, Paulistão e Santa Catarina", "C) Pernambucano e Baiano", "D) Apenas o Paulistão e o Carioca"],
        correta: "B"
    },
    {
        pergunta: "Qual bola oficial está listada como modelo para as Finais da Copa do Brasil 2025?",
        opcoes: ["A) Adidas Pro World Cup", "B) Nike Brasil Flight", "C) Penalty Ecoknit S11", "D) Topper Samba Pro"],
        correta: "B"
    },
    {
        pergunta: "Para a Supercopa Rei 2026, qual o modelo de bola adicionado pelo mod?",
        opcoes: ["A) Penalty MAG11A", "B) Nike Brasil Flight", "C) Uhlsport Game Pro", "D) Adidas Club World Cup"],
        correta: "B"
    },
    {
        pergunta: "Qual bola da marca Penalty é utilizada especificamente para o Paulistão 2026?",
        opcoes: ["A) Penalty Ecoknit S11", "B) Penalty MAG11A", "C) Penalty Samba Pro", "D) Penalty Flight 2026"],
        correta: "B"
    },
    {
        pergunta: "As divisões Série C e D do Brasileirão 2026 utilizam qual marca de bola oficial?",
        opcoes: ["A) Nike", "B) Adidas", "C) Uhlsport (Modelo Game Pro)", "D) Topper"],
        correta: "C"
    },
    {
        pergunta: "Para qual competição de 2025 a bola Penalty Ecoknit S11 é designada?",
        opcoes: ["A) Copa Verde", "B) Copa do Nordeste", "C) Campeonato Baiano", "D) Copa América"],
        correta: "B"
    },
    {
        pergunta: "Qual destes troféus internacionais possui modelagem tridimensional própria citada na lista?",
        opcoes: ["A) UEFA Europa League", "B) Copa do Mundo Clubes", "C) Copa Sul-Americana", "D) Recopa Conmebol"],
        correta: "B"
    },
    {
        pergunta: "A Copa Verde de 2026 possui qual característica estrutural fantasy listada?",
        opcoes: ["A) Disputada por 32 times", "B) Formato fantasy com 8 times", "C) Formato de pontos corridos", "D) Realizada na Europa"],
        correta: "B"
    },
    {
        pergunta: "Para quais divisões nacionais o mod oferece 'Fundo do Calendário de Competições' personalizado?",
        opcoes: ["A) Apenas Série A", "B) Apenas Série A e B", "C) Séries A, B, C e D", "D) Apenas ligas estaduais"],
        correta: "C"
    },
    {
        pergunta: "Qual canal de streaming da internet possui artes de placar e sobreposição (overlay) de 2022/2024 inclusas?",
        opcoes: ["A) CazéTV", "B) Prime Video", "C) Paramount+", "D) LFU"],
        correta: "A"
    },
    {
        pergunta: "Qual emissora de TV aberta tem overlays de placar listados para os anos de 2024/2026?",
        opcoes: ["A) SBT", "B) Band", "C) Globo", "D) Record"],
        correta: "C"
    },
    {
        pergunta: "Para qual jogador do Flamengo existe um canto de torcida individualizado listado no patch?",
        opcoes: ["A) Pedro", "B) Arrascaeta", "C) Bruno Henrique", "D) Todos os três (Arrascaeta, Bruno Henrique e Pedro) estão na lista"],
        correta: "D"
    },
    {
        pergunta: "Qual jogador argentino do São Paulo conta com cantos de torcida individuais mapeados?",
        opcoes: ["A) Borré", "B) Calleri", "C) Cano", "D) Garro"],
        correta: "B"
    },
    {
        pergunta: "O jogador Hulk possui cantos de torcida vinculados a qual equipe nacional na lista?",
        opcoes: ["A) Flamengo", "B) Palmeiras", "C) Atlético Mineiro", "D) Cruzeiro"],
        correta: "C"
    },
    {
        pergunta: "Qual astro internacional que atua no futebol saudita possui grito de torcida específico listado?",
        opcoes: ["A) Cristiano Ronaldo", "B) Neymar", "C) Benzema", "D) Kanté"],
        correta: "B"
    },
    {
        pergunta: "O primeiro torneio de futebol internacional da história, realizado em 1884, chamava-se:",
        opcoes: ["A) Jogos Olímpicos", "B) British Home Championship", "C) Troféu Sir Thomas Lipton", "D) Copa Jules Rimet"],
        correta: "B"
    },
    {
        pergunta: "Em qual cidade escocesa ocorreu a primeiríssima partida internacional entre Escócia e Inglaterra em 1872?",
        opcoes: ["A) Edimburgo", "B) Londres", "C) Glasgow", "D) Liverpool"],
        correta: "C"
    },
    {
        pergunta: "Nos Jogos Olímpicos de 1900 e 1904, o futebol foi inserido em qual condição?",
        opcoes: ["A) Torneio profissional oficial", "B) Esporte de demonstração (sem medalhas)", "C) Disputado apenas por seleções sul-americanas", "D) Formato de futebol de areia"],
        correta: "B"
    },
    {
        pergunta: "Qual clube amador representou a Inglaterra e venceu as edições do Troféu Sir Thomas Lipton em 1909 e 1911?",
        opcoes: ["A) West Auckland Town FC", "B) Manchester United amador", "C) Sheffield FC", "D) Condado de Durham Club"],
        correta: "A"
    },
    {
        pergunta: "Em qual ano a FIFA reconheceu o torneio olímpico como 'Campeonato Mundial Amador de Futebol' e assumiu sua gestão?",
        opcoes: ["A) 1904", "B) 1908", "C) 1914", "D) 1920"],
        correta: "C"
    },
    {
        pergunta: "No Congresso de qual cidade europeia, em 28 de maio de 1928, a FIFA decidiu oficialmente criar a Copa do Mundo?",
        opcoes: ["A) Paris", "B) Zurique", "C) Amsterdã", "D) Bruxelas"],
        correta: "C"
    },
    {
        pergunta: "Quantas seleções no total participaram da primeira Copa do Mundo em 1930?",
        opcoes: ["A) 16 seleções", "B) 13 seleções", "C) 8 seleções", "D) 20 seleções"],
        correta: "B"
    },
    {
        pergunta: "Quantas equipes representaram a Europa na primeira edição do Mundial após o convencimento de Jules Rimet?",
        opcoes: ["A) Nenhuma", "B) Duas", "C) Quatro (Bélgica, França, Romênia e Iugoslávia)", "D) Sete"],
        correta: "C"
    },
    {
        pergunta: "Quais países jogaram as duas partidas de abertura simultâneas da Copa de 1930?",
        opcoes: ["A) Uruguai x Argentina e Brasil x Iugoslávia", "B) França x México e Estados Unidos x Bélgica", "C) Chile x Cuba e Romênia x Peru", "D) Itália x Áustria e Alemanha x Suécia"],
        correta: "B"
    },
    {
        pergunta: "Na final de 1930, qual o público estimado presente no Estádio Centenário para ver Uruguai x Argentina?",
        opcoes: ["A) Quase 50 mil pessoas", "B) Quase 93 mil pessoas", "C) Exatamente 120 mil pessoas", "D) 30 mil pessoas"],
        correta: "B"
    },
    {
        pergunta: "Qual a única seleção sul-americana que aceitou viajar para a Europa para disputar tanto a Copa de 1934 quanto a de 1938?",
        opcoes: ["A) Uruguai", "B) Argentina", "C) Brasil", "D) Chile"],
        correta: "C"
    },
    {
        pergunta: "O que aconteceu com a Áustria após ter se qualificado para a Copa do Mundo de 1938?",
        opcoes: ["A) Foi desclassificada por problemas financeiros", "B) Foi dominada pela Alemanha, deixando o torneio com 15 times", "C) Desistiu em protesto político", "D) Foi campeã invicta"],
        correta: "B"
    },
    {
        pergunta: "Por que as seleções da Índia, Escócia e Turquia não jogaram a Copa de 1950, deixando o torneio com 13 times?",
        opcoes: ["A) Foram banidas pela FIFA", "B) Desistiram de participar", "C) Não conseguiram passaporte", "D) Sofreram punições administrativas"],
        correta: "B"
    },
    {
        pergunta: "Até a Copa de 1982, qual era o número padrão de seleções que competiam na fase final da maioria dos torneios?",
        opcoes: ["A) 12 equipes", "B) 16 equipes", "C) 20 equipes", "D) 24 equipes"],
        correta: "B"
    },
    {
        pergunta: "Em qual ano a Copa do Mundo expandiu seu formato de fase final para 24 equipes?",
        opcoes: ["A) 1974", "B) 1978", "C) 1982", "D) 1986"],
        correta: "C"
    },
    {
        pergunta: "Em qual edição o formato atual de 32 equipes foi implementado antes da nova mudança para 48?",
        opcoes: ["A) 1990", "B) 1994", "C) 1998", "D) 2002"],
        correta: "C"
    },
    {
        pergunta: "Qual país africano surpreendeu o mundo ao alcançar a quarta colocação na Copa do Mundo de 2022?",
        opcoes: ["A) Camarões", "B) Gana", "C) Senegal", "D) Marrocos"],
        correta: "D"
    },
    {
        pergunta: "Qual seleção asiática conquistou o histórico quarto lugar jogando em casa em 2002?",
        opcoes: ["A) Japão", "B) Coreia do Sul", "C) Arábia Saudita", "D) Irã"],
        correta: "B"
    },
    {
        pergunta: "Qual o recorde absoluto de equipes inscritas estabelecido nas Eliminatórias da Copa do Mundo de 2022?",
        opcoes: ["A) 199 equipes", "B) 205 equipes", "C) 209 equipes", "D) 210 equipes"],
        correta: "D"
    },
    {
        pergunta: "Em qual país asiático foi realizada a primeira edição da Copa do Mundo de Futebol Feminino em 1991?",
        opcoes: ["A) Japão", "B) Coreia do Sul", "C) China", "D) Vietnã"],
        correta: "C"
    },
    {
        pergunta: "A partir de qual ano os times masculinos de futebol nas Olimpíadas puderam convocar até 3 atletas profissionais acima da idade sub-23?",
        opcoes: ["A) 1988", "B) 1992", "C) 1996", "D) 2000"],
        correta: "B"
    },
    {
        pergunta: "Qual país sediou o último torneio da Copa das Confederações da FIFA no ano de 2017?",
        opcoes: ["A) Brasil", "B) África do Sul", "C) Rússia", "D) Alemanha"],
        correta: "C"
    },
    {
        pergunta: "Qual destas seleções possui o pior saldo de gols acumulado no top 10 do ranking histórico da FIFA (-5)?",
        opcoes: ["A) Uruguai", "B) Bélgica", "C) Inglaterra", "D) França"],
        correta: "B"
    },
    {
        pergunta: "Quantas vitórias totais o Brasil (1º colocado no ranking de pontos acumulados) possui até a Copa de 2022?",
        opcoes: ["A) 68 vitórias", "B) 76 vitórias", "C) 83 vitórias", "D) 47 vitórias"],
        correta: "B"
    },
    {
        pergunta: "Quantas finais de Copa do Mundo a Seleção da Alemanha disputou no total, sendo a recordista em decisões?",
        opcoes: ["A) 5 finais", "B) 6 finais", "C) 8 finais", "D) 10 finais"],
        correta: "C"
    },
    {
        pergunta: "Quantos gols a seleção da Alemanha marcou na edição de 1954, estabelecendo o recorde ofensivo de um campeão?",
        opcoes: ["A) 15 gols", "B) 20 gols", "C) 25 gols", "D) 27 gols"],
        correta: "C"
    },
    {
        pergunta: "Quem detém o recorde de hat-trick mais rápido da história das Copas (7 minutos) entrando no decorrer de um jogo?",
        opcoes: ["A) Miroslav Klose", "B) László Kiss", "C) Just Fontaine", "D) Sándor Kocsis"],
        correta: "B"
    },
    {
        pergunta: "Na qualificação para a Copa de 2002, qual atleta marcou 13 gols na goleada histórica de 31 a 0 da Austrália sobre a Samoa Americana?",
        opcoes: ["A) Tim Cahill", "B) Archie Thompson", "C) Mark Viduka", "D) Harry Kewell"],
        correta: "B"
    },
    {
        pergunta: "Qual país europeu foi eliminado nas oitavas de final da Copa de 2006 sem sofrer nenhum gol com bola rolando?",
        opcoes: ["A) Itália", "B) França", "C) Suíça", "D) Ucrânia"],
        correta: "C"
    },
    {
        pergunta: "Qual a média exata de gols por partida obtida pelo húngaro Sándor Kocsis na Copa de 1954?",
        opcoes: ["A) 1,50", "B) 2,00", "C) 2,20", "D) 1,08"],
        correta: "C"
    },
    {
        pergunta: "O atacante Lionel Messi possui quantos gols totais mapeados na tabela histórica de artilheiros das Copas?",
        opcoes: ["A) 10 gols", "B) 12 gols", "C) 13 gols", "D) 16 gols"],
        correta: "C"
    },
    {
        pergunta: "Além de Pelé, qual outro jogador marcou 9 gols pelo Brasil em Copas do Mundo de forma combinada (1958/1962)?",
        opcoes: ["A) Jairzinho", "B) Vavá", "C) Rivaldo", "D) Careca"],
        correta: "B"
    },
    {
        pergunta: "Quantos torneios de Copa do Mundo o meia alemão Lothar Matthäus disputou para cravar seu recorde?",
        opcoes: ["A) 3 torneios", "B) 4 torneios", "C) 5 torneios", "D) 6 torneios"],
        correta: "C"
    },
    {
        pergunta: "Quem é o artilheiro histórico de Portugal em uma única Copa do Mundo, anotando 9 gols in 1966?",
        opcoes: ["A) Cristiano Ronaldo", "B) Eusébio", "C) Figo", "D) Pauleta"],
        correta: "B"
    },
    {
        pergunta: "Qual jogador marcou 5 gols em uma única partida da Copa de 1994 jogando pela Rússia?",
        opcoes: ["A) Oleg Salenko", "B) Yashin", "C) Mostovoi", "D) Cheryshev"],
        correta: "A"
    },
    {
        pergunta: "Em qual Copa do Mundo o atacante espanhol David Villa se destacou na tabela marcando a maior parte de seus 9 gols?",
        opcoes: ["A) 2006", "B) 2010", "C) 2014", "D) 2018"],
        correta: "B"
    },
    {
        pergunta: "A Taça Brasil foi instituída originalmente pela CBD em 1959 com qual principal objetivo geopolítico esportivo?",
        opcoes: ["A) Criar uma liga profissional paga", "B) Substituir o Campeonato Brasileiro de Seleções Estaduais", "C) Enfrentar os times europeus", "D) Promover o futebol no Nordeste"],
        correta: "B"
    },
    {
        pergunta: "Quantas equipes campeãs estaduais participaram da primeira edição histórica da Taça Brasil em 1959?",
        opcoes: ["A) 10 equipes", "B) 12 equipes", "C) 16 equipes", "D) 20 equipes"],
        correta: "C"
    },
    {
        pergunta: "Por que as primeiras edições da Taça Brasil eram obrigatoriamente disputadas em jogos eliminatórios de mata-mata?",
        opcoes: ["A) Regra imposta pela FIFA", "B) Complicações de locomoção e transporte na época em um país continental", "C) Falta de estádios grandes", "D) Preferência exclusiva do público"],
        correta: "B"
    },
    {
        pergunta: "Quem foi o jogador homenageado que deu o nome ao famoso torneio interestadual 'Robertão'?",
        opcoes: ["A) Roberto Dinamite", "B) Roberto Gomes Pedrosa (ex-goleiro do São Paulo)", "C) Roberto Rivellino", "D) Robertão, lendário zagueiro do Botafogo"],
        correta: "B"
    },
    {
        pergunta: "Qual equipe mineira sagrou-se como a primeiríssima campeã do novo modelo unificado em 1971?",
        opcoes: ["A) Cruzeiro", "B) Atlético-MG", "C) América-MG", "D) Ipatinga"],
        correta: "B"
    },
    {
        pergunta: "Qual almirante assumiu a CBD em 1975 após João Havelange ir para a FIFA e promoveu o inchaço político do torneio?",
        opcoes: ["A) Heleno Nunes", "B) Eurico Miranda", "C) Ricardo Teixeira", "D) Castor de Andrade"],
        correta: "A"
    },
    {
        pergunta: "Em 1980, o campeonato nacional promovido pela recém-criada CBF mudou o nome de sua divisão principal para:",
        opcoes: ["A) Taça de Prata", "B) Taça de Ouro", "C) Copa Brasil", "D) Campeonato Série A"],
        correta: "B"
    },
    {
        pergunta: "Como ficou conhecida a divisão interna organizada em conjunto com os clubes (Clube dos 13) no ano de 1987?",
        opcoes: ["A) Módulo Amarelo", "B) Módulo Verde", "C) Módulo Azul", "D) Módulo Branco"],
        correta: "B"
    },
    {
        pergunta: "Quais equipes disputaram a polêmica final do Módulo Amarelo da Copa Brasil de 1987 organizada pela CBF?",
        opcoes: ["A) Flamengo e Internacional", "B) Sport e Guarani", "C) Vasco e São Caetano", "D) Palmeiras e Cruzeiro"],
        correta: "B"
    },
    {
        pergunta: "Em qual ano a Copa do Brasil foi criada como um torneio secundário para abrigar equipes menores retiradas do Brasileirão enxuto?",
        opcoes: ["A) 1987", "B) 1988", "C) 1989", "D) 1990"],
        correta: "C"
    },
    {
        pergunta: "No ano de 1999, qual critério bizarro de rebaixamento foi adotado e durou apenas uma temporada?",
        opcoes: ["A) Menor saldo de gols em casa", "B) Menor média de pontos nos campeonatos de 1998 e 1999 combinados", "C) Disputa de um playoff de repescagem", "D) Punição por cartões amarelos"],
        correta: "B"
    },
    {
        pergunta: "Qual equipe processou a CBF no ano 2000 após perder pontos nos tribunais por um caso de jogador irregular do São Paulo?",
        opcoes: ["A) Botafogo", "B) Internacional", "C) Gama", "D) Fluminense"],
        correta: "C"
    },
    {
        pergunta: "Com o impedimento da CBF, o campeonato de 2000 foi jogado com 116 times e recebeu o nome oficial de:",
        opcoes: ["A) Copa Brasil Unida", "B) Copa João Havelange", "C) Torneio dos Campeões", "D) Brasileirão Módulo Azul"],
        correta: "B"
    },
    {
        pergunta: "Em qual estádio ocorreu o trágico desabamento do alambrado na final de 2000 entre Vasco e São Caetano?",
        opcoes: ["A) Maracanã", "B) São Januário", "C) Mineirão", "D) Palestra Itália"],
        correta: "B"
    },
    {
        pergunta: "Qual equipe conquistou a histórica primeira taça no formato moderno de pontos corridos em 2003?",
        opcoes: ["A) Santos", "B) Cruzeiro", "C) São Paulo", "D) Flamengo"],
        correta: "B"
    },
    {
        pergunta: "Como ficou conhecido o grave escândalo de manipulação de resultados por arbitragem ocorrido em 2005?",
        opcoes: ["A) Máfia do Apito", "B) Escândalo Edílson Pereira", "C) Máfia das Apostas STJD", "D) Caso Robertão"],
        correta: "A"
    },
    {
        pergunta: "Quantas partidas apitadas pelo árbitro Edílson Pereira de Carvalho foram completamente anuladas pelo STJD em 2005?",
        opcoes: ["A) 5 jogos", "B) 9 jogos", "C) 11 jogos", "D) 15 jogos"],
        correta: "C"
    },
    {
        pergunta: "Quem foi o jornalista e pesquisador responsável pelo dossiê que convenceu a CBF a unificar os títulos em 2010?",
        opcoes: ["A) Galvão Bueno", "B) Odir Cunha", "C) Juca Kfouri", "D) Mauro Cezar"],
        correta: "B"
    },
    {
        pergunta: "Quais os únicos dois clubes tradicionais da Série A que constam no material como NUNCA rebaixados na história?",
        opcoes: ["A) Flamengo e São Paulo", "B) Palmeiras e Santos", "C) Cruzeiro e Atlético-MG", "D) Vasco e Fluminense"],
        correta: "A"
    },
    {
        pergunta: "Quais equipes dividem o recorde de mais rebaixamentos sofridos na história do torneio (6 quedas cada)?",
        opcoes: ["A) América-MG, Vitória, Coritiba, Goiás e Sport", "B) Santa Cruz e Botafogo", "C) Vasco, Fluminense e Bahia", "D) Avaí, Criciúma e Juventude"],
        correta: "A"
    },
    {
        pergunta: "Qual equipe conquistou a Taça Brasil por 5 anos consecutivos (1961 a 1965)?",
        opcoes: ["A) Palmeiras", "B) Santos", "C) Botafogo", "D) Cruzeiro"],
        correta: "B"
    },
    {
        pergunta: "No ano de 1967, o Palmeiras realizou um feito duplo raro. Quais títulos nacionais ele faturou no mesmo ano?",
        opcoes: ["A) Taça Brasil e Robertão", "B) Robertão e Copa do Brasil", "C) Taça Brasil e Taça de Ouro", "D) Copa Brasil e Copa União"],
        correta: "A"
    },
    {
        pergunta: "Quem foi o campeão nacional do ano de 1970, conquistando o Torneio Roberto Gomes Pedrosa?",
        opcoes: ["A) Palmeiras", "B) Santos", "C) Fluminense", "D) Atlético-MG"],
        correta: "C"
    },
    {
        pergunta: "Qual clube do interior paulista surpreendeu o país ao faturar o título do Brasileirão de 1978?",
        opcoes: ["A) Ponte Preta", "B) Guarani", "C) São Caetano", "D) Inter de Limeira"],
        correta: "B"
    },
    {
        pergunta: "O São Paulo FC faturou um inédito e histórico tricampeonato consecutivo de pontos corridos em quais anos?",
        opcoes: ["A) 2003, 2004 e 2005", "B) 2006, 2007 e 2008", "C) 2010, 2011 e 2012", "D) 1991, 1992 e 1993"],
        correta: "B"
    },
    {
        pergunta: "O Fluminense Football Club possui quantas taças do Brasileirão registradas no total de sua história?",
        opcoes: ["A) 2 títulos", "B) 3 títulos", "C) 4 títulos (1966, 2003, 2013 e 2014)", "D) 5 títulos"],
        correta: "C"
    },
    {
        pergunta: "Qual equipe da Região Sul faturou o caneco na temporada de 1981?",
        opcoes: ["A) Internacional", "B) Grêmio", "C) Coritiba", "D) Athletico-PR"],
        correta: "B"
    },
    {
        pergunta: "Quem conquistou o troféu do Brasileirão na histórica temporada de 1985 superando equipes de maior orçamento?",
        opcoes: ["A) Coritiba", "B) Guarani", "C) Sport", "D) Bahia"],
        correta: "A"
    },
    {
        pergunta: "Quantas taças do torneio nacional o Cruzeiro Esporte Clube acumula em sua galeria de troféus unificada?",
        opcoes: ["A) 2 títulos", "B) 3 títulos", "C) 4 títulos (1966, 2003, 2013 e 2014)", "D) 5 títulos"],
        correta: "C"
    },
    {
        pergunta: "Quem foi o grande campeão brasileiro da Série A na temporada recente de 2024?",
        opcoes: ["A) Palmeiras", "B) Flamengo", "C) Botafogo", "D) Atlético-MG"],
        correta: "C"
    },
    {
        pergunta: "Quem é o segundo maior artilheiro da história geral do Campeonato Brasileiro, somando 154 gols?",
        opcoes: ["A) Edmundo", "B) Fred", "C) Romário", "D) Washington"],
        correta: "C"
    },
    {
        pergunta: "Qual jogador, aposentado recentemente, detém o posto de maior artilheiro da era dos pontos corridos com mais de 150 gols?",
        opcoes: ["A) Paulo Baier", "B) Fred", "C) Gabriel Barbosa", "D) Diego Souza"],
        correta: "B"
    },
    {
        pergunta: "Quem detém o recorde absoluto de mais gols marcados em uma única edição do Brasileirão de pontos corridos (34 gols em 2004)?",
        opcoes: ["A) Dimba", "B) Washington (pelo Atlético-PR)", "C) Gabriel Barbosa", "D) Jonas"],
        correta: "B"
    },
    {
        pergunta: "O meia/lateral Paulo Baier marcou época nos pontos corridos anotando quantos gols totais na contagem oficial?",
        opcoes: ["A) 99 gols", "B) 106 gols", "C) 120 gols", "D) 150 gols"],
        correta: "B"
    },
    {
        pergunta: "Qual jogador marcou 31 gols na edição de 2003 jogando pelo Goiás?",
        opcoes: ["A) Dimba", "B) Washington", "C) Borges", "D) Fred"],
        correta: "A"
    },
    {
        pergunta: "Gabriel Barbosa cravou sua marca histórica de artilharia pelo Flamengo na fantástica temporada de 2019 marcando quantos gols?",
        opcoes: ["A) 21 gols", "B) 23 gols", "C) 25 gols", "D) 30 gols"],
        correta: "C"
    },
    {
        pergunta: "Quem foi o artilheiro do Grêmio na temporada de 2010, anotando 23 gols nos pontos corridos?",
        opcoes: ["A) Borges", "B) Jonas", "C) Fred", "D) Dimba"],
        correta: "B"
    },
    {
        pergunta: "O atacante Borges foi o grande goleador dos pontos corridos jogando pelo Santos em qual ano?",
        opcoes: ["A) 2010", "B) 2011", "C) 2012", "D) 2013"],
        correta: "B"
    },
    {
        pergunta: "Quem ocupa o posto de terceiro maior artilheiro geral da história da competição, com apenas um gol a menos que Romário?",
        opcoes: ["A) Fred", "B) Edmundo", "C) Roberto Dinamite", "D) Washington"],
        correta: "B"
    },
    {
        pergunta: "Quem foi o campeão nacional de 2025 de acordo com a listagem cronológica fornecida?",
        opcoes: ["A) Palmeiras", "B) Flamengo", "C) Botafogo", "D) Fluminense"],
        correta: "B"
    }
];