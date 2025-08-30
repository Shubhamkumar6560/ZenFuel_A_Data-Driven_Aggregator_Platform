
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleAuthProvider } from './userAuthentication/googleAuth.jsx';


const clientid ='39386575910-jdcq63cqv277urttmpqv32g5vp42sfee.apps.googleusercontent.com'; 
createRoot(document.getElementById('root')).render(
<GoogleOAuthProvider clientId={clientid}>
    <BrowserRouter>
    <GoogleAuthProvider>
<App />
</GoogleAuthProvider>
</BrowserRouter>
</GoogleOAuthProvider>

 
)
