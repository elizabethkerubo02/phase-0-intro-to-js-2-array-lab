// Write your solution here!np

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push('Ralph');
}

function destructivelyPrependCat(){
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat(){
    cats.pop('liz');
}
function destructivelyRemoveFirstCat(){
    cats.shift('ju');
}


function appendCat(){
    const newCats = [...cats, "Broom"]
    return newCats;
}

function prependCat(){
    const newCats = ["Arnold", ...cats]
    return newCats;
}






function removeLastCat(){
    const newCats= [...cats.slice(0,2)];
    return newCats;
}


function removeFirstCat(){
    const newCats = [...cats.slice(1)];
    return newCats;
}