function checkTrafficLight() {
    const color = document.getElementById("trafficLight").value.toLowerCase();
    let instruction;

    switch (color) {
        case "merah":
            instruction = "Berhenti";
            break;
        case "kuning":
            instruction = "Bersedia";
            break;
        case "hijau":
            instruction = "Berjalan";
            break;
        default:
            instruction = "Bukan warna lampu lalu lintas";
    }

    document.getElementById("result").textContent = instruction;
}