import bookCardTemplate from './bookCardTemplate.js'

function createElement(book) {
          const card = document.createElement('article');
          card.classList.add('product-card-mini');

          card.innerHTML = bookCardTemplate.setContent(book);
                    
          return card;
      }

export default createElement;