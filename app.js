let num = +prompt('Введите число')
let stepen = +prompt('Введите степень')


let answer = 1;


for(let i = 1; i <= stepen; i++) {
    answer *= num
}
console.log(answer);