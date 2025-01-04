/* eslint-disable react/prop-types */


function Popup({ product, onClose, onFavorite }) {
   const { productImageURL, productName, productPrice, productCategory,isFavorite } = product;


   return (
      <>
         <div className="w-full h-screen bg-black/60 fixed top-0 left-0 z-50">
            <div className="max-w-screen-md p-6 bg-white border w-full mx-auto mt-20 sm:mt-[100px] flex flex-col sm:flex-row gap-3 items-center sm:items-start relative">
               {/* Close Button */}
               <div
                  className="absolute top-4 right-4 cursor-pointer"
                  onClick={onClose}
               >
                  <svg
                     className="w-9 h-9 text-gray-800 dark:text-white"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                     strokeWidth="2"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                     />
                  </svg>
               </div>

               {/* Product Image */}
               <div className="w-full sm:w-1/2">
                  <img
                     className="w-full object-cover rounded-lg"
                     src={productImageURL}
                     alt={productName}
                  />
               </div>

               {/* Product Details */}
               <div className="w-full sm:w-1/2 sm:ml-6 mt-4 sm:mt-0">
                  <h2 className="text-2xl sm:text-3xl font-semibold">{productName}</h2>
                  <span className="text-red-600 text-sm sm:text-base">{productCategory}</span>
                  <p className="mt-3 text-base sm:text-lg font-semibold">Price: {productPrice}</p>

                  {/* Favorite and Button Section */}
                  <div className="flex items-center mt-2">
                     <div className="cursor-pointer">
                        {!isFavorite ? (
                           <svg
                              onClick={() => onFavorite()}
                              className="cursor-pointer w-6 h-6 text-red-600 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="none"
                              viewBox="0 0 24 24"
                           >
                              <path
                                 stroke="currentColor"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth="2"
                                 d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                              />
                           </svg>
                        ) : (
                           <svg
                              onClick={() => onFavorite()}
                              className="cursor-pointer w-6 h-6 text-red-600 dark:text-white"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                           >
                              <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
                           </svg>
                        )}
                     </div>

                     <button
                        disabled={true}
                        className="bg-red-600 rounded text-white py-2 px-2 inline-block ml-3 disabled:bg-red-200"
                     >
                        <svg
                           className="w-6 h-6 text-white"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           strokeWidth="2"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                           />
                        </svg>
                     </button>
                  </div>
               </div>
            </div>
         </div>

      </>
   );
}

export default Popup;
