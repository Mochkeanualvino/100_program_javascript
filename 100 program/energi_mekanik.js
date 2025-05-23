function calculateEnergy() {
    const mass = parseFloat(document.getElementById("mass").value);
    const height = parseFloat(document.getElementById("height").value);
    const velocity = parseFloat(document.getElementById("velocity").value);
    const gravity = 10; // Nilai gravitasi (m/s²)

    if (!mass || !height || !velocity) {
        alert("Harap masukkan semua nilai dengan benar!");
        return;
    }

    const potentialEnergy = mass * gravity * height;
    const kineticEnergy = 0.5 * mass * velocity * velocity;
    const mechanicalEnergy = potentialEnergy + kineticEnergy;

    document.getElementById("potentialEnergy").textContent = potentialEnergy.toFixed(2);
    document.getElementById("kineticEnergy").textContent = kineticEnergy.toFixed(2);
    document.getElementById("mechanicalEnergy").textContent = mechanicalEnergy.toFixed(2);
}