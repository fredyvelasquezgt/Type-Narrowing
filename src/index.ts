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
