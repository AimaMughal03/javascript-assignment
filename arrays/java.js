//question 1

let fruits = ["mango", "apple", "banana", "orange" ]
console.log(fruits[2])


//question 2

let cities = ["mardan", "peshawar", "karachi", "lahore", "islamabad"]
console.log(cities[0])
console.log(cities[4])


//question 3

let array = ["apple", 2 , "kashmala" , "34" , 56 ]
for(let i=0 ; i<5 ; i++)
{
    console.log(array[i])
}


//question 4

let array2 = []
array2.push("aqsa" , "aynoor" , "sahla" , "tuba" , "javeria")
console.log(array2)


//question 5

let colors = ["red" , "purple" , "blue"]
colors.push("black" , "white")
console.log(colors)


//question 6

let numbers = [1 , 2 , 3 , 4 , 5]
numbers.push(6)
console.log(numbers)


//question 7

let array3= [11 , 22 , 33 , 44 , 55]
array3.pop()
console.log(array3)


//question 8

let animals = ["cat" , "dog" , "monkey" , "donkey"]
animals.unshift("penguin")
console.log(animals)


//question 9

let array4 = ["a" , "b" , "c" , "d" , "e"]
array4.shift()
console.log(array4)


//question 10

let sports = ["cricket" , "badminton" , "hockey" , "football" , "volleyball" , "tennis"]
let c_sports = sports.slice(0,3)
console.log(c_sports)


//question 11

let array5 = [111 , 222 , 333 , 444 , 555 , 666 , 777]
let c_array5 = array5.slice(4,7)
console.log(c_array5)


//question 12

let array6 = ["a" , "b" , "c" , "d" , "e"]
array6.splice(2,2)
console.log(array6)


//question 13

let cities2 = ["mardan", "peshawar", "karachi", "lahore", "islamabad"]
cities2.splice(3,0,"multan","faisalabad")
console.log(cities2)


//question 14

let array7 = ["a" , "b" , "c" , "d" , "e"]
let c_array7 = array7.slice(2,5)
console.log(c_array7)


//question 15

let elements = [22 , "anmol" , "islamabad" , 35 , "blue" , "345"]
elements.splice(1,2,"apple","peshawar")
console.log(elements)


//question 16

// let subjects = ["maths" , "computer" , "physics" , "english" , "biology" , "chemistry"]
// let index = prompt("enter the index from which you want to remove a subject")
// subjects.splice(subjects[index],1)
// console.log(subjects)


//question 17

let gadgets = ["mobile" , "smart watch" , "headphones" , "power bank" , "computers"]
gadgets.splice(2,0,"laptop","tablet")
console.log(gadgets)
