import Slider from "react-slick";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";

function Categorise() {
   const { categories } = useSelector((store) => store.categories);

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
         {
            breakpoint: 1024, 
            settings: {
               slidesToShow: 3, 
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 768, 
            settings: {
               slidesToShow: 2, 
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 480, 
            settings: {
               slidesToShow: 1, 
               slidesToScroll: 1,
            },
         },
      ],
   };

   return (
      <div className="py-8 container mx-auto">
         <Slider {...settings}>
            {categories.map((item) => (
               <CategoryItem key={item.id} category={item} />
            ))}
         </Slider>
      </div>
   );
}

export default Categorise;
