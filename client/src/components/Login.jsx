import React from 'react';

import { GoogleLogin } from 'react-google-login';
// refresh token
//https://github.com/Sivanesh-S/react-google-authentication/tree/master/src
//idk if this is necessary
import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
  '1055346852385-4tkhstuldbesmi1sk47el4fhlvdfaapq.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login.`
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;