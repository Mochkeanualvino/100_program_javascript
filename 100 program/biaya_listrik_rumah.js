function calculateElectricity() {
    const months = parseFloat(document.getElementById("months").value);
    const power = parseFloat(document.getElementById("power").value);
    const hours = parseFloat(document.getElementById("hours").value);
    const tariff = 1500; // Tarif per kWh

    if (!months || !power || !hours) {
        alert("Harap masukkan semua nilai dengan benar!");
        return;
    }

    const cost = (power / 1000) * hours * tariff * 30 * months;
    document.getElementById("result").textContent = cost.toFixed(2);
}