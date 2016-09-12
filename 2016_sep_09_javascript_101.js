
function isEven(value) {
    if (value % 2 == 0) {
        return "jest parzysta";
    }

    return "jest nieparzysta";
}

///////////////////////////////

function sprawdzPrzedzial(x) {
    if ((x > -100 && x < 0) || (x > 10 && x < 100)) {
        console.log('Zawiera sie w przedziale');
        return;
    }
    console.log('Nie zawiera sie w przedziale');
}
// sprawdzPrzedzial('999');

//////////////////////////////

function sprawdzSuperPrzedzial(x, y, z) {
    if (x > y && x < z) {
        console.log('Zawiera się');
        return;
    }
    console.log('Nie zawiera się');
}
// sprawdzSuperPrzedzial(1,0,3);

///////////////////////////////////////

function sprawdzJS(x) {
    switch (x) {
        case 'Java':
            console.log('hej tu java');
            break;
        case 'Script':
            console.log('hej tu script');
            break;
        case 'JavaScript':
            console.log('w koncu udalo Ci sie');
            break;
        default:
            console.log('nic tu niema');
    }
}
// sprawdzJS('JavaScript');

///////////////////////////////////

function test() {
    var i = 0;
    while (i < 5) {
        console.log(i);
        i = i + 1;
    }
    //  console.log(i);
}
// test();

//////////////////////////////////////////


//Napisac skrypt, który z dowolnego stringa weźmie co
//drugą literę, złączy razem i wyświetli wynik.
function wypiszCoDrugaLitere(wyraz) {
    let finalString = '';

    for (let i = 0; i < wyraz.length; i++) {
        if (i % 2) {
            finalString += wyraz[i];
        }
    }

    return finalString;
}
// console.log(wypiszCoDrugaLitere('babajagax'));

//////////////////////////////////////////////

//Proszę napisać skrypt, który wyznaczy sumę dla tablicy liczb.
function arraySum(tablica) {
    let suma = 0;

    for (let i = 0; i < tablica.length; i++) {
        // zapis skrócony
        suma += tablica[i];
        //suma = suma + tablica[i]; - zapis dlugi
    }

    return suma;
}
//console.log(arraySum([1,2,3,5,2,4,5,3,423,4,23]));

////////////////////////////////////////////////

//Proszę napisać skrypt, który wyznaczy wartość średnią dla dowolnej tablicy liczb.
function arrayAverage(tablica) {
    let suma = 0;

    for (let i = 0; i < tablica.length; i++) {
        // zapis skrócony
        suma += tablica[i];
        //suma = suma + tablica[i]; - zapis dlugi
    }

    return Math.ceil(suma / tablica.length);
}
//console.log(arrayAverage([1,2,3,5,2,4,5,3,423,4,23]));

//////////////////////////////////////////////////////

//Znajdz igłę w stogu sianna. Dla zadanej tablicy, proszę znaleźć „igla”
// i wyświetlić napis „igla znaleziona na pozycji ${nr}”
function znajdzIgleWTablicy(tablica, czegoSzukamy) {
    //     let czegoSzukamy = "igla";

    for (let i = 0; i < tablica.length; i++) {
        if (tablica[i] === czegoSzukamy) {
            return i;
        }
    }

    return "nic niema";
}

var iglaJestGdziesTutaj = ["siano", "kopczyk", "stodola", "igla", "kot"];
// console.log("igla jest na pozycji: ", znajdzIgleWTablicy(iglaJestGdziesTutaj, "igla"));

//////////////////////////////////////////////////////

//FizzBuzz
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        let _temp = '';

        if (i % 5 === 0) {
            _temp += 'buzz';
        }
        if (i % 3 === 0) {
            _temp += 'fizz';
        }

        console.log(i + " " + _temp);
    }
}

//fizzBuzz();
