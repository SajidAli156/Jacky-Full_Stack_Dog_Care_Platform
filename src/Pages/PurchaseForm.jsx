import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

const PurchaseForm = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [buyerName, setBuyerName] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/v1/product/getProduct/${id}`,
          { withCredentials: true }
        );
        setProduct(data.product);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Purchase successful!");
    setBuyerName("");
    setAddress("");
  };

  if (!product) {
    return <p className="text-center mt-10 text-lg">Loading product details...</p>;
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Purchase {product.productName}
        </h2>

        <div className="mb-4">
          <p className="text-gray-700">
            <strong>Product ID:</strong> {product._id}
          </p>
          <p className="text-gray-700">
            <strong>Description:</strong> {product.desc}
          </p>
          <p className="text-gray-700">
            <strong>Type:</strong> {product.productType}
          </p>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Your Name</label>
          <input
            type="text"
            value={buyerName}
            onChange={(e) => setBuyerName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-600">Delivery Address</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition"
        >
          Confirm Purchase
        </button>
      </form>
    </section>
  );
};

export default PurchaseForm;
