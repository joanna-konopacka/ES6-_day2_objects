![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709394-2cabee80-571f-11eb-9518-ea6a794e558e.png)


## Zadanie 1 - rozwiązywane z wykładowcą



Stwórz klasę abstrakcyjną `Vehicle`. Stwórz trzy obiekty:

1. `boat`
1. `car` 
1. `plane` 

na podstawie odpowiednich klas dziedziczących po `Vehicle`. W odpowiednich klasach stwórz metody, które będą wypisywały w konsoli informacje wyróżniające te pojazdy. Zrób to w taki sposób, aby obiekt `boat` nie mógł jeździć ani latać, itp.



## Zadanie 2



### Część 1

Stwórz klasę ```Duck```. Będzie to klasa abstrakcyjna, z której będą dziedziczyć inne kaczki. Stwórz wewnątrz tej klasy konstruktor i metody:

* konstruktor - którego zadaniem będzie ustawienie typu kaczki na "ordinary duck" np. `this.type = "ordinary duck"`
* sound() - wypisuje "Quack quack"
* swim() - wypisuje "I'm swimming...""
* print() - wypisuje "Looks like ordinary duck". Skorzystaj z ustawienia `type` do wypisania typu kaczki.

Stwórz obiekt ```donaldDuck```. Wywołaj dla niego wszystkie metody.


### Część 2

Na bazie  klasy ```Duck``` stwórz kolejną o nazwie ```WildDuck```. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody ```print()``` typ kaczki zmienił się na "wild". Stwórz obiekt ```daffyDuck```. Wywołaj dla niego wszystkie metody.


### Część 3

Na bazie klasy ```Duck``` stwórz kolejną o nazwie ```MallardDuck```. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody ```print()``` typ kaczki zmienił się na "mallard". Stwórz obiekt ```daisyDuck```. Wywołaj dla niego wszystkie metody.


### Część 4

Stworzyłeś klasę ```Duck```. Mogą z niej dziedziczyć wszystkie kaczki. Twoim zadaniem teraz jest dodanie do odpowiedniej klasy metody ```fly()```. Metoda ma wypisywać w konsoli tekst "I'm flying...".


### Część 5

Na bazie  klasy ```Duck``` stwórz kolejną o nazwie ```RubberDuck```. Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody ```print()``` typ kaczki zmienił się na "rubber". Stwórz obiekt ```howardTheDuck```. Wywołaj dla niego wszystkie metody. Czy widzisz coś niepokojącego?

Twoja gumowa kaczka potrafi latać!

Nadpisz odpowiednio metodę ```fly()``` tak, aby po jej wywołaniu w przypadku gumowej kaczki wypisywał się w konsoli tekst "Rubber ducks can't fly!".


## Zadanie 3



Na Twojej stronie internetowej masz stworzony formularz, który pozwala dodawać
różne rodzaje produktów do listy.

W pliku masz stworzoną klasę `Food` - jako klasę abstrakcyjną. W konstruktorze klasa ustawia nazwę
produktu (name), ilość białka (protein), ilość węglowodanów (carbs)  oraz ilość tłuszczu (fat) w produkcie, (W gramach).


Napisz kod dzięki, któremu po wypełnieniu formularza i kliknięciu przycisku "Dodaj", zostaną wykonane następujące czynności:
 * nowy produkt zostanie dodany do listy ```ul``` o id ```products```,
 * zostanie stworzony nowy obiekt na podstawie odpowiedniej klasy dziedziczącej po `Food`. To znaczy, jeżeli produkt będzie zawierał powyżej 250 kcal zostanie stworzony jako obiekt klasy `FastFood`. Jeżeli poniżej 250 kcal zostanie stworzony jako obiekt klasy `FatFreeFood`.
 * dodaj stworzony obiekt do tablicy ```foods``` i wyświetl ją w konsoli.

Kalorie możesz obliczyć na podstawie następującego wzoru:
```plain
1g białka	dostarcza 4 kcal
1g tłuszczu	dostarcza 9 kcal
1g węglowodanów	dostarcza 4 kcal
```

Przykład.
Po dodaniu produktu hot_dog i wypełnieniu jego danych odżywczych w formularzu, zostanie stworzony obiekt na bazie klasy `FastFood` np. w następujący sposób: ```new FastFood('Hot Dog', 10, 4.2, 26)```, co po przeliczeniu:
10* 4 + 4.2 * 4 + 9 * 26 daje 280.8 kcal.

Na podstawie formularza stwórz kilka obiektów jak poniżej:

```JavaScript
new FastFood('Fries', 3.4, 41, 15)
new FastFood('Donut', 4.9, 51, 25)
new FatFreeFood('Greek Yogurt', 10, 3.6, 0.4)
```
Napisz metodę o nazwie print (w odpowiedniej klasie), która będzie wypisywała informację o produkcie.
