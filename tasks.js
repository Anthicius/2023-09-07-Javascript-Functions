// 8. Funkciją, kuri konvertuoja dienas į pasirinktą formatą (minutes, valandas, savaites, mėnesius arba metus):
// 8.1. Funkcija priima du argumentus: 
//   8.1.1. Dienų skaičių.
//   8.1.2. Formatą. Galimos formato reikšmės yra:
//     8.1.2.1. minutes
//     8.1.2.2. hours
//     8.1.2.3. weeks
//     8.1.2.4. months
//     8.1.2.5. years
// 8.2. Funkcija konvertuoja dienas į pasirinktą formatą ir grąžina atsakymą tokiu formatu: 5 days - 7200 minutes.

 function function1( days, format) {
    let comment;
    let defaultAmount = days;
    if (format == "minutes" || format == "4") {
        days *= 24*60;
        comment = `${defaultAmount} days in minutes is ${days}`
    }
    else if (format == "hours" || format == "3"){
        days *= 24;
        comment = `${defaultAmount} days in hours is ${days}`
    }
    else if (format == "weeks" || format == "5"){
        days /= 7;
        comment = `${defaultAmount} days in weeks is ${days}`
    }
    else if (format == "months" || format == "1"){
        days /= 30;
        comment = `${defaultAmount} days in months is ${days}`
    }
    else if (format == "years" || format == "2"){
        days /= 365;
        comment = `${defaultAmount} days in years is ${days}`
    }
    else {
        comment = "error occured. Please re-check inputs."
    }

    const outputValue = document.getElementById("output");
    outputValue.textContent = comment;
 }

// 9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
// 9.1. Funkcija priima du argumentus: 
//   9.1.1. Skaičių, kuris bus dalinamas (dalinys).
//   9.1.2. Skaičių, iš kurio bus dalinama (daliklis).
// 9.2. Funkcija grąžina atsakymą tokiu formatu:
//   9.2.1. Jeigu dalinasi: 10 dalinasi iš 5.
//   9.2.2. Skaičius 11 nesidalina iš 5. Liekana yra 1.

function function2 (dalinys, daliklis){
    const outputValue = document.getElementById("output");
    if (dalinys % daliklis === 0) {
        outputValue.textContent = `${dalinys} dalinasi iš ${daliklis}.`;
    } else {
        const liekana = dalinys % daliklis;
        outputValue.textContent = `Skaičius ${dalinys} nesidalina iš ${daliklis}. Liekana yra ${liekana}.`;
    }
}
 

// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.


function function3 (length){
    const outputValue = document.getElementById("output");
    const amount = length.length;
    if(amount % 2 === 0){
        outputValue.textContent = `Amount of letters in it is ${amount} with no remainder`;
    }
    else {
        outputValue.textContent = `Amount of letters in it is ${amount} and has a remainder`;
    }
}
 

// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio. 
// 11.1. Funkcija priima du argumentus: tekstą ir kelintą simbolį reikia grąžinti.
// 11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".
// 11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.
// 11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.

function function4 (tekstas, raide) {
    const outputValue = document.getElementById("output")
    let firstLetter;
    if (tekstas.length < raide){
        outputValue.textContent = "error in input, the lenght of text is smaller than the desired letter number";
    }
    else if (raide < 0 && -raide <= tekstas.length) {
        firstLetter = tekstas[tekstas.length + raide];
        outputValue.textContent = `The ${raide} letter from the end of the provided text is "${firstLetter}"`;
      }
    else {
        firstLetter = tekstas[raide];
        outputValue.textContent = `the ${raide} letter of provided text is ${firstLetter} `;
    }
}

function functionSwitch() {
    let option = prompt("Select which function you'd like: ");
    switch (option){
        case '1':
            let days = prompt("please enter number of days: ")
            let format = prompt("Please enter the format - 1- years, 2- months, 3 - hours, 4  - minutes, 5 - weeks: ")
            function1(days, format);
            break;
        case '2': 
        let dalinys = prompt("dalinys: ")
        let daliklis = prompt("daliklis: ")
            function2(dalinys, daliklis);
            break;
        case '3':
            let length = prompt("Enter a sentence and we'll calculate the amount of letters in it. If it's equal or not equal amount ")
            function3(length);
            break;
        case '4':
            let tekstas = prompt("Enter a sentence ")
            let raide = prompt("enter a letter number ")
            function4(tekstas,parseInt(raide));
            break;
        default:
            console.log("incorrect function selected.")
        }
}