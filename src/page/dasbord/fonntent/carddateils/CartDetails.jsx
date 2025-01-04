import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import SingleCartList from "./SingleCartList";
import { toast } from "react-toastify";
import { db } from "../../../../database/firebaseUlites";
import { ref, remove } from "firebase/database";


function CartDetails() {

   const { user } = useSelector(store => store.auth);
   const { carts } = useSelector((store) => store.carts);
   const { products } = useSelector((store) => store.products);

   const updateCarts = carts.map((cart) => {
      let findProduct = products.find(
         (product) => product.id === cart.productId
      );
      return {
         cartId: cart.id,
         productId: cart.productId,
         productName: findProduct.productName,
         productImage: findProduct.productImageUrl,
         productPrice: findProduct.productPrice,
         quantity: cart.quantity,
      };
   });


   let totalPrice = updateCarts.reduce((total, carts) => {
      return total + (carts.productPrice * carts.quantity)
   }, 0);

      const handleDelete = () => {
         remove(ref(db, `carts/${user.id}`));
   
         toast.success("Product remove from cart");
      };
   
   


   if (!user) {
      return <Navigate to={"/logine"} />
   }

   return (
      <>
         <div className="max-w-md mx-auto py-6">
            <h1 className="text-4xl font-bold mb-4 text-center">Hello {user.name}, Your Cart Details</h1>
            <ul>

               <ul>
                  {updateCarts.map((cart) => (
                     <SingleCartList key={cart.cartId} cart={cart} />
                  ))}
               </ul>
               
         
            </ul>
            <button
               onClick={handleDelete}
               className="inline-block px-6 py-2 bg-red-700 text-white mt-6 mb-6 mx-auto">Checkout Now And pay {totalPrice}</button>

         </div>
         
      </>
   );
}

export default CartDetails;