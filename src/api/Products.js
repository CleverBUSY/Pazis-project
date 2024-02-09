import axios from "../axios";

class Products {
    async getProducts(){
        const res = await axios.get('/products').then(res => res.data);
        console.log('Received products:', res);
        return res;
      
        // console.log('Processed products with category:', productsWithCategory);
        }
    // Остальные методы
}

export default new Products();
