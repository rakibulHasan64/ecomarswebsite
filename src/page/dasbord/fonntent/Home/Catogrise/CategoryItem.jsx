/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
function CategoryItem({ category }) {


   const { CategoryName, CategoryImageURL
 } = category;


   return (
      <>

         <div className="bg-white mx-3 cursor-pointer">
            <div className="w-full text-center h-[120px] mt-3">
               <img className="max-w-[120px] mx-auto" src={CategoryImageURL} alt={CategoryName} />
            </div>
            <h4 className="border-t mt-2 text-lg font-semibold text-center py-2">{CategoryName}</h4>
         </div>


      </>
   );
}

export default CategoryItem;