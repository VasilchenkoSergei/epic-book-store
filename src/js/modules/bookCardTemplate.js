const bookCardTemplate = {
  wrap: '.catalog__block',
  tag: 'article',
  tagClass: '.product-card-mini',
  setContent: function(data) {
    return `<article class="product-card-mini">
              <a class="product-card-mini__picture-wrap" href="inner.html">
                  <picture class="product-card-mini__picture">
                  <img class="product-card-mini__img" src="img/books/${data.uri}.png" alt="${data.uri}" width="210" height="300"></picture>
              </a>
              <a class="product-card-mini__title-wrap" href="inner.html">
                  <h3 class="product-card-mini__title">${data.name}</h3>
              </a>
              <p class="product-card-mini__descr">${data.desc}</p>
              <span class="product-card-mini__price">${data.price} &#8381;</span>
            </article>`;
  }
}

export default bookCardTemplate;

