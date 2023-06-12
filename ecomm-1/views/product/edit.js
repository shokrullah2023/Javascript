const layout = require('../admin/layout');

module.exports = ({product}) => {
    return layout({
        content:`
            <div>
                <form method="POST">
                    <input name="title" value="${product.title}"/>
                    <input name="price" value="${product.price}"/>
                    <button>Submit</button>
                </form>
            </div>
        `
    })
}