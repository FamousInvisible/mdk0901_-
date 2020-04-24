function partymode() {
    let symb = '0123456789ABCDEF',
    color = '#';
    for (var i = 0; i < 6; i++) {
      color += symb[Math.floor(Math.random() * 16)];
    }
    return color;
}

const button = document.querySelector("button");
button.addEventListener("click", party);

function party(){
    document.body.style.backgroundColor=partymode();
}