function calcular() {
    var valorBruto = document.getElementById('valor').value.replace(',', '.'); // Substitui pontos por vírgulas
    if (isNaN(parseFloat(valorBruto))) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    var resultado = document.querySelector('.resultado');

    resultado.innerHTML = `
        Valor a vista: R$${(valorBruto - (valorBruto * 0.30)).toFixed(2).replace('.', ',')}<br>
        <br>
        Valor cartão 2x: R$${(valorBruto - (valorBruto * 0.29)).toFixed(2).replace('.', ',')} - 2x de R$${((valorBruto - (valorBruto * 0.29)) / 2).toFixed(2).replace('.', ',')} <br>
        <br>
        Valor cartão 3x: R$${(valorBruto - (valorBruto * 0.28)).toFixed(2).replace('.', ',')} - 3x de R$${((valorBruto - (valorBruto * 0.29)) / 3).toFixed(2).replace('.', ',')}<br>
        <br>
        Valor cartão 4x: R$${(valorBruto - (valorBruto * 0.27)).toFixed(2).replace('.', ',')} - 4x de R$${((valorBruto - (valorBruto * 0.29)) / 4).toFixed(2).replace('.', ',')}<br>
        <br>
        Valor cartão 5x: R$${(valorBruto - (valorBruto * 0.26)).toFixed(2).replace('.', ',')} - 5x de R$${((valorBruto - (valorBruto * 0.29)) / 5).toFixed(2).replace('.', ',')}<br>
        <br>
        Valor cartão 6x: R$${(valorBruto - (valorBruto * 0.25)).toFixed(2).replace('.', ',')} - 6x de R$${((valorBruto - (valorBruto * 0.29)) / 6).toFixed(2).replace('.', ',')}<br>
        <br>
        Valor cartão 7x: R$${(valorBruto - (valorBruto * 0.24)).toFixed(2).replace('.', ',')} - 7x de R$${((valorBruto - (valorBruto * 0.29)) / 7).toFixed(2).replace('.', ',')}<br>
        <br>
        Valor cartão 8x: R$${(valorBruto - (valorBruto * 0.23)).toFixed(2).replace('.', ',')} - 8x de R$${((valorBruto - (valorBruto * 0.29)) / 8).toFixed(2).replace('.', ',')}<br>
        <br>
        Valor cartão 9x: R$${(valorBruto - (valorBruto * 0.22)).toFixed(2).replace('.', ',')} - 9x de R$${((valorBruto - (valorBruto * 0.29)) / 9).toFixed(2).replace('.', ',')}<br>
        <br>
        Valor cartão 10x: R$${(valorBruto - (valorBruto * 0.21)).toFixed(2).replace('.', ',')} - 10x de R$${((valorBruto - (valorBruto * 0.29)) / 10).toFixed(2).replace('.', ',')}<br>
        <br>
        Valor cartão 11x: R$${(valorBruto - (valorBruto * 0.20)).toFixed(2).replace('.', ',')} - 11x de R$${((valorBruto - (valorBruto * 0.29)) / 11).toFixed(2).replace('.', ',')}<br>
        <br>
        Valor cartão 12x: R$${(valorBruto - (valorBruto * 0.20)).toFixed(2).replace('.', ',')} - 12x de R$${((valorBruto - (valorBruto * 0.29)) / 12).toFixed(2).replace('.', ',')}<br>
        <br>
    `;
}








