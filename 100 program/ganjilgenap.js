function checkNumber() {
    const number = parseInt(document.getElementById("numberInput").value);
    
    if (isNaN(number)) {
        document.getElementById("result").textContent = "Harap masukkan bilangan yang valid!";
        return;
    }

    const result = (number % 2 === 0) ? `${number} adalah bilangan Genap` : `${number} adalah bilangan Ganjil`;
    document.getElementById("result").textContent = result;
}