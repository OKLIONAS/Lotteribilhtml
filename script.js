
const antal_vinster = document.getElementById("antal_vinster")
const svaretdiv = document.getElementById("svar_div")

const vinster = ["Mazda rX-7", "Mazda Miata", "Toyota Trueno AE86", "Mazda 323 1.5i"]


function buttonClick(e) {

    let vinst = '<h3>Dina vinster</h3>';

    let antalv = parseInt(antal_vinster.value);

    console.log(`knappen fungerar ${antalv}`)

    if (antalv < 4 && antalv > 0) {

        for (i = 0; i < antalv; i++) {
            let slumptal = Math.floor(Math.random() * 4)
            let t_vinst = vinster[slumptal];

            vinst += `<p>${t_vinst} </p>`;
        }

        svaretdiv.innerHTML = vinst;

    }
    else {

        alert("Fel mängd lotter >:( ")
    }


}