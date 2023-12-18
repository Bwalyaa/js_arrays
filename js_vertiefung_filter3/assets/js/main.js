const array = ["superman","Batman",undefined, , "Wonder Woman", "Spider-Man","Black Widow", "iron man", "thor", "catwoman", , null]

const myHeroes = array.filter(arr => arr !== null && arr !== undefined)
console.log(array);
console.log(myHeroes);