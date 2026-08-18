// ########## Ejercicio 1 ##########

interface Animal {
  nombre: string;
  gritar(): string;
}

// ########## Ejercicio 2 ##########

class Perro implements Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  gritar(): string {
    return "Guauu guauu";
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
    return "Muu Muu";
  }
}

// ########## Ejercicio 3 ##########

function describirAnimal(animal: Animal): void {
  console.log(`El animal ${animal.nombre} hace ${animal.gritar()}`);
}

// ########## Ejercicio 4 ##########

const perro: Perro = new Perro("Dog");
const gato: Gato = new Gato("Cat");
const vaca: Vaca = new Vaca("Cow");

// ########## Ejercicio 5 ##########

describirAnimal(perro);
describirAnimal(gato);
describirAnimal(vaca);

// ########## Ejercicio 6 ##########

enum DiasSemana {
  lunes = "Lunes",
  martes = "Martes",
  miercoles = "Miercoles",
  jueves = "Jueves",
  viernes = "Viernes",
}

// ########## Ejercicio 7 ##########

let variableMessi: string | number;

variableMessi = "Messi";
console.log(variableMessi);

variableMessi = 10;
console.log(variableMessi);

// ########## Ejercicio 8 ##########

interface Fila<T> {
  agregar(elemento: T): void;
  remover(): T | undefined;
}

class FilaGenerica<T> implements Fila<T> {
  private arrayDeElementos: T[] = [];

  agregar(elemento: T): void {
    this.arrayDeElementos.push(elemento);
  }

  remover(): T | undefined {
    return this.arrayDeElementos.shift();
  }
}

// ########## Ejercicio 9 ##########

const filaDeNumeros: FilaGenerica<number> = new FilaGenerica();
const filaDeString: FilaGenerica<string> = new FilaGenerica();
const filaDeanimales: FilaGenerica<Animal> = new FilaGenerica();

// ########## Ejercicio 10 ##########

// Agrego animales
filaDeanimales.agregar(perro);
filaDeanimales.agregar(gato);
filaDeanimales.agregar(vaca);

// Agrego números
filaDeNumeros.agregar(5);
filaDeNumeros.agregar(10);
filaDeNumeros.agregar(3);

// Agrego strings
filaDeString.agregar("Taylor");
filaDeString.agregar("Swift");
filaDeString.agregar("August");

// Remuevo un elemento en cada una
filaDeanimales.remover();
filaDeNumeros.remover();
filaDeString.remover();
