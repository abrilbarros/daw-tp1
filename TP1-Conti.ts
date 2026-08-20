//1. Crear una interfaz “Animal” que posea el atributo “nombre”, así como también la
//definición de un método “gritar” que retorne un string que representa el ruido que
//hace el animal al gritar

interface Animal {
    nombre : string;
    gritar() : string;
}

//2. Crear las clases “Perro”, “Gato”, y “Vaca” que implementen la interfaz “Animal”.

class Perro implements Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return "Guau";
    }
}

class Gato implements Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return "Miau";
    }
}

class Vaca implements Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    gritar(): string {
        return "Muuuuuuuuu";
    }
}

//3. Crear una función “describirAnimal” que reciba como parámetro un objeto de tipo
//“Animal” e imprima en la consola “El animal [nombre del animal] hace [ruido que
//hace el animal al gritar]”. Hacer uso del método “gritar” y el acceso a la propiedad
//“nombre” para cumplir el objetivo.

function describirAnimal(animal: Animal){
    console.log(`El animal ${animal.nombre} hace ${animal.gritar()}`);
}

//4. Crear una constante “perro”, una constante “vaca”, y una constante “gato” que tengan
//como valor una instancia de la clase que corresponda y tengan declarado el tipo de
//datos correspondiente

const perro: Perro = new Perro("Roni")
const vaca: Vaca = new Vaca("Cecilia")
const gato: Gato = new Gato("Tatiana")

//5. Ejecutar el método “describirAnimal” para cada una de las constantes creadas (3
//veces en total).

describirAnimal(perro);
describirAnimal(vaca);
describirAnimal(gato);

//6. Crear un Enum “DiasSemana” que tenga como valores los días de la semana

enum DiasSemana {
    Domingo,
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado
}

//7. Crear una variable que pueda contener únicamente valores de tipo número o de tipo
//string. Asignar a la variable el string “Messi”, y luego reemplazarlo por el número 10.

let jugador: number | string = "Messi"
jugador = 10

//8. Crear una clase genérica que implemente la siguiente interfaz:

interface Fila<T> {
agregar(elemento: T): void;
remover(): T | undefined;
}

class FilaGenerica<T> implements Fila<T> {
   private elementos : T[] = [];
   agregar(elemento: T): void {
       this.elementos.push(elemento);
   }
   remover(): T | undefined {
       return this.elementos.shift();
   }
}

//9. Crear una fila para números, una fila para strings, y una fila para animales (declarando
//los tipos correspondientes en cada variable).

const numeros: FilaGenerica<number> = new FilaGenerica<number>();
const strings: FilaGenerica<string> = new FilaGenerica<string>();
const animales: FilaGenerica<Animal> = new FilaGenerica<Animal>();

//10. En la fila para animales, agregar las 3 instancias que fueron creadas con anterioridad.
//En las otras 2 filas, agregar 3 elementos a elección en cada una. Para finalizar,
//remover un elemento de cada una de las 3 filas.

animales.agregar(perro);
animales.agregar(vaca);
animales.agregar(gato);

strings.agregar("Esa mancha");
strings.agregar("no se borra");
strings.agregar("nunca mas");

numeros.agregar(26);
numeros.agregar(6);
numeros.agregar(2011);

animales.remover();
strings.remover();
numeros.remover();
