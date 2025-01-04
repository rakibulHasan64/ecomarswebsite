/* eslint-disable react/prop-types */

import { ref, remove, set } from "firebase/database";
import { db } from "../../../../database/firebaseUlites";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


// eslint-disable-next-line react/prop-types
function SingleCartList({ cart }) {
    


   const { user } = useSelector((store) => store.auth);

   const {
      cartId,
      productId,
      productName,
      productImage,
      productPrice,
      quantity,
   } = cart;

//   delete data firvase
   const handleDelete = () => {
      remove(ref(db, `carts/${user.id}/${cartId}`));

      toast.success("Product remove from cart");
   };
   //  product plause
   const handlePlause = () => {
      set(ref(db, `carts/${user.id}/${cartId}`), {
         productId,
         quantity: quantity + 1,
      });
   }


   const handleMinus = () => {
      set(ref(db, `carts/${user.id}/${cartId}`), {
         productId,
         quantity: quantity == 1 ? 1 : quantity - 1,
      });
   }


   return (
      <>
         <li className="bg-gray-200 p-2 mb-2 border">
            <div className="flex items-center relative">
               <button
                  onClick={handleDelete}
                  className="absolute top-[-5px] right-[-3px] bg-red-600 z-10"
                  aria-label="Remove item from cart"
                  title="Remove item">
                  <svg
                     className="w-5 h-5 text-gray-800 dark:text-white"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     fill="none"
                     viewBox="0 0 24 24">
                     <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18 17.94 6M18 18 6.06 6" />
                  </svg>
               </button>

               <img className="w-[80px]" src={productImage} alt="" />
               <div className="ml-2 ">
                  <h3 className="font-semibold">{productName}</h3>
                  <span className="text-blue-600 font-bold">price:$ {productPrice} <br /> Total: ${productPrice * quantity}</span>
               </div>
               <div className="flex gap-2 ml-auto">
                  {/* মাইনাস বাটন */}
                  <button
                     onClick={() => quantity > 1 && handleMinus()} 
                     disabled={quantity <= 1} 
                     className="w-6 h-6 rounded-sm flex justify-center items-center bg-blue-600 text-white disabled:bg-blue-400">
                     <svg
                        className="w-4 h-4 text-white dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M5 12h14" />
                     </svg>
                  </button>
                  {/* কোয়ান্টিটি দেখানোর অংশ */}
                  <span>{quantity}</span>
                  {/* প্লাস বাটন */}
                  <button
                     onClick={handlePlause} 
                     className="w-6 h-6 rounded-sm flex justify-center items-center bg-blue-600 text-white">
                     <svg
                        className="w-4 h-4 text-white dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24">
                        <path
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M5 12h14m-7 7V5" />
                     </svg>
                  </button>
               </div>


            </div>

         </li>
         
      </>
   );
}

export default SingleCartList;