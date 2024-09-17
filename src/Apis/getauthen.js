import { authorize, getUserInfo } from "zmp-sdk/apis";
import getPhoneNum from "./getPhoneNum";
import addUser from "./addUser";

async function getPermission() {
  try {
    const data = await authorize({
      scopes: ["scope.userInfo", "scope.userPhonenumber"],
    });
    console.log("AUTHENDATA: ", data);
  } catch (error) {
    console.log(error);
  }

  let userInfo, phoneNum;

  try {
    const userInfoResponse = await getUserInfo({});
    userInfo = userInfoResponse.userInfo;
    console.log("UserData: ", userInfo);
  } catch (error) {
    console.log(error);
  }

  try {
    const userPhoneResponse = await getPhoneNum();
    console.log("UserPhone: ", userPhoneResponse);
    phoneNum = userPhoneResponse;
  } catch (error) {
    console.log(error);
  }

  const UserDataFinal = {
    id: userInfo?.id,
    name: userInfo?.name,
    avatar: userInfo?.avatar,
    PhoneNumber: phoneNum,
  };
  addUser(UserDataFinal);
  console.log("UserDataFinal: ", UserDataFinal);
  

}

export default getPermission;