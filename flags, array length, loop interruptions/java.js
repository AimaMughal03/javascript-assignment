// FLAGS
//question 1

let isfound = false

for(let i = 0 ; i<=10 ; i++)
{
    if(i = 7)
    {
        isfound = true
        break
    }
}

if(isfound == true)
{
    console.log("7 is found")
}



//question 2

let check = false

for(let i = -2 ; i<=5 ; i++)
{
    if(i == -2)
    {
        check = true
    }
}

if(check == true)
{
    console.log("contains negative")
}
else
{
    console.log("all positive")
}



//  ARRAY LENGTH IN LOOPS
//question 3

let array = [20 , 30 , 40 , 50 , 60 , 70 , 80 , 90 , 100 , 110]

for(let i = 0 ; i<array.length ; i++)
{
    console.log(array[i])
}



//question 4

// let array1 = []
// for(i = 0 ; i<5 ; i++ )
// {
//     let number = prompt("enter a number")
//     number = array1[i]
// }
// console.log(array1)


//question 5

let books = ["maths" , "biology" , "urdu" , "computer" , "islamiyat"]
for(i = 0 ; i<books.length ; i++)
{
    console.log(i + " " + books[i])
}



// LOOPUS INTERRUPTS
//question 6

for(i = 1 ; i<=20 ; i++)
{
    if(i%3 == 0)
    {
        continue
    }
    else
    {
        console.log(i)
    }
}



//question 7

let scores = [45 , 78 , 90 , 55 , 32 , 88]

for(let i = 0 ; i<scores.length ; i++)
{
    if(scores[i] < 40)
    {
        console.log(scores[i])
        break
    }
}

