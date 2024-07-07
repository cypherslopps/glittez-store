import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const errorEntries = (error, setErrors) => {
  // const message = errorResponse?.message;
  const fields = error?.errors ?? error;
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

export const getDate = (time) => {
  const date = new Date(time);
  const month = date.getMonth();
  const day = date.getDay();
  const currentDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getHours()}` : date.getHours();
  const seconds = date.getSeconds() < 10 ? `0${date.getHours()}` : date.getHours();
  
  return {
    month: getMonth(month),
    day: getDay(day),
    currentDay,
    year,
    hours,
    minutes,
    seconds
  }
}

export const getMonth = (month) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return months[month]
}

export const getDay = (day) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  return days[day];
}

export const removeDuplicateItemsFromArray = (array) => {
  return array.filter((item, idx) => array.findIndex(c => c === item) === idx);
}