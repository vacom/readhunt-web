//Utils
import {apiUrl} from '../utils/Constants';
/**
 * CATEGORIES API ENDPOINTS
 */

 //Gets all the categories
 const getCategories = async () => {
    const res = await fetch(`${apiUrl}/categories`);
    const data = await res.json();
    return data;
 }

  //Gets category by id
  const getCategory = async (id) => {
    const res = await fetch(`${apiUrl}/category/${id}`);
    const data = await res.json();
    return data;
 }

 export {
    getCategories,
    getCategory,
 }
