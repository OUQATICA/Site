fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        let products = data.products;
        let content = document.getElementById('all_products');
        
        products.forEach(product => {
            let productCard = document.createElement('div');
            productCard.classList.add('product_card');
            
            productCard.innerHTML = `
                <h3>${product.title}</h3>
                <img src="${product.images[0]}" alt="${product.title}" style="max-width: 200px; max-height: 200px">
                <p>Цена: $${product.price}</p>
                <p>Описание: ${product.description}</p>
                <p>Рейтинг: ${product.rating}</p>
                <p>Бренд: ${product.brand}</p>
            `;
            
            content.appendChild(productCard);
        });
    });

