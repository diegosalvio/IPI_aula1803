//axios
/*
async function hello(nome){
    return `Hello, ${nome}` 
}

const resultado = hello ("João")
resultado.then(res => console.log(res))
*/

function fatorial (n){
    if(n<0) return Promise.reject("Valor não pode ser negativo")
    let res= 1
    for(let i =2 ; i<= n;i++) res *= i
    return Promise.resolve(res)
}
/*
function chamadaComThenCatch(){
    fatorial(10)
        .then(res => console.log(res))
        .catch(erro => console.log(erro))
        
        fatorial(-10)
        .then(res => console.log(ress))
        .catch(erro => console.log(erro))
}


chamadaComThenCatch()
*/
async function chamadaComAsyncAwait(){
    try{
        const f1 = await fatorial(10)
        console.log(f1)
        const f2 = await fatorial(-10)
        console.log(f2)
    }
    catch(e){
        console.log(e)
    } 
}

chamadaComAsyncAwait()
/*
require('dotenv').config()
const axios = require('axios')

const {PROTOCOL, BASE_URL, APPID, Q, CNT, UNITS, LANGUAGE} = process.env


const url = `${PROTOCOL}://${BASE_URL}?q=${Q}&appid=${APPID}&cnt=${CNT}&units=${UNITS}&lang=${LANGUAGE}`

console.log(url)

axios.get(url)
.then(res => {
    //console.log(res)
    return res.data
})
.then(res => {
    console.log(res)
    return res
})
.then(res => {
    console.log(res.cnt)
    return res
})
.then(res => {
    return res.list
})
.then(res=> {
    res.forEach(element => {
        console.log(element.main.temp_min)
        console.log("\n")
        console.log(element.main.temp_max)
        console.log("\n")
        console.log(element.weather[0].description)
    });
})

*/