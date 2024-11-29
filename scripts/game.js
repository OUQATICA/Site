
let playerData = {
    playerHasNote: false,
    playerHasKey: false
};

document.getElementById('leave').addEventListener('click', playerLeave);
document.getElementById('enterCastle').addEventListener('click', enterCastle);
document.getElementById('lookAround').addEventListener('click', lookAround);

function startOver(event) {
    event.preventDefault();
    document.getElementById('overlay').innerHTML = `
        <p class="game__text" id="gameText">Вы стоите перед величественными, но обветшалыми воротами замка. Ветер свистит, и небо затянуто тучами.</p>
        <button class="game__button" id="enterCastle">Войти в замок</button>
        <button class="game__button" id="lookAround">Осмотреть окрестности</button>
        <button class="game__button" id="leave">Уйти</button>
        `;
    playerData.playerHasKey = false;
    playerData.playerHasNote = false;
    document.getElementById('gameBackground').style.backgroundImage = "url('../pictures/castle.jpg')";
    document.getElementById('leave').addEventListener('click', playerLeave);
    document.getElementById('enterCastle').addEventListener('click', enterCastle);
    document.getElementById('lookAround').addEventListener('click', lookAround);
};

function playerLeave(event) {
    event.preventDefault();
    document.getElementById('overlay').innerHTML = `
        <p class="game__text">Нейтральная концовка.</p>
        <p class="game__text">Вы решили не рисковать и ушли. Игра окончена.</p>
        <button class="game__button" id="startOver">Начать сначала</button>
    `;
    document.getElementById('startOver').addEventListener('click', startOver);
};

function enterCastle(event) {
    event.preventDefault();
    if (!playerData.playerHasNote) {
        document.getElementById('game').innerHTML = `
            <div class="backgroundPiture" id="gameBackground">
                    <div class="overlay" id="overlay">
                        <p class="game__text" id="gameText"> Огромное помещение с высокими потолками, пыльными люстрами и разбросанными мебелью.</p>
                        <button class="game__button" id="exploreHall">Исследовать зал</button>
                        <button class="game__button" id="openLibrary">Открыть дверь в библиотеку</button>
                    </div>
                </div>
        `;
    } else {
        document.getElementById('game').innerHTML = `
            <div class="backgroundPiture" id="gameBackground">
                    <div class="overlay" id="overlay">
                        <p class="game__text" id="gameText"> Огромное помещение с высокими потолками, пыльными люстрами и разбросанными мебелью.</p>
                        <button class="game__button" id="exploreHall">Исследовать зал</button>
                        <button class="game__button" id="openSecretRoom">Открыть дверь в тайную комнату</button>
                        <button class="game__button" id="openLibrary">Открыть дверь в библиотеку</button>
                    </div>
                </div>
        `;
    }
    document.getElementById('gameBackground').style.backgroundImage = "url('../pictures/hall.jpg')";
    document.getElementById('exploreHall').addEventListener('click', exploreHall);
    document.getElementById('openLibrary').addEventListener('click', openLibrary);
    document.getElementById('openSecretRoom').addEventListener('click', openSecretRoom);
};

function lookAround(event) {
    event.preventDefault();
    document.getElementById('overlay').innerHTML = `
        <p class="game__text" id="gameText">Вы нашли записку! В ней сказано, что в секретной комнате в замке слева от входа от библиотеку находится секретная комната с сокровищами.</p>
        <button class="game__button" id="enterCastle">Войти в замок</button>
        <button class="game__button" id="leave">Уйти</button>
    `;
    document.getElementById('leave').addEventListener('click', playerLeave);
    document.getElementById('enterCastle').addEventListener('click', enterCastle);
    playerData.playerHasNote = true;
};

function exploreHall(event) {
    event.preventDefault();
    if (!playerData.playerHasNote) {
        document.getElementById('overlay').innerHTML = `
        <p class="game__text">Вы нашли ключ от сундука.</p>
        <button class="game__button" id="openLibrary">Открыть дверь в библиотеку</button>
        `;
    } else {
        document.getElementById('overlay').innerHTML = `
        <p class="game__text">Вы нашли ключ от сундука.</p>
        <button class="game__button" id="openLibrary">Открыть дверь в библиотеку</button>
        <button class="game__button" id="openSecretRoom">Открыть дверь в тайную комнату</button>
        `;
    }
    document.getElementById('openLibrary').addEventListener('click', openLibrary);
    document.getElementById('openSecretRoom').addEventListener('click', openSecretRoom);
    playerData.playerHasKey = true;
};

function openLibrary(event) {
    event.preventDefault();
    document.getElementById('overlay').innerHTML = `
        <p class="game__text">Плохая концовка.</p>
        <p class="game__text">В библиотеке были призраки и теперь вы один из них. Никто не знает, что будет с вами дальше</p>
        <button class="game__button" id="startOver">Начать сначала</button>
    `;
    document.getElementById('gameBackground').style.backgroundImage = "url('../pictures/ghosts.jpg')";
    document.getElementById('startOver').addEventListener('click', startOver);
};

function openSecretRoom(event) {
    event.preventDefault();
    if (!playerData.playerHasKey){
        document.getElementById('overlay').innerHTML = `
            <p class="game__text" id="gameText">Вы нашли сундук! Вот только знать бы, как его открыть.</p>
            <button class="game__button" id="returnToHall">Вернуться назад</button>
        `;
    } else {
        document.getElementById('overlay').innerHTML = `
            <p class="game__text" id="gameText">Вы нашли сундук! Может быть, ключ к нему подойдет.</p>
            <button class="game__button" id="openChest">Открыть сундук</button>
            <button class="game__button" id="returnToHall">Вернуться назад</button>
        `;
    }
    document.getElementById('gameBackground').style.backgroundImage = "url('../pictures/closed_chest.jpg')";
    document.getElementById('returnToHall').addEventListener('click', enterCastle);
    document.getElementById('openChest').addEventListener('click', openChest);
};

function openChest(event) {
    event.preventDefault();
    document.getElementById('overlay').innerHTML = `
        <p class="game__text">Хорошая концовка.</p>
        <p class="game__text">Найденными сокровищами вы обсепечили себе безбедную жизнь и путевки на мальдивы раз в два года.</p>
        <button class="game__button" id="startOver">Начать сначала</button>
    `;
    document.getElementById('gameBackground').style.backgroundImage = "url('../pictures/castle.jpg')";
    document.getElementById('startOver').addEventListener('click', startOver);
};