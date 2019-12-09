    let fahr;
    let kelv;
    let cels;

 function celsToFahrAndKelvin() {
     fahr = document.getElementById("Cels").value*9/5+32;
     kelv = document.getElementById("Cels").value*9/5+32;
    document.getElementById("Fahr").value = Math.round(fahr);
    document.getElementById("Kelv").value = Math.round(kelv);

}

 function fahrToCelsAndKelvin() {
     cels = document.getElementById("Fahr").value*9/5+32;
     kelv = document.getElementById("Fahr").value*9/5+32;
    console.log("HUU");
    document.getElementById("Cels").value = Math.round(cels);
    document.getElementById("Kelv").value = Math.round(kelv);
}

 function kelvinToCelsAndFahr() {
     cels = document.getElementById("Kelv").value*9/5+32;
     fahr = document.getElementById("Kelv").value*9/5+32;

    document.getElementById("Cels").value = Math.round(cels);
    document.getElementById("Fahr").value = Math.round(fahr);
}

export default kelvinToCelsAndFahr();
