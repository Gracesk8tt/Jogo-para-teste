let personagem;
let grama;
let tamanho = 64;
let andarx = 0;
let andary = 0;
let velocidade = 64;
let restart;

function setup() {
    createCanvas(576, 576);
    personagem = loadImage('pacman.png');
    grama = loadImage('grama.png');
}

function draw() {
    if (andarx < 0) {
        andarx = 0;
    }

    if (andary < 0) {
        andary = 0;
    }

    if (andarx > tamanho * 8) {
        andarx = tamanho * 8;
    }

    if (andary > tamanho * 8) {
        andary = tamanho * 8;
    }

    background(220);

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            image(grama, tamanho * i, tamanho * j, tamanho, tamanho);
        }
    }

    image(personagem, andarx, andary, tamanho, tamanho);

    if (andarx === tamanho * 8 && andary === tamanho * 8) {
        rect(160, 160, 256, 256);
        textSize(35);
        text('Ganhou', 220, 300);

        restart = createButton('Reiniciar');
        restart.mousePressed(reset);
        noLoop();
    }
}

function reset() {
    andarx = 0;
    andary = 0;
    restart.remove();
    loop();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        andary -= velocidade;
    } else if (keyCode === DOWN_ARROW) {
        andary += velocidade;
    } else if (keyCode === LEFT_ARROW) {
        andarx -= velocidade;
    } else if (keyCode === RIGHT_ARROW) {
        andarx += velocidade;
    }
}