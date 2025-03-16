//nested loops

for(let i = 1 ; i<=4 ; i++)
{
    for(let j = 1 ; j<=5 ; j++)
    {
        console.log(i + " * " + j + " = " + i*j)
    }
}


//changing case

let namee = prompt("enter you name")
let newname = namee.toUpperCase()
console.log(newname)



let array = ["one" , "apple" , "books" , "door" , "notepad"]
for( let i = 0 ; i < array.length ; i++)
{
     console.log(array[i].toUpperCase())
    
}



// ROUNDING NUMBERS
// 1
let num1 = prompt("enter any number you want to round off to the nearest whole number")
console.log(Math.round(num1))



// 2
let array2 = [22.3 , 34.5 , 6.6 , 8.2 , 9.0 ]
for( let i = 0 ; i<array2.length ; i++)
{
    console.log(Math.round(array2[i]))
}



// 3 
let num2 = prompt("enter any number you want to round off to the next whole number")
console.log(Math.ceil(num2))



// 4 
let num3 = prompt("enter any number ")
console.log(Math.floor(num3))