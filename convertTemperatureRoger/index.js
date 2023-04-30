/* functions of conversion */

// celcius conversion

function celciusToFaranheit(temp){
    return (temp * 9 / 5) + 32;
}

function celciusToKelvin(temp){
    return (temp) + 273.15;
}

function celciusToReaumur(temp){
    return temp * 4 / 5;
}

function celciusToRankine(temp){
    return (temp * 1.8) + 491.67;
}

// faranheit conversion

function faranheitToCelcius(temp){
    return (5 / 9) * (temp-32);
}

function faranheitToKelvin(temp){
    return (temp * 0.555556) + 255.37;
}

function faranheitToReaumur(temp){
    return (temp - 32) * 4 / 9;
}

function faranheitToRankine(temp){
    return temp + 459.67;
}

// kelvin conversion

function kelvinToCelcius(temp){
    return temp - 273.15;
}

function kelvinToFarenheit(temp){
    return (temp - 273.15) * 9 / 5 + 32;
}

function kelvinToReaumur(temp) {
    return (temp - 273.15) * 4 / 5;
}

function kelvinToRankine(temp){
    return temp * 1.8;
}

// reaumur conversion

function reaumurToCelcius(temp) {
    return temp * 5 / 4;
}

function reaumurToFarenheit(temp){
    return temp * 9 / 4 + 32;
}

function reaumurToKelvin(temp){
    return temp * 5 / 4  + 273.15;
}

function reaumurToRankine(temp){
    return (temp * 5 / 4 + 273.15) * 1.8;
}

// rankine conversion

function rankineToCelcius(temp){
    return (temp - 491.67) * 0.555556;
}

function rankineToFarenheit(temp){
    return temp - 273.15 * 9 / 5 +32;
}

function rankineToKelvin(temp){
    return temp * 0.555556;
}

function rankineToReaumur(temp){
    return (temp / 1.8 - 273.15) * 4 / 5;
}

/* Setting views */

document.getElementById("convert").onclick = function(){
    let temp;
    
    // celcius conversion
    if(document.getElementById("celInput").value){
        temp = document.getElementById("celInput").value;
        temp = Number(temp);

        let tempFar = celciusToFaranheit(temp);
        console.log(tempFar + "fa");
        document.getElementById("farInput").innerHTML = tempFar
        let tempKe = celciusToKelvin(temp);
        console.log(tempKe + "k");
        let tempRe = celciusToReaumur(temp);
        console.log(tempRe + "re");
        let tempRa = celciusToRankine(temp);
        console.log(tempRa + "ra");
    }

    // faranheit conversion
    else if(document.getElementById("farInput").value){
        temp = document.getElementById("farInput").value;
        temp = Number(temp);

        let tempce = faranheitToCelcius(temp);
        console.log(tempce + "ce");
        let tempKe = faranheitToKelvin(temp);
        console.log(tempKe + "ke");
        let tempRe = faranheitToReaumur(temp);
        console.log(tempRe + "re");
        let tempRa = faranheitToRankine(temp);
        console.log(tempRa + "ra");
    }

    // kelvin conversion
    else if(document.getElementById("keInput").value){
        temp = document.getElementById("keInput").value;
        temp = Number(temp);

        let tempce = kelvinToCelcius(temp);
        console.log(tempce + "ce");
        let tempFar = kelvinToFarenheit(temp);
        console.log(tempFar + "Fa");
        let tempRe = kelvinToReaumur(temp);
        console.log(tempRe + "re");
        let tempRa = kelvinToRankine(temp);
        console.log(tempRa + "ra");
    }

    // reaumur conversion
    else if(document.getElementById("reInput").value){
        temp = document.getElementById("reInput").value;
        temp = Number(temp);

        let tempce = reaumurToCelcius(temp);
        console.log(tempce + "ce");
        let tempFar = reaumurToFarenheit(temp);
        console.log(tempFar + "Fa");
        let tempKe = reaumurToKelvin(temp);
        console.log(tempKe + "Ke");
        let tempRa = reaumurToRankine(temp);
        console.log(tempRa + "ra");
    }

    // rankine conversion
    else if(document.getElementById("raInput").value){
        temp = document.getElementById("raInput").value;
        temp = Number(temp);

        let tempce = rankineToCelcius(temp);
        console.log(tempce + "ce");
        let tempFar = rankineToFarenheit(temp);
        console.log(tempFar + "Fa");
        let tempKe = rankineToKelvin(temp);
        console.log(tempKe + "Ke");
        let tempRe = rankineToReaumur(temp);
        console.log(tempRe + "re");
    }

    // none input
    else{
        document.getElementById("error").innerHTML = "Veuillez entrer une valeur"
    }

}