function randNums() {
    let numbersArray = [];
    for (let i=0; i < 10; i++) {
        let randomNum = (Math.round(Math.random() * 20) - 10);
        numbersArray.push(randomNum);
    }

    let minNum = Math.min(...numbersArray);
    let maxNum = Math.max(...numbersArray);
    let totalSum = numbersArray.reduce(function (a, b) {
        return a + b;
    });
    let averageNum = totalSum/10;
    let totalProduct = numbersArray.reduce(function (a, b) {
        return a * b;
    });

document.getElementById("allNums").innerHTML = `Your random numbers are: ${numbersArray.join(' ')}`;
document.getElementById("minNum").innerHTML = `Min number is ${minNum}`;
document.getElementById("maxNum").innerHTML = `Max number is ${maxNum}`;
document.getElementById("averageNum").innerHTML = `Average number is ${averageNum}`;
document.getElementById("totalSum").innerHTML = `Total is ${totalSum}`;
document.getElementById("totalProduct").innerHTML = `Product of numbers is ${totalProduct}`;
}