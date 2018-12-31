const bookCardTemplate = {
  wrap: '.catalog__block',
  tag: 'article',
  tagClass: '.product-card-mini',
  setContent: function(data) {
    return `<a class="product-card-mini__picture-wrap" href="description.html">
              <picture class="product-card-mini__picture">
                <source media="(min-width: 1650px)" srcset="img/books/${data.uri}_2x.png 2x"/>
                <img class="product-card-mini__img" src="img/books/${data.uri}.png" alt="${data.uri}" width="210" height="300">
              </picture>
            </a>
            <a class="product-card-mini__title-wrap" href="description.html">
              <h3 class="product-card-mini__title">${data.name}</h3>
            </a>
            <p class="product-card-mini__descr">${data.desc}</p>
            <span class="product-card-mini__price">${data.price} &#8381;</span>`;
  }
}

export default bookCardTemplate;

