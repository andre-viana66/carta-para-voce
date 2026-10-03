/* ============================================================
   1) PEGANDO OS ELEMENTOS DA PÁGINA
   (getElementById procura o elemento pelo id que está no HTML)
   ============================================================ */
const janela = document.getElementById("janela");
const fundo_carta = document.getElementById("carta");
const inicial_titulo = document.getElementById("inicial_titulo");
const titulo_secundario = document.getElementById("secundario_titulo");
const gatinho = document.getElementById("gatinho");
const botao_sim = document.getElementById("botao_sim");
const botao_nao = document.getElementById("botao_nao");

/* ============================================================
   2) CLIQUE NA CARTA: abre a pergunta
   ============================================================ */
fundo_carta.addEventListener("click", function () {

    // Troca a imagem da carta pela "janelinha" maior
    fundo_carta.src = "imagens/fundo_2.png";

    // Adiciona a classe "aberta": o CSS aumenta a janela e tira o cursor de clique.
    // (No lugar de mexer em width com número fixo, o que não funciona bem no celular)
    janela.classList.add("aberta");

    // Apaga o título de boas-vindas
    inicial_titulo.textContent = "";

    // Mostra o gatinho (ao definir o src, o CSS passa a exibir a imagem)
    gatinho.src = "imagens/gatinho.gif";

    // Mostra os botões
    botao_sim.src = "imagens/botao_sim.png";
    botao_nao.src = "imagens/botao_nao.png";

    // Escreve a pergunta
    titulo_secundario.textContent = "Aceita namorar comigo?";
});

/* ============================================================
   3) CLIQUE NO "SIM": mostra a resposta
   ============================================================ */
botao_sim.addEventListener("click", function () {

    // Gatinho feliz no lugar do gatinho normal
    gatinho.src = "imagens/gatinho_feliz.gif";

    // Esconde os dois botões
    // (display = "none" é mais seguro do que usar src = "")
    botao_sim.style.display = "none";
    botao_nao.style.display = "none";

    // Nova mensagem (o \n vira quebra de linha por causa do white-space: pre-line no CSS)
    titulo_secundario.textContent = "Sabia que você ia aceitar,\nmeu amor ❤";
});

/* ============================================================
   4) BOTÃO "NÃO": foge deslizando
   O botão se move DENTRO da janela, então nunca sai da tela
   e funciona em qualquer tamanho de aparelho.
   ============================================================ */
function fugir() {

    // Tamanho atual da janela e do botão, em pixels
    const larguraJanela = janela.clientWidth;
    const alturaJanela = janela.clientHeight;
    const larguraBotao = botao_nao.offsetWidth;
    const alturaBotao = botao_nao.offsetHeight;

    // Região onde o botão pode ficar (evita as bordas e a barra de título da janelinha)
    const margemLateral = larguraJanela * 0.06;   // 6% de cada lado
    const margemTopo = alturaJanela * 0.25;       // começa a 25% do topo (abaixo da barra)
    const margemBase = alturaJanela * 0.05;       // 5% de folga embaixo

    // Espaço livre onde o canto do botão pode cair
    const espacoX = larguraJanela - larguraBotao - margemLateral * 2;
    const espacoY = alturaJanela - alturaBotao - margemTopo - margemBase;

    // Math.max(0, ...) evita número negativo se a tela for muito pequena
    // Math.random() sorteia um número entre 0 e 1
    const novoX = margemLateral + Math.random() * Math.max(0, espacoX);
    const novoY = margemTopo + Math.random() * Math.max(0, espacoY);

    // Aplica a nova posição; o "transition" do CSS faz o botão deslizar até lá
    botao_nao.style.left = novoX + "px";
    botao_nao.style.top = novoY + "px";
}

// Computador: foge quando o mouse passa por cima
botao_nao.addEventListener("mouseover", fugir);

// Celular: foge quando o dedo encosta.
// preventDefault() impede que o toque vire um clique antes de ele fugir.
botao_nao.addEventListener("touchstart", function (e) {
    e.preventDefault();
    fugir();
}, { passive: false });

/* ============================================================
   5) AJUSTE AO GIRAR O CELULAR / REDIMENSIONAR A JANELA
   Remove a posição sorteada (em px) para o botão voltar ao lugar
   original definido em % no CSS, que se adapta ao novo tamanho.
   ============================================================ */
window.addEventListener("resize", function () {
    botao_nao.style.left = "";
    botao_nao.style.top = "";
});