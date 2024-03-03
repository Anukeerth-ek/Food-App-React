import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleLoginData = () => {
     return (
          <GoogleOAuthProvider clientId="659235126993-rrf00dim4s50u4gek6kif3f5a8a1bhau.apps.googleusercontent.com">
               <GoogleLogin
                    onSuccess={(credentialResponse) => {
                         const decoded = jwtDecode(credentialResponse.credential);
                         console.log(decoded);
                    }}
                    onError={() => {
                         console.log("Login Failed");
                    }}
               />
          </GoogleOAuthProvider>
     );
};

export default GoogleLoginData;
