// Code your solutions in this file

function writeCards(arr, eventName) {
    let thankYou = []
    for (let i = 0; i< arr.length; i++){
        thankYou.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankYou  
}

function countDown(num) {
    while(num>=0){
        console.log(num--)
    }
}