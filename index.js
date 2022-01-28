const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}
// wrapGifts(gifts);

function writeCards(arr, eventName) {
    const thankYous = []
    for (let i = 0; i < arr.length; i++) {
        thankYous.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`)
}
    return thankYous
}

// console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));

function countDown(n) {
    while (n > -1) {
        console.log(n)
        n--
    }}

countDown(10)