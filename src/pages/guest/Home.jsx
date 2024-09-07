import { ProductCollection, SEO } from '@/components'
import { useProducts } from '@/hooks/useProducts'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect } from 'react';

const Home = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const { products, isLoading } = useProducts();

  useEffect(() => {    
    if (emblaApi) {      
      console.log(emblaApi.slideNodes());
    }  
  }, [emblaApi])

  return (
    <>
      <SEO 
        title="Glittez"
        description="Your destination for your unlimited needs"
      />

      <section className='h-[25vh] xsl:h-[40vh] md:h-[80vh] rounded-lg p-5 bg-gray-200/60'>
        <div className="embla" ref={emblaRef}>        
          <div className="embla__container">        
            <div className="embla__slide">Slide 1</div>        
            <div className="embla__slide">Slide 2</div>        
            <div className="embla__slide">Slide 3</div>      
          </div>    
        </div>
      </section>

      <ProductCollection 
        title="Recommended products"
        products={products} 
        isLoading={isLoading}
      />
    </>
  )
}

export default Home