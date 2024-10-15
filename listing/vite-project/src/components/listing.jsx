import React from 'react';
import PropTypes from 'prop-types';

const Listing = ({ items }) => {
  return (
    <div className="item-list">
      {items.map((item) => {
        if (!item.url || !item.MainImage || !item.MainImage.url_570xN || !item.title || !item.price || !item.currency_code || item.quantity === undefined) {
          return null;
        }

        const title = item.title.length > 50 ? item.title.slice(0, 50) + '…' : item.title;

        let formattedPrice = item.price;
        if (item.currency_code === 'USD') {
          formattedPrice = `$${item.price}`;
        } else if (item.currency_code === 'EUR') {
          formattedPrice = `€${item.price}`;
        } else {
          formattedPrice = `${item.price} ${item.currency_code}`;
        }

        let quantityClass = 'level-high';
        if (item.quantity <= 10) {
          quantityClass = 'level-low';
        } else if (item.quantity <= 20) {
          quantityClass = 'level-medium';
        }

        return (
          <div className="item" key={item.listing_id}>
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage.url_570xN} alt={title} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{title}</p>
              <p className="item-price">{formattedPrice}</p>
              <p className={`item-quantity ${quantityClass}`}>{item.quantity} left</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Listing.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      listing_id: PropTypes.number.isRequired,
      url: PropTypes.string,
      MainImage: PropTypes.shape({
        url_570xN: PropTypes.string,
      }),
      title: PropTypes.string,
      price: PropTypes.string,
      currency_code: PropTypes.string,
      quantity: PropTypes.number,
    })
  ),
};

Listing.defaultProps = {
  items: [],
};

export default Listing;
