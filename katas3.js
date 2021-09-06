const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];


function showResults(value){
    const paragrafo = document.createElement('p')
    paragrafo.innerText = value
    document.body.appendChild(paragrafo)
}


function kata1() {
    const array = []
    for(let i = 1; i < 26; i ++){
        array.push(i)
    }
    const result = array.join(', ')
    return showResults(result)
}

function kata2() {
    const array = []
    for(let i = 25; i > 0; i --){
        array.push(i)
    }
    const result = array.join(', ')
    return showResults(result)
}

function kata3() {
    const array = []
    for(let i = -1; i > -26; i --){
        array.push(i)
    }
    const result = array.join(', ')
    return showResults(result)
}

function kata4() {
    const array = []
    for(let i = -25; i < 0; i ++){
        array.push(i)
    }
    const result = array.join(', ')
    return showResults(result)
}

function kata5() {
    const array = []
    for(let i = 25; i > -26; i --){
        if (i % 2 !== 0){
            array.push(i)
        }
    }
    const result = array.join(', ')
    return showResults(result)
}

function kata6() {
    const array = []
    for(let i = 0; i < 100; i ++){
        if(i % 3 === 0){
            array.push(i)
        }
    }
    const result = array.join(', ')
    return showResults(result)
}

function kata7() {
    const array = []
    for(let i = 0; i < 100; i ++){
        if(i % 7 === 0){
            array.push(i)
        }
    }
    const result = array.join(', ')
    return showResults(result)
}

function kata8() {
    const array = []
    for(let i = 100; i > 0; i --){
        if(i % 3 === 0 || i % 7 === 0){
            array.push(i)
        }
    }
    const result = array.join(', ')
    return showResults(result)
}

function kata9() {
    const array = []
    for(let i = 0; i < 100; i ++){
        if(i % 2 !== 0 && i % 5 === 0){
            array.push(i)
        }
    }
    const result = array.join(', ')
    return showResults(result)
}

function kata10() {
    const array = []
    for(let i = 0; i < sampleArray.length; i ++){
            array.push(sampleArray[i])
    }
    const result = array.join(', ')
    return showResults(result)
}

function kata11() {
    const array = []
    for(let i = 0; i < sampleArray.length; i ++){
        if (sampleArray[i] % 2 === 0){
            array.push(sampleArray[i])
        }
    }
    const result = array.join(', ')
    return showResults(result)
}

function kata12() {
    const array = []
    for(let i = 0; i < sampleArray.length; i ++){
        if (sampleArray[i] % 2 !== 0){
            array.push(sampleArray[i])
        }
    }
    const result = array.join(', ')
    return showResults(result)
}

function kata13() {
    const array = []
    for(let i = 0; i < sampleArray.length; i ++){
        if (sampleArray[i] % 8 === 0){
            array.push(sampleArray[i])
        }
    }
    const result = array.join(', ')
    return showResults(result)
}

function kata14() {
    const array = []
    for(let i = 0; i < sampleArray.length; i ++){
            array.push(sampleArray[i] * sampleArray[i])
    }
    const result = array.join(', ')
    return showResults(result)
}

function kata15() {
    let cont = 0
    for(let i = 1; i < 21; i ++){
        cont += i
    }
    return showResults(cont)
}


function kata16() {
    let cont = 0
    for(let i = 0; i < sampleArray.length; i ++){
        cont += sampleArray[i]
    }
    return showResults(cont)
}

function kata17() {
    let minor = sampleArray[0]
    for(let i = 0; i < sampleArray.length; i ++){
        if (sampleArray[i] < minor){
            minor = sampleArray[i]
        }
    }
    return showResults(minor)
}

function kata18() {
    let major = sampleArray[0]
    for(let i = 0; i < sampleArray.length; i ++){
        if (sampleArray[i] > major){
            major = sampleArray[i]
        }
    }
    return showResults(major)
}

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    for(let i = 0; i < 20; i++){
        const retangulo = document.createElement('div')
        retangulo.style.height = '20px'
        retangulo.style.width = '100px'
        retangulo.style.border = '1px solid gray'
        document.body.appendChild(retangulo)
    }
}

function kataBonus2() {
    const array = []
    for(let i = 105; i <= 200; i+= 5){
        array.push(i)
    }
    for(let i = 0; i < 20; i++){
        const retangulo = document.createElement('div')
        retangulo.style.height = '20px'
        retangulo.style.width = array[i] + 'px'
        retangulo.style.border = '1px solid gray'
        document.body.appendChild(retangulo)
    }
}

function kataBonus3() {
    for(let i = 0; i < 20; i++){
        const retangulo = document.createElement('div')
        retangulo.style.height = '20px'
        retangulo.style.width = sampleArray[i] + 'px'
        retangulo.style.border = '1px solid gray'
        document.body.appendChild(retangulo)
    }
}

function kataBonus4() {
    for(let i = 0; i < 20; i++){
        const retangulo = document.createElement('div')
        retangulo.style.height = '20px'
        retangulo.style.width = sampleArray[i] + 'px'
        retangulo.style.border = '1px solid red'
        if(i % 2 !== 0){
            retangulo.style.border = '1px solid gray'
        }
        document.body.appendChild(retangulo)
    }
}

function kataBonus5() {
    for(let i = 0; i < 20; i++){
        const retangulo = document.createElement('div')
        retangulo.style.height = '20px'
        retangulo.style.width = sampleArray[i] + 'px'
        retangulo.style.border = '1px solid grey'
        if(sampleArray[i] % 2 === 0){
            retangulo.style.border = '1px solid red'
        }
        document.body.appendChild(retangulo)
    }
}
