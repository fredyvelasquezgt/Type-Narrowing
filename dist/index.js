"use strict";
function triple(value) {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return value * 3;
}
var el = document.getElementById("idk"); //aqui puede ser dos 
if (el) { //aqui ya es puer HTMLElement
}
else {
    el;
}
var printLetters = function (word) {
    if (word) {
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            console.log(char);
        }
    }
    else {
        console.log('no es posible pasar');
    }
};
function someDemo(x, y) {
    if (x === y) {
        x.toUpperCase();
    }
}
function getRuntime(media) {
    if ("numEpisodes" in media) {
        //aqui ya sabe que estoy en TVSHow
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}
console.log(getRuntime({ title: 'Amadeus', duration: 145 }));
console.log(getRuntime({ title: 'SpongeBob', episodeDuration: 30, numEpisodes: 20 }));
// Instanceof Narrowing
// esto me ayuda a saber si la cosa con la que estoy trabajando es instancia de algo mas 
function printFullDate(date) {
    if (date instanceof Date) {
        console.log(date.toUTCString());
    }
    else {
        console.log(new Date(date).toUTCString());
    }
}
var User = /** @class */ (function () {
    function User(username) {
        this.username = username;
    }
    return User;
}());
var Company = /** @class */ (function () {
    function Company(name) {
        this.name = name;
    }
    return Company;
}());
function printName(entity) {
    if (entity instanceof User) {
    }
    else {
    }
}
function isCat(animal) {
    return animal.numLives !== undefined;
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case ("pig"):
            return 'oink!';
        case ("cow"):
            return 'mooo!';
        case ("rooster"):
            return 'sound!!';
    }
}
var stevie = {
    name: "stevie chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster"
};
console.log(getFarmAnimalSound(stevie));
