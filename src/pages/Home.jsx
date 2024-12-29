import React, { useState } from "react";
import AddProduct from "../components/AddProduct";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const addProduct = (name, price) => {
    if (!products.some((product) => product.name === name)) {
      setProducts([...products, { name, price }]);
    } else {
      alert("Product already exists!");
    }
  };

  const deleteProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/";
  };

  return (
    <div>
      <button onClick={handleLogout} style={{ marginBottom: "20px" }}>
        Logout
      </button>
      <AddProduct onAdd={addProduct} />
      <SearchBar onSearch={setSearchQuery} />
      <ProductList products={filteredProducts} onDelete={deleteProduct} />
    </div>
  );
};

export default Home;
