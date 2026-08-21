// TP1 TS
// "Desarrollo de Aplicaciones Web - 2026 - UNER FCAD"

// --> Consigna 1 <--
interface Animal {
    nombre: string;
    gritar(): string;
}

// --> Consigna 2 <--
class Perro implements Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return "Guau guau";
    }
}

class Gato implements Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return "Miau miau";
    }
}

class Vaca implements Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return "Muu muu";
    }
}

// --> Consigna 3 <--
function describirAnimal(animal: Animal): void {
    console.log("El animal " + animal.nombre + " hace " + animal.gritar());
}

// --> Consigna 4 <--
const perro: Perro = new Perro("Rex");
const gato: Gato = new Gato("Michi");
const vaca: Vaca = new Vaca("Lola");

// --> Consigna 5 <--
describirAnimal(perro);
describirAnimal(gato);
describirAnimal(vaca);

// --> Consigna 6 <--
enum DiasSemana {
    LUNES = "LUNES",
    MARTES = "MARTES",
    MIERCOLES = "MIERCOLES",
    JUEVES = "JUEVES",
    VIERNES = "VIERNES",
    SABADO = "SABADO",
    DOMINGO = "DOMINGO",
}

// C--> Consigna 7 <--
let jugador: string | number;

jugador = "Messi";
jugador = 10;

// --> Consigna 8 <--
interface Fila<T> {
    agregar(elemento: T): void;
    remover(): T | undefined;
}

class FilaGenerica<T> implements Fila<T> {
    private elementos: T[] = [];

    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }

    remover(): T | undefined {
        return this.elementos.shift();
    }
}

// --> Consigna 9 <--
const filaNumeros: FilaGenerica<number> = new FilaGenerica<number>();
const filaStrings: FilaGenerica<string> = new FilaGenerica<string>();
const filaAnimales: FilaGenerica<Animal> = new FilaGenerica<Animal>();

// --> Consigna 10 <--
filaAnimales.agregar(perro);
filaAnimales.agregar(gato);
filaAnimales.agregar(vaca);

filaNumeros.agregar(10);
filaNumeros.agregar(20);
filaNumeros.agregar(30);

filaStrings.agregar("hola");
filaStrings.agregar("como");
filaStrings.agregar("estas");

filaAnimales.remover();
filaNumeros.remover();
filaStrings.remover();
