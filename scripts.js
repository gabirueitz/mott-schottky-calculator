function CalculateMS(event) {
    event.preventDefault();

    let vacuum = 8.85e-12;
    let eCharge = 1.60e-19;

    let dielec = document.getElementById('dielec').value;
    let area = document.getElementById('area').value;
    let slope = document.getElementById('slope').value;

    if (dielec == '' | area == '' | slope == '') {
        alert("Por favor, preencha os valores")
        return;
    }

    let ND = (2 / (dielec * area * area * slope * vacuum * eCharge));

    document.getElementById('Nport').innerHTML = ND.toExponential(3);
}

document.getElementById('formMS').addEventListener('submit', CalculateMS)