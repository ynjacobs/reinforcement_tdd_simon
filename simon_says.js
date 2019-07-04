function echo(str){
    var newStr = str;
    return newStr
}


function shout(str) {
    var res = str.toUpperCase();
    return res
}

console.log( shout('hi'));

function repeat(str, num) {
    (str + ' ')
    let strRep = (str + ' ').repeat(num).trim();
    return strRep
}
 
function startOfWord(str, num) {
    let strBeg = str.substring(0,num);
    return strBeg
}

function firstWord(str) {
    let strFirst = str.split(' ')[0];
    return strFirst
}



module.exports = {echo: echo, shout: shout, repeat: repeat, startOfWord: startOfWord, firstWord: firstWord};

