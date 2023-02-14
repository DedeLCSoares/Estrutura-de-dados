function principal() {
    var vetor = []
    var vetor1 = []
    var total = []

    for (i = 0; i < 5; i++) {
        vetor.push(+prompt(i + 1))
    }

    for (i = 0; i < 5; i++) {
        vetor1.push(+prompt(i + 1))
    }

    for (i = 0; i < 5; i++) {
        total.push(vetor[i], vetor1[i])
    }

    console.log(total)
}

function intercalar(vet1, vet2) {
    var vet3 = []

    for (var i = 0; i < 5; i++) {
        vet3.push(vet1[i])
        vet3.push(vet2[i])
    }

    console.log(vet3)
}

var vet1 = [2, 42, 6, 81, 10]
var vet2 = [3, 4, 7, 0, 1]

intercalar(vet1, vet2)