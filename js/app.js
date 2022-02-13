calculateTotal();
function updateProduct(product, price, isIncreasing) {
    debugger;
    const productCount = document.getElementById(product + '-count');
    const productCountText = productCount.value;
    let productCountNumber = parseInt(productCountText);
    if (isIncreasing) {
        productCountNumber = productCountNumber + 1;
    }
    else if (productCountNumber > 0) {
        productCountNumber = productCountNumber - 1;
    }
    productCount.value = productCountNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productCountNumber * price;

    calculateTotal();
}
function getInput(productName) {
    const product = document.getElementById(productName + '-count').value;
    return parseInt(product);
}
function calculateTotal() {
    const phoneCount = getInput('phone');
    const caseCount = getInput('case');

    const subTotal = (phoneCount * 1219) + (caseCount * 59);
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
//handle phone side
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProduct('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    console.log('minus');
    updateProduct('phone', 1219, false);
})

//handle case side
document.getElementById('case-plus').addEventListener('click', function () {
    updateProduct('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProduct('case', 59, false);
})