'use strict';

/*
возвращает число римскими цифрами
number: integer 0..99
result: string
*/
function GetRomanNuber(number) {
    var result = "";

    if (number == 0) {
        return "—";
    }

    if (number >= 50) {
        result += "L";
        number -= 50;
    }

    if (number >= 40) {
        result += "XL";
        number -= 40;
    }

    for (var i = 0; i < 3; i++) {
        if (number >= 10) {
            result += "X";
            number -= 10;    
        }
    }

    switch (number) {
        case 1: result += "I"; break;
        case 2: result += "II"; break;
        case 3: result += "III"; break;
        case 4: result += "IV"; break;
        case 5: result += "V"; break;
        case 6: result += "VI"; break;
        case 7: result += "VII"; break;
        case 8: result += "VIII"; break;
        case 9: result += "IX"; break;
    }

    return result;
}



var hours = process.argv[2];
var minutes = process.argv[3];
var errorMessage = "Время указано не верно"; 

hours = Number(hours);
minutes = Number(minutes);

if (isNaN(hours) || isNaN(minutes)) {
    console.log(errorMessage);
    return;
}

if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    console.log(errorMessage);
    return;
}

hours = GetRomanNuber(hours);
minutes = GetRomanNuber(minutes);

console.log(hours + ":" + minutes);
