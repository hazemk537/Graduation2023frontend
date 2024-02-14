import image1 from "../images/image1.jpg" ;
import image2 from "../images/image2.jpg" ;
import image3 from "../images/image3.jpg" ;
import image4 from "../images/image4.jpg" ;
import image5 from "../images/image5.jpg" ;
import image6 from "../images/image6.jpg" ;
import image7 from "../images/image7.jpeg" ;
import image8 from "../images/image8.jpeg" ;
import {motion} from "framer-motion" ;
import {useRef , useEffect , useState} from "react" ;


const images =  [image1 , image2 , image3 , image4 , image5 , image6  , image7 , image8] ; 








function Carousel() {
  const [width , setWidth] = useState(0) ;
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth , carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  } , []) ;

  return (
    <div ref = {carousel} className = "App" whileTap = {{ cursor : "grabbing"}} >
      <motion.div className = "carousel">
        <motion.div drag = "x" dragconstraints = {{right : 0  , left : -width}} className = "inner-carousel">
          {images.map(image => {
            return (
              <motion.div className = "item">
                < img  src = {image} alt = "" />
              </motion.div>
            )

          })}
        </motion.div>


      </motion.div>
    </div>
  );
}

export default Carousel;