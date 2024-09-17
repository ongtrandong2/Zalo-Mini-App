import axios from "axios";
const addUser = async (UserDataFinal) => {
  let data = JSON.stringify({
    "id": 0,
    "name": UserDataFinal.name,
    "avtUrl": UserDataFinal.avatar,
    "phoneNumber": UserDataFinal.PhoneNumber,
  });
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://zalo-mini-app-backend.onrender.com/api/user/addUser",
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  await axios
    .request(config)
    .then((response) => {
      console.log("AddUser: ", JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
export default addUser;
