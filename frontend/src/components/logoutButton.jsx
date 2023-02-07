import { GoogleLogout } from "react-google-login";

const LogoutButton = () => {

    return (
        <div id='signOutButton'>
            <GoogleLogout
                clientId={import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID}
                buttonText={"Logout"}
            // onLogoutSuccess={success}
            />
        </div>
    )
}

export default LogoutButton;