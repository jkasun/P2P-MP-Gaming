import { Hole } from "./hole";

export class Ship {
    // 2d context
    private c: CanvasRenderingContext2D;

    // Rotated side of the ship
    rotation: Rotation = Rotation.Horizontal;

    // Position on the board
    position = {
        x: undefined,
        y: undefined
    };

    // Length of the ship
    length;

    shipImage: string;

    constructor(c, { x, y, rotation, length }) {
        this.c = c;

        this.position.x = x;
        this.position.y = y;
        this.rotation = rotation || this.rotation;
        this.length = length;
    }

    draw() {
        this.c.beginPath();
        this.c.fillStyle = '#000';

        let x = this.position.x * Hole.Width;
        let y = this.position.y * Hole.Height;
        let x1 = Hole.Height;
        let y1 = Hole.Width * this.length;

        if (this.rotation === Rotation.Horizontal) {
            this.c.rect(x, y, y1, x1);
        }

        if (this.rotation === Rotation.Vertical) {
            this.c.rect(x, y, x1, y1);
        }

        this.c.fill();
        this.c.closePath();

        // var img = new Image();
        // img.src = this.shipImage;

        // img.onload = () => {
        //     if (this.rotation === Rotation.Horizontal) {
        //          this.c.drawImage(imge, x, y, y1, x1);
        //     }

        //     if (this.rotation === Rotation.Vertical) {

        //     }
        // }
    }
}

export enum Rotation {
    Horizontal,
    Vertical
}