// La clase Operacion es una clase base abstracta en la que definimos el método calcular
class Operacion {
    calcular() {
        throw new Error('Este método debe ser implementado');
    }
}

// Valor es una clase que representa los operandos de la operación (los números)
class Valor extends Operacion {
    constructor(dato) {
        super();
        this.dato = dato;
    }

    calcular() {
        return this.dato;
    }
}

// Adicion es una clase que representa la operación de suma. Cuando se calcula, invoca el método calcular() en sus operandos izquierdo y derecho, y luego los suma.
class Adicion extends Operacion {
    constructor(izq, der) {
        super();
        this.izq = izq;
        this.der = der;
    }

    calcular() {
        return this.izq.calcular() + this.der.calcular();
    }
}

// Substraccion realiza la operación de resta entre sus operandos.
class Substraccion extends Operacion {
    constructor(izq, der) {
        super();
        this.izq = izq;
        this.der = der;
    }

    calcular() {
        return this.izq.calcular() - this.der.calcular();
    }
}

// Cliente
function principal() {
    // Crear la operación: 5 + 2 - 3

    const valorCinco = new Valor(5);
    const valorDos = new Valor(2);
    const valorTres = new Valor(3);

    // (5 + 2)
    const adicion = new Adicion(valorCinco, valorDos);

    // (5 + 2) - 3
    const substraccion = new Substraccion(adicion, valorTres);

    // Evaluar la operación completa
    const resultado = substraccion.calcular();

    console.log("El resultado de la operación es: " + resultado);
}

principal();
