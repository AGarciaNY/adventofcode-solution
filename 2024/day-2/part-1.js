let newdata = data.split("\n").map((x)=> {
    console.log(x)
    return x.split(" ").map((num) => ~~num)
})
let amountOfSafe = 0
for(let  i = 0; i < newdata.length; i++){
    let currentLevel = newdata[i]
    let isIncreasing = null
    let isSafe = true
    for(let j = 1; j < currentLevel.length; j++){
        let difference = currentLevel[j-1] - currentLevel[j]
        if(difference > 0 && difference < 4){
            if(isIncreasing === null){
                isIncreasing = true
            }else if(isIncreasing === false){
                isSafe = false
                break
            }
            
        }else if(difference < 0 && difference > -4){
            if(isIncreasing === null){
                isIncreasing = false
            }else if(isIncreasing === true){
                isSafe = false
                break
            }
            
        } else{
            isSafe = false
            break
        }
    }
    if(isSafe){
        amountOfSafe++
    }
}
amountOfSafe 
