
//1 Strings

let firstVariable = "Hello World";


parseInt(firstVariable)

let secondVariable = firstVariable

functionIForgotDoesThis(secondVariable)

//-----> The value of the firstVariable would be the number we converted it to (11?)


//2 Strings

const yourName = 'Giovanni Perez'

let finalAnswer =  return "hello, my name is " + yourName




//3 Booleans

const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

a !== b
c !== d
'Name' === 'Name'


// The Farm

const butcher = (animal) => {
	if (animal === 'cow') {
		return 'Moooooo!'
	} else { return 'Hey! Youre not a cow'}
}





// Driver's Ed

let age = 21;

const dad = (age) => {
	if(age > 16) {
		alert('Here are the keys')
	} else { 
		alert('Sorry spud, youre too young')}
}


// Just Loop it! 
//1

for (let i = 0; i = -11; i--) {
	return i
}

//2 

for (let i = 10; i = -4001; i--) {
	return i
}

//3
for (let i = 10; i = -4001; i--) {
	return i
}

//Let's Get Even, Steven


for (let i = 0; i = -100; i--) {
	if(i % 2 0){
		return i + ' is an even number'
	} else {
		console.log('not today, satan!')
	}
}


// Give Me Five

for (let i = 1; i < 101; i++) {
	if(i % 5 === 0) {
		console.log('I found a ' + i + ' Hight five!!')
	} else if(i % 3 === 0) {
		console.log('I found a ' + i + ' Three is a crowd')
	}
}

//Savings account  

let bankAccount = 0;
for(let i = 0; i < 11; i++){
		console.log(bankAccount += i)
	}




//Multiples of 3 and 5 
let euler = 0;

for (let i = 0; i < 1001; i++) {

	if(i % 5 === 0 || i % 3 === 0) {
		console.log(euler += i)
	}
}


//Easy Does It

let arr = ['Rikki-tikki-tavi', 'Wubba lubba dub dub', 'The Human Torch was denied a bank loan']


//Random

const randomThings = [1, 10, "Hello", true]


randomThings[0]
randomThings[2] = 'world'
randomThings


//We've Got Class

const ourClass = ["Gizmo", "Zoom", "Github", "Slack"]


ourClass[2]
ourClass[2] = 'Octocat'
ourClass.push('Cloud City')





//Mix It Up

const myArray = [5 ,10 ,500, 20]

myArray.push('Egon')
myArray.pop('Egon')
myArray.unshift("Bob Marley")
myArray.shift("Bob Marley")
myarray.reverse()



//Biggie Smalls

if(number < 101) {
	console.log('little number')
} else {
	console.log('big number')
}



//Monkey in the Middle

if(number < 5) {
	console.log('little number')
} else if(number > 10) {
	console.log('big number')
} else {
	console.log('monkey')
}





//What's in Your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];


console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today!')

let kristynShoe = '';

kristynShoe = kristynsCloset.splice(0, 1)

kristynsCloset.splice(5, 0, 'raybans')

kristynsCloset[5] = "stained knit hat"

thomsCloset[0][0]
thomsCloset[2][1]]
console.log('Thom is looking fierce in a ' + thomsCloset[0][0] + ", " + thomsCloset[1][0] + ', and' + thomsCloset[0][0] + '!')
thomsCloset[1][2] = 'Footie Pajamas'


//Functions
//printGreeting 

const printGreeting = (name) => {
	alert(name + ', James ' + name + ' ...not Bond')
}




//reverseWordOrder

const reverseWordOrder = (string) => {
	string.split('').reverse().join('').split(' ').reverse().join(' ')

	console.log(string)

}




//calculate

const add = (x, y) => {
	return x + y
}

const sub = (m, n) => {
	return m - n
}

const mult = (m, n) => {
	return m * n
}

const div = (m, n) => {
	return m / n
}

const exp = (m, n) => {
	return Math.pow(x, y)
}



const calculate = (num1, num2, operation) => {

	let result = operation(num1, num2)

 	return result
 }


// #1

const printCool = (name) => {
	return name + ' is cool'
}


// #2

const calculateCube = (numba) => {
	let cube = Math.pow(numba, 3)

	return cube
}


// #3 


const isAVowel = (sureThing) => {

	if(sureThing === 'a' || sureThing === 'e' || sureThing ==='i' || sureThing === 'o' || sureThing === 'u') {
		return true
	} else {
		return false
	}
	
}


// #4

const getTwoLengths = (a, b) => {
	let twoLengths = [a.length, b.length]; 

	return twoLengths

}

getTwoLengths('Pennywise','clown')




// #5

let measures = [];

const getMultipleLengths = (arrayOfStrings) => {
	for(i = 0; i < arrayOfStrings.length; i++){
		let conversion = arrayOfStrings[i]

		measures.push(conversion.length)
	}
	return measures

}


getMultipleLengths(['banana', 'mango', 'pineapple'])


// #6


const maxOfThree = (bryanne, ofFreaking, tarth) => {

	let hound = [bryanne, ofFreaking, tarth]

	return Math.max(...hound)

}

maxOfThree(5,2,8)

// #7

const printLongestWord = (illinois) => {
	let  chicago = '';

	for(i = 0; i < illinois.length; i++){
		if(chicago.length < illinois[i].length){
			chicago = illinois[i]
		}
	}
	return chicago
}

printLongestWord(['taco', 'burrito', 'notagainnooooooooooo', 'pho'])


//#8

const more = (x, y) =>{
	return x * y
}

const raise = (m, n) => {
	return Math.pow(m, n)
}

const transmogrify = (plastic, water, bottle) => {
	let place = more(plastic, water);
	let holder = raise(place, bottle);


	return holder
}

transmogrify(5, 3, 2)


//onjects- Syntax

// {} curly braces define the object.
// text: before the colon, there is a property which describes the typeOf value
// value,  after the colon, it describes the object
// method    is a function inside of an object


// Me

let me = {

}

me.name = 'Giovanni'

me.age = '26'
me.email = 'Giovanni_perez4@yahoo.com'

me.name
me.age = 1000


me['place of residence'] = 'Berwyn'
me['pleace of residence']


//Slimer

const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

console.log(monster.name)
monster.type = 'creature'
monster.age = 6




//ogres NEEDS WORK

let adventurer = {
	name: 'Gallant Gio',
	DragonscaleArmor() {
		return ogre.attack - 3 
	},
	sword: 10,
	hitpoints: 50 
}


let ogre = {
	hide() {
		return adventurer.sword - 2
	},
	hitpoints: 70,
	attack: 5,
	name: 'Blerghenden',
	passtimes: ['journaling', 'yoga', 'erroniously messing with the wrong adventurer']
}

const fight = (turn) => {

	if (turn === 'hero'){
		return ogre.hitpoints = ogre.hitpoints - ogre.hide()
	} else if (turn === 'monsta'){
		return adventurer.hitpoints = adventurer.hitpoints - adventurer.DragonscaleArmor()
	} 

	gameOver = () => {
	if (adventurer.hitpoints <= 0){
		alert('Game Over. Keep grinding')
	} else if(ogre.hitpoints <= 0) {
		alert('Congratulations! You have saved the princess!')
	}
}

}


fight('hero')







