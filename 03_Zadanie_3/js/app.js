/*Zadanie 3
Na Twojej stronie internetowej masz stworzony formularz, który pozwala dodawać różne rodzaje produktów do listy.

W pliku masz stworzoną klasę Food - jako klasę abstrakcyjną. W konstruktorze klasa ustawia nazwę produktu (name), ilość białka (protein), ilość węglowodanów (carbs) oraz ilość tłuszczu (fat) w produkcie, (W gramach).

Napisz kod dzięki, któremu po wypełnieniu formularza i kliknięciu przycisku "Dodaj", zostaną wykonane następujące czynności:

nowy produkt zostanie dodany do listy ul o id products,
zostanie stworzony nowy obiekt na podstawie odpowiedniej klasy dziedziczącej po Food. To znaczy, jeżeli produkt będzie zawierał powyżej 250 kcal zostanie stworzony jako obiekt klasy FastFood. Jeżeli poniżej 250 kcal zostanie stworzony jako obiekt klasy FatFreeFood.
dodaj stworzony obiekt do tablicy foods i wyświetl ją w konsoli.
Kalorie możesz obliczyć na podstawie następującego wzoru:

1g białka	dostarcza 4 kcal
1g tłuszczu	dostarcza 9 kcal
1g węglowodanów	dostarcza 4 kcal

Przykład. Po dodaniu produktu hot_dog i wypełnieniu jego danych odżywczych w formularzu, zostanie stworzony obiekt na bazie klasy FastFood np. w następujący sposób: new FastFood('Hot Dog', 10, 4.2, 26), co po przeliczeniu: 10* 4 + 4.2 * 4 + 9 * 26 daje 280.8 kcal.

Na podstawie formularza stwórz kilka obiektów jak poniżej:

new FastFood('Fries', 3.4, 41, 15)
new FastFood('Donut', 4.9, 51, 25)
new FatFreeFood('Greek Yogurt', 10, 3.6, 0.4)

Napisz metodę o nazwie print (w odpowiedniej klasie), która będzie wypisywała informację o produkcie.*/

const foods = [];

class Food {
	constructor(name, protein, carbs, fat) {
		this.name = name;
		this.protein = protein;
		this.carbs = carbs;
		this.fat = fat;
	}

	print() {
		console.log(
			this.name,
			"Białko: " + this.protein + "g",
			"Tłuszcz: " + this.fat + "g",
			"Węglowodany: " + this.carbs + "g"
		);
	}
}

class FastFood extends Food {}

class FatFreeFood extends Food {}

const form = document.querySelector("form");
const proteinsInput = document.querySelector("#proteins");
const carbsInput = document.querySelector("#carbs");
const fatInput = document.querySelector("#fat");
const nameInput = document.querySelector("#name");
const products = document.querySelector("#products");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const proteins = parseFloat(proteinsInput.value);
	const carbs = parseFloat(carbsInput.value);
	const fat = parseFloat(fatInput.value);
	const name = nameInput.value;

	const kcal = proteins * 4 + fat * 9 + carbs * 4;

	const newLi = document.createElement("li");
	newLi.innerHTML = "<strong>" + name + "</strong> - " + kcal + "kcal";
	products.appendChild(newLi);

	if (kcal > 250) {
		const fastFood = new FastFood(name, proteins, carbs, fat);
		foods.push(fastFood);
	} else {
		const fatFreeFood = new FatFreeFood(name, proteins, carbs, fat);
		foods.push(fatFreeFood);
	}

	console.log(foods);
	console.log(
		"FAST FOODS: ",
		foods.filter((food) => food instanceof FastFood)
	);
	console.log(
		"FAT FREE FOODS: ",
		foods.filter((food) => food instanceof FatFreeFood)
	);

	foods.forEach((food) => {
		food.print();
	});
});
