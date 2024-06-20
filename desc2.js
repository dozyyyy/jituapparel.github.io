function shareLink() {
    const currentURL = window.location.href;
    if (navigator.share) {
        navigator.share({
            title: document.title,
            url: currentURL
        }).then(() => {
            console.log('Link dibagikan berhasil');
        }).catch((error) => {
            console.error('Terjadi kesalahan saat membagikan link:', error);
        });
    } else {
        prompt('Salin link ini dan bagikan:', currentURL);
    }
}

function addToCart() {
    const product = {
        name: "Jitu V2 Oversize",
        price: 149000,
        quantity: parseInt(document.getElementById('quantity').value),
        image: "baju2.png"
    };
  
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  
    window.location.href = 'bag_checkout.html';
  }