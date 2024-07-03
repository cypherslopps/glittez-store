import axios from '@/lib/axios';
import { allProducts } from '@/lib/constants'
import { useEffect, useState } from 'react'

export const useProducts = () => {
  const [products] = useState(allProducts);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const request = await axios.get("/api/products");
        const response = request.data;
        console.log(response);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { 
    products,
    isLoading 
  };
}

export const useSingleProduct = (slug) => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const singleProduct = allProducts.filter(product => product.slug === slug)[0];
    setProduct(singleProduct);

    if (slug) {
      (async () => {
        try {
          setIsLoading(true);
          const request = await axios(`/products/${slug}`);
          const response = request.data;
          console.log(response);
          const singleProduct = allProducts.filter(product => product.slug === slug);
          console.log(slug)
          setProduct(singleProduct);
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [slug])


  return {
    product,
    isLoading
  }
}