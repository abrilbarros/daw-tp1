interface Animal {
    nombre: string;
    gritar(): string;
}

class Perro implements Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return "guau";
    }
}

class Gato implements Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return "miau";
    }
}

class Vaca implements Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return "muuu";
    }
}

function describirAnimal(animal: Animal): void {
    console.log("el animal " + animal.nombre + " hace " + animal.gritar());
}

const perro: Perro = new Perro("rubi");
const gato: Gato = new Gato("michi");
const vaca: Vaca = new Vaca("lola");

describirAnimal(perro);
describirAnimal(gato);
describirAnimal(vaca);

enum DiasSemana {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

let jugador: number | string = "messi";
jugador = 10;

interface Fila<tipoElemento> {
    agregar(elemento: tipoElemento): void;
    remover(): tipoElemento | undefined;
}

class FilaGenerica<tipoElemento> implements Fila<tipoElemento> {
    elementos: tipoElemento[] = [];

    agregar(elemento: tipoElemento): void {
        this.elementos.push(elemento);
    }

    remover(): tipoElemento | undefined {
        return this.elementos.shift();
    }
}

const filaNumeros: FilaGenerica<number> = new FilaGenerica<number>();
const filaStrings: FilaGenerica<string> = new FilaGenerica<string>();
const filaAnimales: FilaGenerica<Animal> = new FilaGenerica<Animal>();

filaAnimales.agregar(perro);
filaAnimales.agregar(gato);
filaAnimales.agregar(vaca);

filaNumeros.agregar(10);
filaNumeros.agregar(20);
filaNumeros.agregar(30);

filaStrings.agregar("hola");
filaStrings.agregar("typeScript");
filaStrings.agregar("programacion");

filaNumeros.remover();
filaStrings.remover();
filaAnimales.remover();