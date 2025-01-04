import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { catagoryFormSchema } from "../../../validation/vakidationSchema";
import { getFirebaseDataForEdite, setDataToFirebase, setDataToFirebaseupdataFirevase } from "../../../database/firebaseUlites";


function CreatCategory() {

   const navigite = useNavigate();
   const params = useParams();
   

   const { register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      resolver: yupResolver(catagoryFormSchema),
      defaultValues: {
         CategoryName: "",
         CategoryImageURL: "",

      },
   });

   const onSubmit = (data) => {
      if (params.id) {
         // update catagory
         setDataToFirebaseupdataFirevase(`categories/${params.id}`, data);
         toast.success('update is successfull');

      } else {
         // creat catagory
         setDataToFirebase('categories', data);

      }

      navigite('/dasbord/index-category');
   };



   useEffect(() => {


      async function getdata() {
         let res = await getFirebaseDataForEdite("categories/" + params.id);
         reset(res);
      }
      if (params.id) {
         getdata();
      }
      else {
         reset({
            CategoryName: "",
            CategoryImageURL: "",
         })
      }


   }, [params, reset])
   // catagories
   return (
      <>
         <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
               <h1 className="text-2xl font-bold text-center mb-6">{params.id ? 'Edit Category' : 'Add Category'}</h1>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                     <label
                        htmlFor="CategoryName"
                        className="block text-gray-700 font-medium mb-2"
                     >
                        Category Name
                     </label>
                     <input
                        {...register('CategoryName')}
                        type="text"
                        id="CategoryName"
                        name="CategoryName"
                        placeholder="Enter product name"
                        className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"

                     />
                     {errors.CategoryName && <span className="text-red-500">{errors.CategoryName?.message}</span>}
                  </div>

                  <div className="mb-6">
                     <label

                        htmlFor="CategoryImageURL"
                        className="block text-gray-700 font-medium mb-2"
                     >
                        Category Image URL
                     </label>

                     <input
                        {...register('CategoryImageURL')}
                        type="url"
                        id="CategoryImageURL"
                        name="CategoryImageURL"

                        placeholder="Enter product image URL"
                        className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"

                     />
                     {errors.CategoryImageURL && <span className="text-red-500">{errors.CategoryImageURL?.message}</span>}
                  </div>
                  <button
                     type="submit"
                     className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                  >
                     {params.id ? 'Edit Category' : 'Add Category'}
                  </button>
               </form>
            </div>
         </div>


      </>
   );
}

export default CreatCategory;

