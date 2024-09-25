function calculateTotal() {
    const bid = parseFloat(document.getElementById('bid').value) || 0;
    const delivery = parseFloat(document.getElementById('delivery').value) || 0;

    const buyersPremium = bid * 0.25;
    const vat = bid * 0.20; // Corrected VAT calculation
    const vatBP = buyersPremium * 0.20;

    const total = bid + buyersPremium + vat + vatBP + delivery;

    document.getElementById('buyersPremium').innerText = buyersPremium.toFixed(2);
    document.getElementById('vat').innerText = vat.toFixed(2);
    document.getElementById('vatBP').innerText = vatBP.toFixed(2);
    document.getElementById('total').innerText = total.toFixed(2);
}

function resetFields() {
    document.getElementById('bid').value = '';
    document.getElementById('delivery').value = '';
    document.getElementById('buyersPremium').innerText = '0.00';
    document.getElementById('vat').innerText = '0.00';
    document.getElementById('vatBP').innerText = '0.00';
    document.getElementById('total').innerText = '0.00';
}

window.onload = calculateTotal;
