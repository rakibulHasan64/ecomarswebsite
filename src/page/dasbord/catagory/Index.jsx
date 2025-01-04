 import { useNavigate } from "react-router";
import Table from "../../../copmnet/Table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { removeDataFirvase } from "../../../database/firebaseUlites";
import Modal from "../../../copmnet/Modal";



export function Indexcategory() {

   const { categories } = useSelector((state) => state.categories);
  const navigate = useNavigate();
  const despach = useDispatch()
  const [deleteCategoryId, setDeleteCategoryId] = useState(false);

   const handleAdd = () => {
     navigate("/dasbord/Product")
   }
  const handleADelete = () => {
    if (deleteCategoryId) {
        async function deletecat() {
          const del = await removeDataFirvase('categories/' + deleteCategoryId);
          //  despach(deleteCategory(deleteCategoryId))
        }
        deletecat();
      setDeleteCategoryId(false);
     }
     
     
  }
    
  const handleEdite = (data) => {
    navigate(`/dasbord/Product/${data.id}`)
  }
  
  useEffect(() => {
    // despach(getCategories());
  },[despach])
  return (
    <>
      
      <h1 className="text-3xl font-semibold mb-4">Our category</h1>
      <Table tableContent={categories}
        onAdd={handleAdd}
        onDelete={(id) => setDeleteCategoryId(id)}
        onEdit={handleEdite} /> 
      {deleteCategoryId && <Modal onDelete={handleADelete} oncolose={()=> setDeleteCategoryId(!deleteCategoryId)} />}
      
    </>
  );
}

