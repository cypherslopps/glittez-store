import axios from '@/lib/axios';
import { useEffect, useState } from 'react'

export const useCategories = () => {
  const [productCategories, setProductCategories] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const request = await axios("/categories");
        const response = request.data;
        setProductCategories(prev => ([
          ...prev,
          ...response
        ]));
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false)
      }
    })();
  }, []);

  return {
    productCategories,
    isProductsCategoriesLoading: isLoading
  }
}

export const useSingleCategory = (slug) => {
  const [productCategories, setProductCategories] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    if (slug) {
      (async () => {
        try {
          setIsLoading(true);
          const request = await axios(`/categories/${slug}`);
          const response = request.data;
          setProductCategories(prev => ([
            ...prev,
            ...response
          ]));
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false)
        }
      })();
    }
  }, [slug]);

  return {
    productCategories,
    isProductsCategoriesLoading: isLoading
  }
}

export const useSubCategories = () => {
  const [isLoading, setIsLoading] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const request = await axios("/subcategories");
        const response = request.data;
        setSubCategories(prev => ([
          ...prev,
          ...response
        ]));
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false)
      }
    })();
  }, []);

  return {
    subCategories,
    isSubCategoriesLoading: isLoading
  }
}

export const useSingleSubCategory = (slug) => {
  const [productCategories, setProductCategories] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    if (slug) {
      (async () => {
        try {
          setIsLoading(true);
          const request = await axios(`/subcategoris/${slug}`);
          const response = request.data;
          setProductCategories(prev => ([
            ...prev,
            ...response
          ]));
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false)
        }
      })();
    }
  }, [slug]);

  return {
    productCategories,
    isProductsCategoriesLoading: isLoading
  }
}