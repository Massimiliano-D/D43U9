// tipo any
let valore: any = 42;
valore = "Test";
valore = [1, 2, 3];

//Il tipo Union:
function stampaNumeroOStringa(valore: number | string): void {
  console.log(valore);
}
stampaNumeroOStringa(42);
stampaNumeroOStringa("Test");

//Il tipo Tupla:
let coppia: [string, number] = ["Alice", 30];
console.log(coppia[0]);
console.log(coppia[1]);

//Le Interfacce in TS:
interface Persona {
  nome: string;
  età: number;
}
function saluta(persona: Persona): void {
  console.log(`Ciao, sono ${persona.nome}
     e ho ${persona.età} anni.`);
}
const utente: Persona = {
  nome: "Alice",
  età: 30,
};
saluta(utente);

//Types vs Interfaces:
// Esempio type
type Punto = {
  x: number;
  y: number;
};

// Esempio interfaccia
interface Punto2D {
  x: number;
  y: number;
}
const punto: Punto = { x: 1, y: 2 };
const punto2: Punto2D = { x: 3, y: 4 };

//I Generics:
// Funzione generica che inverte un array
function invertiArray<T>(array: T[]): T[] {
  return array.reverse();
}

const numeri: number[] = [1, 2, 3, 4, 5];

const invertiti: number[] = invertiArray(numeri);

console.log(invertiti);
// Stampa [5, 4, 3, 2, 1]
