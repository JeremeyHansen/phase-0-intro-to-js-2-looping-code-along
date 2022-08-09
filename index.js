function writeCards(names, event) {
    const messages = [];

    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;

}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))

/*function countdown(i){
    let i = 10;
while (i >= 0; i--) {
  console.log(countdown());
}
}*/

function countDown(number) {
    let x = number
    while (x >= 0) {
        console.log(x--)
    }
}