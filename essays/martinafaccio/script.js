const config = {
    background: "./imgs/torrevelasca.jpg",
    uni: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100064062002117&f=1&nofb=1&ipt=afa0a6c13d244927e04fd81200c64c4b3dd9478d7dc15a98bf4f00f7abfc02ce&ipo=images"
};

document.querySelector(".hero-bg").style.backgroundImage = `url("${config.background}")`;
document.getElementById("uni").src = config.uni;
