import { getAccessToken, getPhoneNumber } from "zmp-sdk/apis";
import axios from "axios";
const getPhoneNum = async () => {
  let Phone = "";
  let tokenAccess = await getAccessToken({});
  let tokenCode = await getPhoneNumber({});
  console.log("TOKENCODE: ", tokenCode.token);
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://graph.zalo.me/v2.0/me/info",
    headers: {
      access_token: tokenAccess,
      code: tokenCode.token,
      secret_key: "856g5nJmXVTJ2pLeeWN7",
    },
  };
  await axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data.data.number));
      Phone = response.data.data.number;
    })
    .catch((error) => {
      console.log(error);
    });
  return Phone;
};
export default getPhoneNum;
