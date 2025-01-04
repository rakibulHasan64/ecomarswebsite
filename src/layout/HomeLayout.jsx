import { Outlet } from "react-router";
import Navber from "../copmnet/Navber";
import Footer from "../copmnet/Footer";
import { useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../database/firebaseUlites";
import { getCategories } from "../futer/catagory/catagorySlice";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../futer/poduct/poductSlice";
import { getCarts } from "../page/dasbord/cart/cartSlice";




function HomeLayout() {


  const despach = useDispatch();
  
  const { user } = useSelector((store) => store.auth);


     useEffect(() => {
   
       const categoryRef = ref(db, "categories");
       const porductRef = ref(db, "products");
       
         // set  Category to redux for getting this content globally
   
       const disableCtegory= onValue(categoryRef, (snapshot) => {
                 
         const updateCategory = [];
       
         snapshot.forEach(item => {
                 
           updateCategory.push({
               id: item.key,
             ...item.val(),
               isFavorite: false,
           });
   
         })
         
           despach(getCategories(updateCategory));   
           
       });
   
       // set  product to redux for getting this content globally
   
       const disableProduct = onValue(porductRef, (snapshot) => {
   
         const updateProduct = [];
   
         snapshot.forEach(item => {
   
           updateProduct.push({
             id: item.key,
             ...item.val(),
           });
   
         })
   
         despach(getProducts(updateProduct));
   
       });


       if (user) {
         
         
         const starCountRef = ref(db, `carts/${user.id}`);
         
         const disableCart=onValue(starCountRef, (snapshot) => {

           const updateCartList = [];

           snapshot.forEach(item => {
             updateCartList.push({
               id: item.key,
               ...item.val(),
             });
           })

        
           despach(getCarts(updateCartList))
         });
        
       }
   
       return () => {
         disableCtegory();
         disableProduct();

       }
     
     }, [despach]);
   
   
   return (
      <>
         <Navber />
      
         <Outlet /> 
         <Footer />
       
         
      </>
   );
}

export default HomeLayout;