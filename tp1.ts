// Consigna 1
interface Animal {
    nombre: string;

    gritar(): string;
}

// Consigna 2
class Perro implements Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return "Woof woof!";
    }
}

class Gato implements Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return "Meow meow~";
    }
}

class Vaca implements Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return "Moo moo~";
    }
}

// Consigna 3
function describirAnimal(animal: Animal) {
    console.log(
        "El animal " + animal.nombre + " hace " + animal.gritar()
    );
}

// Consigna 4
const perro: Perro = new Perro("Aslan");

const vaca: Vaca = new Vaca("Flor");

const gato: Gato = new Gato("Mochi");

// Consigna 5
describirAnimal(perro);
describirAnimal(vaca);
describirAnimal(gato);

// Consigna 6
enum DiasSemana {
    LUNES = "LUNES",
    MARTES = "MARTES",
    MIERCOLES = "MIERCOLES",
    JUEVES = "JUEVES",
    VIERNES = "VIERNES",
    SABADO = "SABADO",
    DOMINGO = "DOMINGO",
}

// Consigna 7
let jugador: string | number;

jugador = "Messi";

jugador = 10;

// Consigna 8
interface Fila<T> {
    agregar(elemento: T): void;

    remover(): T | undefined;
}

class FilaGenerica<T> implements Fila<T> {
    private elementos: T[];

    constructor() {
        this.elementos = [];
    }

    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }

    remover(): T | undefined {
        return this.elementos.shift();
    }
}

// Consigna 9
const filaNumeros: FilaGenerica<number> = new FilaGenerica<number>();

const filaStrings: FilaGenerica<string> = new FilaGenerica<string>();

const filaAnimales: FilaGenerica<Animal> = new FilaGenerica<Animal>();

// Consigna 10
filaAnimales.agregar(perro);
filaAnimales.agregar(vaca);
filaAnimales.agregar(gato);

filaNumeros.agregar(11);
filaNumeros.agregar(22);
filaNumeros.agregar(33);

filaStrings.agregar("Once");
filaStrings.agregar("Veintidós");
filaStrings.agregar("Treinta y tres");

filaAnimales.remover();
filaNumeros.remover();
filaStrings.remover();