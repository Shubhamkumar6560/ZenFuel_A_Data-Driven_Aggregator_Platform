import {createContext ,useContext ,useState} from 'react';
import {useGoogleLogin , googleLogout} from "@react-oauth/google";
import { toast } from 'react-toastify';
import axios from 'axios';


const googleAuthContext = createContext();

export const GoogleAuthProvider =({children})=>
{
    const [user,setUser] = useState(()=>
    {
        const savedUser =localStorage.getItem("google_user");
        return savedUser ? JSON.parse(savedUser) :null;
    });

const googleLogin = useGoogleLogin({
    onSuccess:async(tokenResponse)=>{

      try{

    const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`
        }
          });

        setUser(res.data);
        localStorage.setItem("google_user",JSON.stringify(res.data));
        localStorage.setItem("google_token",tokenResponse.access_token);
        
        toast.success(`Welcome ${res.data.name}`,{ position: 'top-center', autoClose: 2000, theme: 'dark' });
      }
      catch(err){
        console.error("Error:",err);
        toast.error('Google Login Failed',{ position: 'top-center', autoClose: 2000, theme: 'dark' })
      }
    },
    onError:()=>
    {
      toast.error('Somrthing went wrong!! Please Try Later',{ position: 'top-center', autoClose: 2000, theme: 'dark' })
    }
  });


  const logout =()=>
  {
    googleLogout();
    setUser(null);
    localStorage.removeItem("google_user");
    localStorage.removeItem("google_token");
  };

  return (
    <googleAuthContext.Provider value={{user,googleLogin,logout}}>
        {children}
    </googleAuthContext.Provider>
  );
};

export const useGoogleAuth =() => useContext(googleAuthContext);
