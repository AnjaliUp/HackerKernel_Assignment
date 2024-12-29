import React from "react";

const ProductList = ({ products, onDelete }) => {
  const styles = {
    container: {
      marginTop: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
      borderBottom: "1px solid #ddd",
    },
    cell: {
      flex: 1,
      textAlign: "left",
      padding: "5px 10px",
    },
    price: {
      flex: 18.0,
      textAlign: "center", 
    },
    deleteButton: {
      flex: 0.1,
      textAlign: "right",
      backgroundColor: "#ff4d4f",
      color: "white",
      border: "none",
      borderRadius: "4px", // Slightly rounded corners for a square button
      padding: "5px",      // Added padding for a better look
      cursor: "pointer",
      fontSize: "14px",    // Smaller text size for the button
      width: "30px",       // Set fixed width (adjusted to fit padding)
      height: "27px",      // Set fixed height (adjusted to fit padding)
      display: "flex",     // Flexbox to center content
      justifyContent: "center", // Center horizontally
      alignItems: "center", // Center vertically
    },
    noProduct: {
      textAlign: "center",
      color: "#999",
      padding: "20px 0",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={{ textAlign: "center", color: "#4CAF50" }}>Product List</h2>
      {products.length === 0 ? (
        <p style={styles.noProduct}>No Product Found</p>
      ) : (
        <div>
          {products.map((product, index) => (
            <div key={index} style={styles.row}>
              <div style={styles.cell}>{product.name}</div>
              <div style={styles.price}>${product.price}</div>
              <button
                style={styles.deleteButton}
                onClick={() => onDelete(index)}
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
