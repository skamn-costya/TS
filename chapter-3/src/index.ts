// npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin


console.log('Hello TypeScript! 3!++')

type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

// Cat
let a: CatOrDogOrBoth = {
name: 'Bonkers',
purrs: true
}

// Dog
a = {
name: 'Domino',
barks: true,
wags: true
}

// И то и другое
a = {
name: 'Donkers',
// barks: true,
purrs: true,
wags: true
}

const b: CatAndDog = {
name: 'Domino',
barks: true,
purrs: true,
wags: true
}

console.log(a)
console.log(b)
