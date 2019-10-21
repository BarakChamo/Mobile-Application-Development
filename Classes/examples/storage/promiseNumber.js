// Return a promise that resolves with a random number
// between 0 and 100 after 1000 miliseconds
export default function promisedRandomNumber() {
    return new Promise((res, rej) => (
        setTimeout(() => res(Math.floor(Math.random() * 100)), 1000)
    ))
}