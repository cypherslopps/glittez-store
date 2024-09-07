import axios from '@/lib/axios';
import { useEffect, useState } from 'react'
import { toast } from 'sonner';

export const useCategories = () => {
  const [productCategories, setProductCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState({});

  useEffect(() => {
    if (slug) {
      (async () => {
        try {
          setIsLoading(true);
          const request = await axios(`/categories/${slug}`);
          const response = request.data;
          setCategory(prev => ({
            ...prev,
            ...response
          }));
        } catch (err) {
          toast("There was an error fetching category");
        } finally {
          setIsLoading(false)
        }
      })();
    }
  }, [slug]);

  return {
    category,
    isCategoryLoading: isLoading
  }
}

export const useSubCategories = () => {
  const [isLoading, setIsLoading] = useState(false);
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
  const [productSubCategories, setProductSubCategories] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (slug) {
      (async () => {
        try {
          setIsLoading(true);
          const request = await axios(`/subcategories/${slug}`);
          const response = request.data;
          setProductSubCategories(prev => ({
            ...prev,
            ...response
          }));
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false)
        }
      })();
    }
  }, [slug]);

  return {
    productSubCategories,
    isProductsSubCategoriesLoading: isLoading
  }
}