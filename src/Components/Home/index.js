

// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Header from '../Header';
// import './home.css';

// function Home() {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [filterData, setFilterData] = useState([]);
//     const [category, setCatogoryData] = useState("all")


//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const response = await axios.get('http://fakestoreapi.com/products');
//                 setData(response.data);
//                 filterData(response.data)
//                 setLoading(false);
//             } catch (error) {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);


//     const handleFilterData=(category)=>{
//         setCatogoryData(category);
//         if(category === "all"){
//             setFilterData(data)
//         }else{
//             const filteredData = data.filter( item => (item.category === category))
//             setFilterData(filteredData);
//         }

//     }


//     return (
//         <div>
//             <Header />
//             <div className="main-container-of-section">
//                 <div className="home-con">
//                     <h1 className="h1-head">New Season Arrival</h1>
//                     <h2 className="h2-head">Check Out All The Trends</h2>
//                     <h3 className="h3-head">
//                         If You Are New User Please Register ➔{' '}
//                         <Link to="/login" className="button-link">
//                             <button type="button">Click Me</button>
//                         </Link>
//                     </h3>
//                 </div>
//                 <div className="image-container">
//                     <img
//                         className="image-setting"
//                         src="https://i.ibb.co/3cGTq3P/attractive-enthusiastic-armenian-young-woman-curly-hair-pointing-looking-intrigued-left-show-index-f.png"
//                         alt="images"
//                     />
//                 </div>
//             </div>


//             <div className='data-dispalying-container'>
//                 <div className='items-arrange-in-horgigentally'>
//                     <button onClick={()=>handleFilterData("men's clothing")}>Men's Clothing</button>
//                     <button onClick={()=>handleFilterData("women's clothing")}>Women's Clothing</button>
//                     <button onClick={()=>handleFilterData("Electronics")}>Electronics</button>
//                     <button onClick={()=>handleFilterData("Jewelery")}>Jewelery</button>
//                 </div>
//                 <div className='data-displays'>
//                     {loading ? <p>Loading...</p> : (
//                         filterData.map(item => (
//                             <div key={item.id} className='product-card'>
//                                 <img src={item.image} alt={item.title} />
//                                 <h4>{item.title}</h4>
//                                 <p>${item.price}</p>
//                                 <p>{item.category}</p>
//                                 <p>{item.rating.rate} ({item.rating.count} reviews)</p>
//                             </div>
//                         ))
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Home;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';
import './home.css';

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterData, setFilterData] = useState([]);
  const [category, setCategory] = useState('all');

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

  const handleFilter = (cat) => {
    setCategory(cat);
    if (category === 'all') {
      setFilterData(data);
    } else {
      const filtered = data.filter(item => item.category === category);
      setFilterData(filtered);
    }
  };

  return (
    <div>
      <Header />
      <div className="main-container-of-section">
        <div className="home-con">
          <h1 className="h1-head">New Season Arrival</h1>
          <h2 className="h2-head">Check Out All The Trends</h2>
          <h3 className="h3-head">
            If You Are New User Please Register ➔{' '}
            <Link to="/login" className="button-link">
              <button type="button">Click Me</button>
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
          <button onClick={() => handleFilter("men's clothing")}>Men's Clothing</button>
          <button onClick={() => handleFilter("women's clothing")}>Women's Clothing</button>
          <button onClick={() => handleFilter("electronics")}>Electronics</button>
          <button onClick={() => handleFilter("jewelery")}>Jewelery</button>
          <button onClick={() => handleFilter("all")}>All</button>
        </div>
        <div className='data-displays'>
          {loading ? <p>Loading...</p> : (
            filterData.map(item => (
              <div key={item.id} className='product-card'>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <p>${item.price}</p>
                <p>{item.category}</p>
                <p>{item.rating.rate} ({item.rating.count} reviews)</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;