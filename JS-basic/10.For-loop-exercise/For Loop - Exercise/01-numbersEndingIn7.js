function numbersEndingIn7() {
    for(let a = 0; a <= 1000; a++){
        if(a % 10 === 7){
            console.log(a);
        }
    }
}
numbersEndingIn7();