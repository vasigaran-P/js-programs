//Use forEach to console.log each name in the names array.
var names = ["santhosh","shashwath","hari","vijay"]
names.forEach(element => console.log(element))

//Use map to create a new array by changing each number to square in the numbers array
const numbers = [1,2,3,4,5]
const mapNum = numbers.map(function(number){
    return number*number;
})
console.log(mapNum)

//Use filter to filter out country start with 'E';
var countries = ["England","India","Indonesia","Finland","Egypt"]
let eCountry = countries.filter(country => country.startsWith("E"))
console.log(eCountry)

//Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
var list = [1,2,3,'abc','xyz','vasigaran']
const getStringList=(list)=>{
    let stringList = []
    list.forEach(element => {
        if(typeof element === 'string'){
            stringList.push(element)
        }
    });
    return(stringList)
}
console.log(getStringList(list))

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
var countries = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "Iceland"]
function concat(string,string1){
    return string+','+string1;
}let res = countries.reduce(concat);
console.log(res+" are the north europian countries");

//Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
var countries = ["Estonia", "Finland", "Sweden", "Denmark", "Norway", "Iceland","France"]
let firstFrequentLetter = (arr) =>{
    let dict = new Map();
    arr.forEach(element => {
        dict[element[0]] = (dict[element[0]] || 0) + 1;    
    });
    let maxKey, maxValue = 0;
    for(const [key, value] of Object.entries(dict)) {
        if(value > maxValue) {
          maxValue = value;
          maxKey = key;
        }
    }
    return maxKey;
}
console.log(firstFrequentLetter(countries));

//Assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.-using destruction
var human = ["1.602*10^-19", "3.14", "9.8 m/s^2", "97.9 F","100 c"];
var [e, pi, gravity, temp, boiling] = human
 
console.log(e);
console.log(pi);
console.log(gravity);
console.log(temp);
console.log(boiling);