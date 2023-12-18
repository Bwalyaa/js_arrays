// String Number Boolean

const string = "ich bin ein String"
const number = 245
const boolean = true

// Array
let team = ["Alex", "John", "Kim", "Jimmy", "Tommy"]
console.log(team);

let player1 = "Alex";
let player2 = "John";
let player3 = "Kim";

let teamArr = [player1, player2, player3]
console.log(teamArr);

//index
// So können wir auf einzelne Elemente zugreifen, indem wir eine Zahl in eine eckige Klammer schreiben 

console.log(team[1]);
console.log(team[4]);

//indexOf()
// sucht in einem Array nach dem suchwort gib uns den INdex zurück

console.log(team.indexOf("John")); // 1
console.log(team.indexOf("Jimmy")); // 3

team[0] = "Julia"
team[2] = "Daniel"

console.log(team);

// Dynamisch
console.log(team.indexOf("Julia")); // index = 0
team[team.indexOf("Julia")] = "Nina"
console.log(team);

const searchUser = () => {
    let user = document.querySelector("#user").value
    console.log(user);
    let newUser = document.querySelector("#newUser").value
    console.log(newUser);

    team[team.indexOf(user)] = newUser
    console.log("danach", team);
}

// * length
console.log(team.length); // 5

// just good to know
console.log(team[team.length -1]);

let mitarbeiter = ["Jimmy", "Johanna", "Christian", "Jannik", "Steffen"]
console.log(mitarbeiter);

// * pop()
// Damit kann man etwas aus einem array entfernen
// es wird immer das letzte Element entfernt, du musst nichts in die klammer schreiben 
let popMitarbeiter = mitarbeiter.pop()
console.log(popMitarbeiter);

console.log(mitarbeiter);

// * shift()
// die Shift Methode entfernt das erste Element in einem Array und gibt den Wert, des gelöschten Elements zurrück
let shiftMitarbeiter = mitarbeiter.shift()
console.log(shiftMitarbeiter);

console.log(mitarbeiter);

// * push()

// die push() Methode fügt an der letzten Stelle ein Element hinzu und gibt uns die neue länge von dem Array zurück

let pushMitarbeiter = mitarbeiter.push("Lisa")
console.log(pushMitarbeiter);
console.log(mitarbeiter);

// * unshift()
// die unshift() Methode fügt an der erste Stelle ein Element hinzu und gibt uns die neue länge von dem Array zurück

let unshiftMitarbeiter = mitarbeiter.unshift("Timo")
console.log(unshiftMitarbeiter);
console.log(mitarbeiter);

// * join()
// Mit Join() können wir ein Array zu einem String umwandeln

let heroes = ["batman", "TheJoker", "Ironman", "Thor", "ProfessorX"]

console.log(heroes);

console.log(heroes.join("  "));

const ul = document.querySelector("ul")
ul.innerHTML = "<li>" + heroes.join("</li><li>") + "</li>"

// filter ========================

const numbers = [1, 2, 3, 4, 5]

const evenNumber = numbers.filter(num => num % 2 === 0);
console.log(evenNumber);

const batman = heroes.filter(char => char === "Superman")
console.log(batman);



