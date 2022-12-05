
let listRar = new Map([
    ['table', 'brown'],
    ['cat', 'white'],
    ['dog', 'black']

])

for (let key of listRar.keys()) {
    let value = listRar.get(key)
    console.log(key)
    console.log(value)
}