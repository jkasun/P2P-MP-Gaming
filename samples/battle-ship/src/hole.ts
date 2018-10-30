import { Drawable } from "./drawable";

export class Hole implements Drawable {
    public static Width = 50;
    public static Height = 50;

    private c: CanvasRenderingContext2D;
    private color: string;

    constructor(c, color) {
        this.c = c;
        this.color = color;
    }

    public draw(x, y) {
        this.c.beginPath();

        this.c.fillStyle = this.color || '#0288d1';
        this.c.strokeStyle = '#4dd0e1';
        this.c.lineWidth = 1;

        this.c.rect(x, y, Hole.Width, Hole.Height);

        this.c.fill();
        this.c.stroke();

        this.c.closePath();
    }

    getHeight() {
        return Hole.Height;
    }

    getWidth() {
        return Hole.Width;
    }
}