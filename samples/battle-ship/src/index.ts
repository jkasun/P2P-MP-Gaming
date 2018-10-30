import { Hole } from './hole';
import { Ship, Rotation } from './ship';

let canvas = <HTMLCanvasElement>document.getElementById('battleship-game');

canvas.height = 800;
canvas.width = 600;

let c = canvas.getContext('2d');

let draw = () => {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 11; j++) {
            let hole = new Hole(c);
            hole.draw(j * Hole.Width, i * Hole.Height);
        }
    }

    var carrier = new Ship(c, {
        x: 1,
        y: 1,
        rotation: Rotation.Horizontal,
        length: 5
        // shipImage: '../assets/img/ship2.png'
    });

    carrier.draw();

    var battleship: Ship = new Ship(c, {
        x: 6,
        y: 3,
        rotation: Rotation.Vertical,
        length: 4
    });

    battleship.draw();
};

window.requestAnimationFrame(draw);