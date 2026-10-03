# 💌 Carta para você

Uma cartinha interativa em pixel art, feita com **HTML, CSS e JavaScript puro**. Ao clicar na carta, aparece um pedido especial com um gatinho e dois botões: **Sim** e **Não**. Mas o botão "Não" tem vida própria e foge sempre que alguém tenta alcançá-lo. 😼

🔗 **Demo:** [https://dulcet-longma-b19782.netlify.app/]


---

## ✨ Funcionalidades

- Carta animada (GIF) que abre ao ser clicada
- Gatinho em pixel art que muda de reação ao clicar em "Sim"
- Botão "Não" que desliza suavemente para outro lugar ao passar o mouse (ou tocar, no celular)
- Fonte pixelada [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans) do Google Fonts

## 🛠️ Tecnologias

- HTML5
- CSS3 (`transition`, `position`, `clamp()`, `min()`)
- JavaScript (manipulação do DOM e eventos de `mouseover` e `touchstart`)

Sem frameworks e sem dependências: basta abrir o `index.html`.

## 📁 Estrutura do projeto

```
carta-para-voce/
├── index.html
├── style.css
├── script.js
├── README.md
└── imagens/
    ├── fundo.png
    ├── fundo_2.png
    ├── icon_carta.gif
    ├── gatinho.gif
    ├── gatinho_feliz.gif
    ├── botao_sim.png
    └── botao_nao.png
```

## 🚀 Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seuusuario/carta-para-voce.git
   ```
2. Entre na pasta:
   ```bash
   cd carta-para-voce
   ```
3. Abra o arquivo `index.html` no navegador (clique duas vezes ou arraste para a janela).


## 🎨 Como personalizar

| O que mudar | Onde |
| --- | --- |
| Texto da pergunta | `script.js`, na variável `titulo_secundario.textContent` |
| Título inicial | `index.html`, na tag `<h1 id="inicial_titulo">` |
| Imagens (gatinho, fundos, botões) | Pasta `imagens/` (mantenha os mesmos nomes ou ajuste no `script.js`) |
| Cores e fonte | `style.css` (`color`, `text-shadow`, `font-family`) |
| Velocidade da fuga do "Não" | `style.css`, em `.botao_nao { transition: ... }` |
| Posição dos elementos na janela | `style.css`, valores em `%` de `.gatinho`, `.botao_sim` e `.botao_nao` |

## 🧠 Como o botão "Não" funciona

O CSS aplica uma `transition` em `left` e `top`, e o JavaScript sorteia uma nova posição dentro da janela sempre que o mouse encosta (ou o dedo toca) no botão. Como a posição muda com animação, ele desliza em vez de teleportar.

```javascript
function fugir() {
    const maxX = janela.clientWidth - botao_nao.offsetWidth;
    const maxY = janela.clientHeight - botao_nao.offsetHeight;

    botao_nao.style.left = Math.random() * maxX + "px";
    botao_nao.style.top = Math.random() * maxY + "px";
}
```

## 📌 Ideias para o futuro

- [ ] O botão "Sim" crescer a cada tentativa de clicar no "Não"
- [ ] Mensagens diferentes a cada vez que o "Não" foge
- [ ] Música de fundo (com botão para ligar/desligar)
- [ ] Chuva de corações ao clicar em "Sim"

## 👩‍💻 Autoria

Feito com carinho por **[André](https://github.com/andre-viana66)**.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

