import React from 'react';
import { formatPrice } from "../helpers";

class Fish extends React.Component {

  pushToOrder = () => {
    this.props.addToOrder(this.props.index);
  }

  render() {
    const { image, name, price, status, desc } = this.props.details;
    const isAvailable = status === 'available';

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button onClick={this.pushToOrder} disabled={!isAvailable}>{isAvailable ? 'Add To Order' : 'Sold Out!'}</button>
      </li>
    ); 
  }
}

export default Fish;