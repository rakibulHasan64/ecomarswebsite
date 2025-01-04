import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerValidation } from "../../../validation/vakidationSchema";
import { registerUser } from "../../../database/firebaseAuth";
import { toast } from "react-toastify";
import { creatUserPofile } from "../../../database/firebaseUlites";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setLogineUserDatato } from "../auths/authSlice";


const Regster = () => {

  const navigate = useNavigate();

  const despach = useDispatch();


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,

  } = useForm({
    resolver: yupResolver(registerValidation)
  });


  const onSubmit =async (data) => {
   
    const formData = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: "user",
    };

    const res = await registerUser(formData);
    console.log(res);
    
    if (res.code) {
      toast.error(res.code);
    } else {
      //alredy reghtered;
      creatUserPofile({
        id: res.id,
        name: formData.name,
        email: formData.email,
        role: "user",
      });

      despach(
        setLogineUserDatato({
          id: res.id,
          email: formData.email,
          role: "user",
        
        })
      );

      despach()
      reset();
      toast.success("your are successfully regidterd")
      navigate('/logine');
    }

    
    
    
    
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
              {...register('name')}
            
            />

            {errors.name && <span className="text-red-500">{errors.name?.message}</span>}
          </div>
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
          {/* Confirm Password Input */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Re-enter your password"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword?.message}</span>}
          </div>
          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Register
          </button>
        </form>
        {/* Login Button */}
        <p className="text-center text-sm text-gray-600 mt-4">
          {`Already have an account`}
          <Link
            
            to="/logine"
            className="text-blue-500 hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Regster;