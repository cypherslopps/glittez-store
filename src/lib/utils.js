import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const errorEntries = (error, setErrors) => {
  // const message = errorResponse?.message;
  const fields = error?.errors;
  const entries = Object.entries(fields);

  entries.map(([name, value]) => {
    setErrors(prev => ({
      ...prev,
      [name]: Array.isArray(value) ? value[0] : value
    }))
  });

  // toast(message);

  return error;
}

export const storeLastRoute = (route, e) => {
  e.preventDefault();
  window.history.pushState({}, undefined, route);
}