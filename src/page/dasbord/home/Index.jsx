
import { useSelector } from "react-redux";

export default function HomeDashbord() {
  const categories = useSelector((state) => state.categories.categories || []);
  const products = useSelector((state) => state.products.products || []);
  console.log(categories);
  

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-1 sm:col-span-1 lg:col-span-1 border shadow-md p-3 rounded">
          <span className="text-xl sm:text-2xl font-semibold">Total Products</span>
          <h2 className="text-2xl font-semibold">
            {products.length ? products.length : "Loading..."}
          </h2>
        </div>

        <div className="col-span-1 sm:col-span-1 lg:col-span-1 border shadow-md p-3 rounded">
          <span className="text-xl sm:text-2xl font-semibold">Total Categories</span>
          <h2 className="text-2xl font-semibold">
            {categories.length ? categories.length : "Loading..."}
          </h2>
        </div>
      </div>

    </>
  );
}
