import React, { useEffect, useState } from 'react';
import './Cart.scss';
import { Footer } from '../Common/Footer/Footer';
import { Header } from '../Common/Header/Header';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  // Define state variables for cart, wishlist, and saved for later items
  const [cart, setCart] = useState<{ id: number; name: string; quantity: number; price: number }[]>([]);
  const [wishlist, setWishlist] = useState<{ id: number; name: string }[]>([]);
  const [savedForLater, setSavedForLater] = useState<{ id: number; name: string }[]>([]);

  // Load cart data from localStorage when the component mounts
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCart(parsedCart);
    }
  }, []);

  // Remove an item from the cart
  const handleRemoveFromCart = (itemId: number) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Move an item to the wishlist
  const handleMoveToWishlist = (itemId: number) => {
    setWishlist((prevWishlist) => {
      const itemToMove = cart.find((item) => item.id === itemId);
      if (itemToMove) {
        return [...prevWishlist, { id: itemToMove.id, name: itemToMove.name }];
      }
      return prevWishlist;
    });
    handleRemoveFromCart(itemId);
  };

  // Remove an item from the wishlist
  const handleRemoveFromWishlist = (itemId: number) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== itemId);
    setWishlist(updatedWishlist);
  };

  // Move an item to the cart from Wishlist
  const handleMoveToCartFromWishlist = (itemId: number) => {
    const itemToMove = wishlist.find((item) => item.id === itemId);
    if (itemToMove) {
      setCart([...cart, { id: itemToMove.id, name: itemToMove.name, quantity: 1, price: itemToMove.price }]);
      handleRemoveFromWishlist(itemId);
    }
  };

  // Move an item to the Saved For Later section
  const handleMoveToSavedForLater = (itemId: number) => {
    const itemToMove = cart.find((item) => item.id === itemId);
    if (itemToMove) {
      setSavedForLater([...savedForLater, { id: itemToMove.id, name: itemToMove.name }]);
      handleRemoveFromCart(itemId);
    }
  };

  // Move an item back to the cart from Saved For Later
  const handleMoveToCart = (itemId: number) => {
    const itemToMove = savedForLater.find((item) => item.id === itemId);
    if (itemToMove) {
      setCart([...cart, { id: itemToMove.id, name: itemToMove.name, quantity: 1, price: itemToMove.price }]);
      handleRemoveFromSavedForLater(itemId);
    }
  };

  // Remove an item from Saved For Later
  const handleRemoveFromSavedForLater = (itemId: number) => {
    const updatedSavedForLater = savedForLater.filter((item) => item.id !== itemId);
    setSavedForLater(updatedSavedForLater);
  };

  // Empty the entire cart
  const handleEmptyCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  // Calculate the total cost of items in the cart
  const totalCost = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <Header />
      <div className="cart-container mt-5">
        <div className="cart-heading">
          <h2 className="cart-heading-name">Shopping Cart</h2>
        </div>
        <div className="cart-grid">
          <div className="cart-content">
            {cart.length === 0 ? (
              <p className="cart-empty-message">Your cart is empty.</p>
            ) : (
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="d-flex align-items-center">
                      <div className="cart-data-fields">
                        <div className="cart-data-image">
                          <img className="cart-image" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGJcUtUFmKxKMauc3Wt75f_68o4vqURIlYw&usqp=CAU' />
                        </div>
                      </div>
                      <div className="cart-item-details-price">
                        <div className="cart-item-name">{item.name}</div>
                        <p className="cart-items-data"><span>&#x20b9;</span>{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <div className="cart-item-actions">
                        <button
                          className="btn btn-outline-primary btn-sm me-2"
                          onClick={() => handleMoveToWishlist(item.id)}
                        >
                          Move to Wishlist
                        </button>
                        <button
                          className="btn btn-outline-secondary btn-sm me-2"
                          onClick={() => handleMoveToSavedForLater(item.id)}
                        >
                          Save for Later
                        </button>
                        <button
                          className="btn btn-outline-secondary btn-sm me-2"
                          onClick={() => handleRemoveFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="cart-total">
            <div className="cart-footer">
              <div className="cart-footer-data">
                <div>Subtotal:</div>
                <div><span>&#x20b9;</span>{totalCost.toFixed(2)}</div>
                <div className="cart-footer-actions">
                  <button className="btn btn-danger" onClick={handleEmptyCart}>
                    Empty Cart
                  </button>
                  <Link to='/checkout'>
                    <button className="btn btn-success">Checkout</button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Promotions section */}
            <div className="cart-promotions">
              <h4>Promotions</h4>
              <p>Apply coupon:</p>
              <div className="cart-coupon-input">
                <input type="text" placeholder="Enter Coupon" />
                <button className="btn btn-primary">Apply Coupon</button>
              </div>
            </div>
          </div>
        </div>

        {/* Saved For Later Section */}
        <div className="cart-saved-for-later">
          {savedForLater.length > 0 && (
            <div className="cart-saved-for-later-heading">
              <h3 className="cart-saved-for-later-heading-name">Saved For Later</h3>
            </div>
          )}
          {savedForLater.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="d-flex align-items-center">
                <div className="cart-item-name">
                  <img className="cart-image-in-savelater" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGJcUtUFmKxKMauc3Wt75f_68o4vqURIlYw&usqp=CAU' />
                  {item.name}</div>
                <div className="cart-item-actions-saved">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => handleMoveToCart(item.id)}
                  >
                    Move to Cart
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveFromSavedForLater(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Wishlist Section */}
        <div className="cart-wishlist">
          {wishlist.length > 0 && (
            <div className="cart-wishlist-heading">
              <h3 className="cart-wishlist-heading-name">Wishlist</h3>
            </div>
          )}
          {wishlist.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="d-flex align-items-center">
                <div className="cart-item-name">
                  <img className="cart-image-in-savelater" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGJcUtUFmKxKMauc3Wt75f_68o4vqURIlYw&usqp=CAU' />
                  {item.name}</div>
                <div className="cart-item-actions-wishlist">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => handleMoveToCartFromWishlist(item.id)}
                  >
                    Move to Cart
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveFromWishlist(item.id)}
                  >
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
