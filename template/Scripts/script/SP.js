document.addEventListener("DOMContentLoaded", function () {
    const addToCartBtn = document.querySelector(".btn-buy-now");

    if (addToCartBtn) {
        addToCartBtn.addEventListener("click", function () {
            const title = document.querySelector(".product-title").innerText;
            const priceText = document.querySelector(".product-price").innerText;
            const image = document.querySelector(".main-image").getAttribute("src");
            const quantity = parseInt(document.getElementById("quantity-input").value) || 1;

            const productId = title.trim();
            const price = parseInt(priceText.replace(/\D/g, "")) || 0;

            const product = {
                id: productId,
                title: title,
                price: price,
                priceFormatted: priceText,
                image: image,
                quantity: quantity
            };

            let cart = JSON.parse(localStorage.getItem("cart")) || [];

            const existingIndex = cart.findIndex(item => item.id === product.id);

            if (existingIndex > -1) {
                cart[existingIndex].quantity += quantity;
            } else {
                cart.push(product);
            }

            localStorage.setItem("cart", JSON.stringify(cart));

            window.location.href = 'giohang'; 
        });
    }
});