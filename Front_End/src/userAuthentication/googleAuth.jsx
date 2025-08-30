import { createContext, useContext, useState } from 'react';
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const googleAuthContext = createContext();

export const GoogleAuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("google_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const navigate = useNavigate();

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.post("http://localhost:2001/auth/google_login", {
          token: tokenResponse.access_token
        });

        const userData = res.data.user;

        setUser(userData);
        localStorage.setItem("google_user", JSON.stringify(userData));
        localStorage.setItem("google_token", tokenResponse.access_token);

        toast.success(`Welcome back, ${userData.name}!`, {
          position: 'top-center',
          autoClose: 2000,
          theme: 'dark'
        });

        navigate("/homepage");
      } catch (err) {
        console.error("Login Error:", err);

        if (err.response?.status === 404) {
          toast.warn("No account found. Please register first.", {
            position: 'top-center',
            autoClose: 2000,
            theme: 'dark'
          });
        } else {
          toast.error("Google Login Failed", {
            position: 'top-center',
            autoClose: 2000,
            theme: 'dark'
          });
        }
      }
    },
    onError: () => {
      toast.error("Something went wrong!! Please try later", {
        position: 'top-center',
        autoClose: 2000,
        theme: 'dark'
      });
    }
  });

  const googleRegister = useGoogleLogin({
  onSuccess: async (tokenResponse) => {
    try {
      const res = await axios.post("http://localhost:2001/auth/google_register", {
        token: tokenResponse.access_token
      });

      const userData = res.data.user;
      setUser(userData);
      localStorage.setItem("google_user", JSON.stringify(userData));
      localStorage.setItem("google_token", tokenResponse.access_token);

      toast.success(`Account created! Welcome ${userData.name}`, {
        position: "top-center",
        autoClose: 2000,
        theme: "dark",
      });
      
    } catch (err) {
      console.error("Register Error:", err);

      if (err.response?.status === 409) {
        toast.warn("Account already exists. Please login instead.", {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
        });
      } else if (err.response?.status === 400) {
        toast.warn("You already have an account. Please login.", {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
        });
      } else {
        toast.error("Google Registration Failed", {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
        });
      }
    }
  },
  onError: () => {
    toast.error("Something went wrong! Please try again.", {
      position: "top-center",
      autoClose: 2000,
      theme: "dark",
    });
  },
});


  const logout = () => {
    googleLogout();
    toast.success(`Logout Successfully ${user?.name || ''}`, {
      position: 'top-center',
      autoClose: 2000,
      theme: 'dark'
    });
    setUser(null);
    localStorage.removeItem("google_user");
    localStorage.removeItem("google_token");
  };

  return (
    <googleAuthContext.Provider value={{ user, googleLogin, googleRegister, logout }}>
      {children}
    </googleAuthContext.Provider>
  );
};

export const useGoogleAuth = () => useContext(googleAuthContext);
