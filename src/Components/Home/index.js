

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Header from '../Header';
// import './home.css';

// function Home() {
  
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [filterData, setFilterData] = useState([]);
//   const [category, setCategory] = useState('all');

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         setData(response.data);
//         setFilterData(response.data);
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleFilter = (cat) => {
//     setCategory(cat);
//     if (category === 'all') {
//       setFilterData(data);
//     } else {
//       const filtered = data.filter(item => item.category === category);
//       setFilterData(filtered);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="main-container-of-section">
//         <div className="home-con">
//           <h1 className="h1-head">New Season Arrival</h1>
//           <h2 className="h2-head">Check Out All The Trends</h2>
//           <h3 className="h3-head">
//             If You Are New User Please Register ➔{' '}
//             <Link to="/register" className="button-link">
//                Click Me
//             </Link>
//           </h3>
//         </div>
//         <div className="image-container">
//           <img
//             className="image-setting"
//             src="https://i.ibb.co/3cGTq3P/attractive-enthusiastic-armenian-young-woman-curly-hair-pointing-looking-intrigued-left-show-index-f.png"
//             alt="images"
//           />
//         </div>
//       </div>
//       <div className='data-dispalying-container'>
//         <div className='items-arrange-in-horizontally'>
//           <button  className='buttons-of-click' onClick={() => handleFilter("men's clothing")}>Men's Clothing</button>
//           <button  className='buttons-of-click' onClick={() => handleFilter("women's clothing")}>Women's Clothing</button>
//           <button  className='buttons-of-click' onClick={() => handleFilter("electronics")}>Electronics</button>
//           <button  className='buttons-of-click' onClick={() => handleFilter("jewelery")}>Jewelery</button>
//           <button  className='buttons-of-click' onClick={() => handleFilter("all")}>All</button>
//         </div>
//         <div className='data-displays'>
//           {loading ? <p>Loading...</p> : (
//             filterData.map(item => (
//               <div key={item.id} className='product-card'>
//                 <img src={item.image} alt={item.title} />
//                 <h4>{item.title}</h4>
//                 <p>${item.price}</p>
//                 <p>{item.category}</p>
//                 <p>{item.rating.rate} ({item.rating.count} reviews)</p>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
  

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Header from '../Header';
// import './home.css';

// function Home({ searchQuery }) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [filterData, setFilterData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const response = await axios.get('https://fakestoreapi.com/products');
//         setData(response.data);
//         setFilterData(response.data);
//         setLoading(false);
//       } catch (error) {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (searchQuery) {
//       const filtered = data.filter(item => 
//         item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.description.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//       setFilterData(filtered);
//     } else {
//       setFilterData(data);
//     }
//   }, [searchQuery, data]);

//   const handleFilter = (cat) => {
//     if (cat === 'all') {
//       setFilterData(data);
//     } else {
//       const filtered = data.filter(item => item.category === cat);
//       setFilterData(filtered);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <div className="main-container-of-section">
//         <div className="home-con">
//           <h1 className="h1-head">New Season Arrival</h1>
//           <h2 className="h2-head">Check Out All The Trends</h2>
//           <h3 className="h3-head">
//             If You Are New User Please Register ➔{' '}
//             <Link to="/register" className="button-link">
//                Click Me
//             </Link>
//           </h3>
//         </div>
//         <div className="image-container">
//           <img
//             className="image-setting"
//             src="https://i.ibb.co/3cGTq3P/attractive-enthusiastic-armenian-young-woman-curly-hair-pointing-looking-intrigued-left-show-index-f.png"
//             alt="images"
//           />
//         </div>
//       </div>
//       <div className='data-dispalying-container'>
//         <div className='items-arrange-in-horizontally'>
//           <button  className='buttons-of-click' onClick={() => handleFilter("men's clothing")}>Men's Clothing</button>
//           <button  className='buttons-of-click' onClick={() => handleFilter("women's clothing")}>Women's Clothing</button>
//           <button  className='buttons-of-click' onClick={() => handleFilter("electronics")}>Electronics</button>
//           <button  className='buttons-of-click' onClick={() => handleFilter("jewelery")}>Jewelery</button>
//           <button  className='buttons-of-click' onClick={() => handleFilter("all")}>All</button>
//         </div>
//         <div className='data-displays'>
//           {loading ? <p>Loading...</p> : (
//             filterData.length > 0 ? (
//               filterData.map(item => (
//                 <div key={item.id} className='product-card'>
//                   <img src={item.image} alt={item.title} />
//                   <h4>{item.title}</h4>
//                   <p>${item.price}</p>
//                   <p>{item.category}</p>
//                   <p>{item.rating.rate} ({item.rating.count} reviews)</p>
//                 </div>
//               ))
//             ) : (
//               <div className="not-found">
//                 <img src="https://i.ibb.co/nzjVJ7b/no-results.png" alt="Not Found" />
//                 <p>No products found</p>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './home.css';

function Home({ searchQuery }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
        setFilterData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = data.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilterData(filtered);
    } else {
      setFilterData(data);
    }
  }, [searchQuery, data]);

  const handleFilter = (cat) => {
    if (cat === 'all') {
      setFilterData(data);
    } else {
      const filtered = data.filter(item => item.category === cat);
      setFilterData(filtered);
    }
  };

  return (
    <div>
      <div className="main-container-of-section">
        <div className="home-con">
          <h1 className="h1-head">New Season Arrival</h1>
          <h2 className="h2-head">Check Out All The Trends</h2>
          <h3 className="h3-head">
            If You Are New User Please Register ➔{' '}
            <Link to="/register" className="button-link">
               Click Me
            </Link>
          </h3>
        </div>
        <div className="image-container">
          <img
            className="image-setting"
            src="https://i.ibb.co/3cGTq3P/attractive-enthusiastic-armenian-young-woman-curly-hair-pointing-looking-intrigued-left-show-index-f.png"
            alt="images"
          />
        </div>
      </div>
      <div className='data-dispalying-container'>
        <div className='items-arrange-in-horizontally'>
          <button  className='buttons-of-click' onClick={() => handleFilter("men's clothing")}>Men's Clothing</button>
          <button  className='buttons-of-click' onClick={() => handleFilter("women's clothing")}>Women's Clothing</button>
          <button  className='buttons-of-click' onClick={() => handleFilter("electronics")}>Electronics</button>
          <button  className='buttons-of-click' onClick={() => handleFilter("jewelery")}>Jewelery</button>
          <button  className='buttons-of-click' onClick={() => handleFilter("all")}>All</button>
        </div>
        <div className='data-displays'>
          {loading ? <p>Loading...</p> : (
            filterData.length > 0 ? (
              filterData.map(item => (
                <div key={item.id} className='product-card'>
                  <img src={item.image} alt={item.title} />
                  <h4>{item.title}</h4>
                  <p>${item.price}</p>
                  <p>{item.category}</p>
                  <p>{item.rating.rate} ({item.rating.count} reviews)</p>
                </div>
              ))
            ) : (
              <div  className="no-results">
              <img className='image-size' src="https://i.ibb.co/1fDDnHc/404-not-found.jpg" alt="No results found" />
            </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
