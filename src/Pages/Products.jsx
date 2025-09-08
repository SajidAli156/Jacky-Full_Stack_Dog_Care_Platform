// import React, { useState, useEffect } from "react";
// import { toast } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { motion } from 'framer-motion';
// import { FaUpload, FaBox, FaListAlt, FaCheckCircle } from 'react-icons/fa';

// const Products = () => {


//   const [products, setProducts] = useState([]);

//   const navigateTo = useNavigate();

//   const getProducts = async () => {
//     try {
//       const { data } = await axios.get(
//         "http://localhost:3000/api/v1/product/getProducts",
//         { withCredentials: true }
//       );
//       setProducts(data.products);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   return (
   

//       <section className="my-8 min-h-screen mx-40 shadow-xl rounded-xl md:mx-96 py-4 px-8 ">
//         {products && products.length > 0 ? (
//           products.map((product) => (
//             <motion.div
//               key={product._id}
//               className="bg-white p-4 mb-4 rounded-lg shadow-md"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               {product.avatar && (
//                 <img
//                   src={product.avatar.url}
//                   alt="Product Image"
//                   className="w-full h-48 object-cover rounded"
//                 />
//               )}
//               <h4 className="text-xl font-bold mt-2">Product Name: {product.productName}</h4>
//               <p className="text-white-700">Product Desc: {product.desc}</p>
//               <p className="text-white-700">Type: {product.productType}</p>
//               <p className="text-white-700">Food Item: {product.isFoodItem}</p>
//             </motion.div>
//           ))
//         ) : (
//           <p className="text-center text-white-500">No products..</p>
//         )}
//       </section>
    
//   );

// };

// export default Products;


import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FaBoxOpen, FaUtensils, FaInfoCircle, FaCheckCircle, FaShoppingCart } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigateTo = useNavigate();

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/v1/product/getProducts",
        { withCredentials: true }
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="min-h-screen py-10 px-4 md:px-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Product List
      </h2>

      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product._id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {product.avatar && (
                <img
                  src={product.avatar.url}
                  alt="Product"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              <h4 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-2">
                <FaBoxOpen className="text-blue-500" />
                {product.productName}
              </h4>

              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <FaInfoCircle className="text-green-500" />
                {product.desc}
              </p>

              <p className="text-gray-600 mb-1 flex items-center gap-2">
                <FaCheckCircle className="text-purple-500" />
                Type: <span className="font-medium">{product.productType}</span>
              </p>

              <p className="text-gray-600 flex items-center gap-2">
                <FaUtensils className="text-red-500" />
                Food Item:{" "}
                <span className="font-medium">
                  {product.isFoodItem ? "Yes" : "No"}
                </span>
              </p>

              <Link to={`/purchase/${product._id}`} className="block mt-4">
  <button className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 flex items-center justify-center gap-2">
    <FaShoppingCart />
    Buy Now
  </button>
</Link>

            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-20">
          No products found. Please add some!
        </p>
      )}
    </section>
  );
};

export default Products;
