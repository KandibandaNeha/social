import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()
export const AuthContextProvider = ({children}) =>{
   const [currentUser,setCurrentUser]= useState(
    JSON.parse(localStorage.getItem("user")) || null);

   const login=()=>{
     setCurrentUser({
        id:1,
        name:"akkira",
        profilePic:"https://crictoday.com/wp-content/uploads/2021/01/rohit-samaira-1601218036-1024x580.jpg"
      });
   };

   useEffect(() =>{
    localStorage.setItem("user",JSON.stringify(currentUser));
   },
   [currentUser]);

   return(
    <AuthContext.Provider value={{currentUser,login }}>{children}</AuthContext.Provider>
   );
};