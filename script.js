const games = [
    {
        title: "Summer Maze",
        image: "https://i.ibb.co/hDNs7ww/New-Project.png",
        url: "#"
    },
    {
        title: "Go Up Dash",
        image: "https://www.jopi.com/cdn-cgi/image/quality=70,width=256,height=256,f=auto/img/t/go-up-dash.png",
        url: "#"
    },
    {
        title: "Painting Tiles",
        image: "https://www.jopi.com/cdn-cgi/image/quality=70,width=256,height=256,f=auto/img/t/painting-tiles.png",
        url: "#"
    },
    {
        title: "Spil 4",
        image: "https://via.placeholder.com/150",
        url: "#"
    },
    {
        title: "Embed Website",
        image: "https://via.placeholder.com/150",
        url: "https://www.jopi.com/free-games-for-your-website.php"
    }
];

const gameList = document.getElementById('game-list');

games.forEach(game => {
    const gameItem = document.createElement('div');
    gameItem.className = 'game-item';
    gameItem.innerHTML = `
        <a href="${game.url}">
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
        </a>
    `;
    gameList.appendChild(gameItem);
});
