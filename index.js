// var birthYears =[2008,1993,1986,1990,1989,2020] 

// var ages = birthYears.map(function(ele,index,arr){
//     let age = 2023-ele 
//     return age;
// })
// console.log(birthYears)
// console.log(ages)

var arr = [1,2,3,45,6]

var maxValue = arr.reduce(function(acc,ele){
    if(acc>ele){
        return acc
    }else{
        return ele
    }

},arr[0])

console.log(maxValue)