const layout = require('../admin/layout');
module.exports = ({products}) => {
    const renderProduct = products.map(product => {
        return `
            <div>${product.title}</div>
            <div>${product.price}</div>
        `;
    }).join();

    return layout({
        content:`
        ${renderProduct}
        `
    });
}

