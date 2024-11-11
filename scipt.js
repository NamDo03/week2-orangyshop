import { categoryData } from './data.js';

const tabs = document.querySelectorAll(".product-grid__tabs-item");
const productList = document.querySelector(".product-grid__products");

function createProductHTML(product, labels = []) {
    const imageUrl = product.image;
    return `
        <img src="${imageUrl}" alt="${product.name}" />
        <div class="product-grid__product-info">
            <span class="product-grid__product-title">${product.title}</span>
            <h3>${product.name}</h3>
            <span class="product-grid__product-price">${product.price}</span>
        </div>
        ${labels.map(label => `<div class="${label.class}">${label.text}</div>`).join('')}
    `;
}

function updateProducts(categoryName) {
    const products = categoryData[categoryName] || [];
    productList.innerHTML = "";

    products.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product-grid__product");

        if (index === 0) productDiv.classList.add("grid-1");
        else if (index === 5) productDiv.classList.add("grid-6");

        let labels = [];
        if (index === 1) labels.push({ class: "selling-fast", text: "Selling fast!" }, { class: "new", text: "New" });
        else if (index === 3) labels.push({ class: "coupon", text: "-30%" });

        productDiv.innerHTML = createProductHTML(product, labels);
        productList.appendChild(productDiv);
    });
}

if (tabs) {
    tabs.forEach((tab) => {
        if (tab) {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove("tabs-item--selected"));

                tab.classList.add("tabs-item--selected");

                const categoryName = tab.innerText;
                updateProducts(categoryName);
            });
        }
    });
}
