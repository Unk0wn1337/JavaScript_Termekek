import { GYUMOLCSOK } from "./adatok.js";

const vasarolt = [];

// 1. feladat
function letrehozTablazat(tomb) {
    const ELSO = document.getElementById("feladat_1");
    
    let segedValtozo = `<table>`;
    for (let index = 0; index < tomb.length; index++) {
        segedValtozo += `<tr>`
        segedValtozo += `<td class="nev">${tomb[index].nev}</td>`;
        segedValtozo += `<td>${tomb[index].tomeg}g</td>`;
        segedValtozo += `<td>${tomb[index].ar}Ft</td>`;
        segedValtozo += `</tr>`
        
    }
    segedValtozo += `</table>`
    ELSO.innerHTML += segedValtozo;
}

// 2. feladat
function osszesit(tomb) {
    const MASODIK = document.getElementById("feladat_2");
    let OSSZEGZES_AR = 0;
    let OSSZEGZES_SULYA = 0;
    for (let index = 0; index < tomb.length; index++) {
        OSSZEGZES_AR += tomb[index].ar;
        OSSZEGZES_SULYA += tomb[index].tomeg;
    }
    MASODIK.innerHTML += `<p>A gyumolcsok sulya osszesen: ${OSSZEGZES_SULYA}g</p>`;    
    MASODIK.innerHTML += `<p>A gyumolcsok ara osszesen: ${OSSZEGZES_AR}Ft</p>`;   
}

// 3. feladat
function vasarol(zoldseg) {
    const HARMADIK = document.getElementById("feladat_3");
    const zoldsegNevek = document.querySelectorAll(".nev");
    for (let index = 0; index < zoldseg.length; index++) {
        zoldsegNevek[index].addEventListener("click",function(){
            if(index >= 0 && index <= 3 && !vasarolt.includes(zoldseg[index].nev)){
                vasarolt.push(zoldseg[index].nev)
                HARMADIK.innerHTML = "";
                for (let i = 0; i < vasarolt.length; i++) {
                    HARMADIK.innerHTML += `<p>${vasarolt[i]}</p>`;
                }
            }    
        });
    }
}



// 4. feladat
function torolEsemeny() {
    const NEGYEDIK = document.getElementById("feladat_4");
    const HARMADIK = document.getElementById("feladat_3");
    let gombButton = `<button>Torles</button>`;
    NEGYEDIK.innerHTML += gombButton;
    NEGYEDIK.addEventListener("click",function(){
       vasarolt.length = ``;
       HARMADIK.innerHTML = ``;
    })
    
}
        
    


letrehozTablazat(GYUMOLCSOK);
osszesit(GYUMOLCSOK);
vasarol(GYUMOLCSOK);
torolEsemeny();