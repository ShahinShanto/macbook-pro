// Extra Memory Cost
function updateMemory(memory) {
    const memoryPrice = document.getElementById('memory-cost');
    if (memory == 'eightGb') {
        memoryPrice.innerText = 0;
    }
    else {
        memoryPrice.innerText = 180;
    }
    subTotal();
}

// 8GB-memory
document.getElementById('eight-gb').addEventListener('click',
    function () {
        updateMemory('eightGb');
    })

// 16GB-memory
document.getElementById('sixteen-gb').addEventListener('click',
    function () {
        updateMemory('sixteenGb');
    })

// Extra Storage Cost
function updateStorage(storage) {
    const storagePrice = document.getElementById('storage-cost');
    if (storage == 'twofiftysix') {
        storagePrice.innerText = 0;
    }
    else if (storage == 'fivetwelve') {
        storagePrice.innerText = 100;
    }
    else {
        storagePrice.innerText = 180;
    }


    subTotal();
}

// 256GB-Storage
document.getElementById('twofiftysix-gb').addEventListener('click',
    function () {
        updateStorage('twofiftysix');
    })

// 512GB-Storage
document.getElementById('fivetwelve-gb').addEventListener('click',
    function () {
        updateStorage('fivetwelve');
    })

// 1TB-Storage
document.getElementById('one-tb').addEventListener('click',
    function () {
        updateStorage('oneTb');
    })

// Delivery Cost
function updateDelivery(delivery) {
    const deliveryPrice = document.getElementById('delivery-cost');
    if (delivery == 'freeDelivery') {
        deliveryPrice.innerText = 0;
    }
    else {
        deliveryPrice.innerText = 20;
    }
    subTotal();
}

// Free Delivery
document.getElementById('free-delivery').addEventListener('click',
    function () {
        updateDelivery('freeDelivery');
    })

// Fast Delivery
document.getElementById('fast-delivery').addEventListener('click',
    function () {
        updateDelivery('fastDelivery');
    })

// Sub-total
function subTotal() {
    const bestPriceText = document.getElementById('best-price').innerText;
    const bestPrice = parseFloat(bestPriceText);
    const memoryPriceText = document.getElementById('memory-cost').innerText;
    const memoryPrice = parseFloat(memoryPriceText);
    const storagePriceText = document.getElementById('storage-cost').innerText;
    const storagePrice = parseFloat(storagePriceText);
    const deliveryPriceText = document.getElementById('delivery-cost').innerText;
    const deliveryPrice = parseFloat(deliveryPriceText);
    const subtotalAdded = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    document.getElementById('sub-total').innerText = subtotalAdded;
    document.getElementById('grand-total').innerText = subtotalAdded;
}

// promo code
document.getElementById('promo-btn').addEventListener('click',
    function () {
        const promoCode = document.getElementById('promo-input');
        const subTotalAmount = document.getElementById('sub-total').innerText;
        let grandTotal = document.getElementById('grand-total');
        let promo = parseFloat(subTotalAmount) - (parseFloat(subTotalAmount) * .2);
        if (promoCode.value == 'stevekaku') {
            grandTotal.innerText = promo.toFixed(2);

        }
        else {
            grandTotal.innerText = subTotalAmount;

        }
        promoCode.value = '';
    })





