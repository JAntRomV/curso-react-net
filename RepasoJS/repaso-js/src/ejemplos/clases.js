export class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    area() {
        console.log(`El área del rectángulo es: ${this.base * this.altura}`);
    }
}

export class Cuadrado extends Rectangulo {
    constructor(lado) {
        super(lado, lado);
    }

    area() {
        console.log(`El área del cuadrado es: ${this.base * this.altura}`);
    }
}
