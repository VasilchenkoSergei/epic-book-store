const bookCardTemplate = {
  wrap: '.catalog__block',
  tag: 'article',
  tagClass: '.product-card-mini',
  setContent: function(book) {
    return `<article class="product-card-mini">
              <a class="product-card-mini__picture-wrap" href="#">
                  <picture class="product-card-mini__picture">
                  <img class="product-card-mini__img" src="img/${book.src}.jpg" alt="${book.alt}" width="210" height="300"></picture>
              </a>
              <a class="product-card-mini__title-wrap" href="">
                  <h3 class="product-card-mini__title">${book.name}</h3>
              </a>
              <p class="product-card-mini__text">${book.descr}</p>
              <span class="product-card-mini__price">${book.price} &#8381;</span>
            </article>`;
  }
}

export default bookCardTemplate;