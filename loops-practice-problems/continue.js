var numbers = [45, 87, 89, 56, 32, 51, 25, 542, 150, 240, 50]
for(var i = 0; i < numbers.length; i++){
    var number = numbers[i]
    if(number > 90){
        continue
    }
    console.log(number)
}