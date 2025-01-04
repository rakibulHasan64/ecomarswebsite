import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

import app from "./firevaseconfig";



const auth = getAuth(app);



const registerUser = async (data) => {
   const { name, email, password, role } = data;

 try {
   const response = await createUserWithEmailAndPassword(
     auth,
     email,
     password
   );
   const user = response.user;
   return {
     id: user.uid,
     name,
     role,
   }


 } catch (error) {
   
   
   return {
     error: true,
     code: error.code,
     message : error.message,
   }
 }
}


const  logOutUser = () => {
   const auth = getAuth();
  signOut(auth)
    .then(() => {
  
    })
   .catch((error) => {
    console.log(error);
    
   });
}


const  loginUser = async ({ email, password }) => {
  try {
    const responsive = await signInWithEmailAndPassword(auth, email, password);
    const user = responsive.user;
    return {
      id: user.uid,
      email: user.email,
    }
  } catch (error) {
    return {
      error: true,
      code: error.code,
      message: error.message,
    };
  }
};


export { registerUser, loginUser, logOutUser,auth };



