function showDetails(method) {
    const details = document.getElementById('payment-details');
    details.style.display = 'block';

    let content = '';
    switch(method) {
        case 'bank-transfer':
            content = `
                <h2>Transfer Bank</h2>
                <p>Pilih bank untuk Transfer Bank:</p>
                <select id="bank-transfer-select" onchange="updateBankTransferDetails()">
                    <option value="" disabled selected>Pilih Bank</option>
                    <option value="bca">BANK BCA</option>
                    <option value="bri">BANK BRI</option>
                    <option value="bjb">BANK BJB</option>
                    <option value="jago">BANK JAGO</option>
                </select>
                <div id="bank-transfer-details" style="margin-top: 20px;">
                </div>
            `;
            break;
        case 'virtual-account':
            content = `
                <h2>Virtual Account</h2>
                <p>Pilih bank untuk Virtual Account:</p>
                <select id="bank-select" onchange="updateVirtualAccountDetails()">
                    <option value="" disabled selected>Pilih Bank</option>
                    <option value="bca">BANK BCA</option>
                    <option value="bri">BANK BRI</option>
                    <option value="bjb">BANK BJB</option>
                    <option value="jago">BANK JAGO</option>
                </select>
                <div id="va-details" style="margin-top: 20px;">
                </div>
            `;
            break;
        case 'qris':
            content = `
                <h2>QRIS</h2>
                <p>Scan QR code berikut untuk melakukan pembayaran:</p>
                <img src="qris-pembayaran.png" alt="QRIS Code" style="width: 150px;">
            `;
            break;
        case 'supermarket':
            content = `
                <h2>Supermarket</h2>
                <p>Pilih supermarket untuk pembayaran:</p>
                <select id="supermarket-select" onchange="updateSupermarketDetails()">
                    <option value="" disabled selected>Pilih Supermarket</option>
                    <option value="indomaret">Indomaret</option>
                    <option value="alfamart">Alfamart</option>
                </select>
                <div id="supermarket-details" style="margin-top: 20px;">
                </div>
            `;
            break;
        default:
            content = '<p>Pilih metode pembayaran untuk melihat detail.</p>';
    }

    details.innerHTML = content;
}

function updateVirtualAccountDetails() {
    const bankSelect = document.getElementById('bank-select');
    const selectedBank = bankSelect.value;
    const vaDetails = document.getElementById('va-details');

    let detailsContent = '';
    switch (selectedBank) {
        case 'bca':
            detailsContent = `
                <p>Bank: BCA</p>
                <p>Nomor Virtual Account: 91827893993</p>
            `;
            break;
        case 'bri':
            detailsContent = `
                <p>Bank: BRI</p>
                <p>Nomor Virtual Account: 91827893993</p>
            `;
            break;
        case 'bjb':
            detailsContent = `
                <p>Bank: BJB</p>
                <p>Nomor Virtual Account: 91827893993</p>
            `;
            break;
        case 'jago':
            detailsContent = `
                <p>Bank: JAGO</p>
                <p>Nomor Virtual Account: 91827893993</p>
            `;
            break;
        default:
            detailsContent = '<p>Pilih bank untuk melihat detail Virtual Account.</p>';
    }

    vaDetails.innerHTML = detailsContent;
}

function updateBankTransferDetails() {
    const bankTransferSelect = document.getElementById('bank-transfer-select');
    const selectedBank = bankTransferSelect.value;
    const bankTransferDetails = document.getElementById('bank-transfer-details');

    let detailsContent = '';
    switch (selectedBank) {
        case 'bca':
            detailsContent = `
                <p>Bank: BCA</p>
                <p>Nomor Rekening: 91827893993</p>
                <p>Atas Nama: PT. JITU APPAREL</p>
            `;
            break;
        case 'bri':
            detailsContent = `
                <p>Bank: BRI</p>
                <p>Nomor Rekening: 91827893993</p>
                <p>Atas Nama: PT. JITU APPAREL</p>
            `;
            break;
        case 'bjb':
            detailsContent = `
                <p>Bank: BJB</p>
                <p>Nomor Rekening: 91827893993</p>
                <p>Atas Nama: PT. JITU APPAREL</p>
            `;
            break;
        case 'jago':
            detailsContent = `
                <p>Bank: JAGO</p>
                <p>Nomor Rekening: 91827893993</p>
                <p>Atas Nama: PT. JITU APPAREL</p>
            `;
            break;
        default:
            detailsContent = '<p>Pilih bank untuk melihat detail Transfer Bank.</p>';
    }

    bankTransferDetails.innerHTML = detailsContent;
}

function updateSupermarketDetails() {
    const supermarketSelect = document.getElementById('supermarket-select');
    const selectedSupermarket = supermarketSelect.value;
    const supermarketDetails = document.getElementById('supermarket-details');

    let detailsContent = '';
    switch (selectedSupermarket) {
        case 'indomaret':
            detailsContent = `
                <p>Supermarket: Indomaret</p>
                <p>Anda dapat melakukan pembayaran di kasir dengan menunjukkan kode berikut:</p>
                <p>Kode Pembayaran: 91827893993</p>
            `;
            break;
        case 'alfamart':
            detailsContent = `
                <p>Supermarket: Alfamart</p>
                <p>Anda dapat melakukan pembayaran di kasir dengan menunjukkan kode berikut:</p>
                <p>Kode Pembayaran: 91827893993</p>
            `;
            break;
        default:
            detailsContent = '<p>Pilih supermarket untuk melihat detail pembayaran.</p>';
    }

    supermarketDetails.innerHTML = detailsContent;
}

