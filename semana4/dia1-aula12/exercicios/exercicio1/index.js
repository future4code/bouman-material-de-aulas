console.log(imprimeArray([10, 20, 30]))

function imprimeArray(array) {
    for (const el of array) {
        console.log(el)
    }
    return array.length
}