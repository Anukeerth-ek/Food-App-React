
import { GoogleLogout } from "react-google-login"

const  clientId="659235126993-rrf00dim4s50u4gek6kif3f5a8a1bhau.apps.googleusercontent.com"


function GoogleLogoutData() {

    const onSuccess = ()=> {
        console.log("Log out successfully")
    }

    return(
    <div>
        <GoogleLogout 
            clientId={clientId}
            buttonText={"Logout"}
            onLogoutSuccess={onSuccess}
        />

       
    </div>
    )
}

export default GoogleLogoutData