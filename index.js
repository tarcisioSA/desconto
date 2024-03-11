function calcular() {
    var valorBruto = document.getElementById('valor').value.replace(',', '.'); // Substitui pontos por vírgulas
    if (isNaN(parseFloat(valorBruto))) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    var resultado = document.querySelector('.resultado');

    var descontoAvista = (valorBruto - (valorBruto * 0.30)).toFixed(2).replace('.', ',')
    var desconto2x = (valorBruto - (valorBruto * 0.29)).toFixed(2).replace('.', ',')
    var desconto3x = (valorBruto - (valorBruto * 0.28)).toFixed(2).replace('.', ',')
    var desconto4x = (valorBruto - (valorBruto * 0.27)).toFixed(2).replace('.', ',')
    var desconto5x = (valorBruto - (valorBruto * 0.26)).toFixed(2).replace('.', ',')
    var desconto6x = (valorBruto - (valorBruto * 0.25)).toFixed(2).replace('.', ',')
    var desconto7x = (valorBruto - (valorBruto * 0.24)).toFixed(2).replace('.', ',')
    var desconto8x = (valorBruto - (valorBruto * 0.23)).toFixed(2).replace('.', ',')
    var desconto9x = (valorBruto - (valorBruto * 0.22)).toFixed(2).replace('.', ',')
    var desconto10x = (valorBruto - (valorBruto * 0.21)).toFixed(2).replace('.', ',')
    var desconto11x = (valorBruto - (valorBruto * 0.20)).toFixed(2).replace('.', ',')
    var desconto12x = (valorBruto - (valorBruto * 0.20)).toFixed(2).replace('.', ',')

     

    resultado.innerHTML = `
        <p>Valor a vista: R$${descontoAvista}</p>
        
        <p>Valor cartão 2x: R$${desconto2x} - 2x de R$${(desconto2x.replace(',', '.') / 2).toFixed(2).replace('.', ',')}</p>
        
        <p>Valor cartão 3x: R$${desconto3x} - 3x de R$${(desconto3x.replace(',', '.') / 3).toFixed(2).replace('.', ',')}</p>
        
        <p>Valor cartão 4x: R$${desconto4x} - 4x de R$${(desconto4x.replace(',', '.') / 4).toFixed(2).replace('.', ',')}</p>
        
        <p>Valor cartão 5x: R$${desconto5x} - 5x de R$${(desconto5x.replace(',', '.') / 5).toFixed(2).replace('.', ',')}</p>
        
        <p>Valor cartão 6x: R$${desconto6x} - 6x de R$${(desconto6x.replace(',', '.') / 6).toFixed(2).replace('.', ',')}</p>
        
        <p>Valor cartão 7x:R$${desconto7x} - 7x de R$${(desconto7x.replace(',', '.') / 7).toFixed(2).replace('.', ',')}</p>
        
        <p>Valor cartão 8x: R$${desconto8x} - 8x de R$${(desconto8x.replace(',', '.') / 8).toFixed(2).replace('.', ',')}</p>
        
        <p>Valor cartão 9x: R$${desconto9x} - 9x de R$${(desconto9x.replace(',', '.') / 9).toFixed(2).replace('.', ',')}</p>
        
        <p>Valor cartão 10x: R$${desconto10x} - 10x de R$${(desconto10x.replace(',', '.') / 10).toFixed(2).replace('.', ',')}</p>
        
        <p>Valor cartão 11x: R$${desconto11x} - 11x de R$${(desconto11x.replace(',', '.') / 11).toFixed(2).replace('.', ',')}</p>
        
        <p>Valor cartão 12x: R$${desconto12x} - 12x de R$${(desconto12x.replace(',', '.') / 12).toFixed(2).replace('.', ',')}</p>
        
    `;
}








