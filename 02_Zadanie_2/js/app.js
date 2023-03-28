/*Część 1
Stwórz klasę Duck. Będzie to klasa abstrakcyjna, z której będą dziedziczyć inne kaczki. Stwórz wewnątrz tej klasy konstruktor i metody:

konstruktor - którego zadaniem będzie ustawienie typu kaczki na "ordinary duck" np. this.type = "ordinary duck"
sound() - wypisuje "Quack quack"
swim() - wypisuje "I'm swimming...""
print() - wypisuje "Looks like ordinary duck". Skorzystaj z ustawienia type do wypisania typu kaczki.
Stwórz obiekt donaldDuck. Wywołaj dla niego wszystkie metody. */

class Duck {
	constructor() {
		this.type = "ordinary duck";
	}
	sound() {
		console.log("quack, quack!");
	}
	swim() {
		console.log("I'm swimming");
	}
	print() {
		console.log("Looks like" + " " + this.type);
	}
	fly() {
		console.log("I'm flying!");
	}
}
const donaldDuck = new Duck();
donaldDuck.sound();
donaldDuck.swim();
donaldDuck.print();
donaldDuck.fly();
console.log(donaldDuck);
class MallardDuck extends Duck {
	constructor() {
		super();
		this.type = "mallard";
	}
}
const daisyDuck = new MallardDuck();
daisyDuck.sound();
daisyDuck.swim();
daisyDuck.print();
daisyDuck.fly();
console.log(daisyDuck);
class RubberDuck extends Duck {
	constructor() {
		super();
		this.type = "rubber";
	}
	fly() {
		console.log("Rubber ducks can't fly!");
	}
}
const howardTheDuck = new RubberDuck();
howardTheDuck.sound();
howardTheDuck.swim();
howardTheDuck.print();
howardTheDuck.fly();
console.log(howardTheDuck);

//const daffyDuck= new daffyDuck ?

/*Część 3
Na bazie klasy Duck stwórz kolejną o nazwie MallardDuck. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody print() typ kaczki zmienił się na "mallard". Stwórz obiekt daisyDuck. Wywołaj dla niego wszystkie metody. */

/*Część 4
Stworzyłeś klasę Duck. Mogą z niej dziedziczyć wszystkie kaczki. Twoim zadaniem teraz jest dodanie do odpowiedniej klasy metody fly(). Metoda ma wypisywać w konsoli tekst "I'm flying...".*/

/*Część 5
Na bazie klasy Duck stwórz kolejną o nazwie RubberDuck. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody print() typ kaczki zmienił się na "rubber". Stwórz obiekt howardTheDuck. Wywołaj dla niego wszystkie metody. Czy widzisz coś niepokojącego?

Twoja gumowa kaczka potrafi latać!

Nadpisz odpowiednio metodę fly() tak, aby po jej wywołaniu w przypadku gumowej kaczki wypisywał się w konsoli tekst "Rubber ducks can't fly!".*/
