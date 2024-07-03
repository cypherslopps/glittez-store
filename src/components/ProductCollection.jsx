import PropTypes from "prop-types";
import { useGSAP } from "@gsap/react";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import ProductCollectionItem from "./ProductCollectionItem";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const ProductCollection = ({ title, products=[], className }) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const containerRef = useRef(null);


  useGSAP(
    () => {
      const items = gsap.utils.toArray('.product-box');
      items.forEach((item) => {
        gsap.to(item, {
          y: 100,
          opacity: 0,
          duration: 1,
          yoyo: true,
          stagger: 0.4,
          ease: "bounce.in", 
          force3D: true        
        });

        if (inView) {
          gsap.to(item, {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: item,
              start: 'bottom bottom',
              end: 'top 20%',
              scrub: true,
              // markers: true,
            },
            stagger: 0.4
          }); 
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <div className={`py-7 ${title ? "space-y-2" : ""}`}>
      {title && (
        <h1 className="text-lg font-extrabold tracking-tight uppercase">{title}</h1>
      )}


      <div ref={ref}>
        <div 
          className={cn("rounded-sm grid grid-cols-5 gap-x-2 gap-y-2.5", className)}
          ref={containerRef}
        >
          {products.map((product, idx) => (
            <ProductCollectionItem 
              key={`${product.title}${idx}`}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

ProductCollection.propTypes = {
  title: PropTypes.string,
  products: PropTypes.array,
  className: PropTypes.string
}

export default ProductCollection