function calculateSalary() {
    const grossSalary = parseFloat(document.getElementById("grossSalary").value);
    const taxRate = parseFloat(document.getElementById("taxRate").value) / 100;
    const insurance = parseFloat(document.getElementById("insurance").value);

    if (!grossSalary || !taxRate || !insurance) {
        alert("Harap masukkan semua nilai dengan benar!");
        return;
    }

    const netSalary = grossSalary - (grossSalary * taxRate) - insurance;
    document.getElementById("netSalary").textContent = netSalary.toFixed(2);
}