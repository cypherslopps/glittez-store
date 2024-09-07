import axios from '@/lib/axios';
import { removeDuplicateItemsFromArray } from '@/lib/utils';
import { useEffect, useState } from 'react'
import { toast } from 'sonner';

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
    if (slug) {
      (async () => {
        try {
          setIsLoading(true);
          const request = await axios(`/products/${slug}`);
          const response = request.data;
          setProduct(response);
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

export const useSkus = (productSlug) => {
  const [skus, setSkus] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (productSlug) {
      (async () => {
        try {
          setIsLoading(true);
          const { data } = await axios(`/skus/${productSlug}/variants`);
          setSkus(prev => ([
            ...prev,
            ...data
          ]));
        } catch (err) {
          toast("There was an error fetching SKUs");
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [productSlug]);

  return {
    productSKUs: skus,
    isProductSkusLoading: isLoading
  }
}

export const useSku = (skuCode) => {
  const [sku, setSku] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (skuCode) {
      (async () => {
        try {
          setIsLoading(true);
          const { data } = await axios(`/skus/${skuCode}`);
          setSku(prev => ({
            ...prev,
            ...data
          }));
        } catch (err) {
          toast("There was an error fetching SKU");
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [skuCode]);

  return {
    productSKU: sku,
    isProductSkuLoading: isLoading
  }
}