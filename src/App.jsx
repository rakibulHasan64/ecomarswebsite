import { Route, Routes } from "react-router";
import Dashboard from "./layout/Dashboard";
import Error from "./Error";
import HomeDashbord from "./page/dasbord/home/Index";
import CreatProdut from "./page/dasbord/product/CreatPo";
import Login from "./page/dasbord/auth/Login";
import Regster from "./page/dasbord/auth/Regster";
import Privet from "./page/dasbord/auth/Privet";
//  import Category from "./page/dasbord/catagory/Category";
//  import { Indexcategory } from "./page/dasbord/catagory/Index";
import CreatCategory from "./page/dasbord/catagory/Creat";
import IndexProdut from "./page/dasbord/product/Index";
import HomeLayout from "./layout/HomeLayout";
import HomeIndex from "./page/dasbord/fonntent/Home/Index";
import SingleProductIndex from "./page/dasbord/fonntent/product/Index";
import CartDetails from "./page/dasbord/fonntent/carddateils/CartDetails";

function App() {
  return (
    <>
      <Routes>
           
        
        <Route path="/" element={<HomeLayout />} >
          <Route index element={<HomeIndex />} />
          <Route path="single-product/:id" element={<SingleProductIndex />} />
          <Route path="card-details" element={<CartDetails />} />

        </Route>

        <Route path="logine" element={<Login />} />
        <Route path="reghter" element={<Regster />} />
        {/* layot fontentPage */}
      

        <Route element={<Privet />}>
          <Route path="dasbord" element={<Dashboard />}>
            <Route index element={<HomeDashbord />} />
            {/* *****************catagory************* */}
            <Route path="index-category" element={<CreatCategory />} />
            {/* <Route path="itemCatagory" element={<Category />} /> */}
            <Route path="Category" element={<CreatCategory />} />
            <Route path="edite-catagory/:id" element={<CreatCategory />} />
            {/* *************product************ */}
            <Route path="index-products" element={<IndexProdut />} />
            <Route path="Product" element={<CreatProdut />} />
            <Route path="Product/:id" element={<CreatProdut />} />
            {/* {error page} */}
            <Route path="*" element={<Error />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
