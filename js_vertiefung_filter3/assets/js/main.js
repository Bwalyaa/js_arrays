const array = ["superman","Batman",undefined, empty, "Wonder Woman", "Spider-Man","Black Widow", "iron man", "thor", "catwoman", empty, null]

const myHeroes = array.filter(arr => arr !== null && undefined)
console.log(myHeroes);
