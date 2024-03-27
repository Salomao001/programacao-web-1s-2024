function transporMatriz(A) {
    let matrizString = '';
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            matrizString += A[i][j] + '';
        }
        matrizString += '\n';
    }
    console.log(matrizString);

    let matrizTranpostaString = '';
    for (let j = 0; j < A[0].length; j++) {
        for (let i = 0; i < A.length; i++) {
            matrizTranpostaString += A[i][j] + '';
        }
        matrizTranpostaString += '\n';
    }
    console.log(matrizTranpostaString);
}
