document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceContainer = document.getElementById('total-price');

    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        const itemTotalPrice = item.price * item.quantity;
        totalItems += item.quantity;
        totalPrice += itemTotalPrice;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td data-label="Produk">
                <div class="product-info">
                    <img src="${item.image}" alt="Product Image">
                    <div class="product-details">
                        <span class="product-name">${item.name}</span>
                        <span class="free-return">Tersedia</span>
                    </div>
                </div>
            </td>
            <td data-label="Harga Satuan">Rp${item.price.toLocaleString('id-ID')}</td>
            <td data-label="Kuantitas"><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.name}', this.value)"></td>
            <td data-label="Total Harga">Rp${itemTotalPrice.toLocaleString('id-ID')}</td>
            <td data-label="Ubah"><button class="remove-btn" onclick="removeItem('${item.name}')">Hapus</button></td>
        `;
        cartItemsContainer.appendChild(tr);
    });

    totalPriceContainer.innerHTML = `<span>Total (${totalItems} produk): Rp${totalPrice.toLocaleString('id-ID')}</span>`;
});

function updateQuantity(name, quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.map(item => {
        if (item.name === name) {
            item.quantity = parseInt(quantity);
        }
        return item;
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}

function removeItem(name) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}
