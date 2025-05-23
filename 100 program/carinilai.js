function findValues() {
    const values = [
        parseFloat(document.getElementById("value1").value),
        parseFloat(document.getElementById("value2").value),
        parseFloat(document.getElementById("value3").value)
    ];

    if (values.some(isNaN)) {
        alert("Harap masukkan semua nilai dengan benar!");
        return;
    }

    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);

    document.getElementById("maxValue").textContent = maxValue;
    document.getElementById("minValue").textContent = minValue;
}