import { useSelector } from "react-redux";
import Table from "../../../copmnet/Table";
import { useNavigate } from "react-router";


function IndexProdut() {

  const { products } = useSelector((store) => store.products);
  const { categories } = useSelector(store => store.categories);
  console.log(categories);
  

  const nagvite = useNavigate();

  const updateProduct = products.map(item => {
    let findCat = categories?.find(d => d.id == item.ProductCaregory);

    return {
      ...item,
      ProductCaregory: findCat?.CategoryName || "Unknown Category",
    };
  });


  const handleEdite = (data) => {
    nagvite(`/dasbord/Product/${data.id}`)
  }
  
  return (
    <>
      
      <div className="">

        <h1 className="text-2xl font-bold text-center mb-6">Our Product</h1>

        <Table tableContent={updateProduct}
          onAdd={() => nagvite("/dasbord/Product")}
          onEdit={handleEdite}

        />
      </div>
    
    </>
  )


  



};


export default IndexProdut;