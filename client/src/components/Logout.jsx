import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientID = '1055346852385-4tkhstuldbesmi1sk47el4fhlvdfaapq.apps.googleusercontent.com';

//idk if this file is necessary
//https://github.com/Sivanesh-S/react-google-authentication/tree/master/src

function Login() {
    const onSuccess = (res) => {
        console.log('Logout successful yo');
    };

    return {
        <div>
            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onSuccess={onSuccess}
            />
        </div>
    }

    export default Login;
}