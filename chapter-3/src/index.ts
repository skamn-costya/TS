"use strict";
console.log('Hello TypeScript! 3')

// type Is <T> = {
//     (arg1: T, arg2: T): boolean
//     (...args: T[]): boolean
// }

type Is = {
    <T>(arg1: T, arg2: T): boolean[]
    <T>(...array: T[]): boolean[]
}

const is: Is = (arg1, arg2) => {
    if (typeof arg1 === arg2)
        return [true]
    else
        return [false]
}

console.log(is('a', 'a'))

// const greet5 = new Function('name', 'return "hello " + name')

// greet5(greet5);

// let h = null

// console.log(h)

// h = 123

// console.log(h)

// type Reserve = {
// (from: Date, to: Date, destination: string): boolean
// (from: Date, destination: string): boolean
// (from: Date): boolean
// }

// const reserve: Reserve = (
//         from: Date,
//         toOrDestination?: Date | string,
//         destination?: string
//     ) => {
//         if (toOrDestination instanceof Date && destination !== undefined) {
//         // Book a one-way trip
//         } else if (typeof toOrDestination === 'string') {
//         // Book a round trip
//         }
//         return true
// }

// const d: Date = new Date(Date.now());
// console.log(reserve(d))
// console.log(reserve(d, 'Prague'))
// console.log(reserve(d, d, 'Prague'))

// type Cat = {name: string, purrs: boolean}
// type Dog = {name: string, barks: boolean, wags: boolean}
// type CatOrDogOrBoth = Cat | Dog
// type CatAndDog = Cat & Dog

// // Cat
// let a: CatOrDogOrBoth = {
// name: 'Bonkers',
// purrs: true
// }

// // Dog
// a = {
// name: 'Domino',
// barks: true,
// wags: true
// }

// // И то и другое
// a = {
// name: 'Donkers',
// // barks: true,
// purrs: true,
// wags: true
// }

// const b: CatAndDog = {
// name: 'Domino',
// barks: true,
// purrs: true,
// wags: true
// }

// console.log(a)
// console.log(b)
