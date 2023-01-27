/* for(var i = 1; i <= 20; i++){
    console.log(i)
    if(i > 11){
        break
    }
} */

var numbers = [45, 87, 89, 56, 32, 51, 25, 542]
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i]
    if(number == 51){
        break
    }
    console.log(number)
}