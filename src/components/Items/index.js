import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import PRODUCTS from '../Data';
import { Section, Icon, Col } from 'react-materialize';
import './index.css';

class Products extends Component {
  static propTypes = {
    addItemToCart: PropTypes.func.isRequired,
  };

  addProduct = (product) => {
    this.props.addProductToCart(product);
  }

  getPrice = () => {
    this.props.getTotalPrice()
  }

  render() {
    return (
      <div className="items-wrapper">
        <div className="items-title">
          <h4>All Items</h4>
        </div>
        <div className="items">
          {map(PRODUCTS, (product)=> (
            <div key={product.id} className="item">
              <div className="product-img">
                <img alt={product.name} src={product.img} />
              </div>
              <div className="product-details">
                <h1 id="product-name">{product.name}</h1>
                <h4 id="product-description">{product.description}</h4>
                <div className="price-add">
                  <h5 id="product-price">${product.price}</h5>
                  <Icon small onClick={() => this.addProduct(product)} id="add-icon">add_shopping_cart</Icon>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
