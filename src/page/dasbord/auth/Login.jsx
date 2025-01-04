import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginValidations } from "../../../validation/vakidationSchema";
import {  loginUser } from "../../../database/firebaseAuth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { creatUserPofile, getPofile } from "../../../database/firebaseUlites";
import {  useNavigate } from "react-router";
import { setLogineUserDatato } from "../auths/authSlice";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../../../database/firevaseconfig";

const Login = () => {


  const dispatch = useDispatch();
  const naviget = useNavigate();



  const { register, handleSubmit, reset, formState: { errors } } = useForm({


    resolver: yupResolver(loginValidations),
  });


  const onSubmit = async (data) => {
    const res = await loginUser(data);
    if (res.code) {
      toast.error(res.code);
    } else {
      // logine user
      // console.log(res);
      let UserPofile = await getPofile(res.id);
      const logineinfo = {
        id: res.id,
        email: res.email,
        name: UserPofile.name,
        role: UserPofile.role,

      }


      dispatch(setLogineUserDatato(logineinfo));
      reset();
      naviget('/dasbord');
    }

  }

  const handleClick = async () => {
    try {
      const res = await signInWithPopup(auth, googleAuthProvider);
      const user = res.user;
      const newUser = {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        role: "user", 
      };

      const UserPofile = await getPofile(user.uid);
      

      if (!UserPofile || UserPofile.email !== user.email) {
        await creatUserPofile(newUser);
        dispatch(setLogineUserDatato(newUser));
      } else {
        dispatch(
          setLogineUserDatato({
            ...newUser,
            role: UserPofile.role,
          })
        );
      }

      toast.success("You are logged in");
      naviget("/dasbord");
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Login failed. Please try again.");
    }
  };


  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              {...register('email')}
            />
            {errors.email && <span className="text-red-500">{errors.email?.message}</span>}
          </div>
          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              {...register('password')}
            />
            {errors.password && <span className="text-red-500">{errors.password?.message}</span>}
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </form>
        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        {/* Google Login Button */}
        <button
          onClick={handleClick}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none"
        >
          Login with Google
        </button>
        {/* Registration Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          {` Don't have an account?`}
          <a
            href="/reghter"
            className="text-blue-500 hover:underline"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;