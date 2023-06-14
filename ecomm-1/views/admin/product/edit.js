const layout = require('../../admin/layout');
const { getError } = require('../../helpers');

module.exports = ({ product, errors }) => {
  return layout({
    content: `
      <div class="columns is-centered">
        <div class="column is-half">
          <h1 class="subtitle">Edit a Product</h1>

          <form method="POST" >
            <div class="field">
              <label class="label">Title</label>
              <input value="${
                product.title
              }" class="input" placeholder="Title" name="title">
              <p class="help is-danger">${getError(errors, 'title')}</p>
            </div>
            
            <div class="field">
              <label class="label">Price</label>
              <input value="${
                product.price
              }" class="input" placeholder="Price" name="price">
              <p class="help is-danger">${getError(errors, 'price')}</p>
            </div>
            
            <br />
            <button class="button is-primary">Edit</button>
          </form>
        </div>
      </div>
    `
  });
};
