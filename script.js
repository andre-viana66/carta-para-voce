const fundo_carta = document.getElementById("carta"); 
const inicial_titulo = document.getElementById("inicial_titulo");
const gatinho = document.getElementById("gatinho");
const botao_nao = document.getElementById("botao_nao");
const botao_sim = document.getElementById("botao_sim");
const titulo_secundario = document.getElementById("secundario_titulo");
const gatinho_feliz = document.getElementById("gatinho_feliz");

fundo_carta.addEventListener('click', function() {
    //Definindo segundo fundo
    fundo_carta.src =  "imagens/fundo_2.png";
    fundo_carta.width = 600; //definindo tamanho do segundo fundo
    fundo_carta.style.cursor = "default"; //definindo tipo de cursor

    //escondendo texto do usuário
    inicial_titulo.textContent = "";

    //adicionando gif para quando o icone for clicado
    gatinho.src = "imagens/gatinho.gif"; 

    //adicionando botao de confirmação
    botao_sim.src = "imagens/botao_sim.png";
    botao_sim.style.cursor = "pointer";  //definindo tipo de cursor

    //adicionando botao de negação
    botao_nao.src = "imagens/botao_nao.png"
    botao_nao.style.cursor = "pointer"  //definindo tipo de cursor

    //adicionando texto secundario
    titulo_secundario.textContent = "Aceita namorar comigo? "

    //verificação de log
    console.log("Foi aqui");
});

botao_sim.addEventListener('click', function(){
    gatinho.src = "imagens/gatinho_feliz.gif";
    botao_sim.src = "";
    botao_sim.style.cursor = "default";
    botao_nao.src = "";
    titulo_secundario.textContent = `Sabia que você ia aceitar
    meu amor ❤`;
    titulo_secundario.style.whiteSpace = "pre-line";
    titulo_secundario.style.textAlign = "center"
    console.log("foi aqui");
});


function fugir() {
    const margem = 10; // distância mínima da borda
    const larguraJanela = document.documentElement.clientWidth;
    const alturaJanela = document.documentElement.clientHeight;

    const maxX = Math.max(0, larguraJanela - botao_nao.offsetWidth - margem);
    const maxY = Math.max(0, alturaJanela - botao_nao.offsetHeight - margem);

    botao_nao.style.left = Math.max(margem, Math.random() * maxX) + "px";
    botao_nao.style.top = Math.max(margem, Math.random() * maxY) + "px";
};

botao_nao.addEventListener("mouseover", fugir);
botao_nao.addEventListener("touchstart", (e) => {
    e.preventDefault();
    fugir();
});





