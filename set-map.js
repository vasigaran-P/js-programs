//sets and maps



//Excercise: level 1
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// Create an empty set
const my_set=new Set();

//Create a set containing 0 to 10 using loop
for(let i=0;i<=10;i++)
{
    my_set.add(i);
}
console.log(my_set);

//Remove an element from a set
my_set.delete(5);
console.log(my_set);

//Clear a set
my_set.clear();

//Create a set of 5 string elements from array
var names = ["vasigaran","santhosh","Hari","shashwath","shawn"];
var set2 = new Set();
names.forEach(name => {
    set2.add(name);
})
console.log(set2);

//Create a map of countries and number of characters of a country
var c_len = new Map();
for(let i=0;i<countries.length;i++)
{
    c_len.set(countries[i],countries[i].length);
}
console.log(c_len);



//Exercise 2
//Find a union b
var A = new Set(a);
var B = new Set(b);
var union = [...A,...B];
console.log(union);

//Find a intersection b
var intersection = a.filter(num=>{
    return B.has(num);
})
console.log(intersection);

//Find a with b
var difference = a.filter(num => !B.has(num));
console.log(difference);



//Excercise 3
//How many languages are there in the countries object file.
const country = (new Set(countries.reduce((array,curr)=>
{
    array = array.concat(curr.languages);
    return array;
},[]))).size;
console.log(country);

// Use the countries data to find the 10 most spoken languages:
const countries1=[
{'English':91},
{'French':45},
{'Arabic':25},
{'Spanish':24},
{'Russian':9},
{'Portuguese':9},
{'Dutch':8},
{'German':7},
{'Chinese':5},
{'Swahili':4},
{'Serbian':4}
];
countries1.sort((a1,b1)=>{
for(let i=0;i<countries1.length;i++)
{
    return Object.values(b1)-Object.values(a1);
}});
function mostSpokenLanguages(countries1,num)
{
    countries1.sort();
    for(let i=0;i<num;i++)
    {
        console.log(countries1[i]);
    }
}
console.log(mostSpokenLanguages(countries1, 3))
   