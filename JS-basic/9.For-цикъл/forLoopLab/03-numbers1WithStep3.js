
function numbers1WithStep3(params) {
    for (let index = 1; index <= Number(params[0]); index = index + 3) {
        console.log(index);
    }
}
numbers1WithStep3(["10"]);