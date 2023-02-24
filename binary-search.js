//question 1
function binarySearch(arr,l,r,key){
    if(r >= l){
        var mid = Math.floor((l+r) / 2);
        if(arr[mid] == key){
            return mid;
        }
        else if(arr[mid] > key){
            return binarySearch(arr,l,mid-1,key);
        }
        else{
            return binarySearch(arr,mid+1,r,key);
        }
    }
    else{
        return -1;
    }
}


var arr = [1,2,3,4,5,6,7,8,9];
const key = 5;
var res = binarySearch(arr, 0, arr.length - 1, key);
if(res>=0){
    console.log("The key is found at index ",res);
}
else{
    console.log("Key not found");
}


//question 2
function concat(...n){
    let ans = []
    for(let i=0; i<n.length; i++){
        for(let j=0; j<n[i].length; j++){
            ans.push(n[i][j])
        }
    }
    return ans;
}

console.log(concat([1, 2, 3], [4, 5], [6, 7]))
console.log(concat([1], [2], [3], [4], [5], [6], [7]))
console.log(concat([1, 2], [3, 4]))


//question 3
function oddish(num){
    let a = num.toString();
    let ans = 0;
    for(let i=0; i<a.length; i++){
        ans += parseInt(a[i]);
    }
    if(ans%2==1){
        return("Oddish")
    }
    else{
        return("Evenish")
    }
}

console.log(oddish(43))
console.log(oddish(373))
console.log(oddish(4433))


