import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { updateProductFavorite } from "../../../../../futer/poduct/poductSlice";

function ProductSetions() {

   const { products } = useSelector((store) => store.products);
   const { categories } = useSelector(store => store.categories);

   const despach = useDispatch();

   const updateProduct = products.map(item => {
      let findCat = categories?.find(d => d.id == item.ProductCaregory);

      return {
         ...item,
         ProductCaregory: findCat?.CategoryName || "Unknown not Category",
      };
   });

   const handleFavorite = (key) => {
      let newProductList = products.map(product => {
         if (product.id === key) {
            return {
               ...product,
               isFavorite: !product.isFavorite
            }
         }
         return product;
      });

      despach(updateProductFavorite(newProductList));
   };

   return (
      <div className="py-8 bg-[#F6F9FC]">
         <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {updateProduct.map(product => (
               <ProductItem key={product.id} product={product} onFavorite={handleFavorite} />
            ))}
         </div>
      </div>
   );
}

export default ProductSetions;
