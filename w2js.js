// const harga = [1,2,3,4,5,6,7,8,9,10]
// let skrg = harga.map((h) => {
//     return h*10
// })
// let ganjil = harga.filter((g) => {
//     return g%2 == 0
// })
// for (let i = 0; i < harga.length; i++) {
//     skrg.push(harga[i]*10);
    
// }
// const sum = harga.reduce((h,g) => {
//     return h+g
// })
// // console.log(skrg)
// console.log(sum)

// function remsp(text) {
//     var x = text.split(" ").join("")
//     return x
// }
// function revtext(text) {
//     var rev = ""
//     for (let i = text.length - 1; i >= 0; i--) {
//         rev+=text[i]
//     }
//     return rev
// }
// function updvwl(text) {
//     let text2 =[]
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] === "a") {
//             text2.push("b")
//         }
//         else if (text[i] === "i") {
//             text2.push("j")        
//         }
//         else if (text[i] === "u") {
//             text2.push("v")
//         }
//         else if (text[i] === "e") {
//             text2.push("f")        
//         }
//         else if (text[i] === "o") {
//             text2.push("p")        
//         }
//         else {
//             text2.push(text[i])
//         }
//     }
//     var rev = ""
//     for (let i = text2.length - 1; i >= 0; i--) {
//         rev+=text2[i]
//     }
//     var x = rev.split(" ").join("")
//     return x
// }

// var pass = "hacktiv 8"
// console.log(updvwl(pass));
// let pass2 =[]
// for (let i = 0; i < pass.length; i++) {
//     if (pass[i] === "a") {
//         pass2.push("b")
//     }
//     else if (pass[i] === "i") {
//         pass2.push("j")        
//     }
//     else if (pass[i] === "u") {
//         pass2.push("v")
//     }
//     else if (pass[i] === "e") {
//         pass2.push("f")        
//     }
//     else if (pass[i] === "o") {
//         pass2.push("p")        
//     }
//     else {
//         pass2.push(pass[i])
//     }
// }

// console.log(pass2.join(''));


// let arr = ["apel", "anggur", "rambutan", "leci", "mangga"];
// arr.push("tidur")
// console.log(arr)
// arr[0] = "mangga2"
// console.log(arr)
// arr.pop()
// console.log(arr)

// let cv = {fname: "Tofa",
// lname: "Nugraha",
// hobi: ['olahraga','tidur'],
// favnum: 18,
// glasses: 1
// }
// console.log(cv);
// console.log(cv.fname + " Ade " +cv.lname);
// cv.favnum = 8
// console.log(cv)
// cv.hobi.push("coding")
// console.log(cv)
// cv["lulusan"] = "hacktiv8"
// console.log(cv)
// let a = [];
// for (let i = 0; i < cv.hobi.length; i++) {
//     a.push(cv.hobi[i])
//     console.log(a)
// }
// console.log(Object.keys(cv))
// console.log(Object.values(cv))
// for (let i = 0; i < Object.keys(cv).length; i++) {
//     console.log(Object.keys(cv)[i] + ": " + Object.values(cv)[i]);    
// }
// function nowww() {
//     let noww = new Date()
//     let result = noww.getDate()
//     let res = noww.getMonth() + 1
//     return result, res
// }
// console.log(nowww());

// Exercise
// 1
// const vanCar = {
//     tipe: "van",
//     airbag: true,
//     isElectrical: true
// }
// vanCar["color"] = "purple"
// console.log(vanCar);
// // 2

// function calcu(n1,n2,ops) {
//     if (ops === "+") {
//         return n1+n2
//     }
//     else if (ops === "-") {
//         return n1-n2
//     }
//     else if (ops === "*") {
//         return n1*n2
//     }
//     else if (ops === "/") {
//         return n1/n2
//     }
//     else {
//         console.log("Operasi salah, coba lagi")
//     }
// }
// console.log(calcu(4,5,"/"));

// // 3
// function findLargestNum() {
//     num = [1,5,20,10,9];
//     max = 0
//     for (let i = 0; i < num.length; i++) {
//         if (num[i] > max) {
//             max = num[i]            
//         }
//         else {
//             continue
//         }
//     }
//     return max
// }
// console.log(findLargestNum());

// // 4

// function countNumofWords() {
//     words = "makan siang 12 kali"
//     return words.split(" ").length
// }
// console.log(countNumofWords());

// // 5

// let collNumbers = [1,2,5,6,7,8,11,13];
// let oddnum = 0
// for (let i = 0; i < collNumbers.length; i++) {
//     if (collNumbers[i] % 2 == 1) {
//         oddnum +=collNumbers[i]
//     }
// }
// console.log(oddnum)

// // 6

// function factorial(num) {
//     if (num == 0) {
//         return 1
//     }
//     else if (num <0){
//         return ("input salah, coba lagi")
//     }
//     else {
//         return num*factorial(num-1)   
//     }
// }
// console.log(factorial(5));

// ASSIGNMENT 3
// 1
function arithmetic(numbers) {
    let selisih = numbers[1] - numbers[0]
    let val = true
    for (let i = 0; i < numbers.length-1; i++) {
        if (numbers[i+1] - numbers[i] === selisih) {
            val = true
        }
        else {
            val = false
            break
        }
    }
    return val
}
console.log(arithmetic([1,3,5,7,9,11,13,17]));

// 2
function tristep(text) {
    arr =[]
    for (let char of text) {
        arr.push(char)
    }
    var a = 1
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "a" && arr[i+4] === "b" || arr[i] === "b" && arr[i+4] === "a") {
            a = true
            break
        }
        else {
            a = false
        }
    }
    console.log(a)
}
tristep("lane borrowed")
tristep("i am sick")
tristep("you are boring")
tristep("barbarian")
tristep("bacon and meat")

