import { Link } from "react-router";
import Slider from "react-slick";
import BannerImg from "..//..//..//..//assets/banner1.png";

function SliderSction() {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
   };

   return (
      <>
         <Slider {...settings}>
            {/* First Slide */}
            <div className="bg-[#F6F9FC]">
               <div className="container m-auto pt-[50px] pb-[120px] grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                  <div className="w-full text-center sm:text-left">
                     <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold">
                        Fashionable <br /> Collection
                     </h3>
                     <p className="text-lg sm:text-xl mt-4">
                        Get free shipping on all orders over $99.00
                     </p>
                     <Link className="bg-red-500 text-white rounded py-3 px-6 inline-block mt-4">
                        Shop Now
                     </Link>
                  </div>

                  <div className="w-full text-center">
                     <img className="max-w-full mx-auto" src={BannerImg} alt="Fashion Collection" />
                  </div>
               </div>
            </div>

            {/* Second Slide */}
            <div className="bg-[#F6F9FC]">
               <div className="container m-auto pt-[120px] pb-[120px] grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
                  <div className="w-full text-center sm:text-left">
                     <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold">
                        Fashionable <br /> Collection
                     </h3>
                     <p className="text-lg sm:text-xl mt-4">
                        Get free shipping on all orders over $99.00
                     </p>
                     <Link className="bg-red-500 text-white rounded py-3 px-6 inline-block mt-4">
                        Shop Now
                     </Link>
                  </div>

                  <div className="w-full text-center">
                     <img className="max-w-full mx-auto" src={BannerImg} alt="Fashion Collection" />
                  </div>
               </div>
            </div>
         </Slider>
      </>
   );
}

export default SliderSction;
