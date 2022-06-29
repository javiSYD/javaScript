const valueOfDiscount = function (valuePrice, valueDiscount) {
    const percentageDiscountedPrice = valuePrice - valueDiscount;
    const priceWithDiscountCupon = valuePrice * verificationCupon;

    let valorDiscount = percentageDiscountedPrice + priceWithDiscountCupon;
    return valorDiscount
};

const verificationCupon = function () {
    const cupons = [10, 25, 50];
    const cupon = document.getElementById("cupons");
    const valueCupon = parseInt(cupon.value);
    if (valueCupon === cupons[0]) {
        return cupons[0];
    } else if (valueCupon === cupons[1]) {
        return cupons[1];
    } else if (valueCupon === cupons[2]) {
        return cupons[2];
    } else {
        return 0
    }
}

const onClickButtonPriceDiscount = function () {
    const originalPrice = document.getElementById("inputPrice");
    const valuePrice = parseInt(originalPrice.value);
    const originalDiscount = document.getElementById("inputDiscount")
    const valueDiscount = parseInt(originalDiscount.value);
    const verificationCupons = verificationCupon();
    const discountCupon = (valuePrice * verificationCupons) / 100;

    const totaldiscount = discountCupon + valueDiscount;

    const priceWithDiscount = valuePrice - totaldiscount;
    const valorDiscount = totaldiscount;

    const displayPercentageDiscount = document.getElementById("displayPercentageDiscount");
    displayPercentageDiscount.innerText = `${priceWithDiscount}`


    const displayPrice = document.getElementById("displayPrice");
    displayPrice.innerText = `Discount: ${valueDiscount}`


    const displayDiscount = document.getElementById("displayDiscount");
    displayDiscount.innerText = `Cupon: $${discountCupon}`;


    const displayValueDiscount = document.getElementById("displayValueDiscount");
    displayValueDiscount.innerText = `This is how much you have saved: $${valorDiscount}`;
}