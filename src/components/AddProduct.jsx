import React, { useState } from "react";

const AddProduct = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!name || !price) {
      alert("Please fill in both fields.");
      return;
    }
    onAdd(name, price);
    setName("");
    setPrice("");
  };

  return (
    <div>
      <h2>Add Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAdd}>Add Product</button>
    </div>
  );
};

export default AddProduct;
