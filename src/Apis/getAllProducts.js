import axios from "axios";

async function getAllProducts() {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://zalo-mini-app-backend.onrender.com/api/products",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.request(config);
    console.log("Data", response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default getAllProducts;