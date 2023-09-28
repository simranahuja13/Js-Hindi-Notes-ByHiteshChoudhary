// const name = "hitesh"
// const repoCount = 4
// console.log(name + repoCount );


// // String Interpolation
// console.log(`Hello My Name is ${name} and my repoCount is  ${repoCount}`);

// const gameName = new String('Piyush') // New Way
// console.log(gameName); //object
//String {'piyush'} 0:"p"  1:"i"  2:"y"  3:"u"  4:"s"  5:"h" 
//length: 6[[Prototype]]: String[[PrimitiveValue]]: "piyush"
// console.log(gameName[5]);
// console.log(gameName.__proto__);{}// to see the methods


// **********************METHODS***********************

// console.log(gameName.length); //6
// console.log(gameName.toLowerCase()); //piyush
// console.log(gameName.toUpperCase()); //PIYUSH
// console.log(gameName.charAt(2)); // y ------ numbers pass not char
// console.log(gameName.indexOf('s'));

// const newString = gameName.substring(1,3) // start-- end 3 not included
// console.log(newString); //iy
/** negative value ni leta hai Substr */

// const anotherString = gameName.slice(0,4) // piyush --end 4 not included
// console.log(anotherString); //Piyu

// const game= new String("Superman")
// // console.log(game.length); //8
// const another2String = game.slice(-8,4) // in negative there is  reverse traversing
// console.log(another2String);

// const string1 = "   India  "
// console.log(string1);
// console.log(string1.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"
// const newUrl = url.replace('%20' , '-') //%20 automatically given by browser as browser don't understand whitespaces..
// console.log(newUrl); //https://hitesh.com/hitesh-choudhary

// console.log(url.includes('://')); //true
 
// const slogan = "Aaj & ki & naari sab pe bhari"
// console.log(slogan.split("&")); //[ 'Aaj', 'ki', 'naari sab pe bhari' ]