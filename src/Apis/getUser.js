import { getUserInfo } from "zmp-sdk/apis";

const getUser = async () => {
  try {
    const { userInfo } = await getUserInfo({});
    console.log(userInfo);
  } catch (error) {
    console.log(error);
  }
};
export default getUser;