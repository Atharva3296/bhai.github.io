document.addEventListener('DOMContentLoaded', () => {
    const sipForm = document.getElementById('sip-form');

    sipForm.addEventListener('submit', calculateSIP);

    function calculateSIP(e) {
        e.preventDefault();

        const monthlyInvestment = parseFloat(document.getElementById('monthly-investment').value);
        const expectedReturn = parseFloat(document.getElementById('expected-return').value) / 100 / 12;
        const investmentDuration = parseInt(document.getElementById('investment-duration').value) * 12;

        const totalAmount = monthlyInvestment * ((Math.pow(1 + expectedReturn, investmentDuration) - 1) / expectedReturn) * (1 + expectedReturn);
        const totalInvestment = monthlyInvestment * investmentDuration;
        const totalReturns = totalAmount - totalInvestment;

        const resultElement = document.getElementById('sip-result');
        resultElement.innerHTML = `
            <p>Total Invested Amount: ₹${totalInvestment.toFixed(2)}</p>
            <p>Total Returns: ₹${totalReturns.toFixed(2)}</p>
            <p>Total Corpus: ₹${totalAmount.toFixed(2)}</p>
            `;
        
        
    }
});