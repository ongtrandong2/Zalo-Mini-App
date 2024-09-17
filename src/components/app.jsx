import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui'; 
import { RecoilRoot } from 'recoil';
import HomePage from '../pages';
import Home from '../pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getSetting } from "zmp-sdk/apis";

const MyApp = () => {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    getSetting({
      success: (data) => {
        const userPhoneNumberStatus = data.authSetting["scope.userPhonenumber"];
        setStatus(userPhoneNumberStatus);
        console.log("Setting:", userPhoneNumberStatus);
      },
      fail: (error) => {
        console.log(error);
      }
    });
  }, []);

  return (
    <RecoilRoot>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            {status === true ? (
              <AnimationRoutes>
                {/* <Route path="/" element={<HomePage></HomePage>}></Route> */}
                <Route path="/" element={<Home></Home>}></Route>
              </AnimationRoutes>
            ) : (
              <AnimationRoutes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
              </AnimationRoutes>
            )}
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
};

export default MyApp;