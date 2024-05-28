 

// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { IoIosSearch } from "react-icons/io";
// import { faHome, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import './index.css';

// const Header = ({ onSearch }) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const cartItems = useSelector(state => state.product.cart);
//   const totalItemsInCart = cartItems.reduce((acc, item) => acc + item.quantity, 0);

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//     onSearch(e.target.value);
//   };

//   return (
//     <header className="header-container">
//       <nav className="nav-bar">
//         <div className="company-logo">
//           <Link to="/" className="nav-link">
//             <img src="https://thetechrevolutionist.com/wp-content/uploads/2022/03/3d-memory.jpg" alt="Company Logo" />
//           </Link>
//         </div>
//         <div className="search-input">
//           <IoIosSearch className='iconofsearch' style={{color:"red"}} />
//           <input 
//             type="text" 
//             value={searchQuery} 
//             onChange={handleSearchChange} 
//             placeholder="Search..." 
//           />
//         </div>
//         <ul className="nav-list">
//           <li>
//             <Link to="/" className="nav-link">
//               <FontAwesomeIcon className='link' icon={faHome} />
//               <span className="link-text">Home</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/cart" className="nav-link">
//               <FontAwesomeIcon className='link' icon={faShoppingCart} />
//               {totalItemsInCart > 0 && (
//                 <span className="cart-count">{totalItemsInCart}</span>
//               )}
//               <span className="link-text">Cart</span>
//             </Link>
//           </li>
//           <li>
//             <Link to="/login" className="nav-link">
//               <FontAwesomeIcon className='link' icon={faSignOutAlt} />
//               <span className="link-text">Logout</span>
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoIosSearch } from "react-icons/io";
import { faHome, faShoppingCart, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const cartItems = useSelector(state => state.product.cart);
  const totalItemsInCart = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="header-container">
      <nav className="nav-bar">
        <div className="company-logo">
          <Link to="/" className="nav-link">
            <img src="https://thetechrevolutionist.com/wp-content/uploads/2022/03/3d-memory.jpg" alt="Company Logo" />
          </Link>
        </div>
        <div className="search-input">
          <IoIosSearch className='iconofsearch' style={{color:"red"}} />
          <input 
            type="text" 
            value={searchQuery} 
            onChange={handleSearchChange} 
            placeholder="Search..." 
          />
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link">
              <FontAwesomeIcon className='link' icon={faHome} />
              <span className="link-text">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-link">
              <FontAwesomeIcon className='link' icon={faShoppingCart} />
              {totalItemsInCart > 0 && (
                <span className="cart-count">{totalItemsInCart}</span>
              )}
              <span className="link-text">Cart</span>
            </Link>
          </li>
          <li>
            <Link to="/login" className="nav-link">
              <FontAwesomeIcon className='link' icon={faSignOutAlt} />
              <span className="link-text">Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
