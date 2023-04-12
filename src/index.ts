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
