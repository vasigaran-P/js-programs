//Camel Case
class Utilities{
    static camelCase(str){
        let string=str.split(" ");
        let res="";
        for(let i=0; i<string.length; i++){
            if(i==0){
                res+=string[i].toLowerCase();
            }
            else{
                var word = string[i];
                res += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        }
        return res;
    }
}

console.log(Utilities.camelCase("hii there"))
console.log(Utilities.camelCase("HELLO WORLD"))
console.log(Utilities.camelCase("I love cricket"))
console.log(Utilities.camelCase("hello world"))