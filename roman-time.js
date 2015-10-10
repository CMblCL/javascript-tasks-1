'use strict';

/*
возвращает число римскими цифрами
number: integer 0..99
result: string
*/
function GetRomanNuber(number) {
    var result = '';

    if (number == 0) {
        return '—';
    }

    if (number >= 50) {
        result += 'L';
        number -= 50;
    }

    if (number >= 40) {
        result += 'XL';
        number -= 40;
    }

    for (var i = 0; i < 3; i++) {
        if (number >= 10) {
            result += 'X';
            number -= 10;
        }
    }

    switch (number) {
        case 1: result += 'I'; break;
        case 2: result += 'II'; break;
        case 3: result += 'III'; break;
        case 4: result += 'IV'; break;
        case 5: result += 'V'; break;
        case 6: result += 'VI'; break;
        case 7: result += 'VII'; break;
        case 8: result += 'VIII'; break;
        case 9: result += 'IX'; break;
    }

    return result;
}


/*
Возвращает время в ASCII графике
time: string
result: array of strings
*/
function DrawRomanTime(time) {
    var ASCII_TIME_HEIGHT = 7;
    var romanI = [
        'II',
        'II',
        'II',
        'II',
        'II',
        'II',
        'II'];

    var romanV = [
        'V       V',
        'V       V',
        'V       V',
        ' V     V ',
        '  V   V  ',
        '   V V   ',
        '    V    '];

    var romanX = [
        'X     X',
        ' X   X ',
        '  X X  ',
        '   X   ',
        '  X X  ',
        ' X   X ',
        'X     X'];

    var romanL = [
        'LL     ',
        'LL     ',
        'LL     ',
        'LL     ',
        'LL     ',
        'LL     ',
        'LLLLLLL'];

    var romanO = [
        '    ',
        ' OO ',
        ' OO ',
        '    ',
        ' OO ',
        ' OO ',
        '    '];

    var romanZero = [
        '       ',
        '       ',
        '       ',
        '=======',
        '       ',
        '       ',
        '       '];

    var romanTime = [];
    romanTime['height'] = ASCII_TIME_HEIGHT;
    for (var i = 0; i < ASCII_TIME_HEIGHT; i++) {
        romanTime[i] = '';
    }

    var romanSign = [];
    for (var i = 0; i < time.length; i++) {
        switch (time[i]) {
            case 'I':
                romanSign = romanI;
                break;
            case 'V':
                romanSign = romanV;
                break;
            case 'X':
                romanSign = romanX;
                break;
            case 'L':
                romanSign = romanL;
                break;
            case ':':
                romanSign = romanO;
                break;
            case '—':
                romanSign = romanZero;
                break;
        }
        for (var j = 0; j < ASCII_TIME_HEIGHT; j++) {
            romanTime[j] += ' ' + romanSign[j] + ' ';
        }
    }
    return romanTime;
}



var hours = process.argv[2];
var minutes = process.argv[3];
var errorMessage = 'Время указано не верно';

hours = Number(hours);
minutes = Number(minutes);

if (isNaN(hours) || isNaN(minutes)) {
    console.log(errorMessage);
    process.exit(0);
}

if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    console.log(errorMessage);
    process.exit(0);
}

hours = GetRomanNuber(hours);
minutes = GetRomanNuber(minutes);
var time = hours + ':' + minutes;
var romanTime = DrawRomanTime(time);

for (var i = 0; i < romanTime.height; i++) {
    console.log(romanTime[i] + '\n');
}
//console.log(time);
