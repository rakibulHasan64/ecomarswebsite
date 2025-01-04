import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";

function Navber() {
   const { carts } = useSelector((store) => store.carts);
   const navget = useNavigate();
   const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle state for mobile menu

   const toggleMenu = () => setIsMenuOpen(!isMenuOpen); // Toggle menu visibility

   return (
      <>
         <header className="bg-blue-900 text-white">
            {/* Top Bar */}
            <div className="container mx-auto flex justify-between items-center py-2 px-4">
               <div className="flex items-center space-x-4 text-xs md:text-sm">
                  <p>+88012 3456 7894</p>
                  <p>support@ui-lib.com</p>
               </div>
               <div className="flex items-center space-x-4 text-xs md:text-sm">
                  <a href="#" className="hover:underline">
                     Theme FAQs
                  </a>
                  <a href="#" className="hover:underline">
                     Need Help?
                  </a>
               </div>
            </div>

            {/* Main Navigation */}
            <div className="bg-white shadow">
               <div className="container mx-auto flex justify-between items-center py-4 px-4">
                  {/* Logo */}
                  <h1
                     onClick={() => navget("/")}
                     className="text-red-500 font-bold text-lg md:text-2xl cursor-pointer"
                  >
                     divineshop
                  </h1>

                  {/* Desktop Search */}
                  <div className="hidden md:flex items-center flex-grow mx-4">
                     <div className="relative w-full">
                        <input
                           type="text"
                           placeholder="Search and hit enter..."
                           className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <select className="absolute top-0 right-0 h-full border-l border-gray-300 text-black px-4 text-sm">
                           <option>All Categories</option>
                           <option>Category 1</option>
                           <option>Category 2</option>
                        </select>
                     </div>
                  </div>

                  {/* Desktop Menu */}
                  <div className="hidden md:flex items-center space-x-4 text-sm text-black">
                     {["Home", "Shop", "Pages", "User Account", "Vendor Account", "Track My Orders", "Back to Demos"].map(
                        (item, index) => (
                           <a href="#" key={index} className="hover:underline">
                              {item}
                           </a>
                        )
                     )}

                     {/* Cart Button */}
                     <button
                        onClick={() => navget("/card-details")}
                        className="relative text-gray-700 hover:text-black"
                     >
                        <svg
                           className="w-6 h-6 text-gray-800 dark:text-white"
                           aria-hidden="true"
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                        >
                           <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                           />
                        </svg>
                        <span className="absolute top-[-10px] right-[-8px] bg-red-500 text-white text-xs rounded-full px-1">
                           {carts ? carts.length : 0}
                        </span>
                     </button>
                  </div>

                  {/* Mobile Menu Button */}
                  <button
                     onClick={toggleMenu}
                     className="block md:hidden text-black"
                  >
                     <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h16M4 18h16"
                        />
                     </svg>
                  </button>
               </div>
            </div>
         </header>

         {/* Mobile Menu */}
         {isMenuOpen && (
            <div className="bg-white text-black py-2 mx-auto text-center ">
               {["Home", "Shop", "Pages", "User Account", "Vendor Account", "Track My Orders", "Back to Demos"].map(
                  (item, index) => (
                     <a
                        href="#"
                        key={index}
                        className="block px-4 py-2 text-sm hover:bg-gray-200 hover:text-black"
                     >
                        {item}
                     </a>
                     
                  )
               )}

               <button
                  onClick={() => navget("/card-details")}
                  className=" relative text-gray-700 hover:text-black mt-4"
               >
                  <svg
                     className="w-6 h-6 text-gray-800 dark:text-white"
                     aria-hidden="true"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                  >
                     <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                     />
                  </svg>
                  <span className="absolute top-[-10px] right-[-8px] bg-red-500 text-white text-xs rounded-full px-1">
                     {carts ? carts.length : 0}
                  </span>
               </button>
            </div>
         )}
      </>
   );
}

export default Navber;
