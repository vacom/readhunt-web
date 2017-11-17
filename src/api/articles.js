//Utils
import {apiUrl} from '../utils/Constants';
/**
 * ARTICLES API ENDPOINTS
 */

 //Gets all the articles from DB
 const getArticles = async () => {
    const res = await fetch(`${apiUrl}/articles`);
    const data = await res.json();
    return data;
 }

 export {
     getArticles,
 }
