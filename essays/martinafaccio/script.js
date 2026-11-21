const config = {
    background: "./imgs/torrevelasca.jpg",
    uni: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Palazzo_Resta_Pallavicino_Milan_Court1.jpg?utm_source=it.wikipedia.org&utm_campaign=index&utm_content=original"
};

document.querySelector(".hero-bg").style.backgroundImage = `url("${config.background}")`;
document.getElementById("uni").src = config.uni;