// 3

function sumarr(arr, int) {
    collarr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length; j > i; j--) {
            if (arr[i] + arr[j] == int) {
                ar = []
                ar.push(arr[i], arr[j])
                collarr.push(ar)
            }
        }
    }
    console.log(collarr);
}

sumarr([3,7,1,9,4,5], 13)

// 4
let maxx = Number.NEGATIVE_INFINITY
let res = []
function arrSum(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        let x = 0
        let a = []
        diff = 0
        while (i+diff < arr.length) {
            x += arr[i+diff]
            a.push(arr[i+diff])
            if (x > maxx) {
                maxx = x
                res = [...a]
            }
            diff++
        }
    }
    console.log(res, maxx)
}
arrSum([5,0,10,-4,-5,9,-3,2])

// function urutHuruf(text) {
//     arr =[]
//     for (let char of text) {
//         arr.push(char)
//     }
//     a = 0
//     for (let i = 0; i < arr.length-1; i++) {
//         if (arr[i] >= arr[i+1]) {
//             a = arr[i+1]
//             arr[i+1] = arr[i]
//             arr[i] = a
//         } else {
//             continue
//         }
//     }
//     console.log(arr)
// }
// urutHuruf("hello")

// function isPrime(params) {
//     for (let i = 2; i < params; i++) {
//         if (params % i == 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(5))

// var foo = "javascript code"
// var pola = /javascript/
// var pola2 = /[abc]$/

// console.log(pola2.test(foo));
// console.log(pola2.test("laler"));
// console.log(pola2.test("key"));
// console.log(pola2.test("potoabc"));

// console.log(/code/.test(foo));
// console.log(/Javascript/.test(foo));
// console.log(/ript/.test(foo));
// console.log(/ode/.test(foo));
// console.log(/javascript/.test(foo));


// var foo = "1 jam sama dengan 3600 detik"
// var pola = /\d+/g

// console.log(pola.exec(foo));
// console.log(pola.exec(foo));