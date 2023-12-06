// Menu
const menu = document.getElementsByClassName("menu")[0];
menu.addEventListener("click",function(){
    const listMenu = document.getElementById("dropdown");
    listMenu.classList.toggle("effect1");
})


// Tampilang Menghitung Luas
const lSegitiga = document.getElementById("L_Segitiga");
lSegitiga.addEventListener("click",function(){
    const listMenu = document.getElementById("dropdown");
    listMenu.classList.toggle("effect1");
    const value3 = document.getElementById("value3");
    value3.classList.add("effect1");
    document.getElementById("myForm").reset();
    document.getElementById("hasil").innerHTML ="";

    document.getElementById("rumus").innerHTML = "<b>Rumus Luas Segitga Yaitu:</b><br>a = alas <br>t = tinggi <br>Luas = 1/2 x a x t";
    document.getElementById("title").innerHTML = "Hitung Luas Segitiga";
    document.getElementById("value1").placeholder = "Masukan Alas";
    document.getElementById("value2").placeholder = "Masukan Tinggi";
})

// Tampilan Menghitung keliling
const kSegitiga = document.getElementById("K_Segitiga");
kSegitiga.addEventListener("click",function(){
    const listMenu = document.getElementById("dropdown");
    listMenu.classList.toggle("effect1");
    const value3 = document.getElementById("value3");
    value3.classList.remove("effect1");
    document.getElementById("myForm").reset();
    document.getElementById("hasil").innerHTML ="";

    document.getElementById("rumus").innerHTML = "<b>Rumus Keliling Segitiga Yaitu:</b><br>A = sisi 1<br>B = sisi 2<br>C = sisi 3<br>Keliling = sisi + sisi + sisi";
    document.getElementById("title").innerHTML = "Hitung Keliling Segitiga";
    document.getElementById("value1").placeholder = "Masukan Sisi 1";
    document.getElementById("value2").placeholder = "Masukan Sisi 2";

})


// Tombol Submit
const submit = document.querySelector(".submit");
submit.addEventListener("click",function(){
    const value1 = parseFloat(document.getElementById("value1").value);
    const value2 = parseFloat(document.getElementById("value2").value);
    const value3 = parseFloat(document.getElementById("value3").value);


    const kondisi = document.getElementById("value3");
    if(!kondisi.classList.contains("effect1")){
        if(isNaN(value1) || isNaN(value2) || isNaN(value3)){
            document.getElementById("hasil").innerHTML ="<b style='color :red;'>Salah Satu Nilai Tidak Boleh Kosong</b>";
        }else {
            const Keliling = value1 + value2 + value3;
        document.getElementById("hasil").innerHTML = "Keliling = "+  value1 + " + " + value2 + " + " + value3 + " = " + Keliling;
        }
    
    } else {
        if(isNaN(value1) || isNaN(value2)){
            document.getElementById("hasil").innerHTML ="<b style='color :red;'>Salah Satu Nilai Tidak Boleh Kosong</b>";
        }else{
            const luas = 1/2 * value1 * value2;
            document.getElementById("hasil").innerHTML = "Luas =  1/2 X " + value1 + " X " + value2 + " = "  + luas;
        }
    }
})


// Tombol Reset
const reset = document.querySelector(".reset");
reset.addEventListener("click",function(){
    document.getElementById("myForm").reset();
    document.getElementById("hasil").innerHTML ="";
})
        

