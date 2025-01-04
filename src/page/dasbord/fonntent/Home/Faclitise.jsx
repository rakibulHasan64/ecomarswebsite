import car from "../../../../assets/lock.png"
// import bang from "../../../../assets/bank.png"

function Faclitise() {
   return (
      <>
         <div className="py-8 container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {/* Card 1 */}
            <div className="p-3 border">
               <div className="flex">
                  <img src={car} alt="" />
                  <div className="ml-3">
                     <h4 className="text-lg font-bold mb-2">Fast Delivery</h4>
                     <span className="text-[#7DB79]">Start from $10</span>
                  </div>
               </div>
            </div>

            {/* Card 2 */}
            <div className="p-3 border">
               <div className="flex">
                  <img src={car} alt="" />
                  <div className="ml-3">
                     <h4 className="text-lg font-bold">Fast Delivery</h4>
                     <span className="text-[#7DB79]">Start from $10</span>
                  </div>
               </div>
            </div>

            {/* Card 3 */}
            <div className="p-3 border">
               <div className="flex">
                  <img src={car} alt="" />
                  <div className="ml-3">
                     <h4 className="text-lg font-bold">Fast Delivery</h4>
                     <span className="text-[#7DB79]">Start from $10</span>
                  </div>
               </div>
            </div>

            {/* Card 4 */}
            <div className="p-3 border">
               <div className="flex">
                  <img src={car} alt="" />
                  <div className="ml-3">
                     <h4 className="text-lg font-bold">Fast Delivery</h4>
                     <span className="text-[#7DB79]">Start from $10</span>
                  </div>
               </div>
            </div>

            {/* Card 5 */}
            <div className="p-3 border">
               <div className="flex">
                  <img src={car} alt="" />
                  <div className="ml-3">
                     <h4 className="text-lg font-bold">Fast Delivery</h4>
                     <span className="text-[#7DB79]">Start from $10</span>
                  </div>
               </div>
            </div>
         </div>

      </>
   );
}

export default Faclitise;