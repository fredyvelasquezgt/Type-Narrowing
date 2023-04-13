function triple(value: number | string) {
    if(typeof value === "string") {
        return value.repeat(3) 
    }
    return value * 3
}


const el = document.getElementById("idk") //aqui puede ser dos 
if(el) { //aqui ya es puer HTMLElement
    
} else {
    el
}

const printLetters = (word?:string)=>{
    if(word) {
        for(let char of word) {
            console.log(char);
        }
    }

    else {
        console.log('no es posible pasar');
    }
}

function someDemo(x:string | number, y: string | boolean) {
    if(x === y) {
        x.toUpperCase()
    }
}


interface Movie {
    title:string,
    duration:number
}

interface TVShow {
    title: string,
    numEpisodes:number,
    episodeDuration: number
}

function getRuntime(media: Movie | TVShow) {
    if("numEpisodes" in media) {
        //aqui ya sabe que estoy en TVSHow
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
}

console.log(getRuntime({title:'Amadeus', duration: 145})); 
console.log(getRuntime({title:'SpongeBob', episodeDuration: 30, numEpisodes:20 })); 

// Instanceof Narrowing
// esto me ayuda a saber si la cosa con la que estoy trabajando es instancia de algo mas 

function printFullDate(date: string | Date) {
    if(date instanceof Date) {
        console.log(date.toUTCString());
    } else {
        console.log(new Date(date).toUTCString()); 
    }
}

class User {
    constructor(public username:string) {

    }
}

class Company {
    constructor(public name:string) {

    }
}

function printName(entity: User | Company) {
    if(entity instanceof User) {

    } else {
        
    }
}

//Type Predicates

interface Cat {
    name:string,
    numLives: number
}

interface Dog {
    name:string,
    breed:string
}

function isCat(animal: Cat | Dog): animal is Cat {
   return (animal as Cat).numLives !== undefined; 
}


function makeNoise(animal: Cat | Dog): string {
    if(isCat(animal)) {
        animal
        return 'meow'
    } else {
        animal
    }
}


//Discriminated unions

interface Rooster {
    name:string,
    weight: number,
    age:number,
    kind: "rooster"
}

interface Cow {
    name:string,
    weight: number,
    age:number,
    kind: "cow"

}

interface Pig {
    name:string,
    weight: number,
    age:number,
    kind: "pig"

}

interface Sheep {
    name:string,
    weight: number,
    age:number,
    kind: "sheep"
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal:FarmAnimal) {
    switch(animal.kind) {
        case("pig"):
            return 'oink!'
        case("cow"):
            return 'mooo!'
        case("rooster"):
            return 'sound!!'
        case("sheep"):
            return 'baaa!';
        default:
            //we should never make it here, if we handled all cases correctly
            // const shouldNeverGetHere: never = animal
            // return shouldNeverGetHere
            const _exhaustiveCheck: never = animal
            return _exhaustiveCheck;
    }
}

const stevie: Rooster = {
    name: "stevie chicks",
    weight: 2,
    age: 1.5,
    kind: "rooster"
};

console.log(getFarmAnimalSound(stevie)); 

