import axios from '@/lib/axios';
import { allProducts } from '@/lib/constants'
import { removeDuplicateItemsFromArray } from '@/lib/utils';
import { useEffect, useState } from 'react'

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [productColors, setProductColors] = useState([]);
  const [productSizes, setProductSizes] = useState([]);
  const [productPrices, setProductPrices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const request = await axios.get("/products");
        const response = request.data;
        let colors = response.map(product => product.attributes.color).flat();
        let sizes = response.map(product => product.attributes.size).flat();
        let prices = response.map(product => product.sku[0].price).flat();

        // Remove duplicate values
        colors = removeDuplicateItemsFromArray(colors);
        sizes = removeDuplicateItemsFromArray(sizes);
        prices = removeDuplicateItemsFromArray(prices);

        setProducts(prev => ([
          ...prev,
          ...response
        ]));

        setProductColors(prev => ([
          ...prev,
          ...colors
        ]));

        setProductSizes(prev => ([
          ...prev,
          ...sizes
        ]));

        setProductPrices(prev => ([
          ...prev,
          ...prices
        ]))
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { 
    products,
    productColors,
    productPrices,
    productSizes,
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