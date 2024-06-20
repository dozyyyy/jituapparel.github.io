document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemRowsContainer = document.getElementById('item-rows');
    const totalPriceContainer = document.getElementById('total-price');

    let totalPrice = 0;

    cart.forEach(item => {
        const itemTotalPrice = item.price * item.quantity;
        totalPrice += itemTotalPrice;

        const tr = document.createElement('tr');
        tr.classList.add('item-row');
        tr.innerHTML = `
            <td>${item.name}</td>
            <td>Rp${itemTotalPrice.toLocaleString('id-ID')}</td>
        `;
        itemRowsContainer.appendChild(tr);
    });

    totalPriceContainer.textContent = `Total: Rp${totalPrice.toLocaleString('id-ID')}`;
});

function printReceipt() {
    window.print();
}