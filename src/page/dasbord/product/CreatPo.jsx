import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from "react-redux";

import { proudectFormSchema } from "../../../validation/vakidationSchema";

import { useEffect } from "react";
import { getFirebaseDataForEditeProduct, setDataToFirebase,  setDataToFirebaseupdataFirevaseProduct } from "../../../database/firebaseUlites";
import { toast } from "react-toastify";

function CreatProdut() {


   // const dispatch = useDispatch();
   const nagivet = useNavigate();
   const prams = useParams();


   const { categories } = useSelector(store => store.categories)




   const { register,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm({
      resolver: yupResolver(proudectFormSchema),
      defaultValues: {
         productName: "",
         productPrice: "",
         productImageURL: "",
         ProductCaregory: "",

      },
   });


   const onSubmit = (data) => {
      if (prams.id) {
         setDataToFirebaseupdataFirevaseProduct(`products/${prams.id}`, data);
         toast.success("Update is successful");
      } else {
         setDataToFirebase("products", data)
      }


      //  dispatch(setProduct(data));
      reset();
      nagivet('/dasbord/index-category');


   };

   useEffect(() => {
      async function getdata() {
         let res = await getFirebaseDataForEditeProduct("products/" + prams.id)
         reset(res);
      }

      if (prams.id) {
         getdata();
      }

      else {
         reset({
            defaultValues: {
               productName: "",
               productPrice: "",
               productImageURL: "",
               ProductCaregory: ""

            },
         })
      }
   }, [prams]);
   return (
      <>

         <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
               <h1 className="text-2xl font-bold text-center mb-6">
                  {prams.id ? "Edd New Product" : " Add New Product"}</h1>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                     <label
                        htmlFor="productName"
                        className="block text-gray-700 font-medium mb-2"
                     >
                        Product Name
                     </label>
                     <input
                        type="text"
                        id="productName"
                        name="productName"


                        placeholder="Enter product name"
                        className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        {...register('productName')}
                     />
                     {errors.productName && <span className="text-red-500">{errors.productName?.message}</span>}
                  </div>
                  <div className="mb-4">
                     <label
                        htmlFor="productPrice"
                        className="block text-gray-700 font-medium mb-2"
                     >
                        Product Price
                     </label>
                     <input
                        type="number"
                        id="productPrice"
                        name="productPrice"


                        placeholder="Enter product price"
                        className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"

                        {...register('productPrice')}
                     />
                     {errors.productPrice && <span className="text-red-500">{errors.productPrice?.message}</span>}
                  </div>



                  <div className="mb-4">
                     <label
                        htmlFor="ProductCaregory"
                        className="block text-gray-700 font-medium mb-2"
                     >
                        Product Caregory
                     </label>
                     <select
                        {...register("ProductCaregory")}
                        id="ProductCaregory"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     >

                        {categories?.map(item => (
                           <option key={item.id} value={item.id}>
                              {item.CategoryName}
                          </option>
                           
                        ))}
                        
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                     </select>
                     {errors.ProductCaregory && (
                        <span className="text-red-500">{errors.ProductCaregory?.message}</span>
                     )}
                  </div>


                  

                  <div className="mb-6">
                     <label
                        htmlFor="productImageURL"
                        className="block text-gray-700 font-medium mb-2"
                     >
                        Product Image URL
                     </label>
                     <input
                        type="url"
                        id="productImageURL"
                        name="productImageURL"

                        placeholder="Enter product image URL"
                        className="w-full border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"

                        {...register('productImageURL')}
                     />
                     {errors.productImageURL && <span className="text-red-500">{errors.productImageURL?.message}</span>}
                  </div>
                  <button
                     type="submit"
                     className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
                  >
                     {prams.id ? "update Product" : "  Submit Product"}

                  </button>
               </form>
            </div>
         </div>


      </>
   );
}

export default CreatProdut;
