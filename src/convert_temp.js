
function celsToFahrAndKelvin() {
    let fahr = document.getElementById("Cels").value*9/5+32;
    let kelv = document.getElementById("Cels").value*9/5+32;
    document.getElementById("Fahr").value = Math.round(fahr);
    document.getElementById("Kelv").value = Math.round(kelv);

}

function fahrToCelsAndKelvin() {
    let cels = document.getElementById("Fahr").value*9/5+32;
    let kelv = document.getElementById("Fahr").value*9/5+32;

    document.getElementById("Cels").value = Math.round(cels);
    document.getElementById("Kelv").value = Math.round(kelv);
}

function kelvinToCelsAndFahr() {
    let cels = document.getElementById("Kelv").value*9/5+32;
    let fahr = document.getElementById("Kelv").value*9/5+32;

    document.getElementById("Cels").value = Math.round(cels);
    document.getElementById("Fahr").value = Math.round(fahr);
}
