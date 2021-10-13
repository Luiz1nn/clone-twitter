const cabecalho = document.querySelector('header');
const textarea = document.querySelector('textarea');
const tweetar = document.querySelector('button');
const feed = document.querySelector(".conteudoPrincipal_listaTweets")

function pegarTweet(event) {

    event.preventDefault();
    const tweetTextarea = textarea.value;
    criarTweet(tweetTextarea);

}

tweetar.addEventListener('click', pegarTweet);

function criarTweet(tweetTexto) {

    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();

    const tweet = {
        nome: "Luis",
        foto: "./assets/img/Profile Pic.png",
        usuario: "@luizinn",
        texto:tweetTexto,
        tempo: `${hora}:${minutos}`
    }

    listarTemplateTweet(tweet);

}

function listarTemplateTweet(tweet) {

    const {nome,foto,usuario,texto,tempo} = tweet

    let li = document.createElement("li");
    li.classList.add("conteudoPrincipal_tweet")

    let img = document.createElement("img");
    img.src = foto
    img.classList.add("tweet_fotoPerfil")

    let div = document.createElement("div");
    div.classList.add("tweet_conteudo")

    let h2 = document.createElement("h2");
    h2.innerText = nome

    let span = document.createElement("span");
    span.innerText = ` ${usuario} - ${tempo}`

    let p = document.createElement("p");
    p.innerText = texto

    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    li.appendChild(img);
    li.appendChild(div);

    feed.appendChild(li);
    textarea.value = ""

}

$('.darkmodeLabel').on('click', function () {
    $(".cabecalho_menuItem.dark")
      .find('[data-fa-i2svg]')
      .toggleClass('fa-toggle-on')
      .toggleClass('fa-toggle-off');
  });