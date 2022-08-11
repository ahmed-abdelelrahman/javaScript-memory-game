const url = 'https://course-api.com/javascript-store-products';
const productsDOM = document.querySelector('.products-center');
 

const fetchProducts = async () => {
//   productsDOM.innerHTML = '<div class="loading"></div>';
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    productsDOM.innerHTML = '<p class="error">there was an error</p>';
  }
};
const displayProducts=(products)=>{
    const productList=
    products.map(product=>{
        const{id}=product
        const {name,price}=product.fields
        const {url}=product.fields.image[0]
        console.log(url)
        return`
          
         <a class="single-product" href="product.html?id=${id}&name=john&age=25">
            <img src="${url}">
            <footer>
              <h5 class="name">${name}</h5>
              <span class="price">${price}</span>
            </footer>
          </a>
          
        `
        
    }).join("")
    productsDOM.innerHTML = ` <div class="products-container">
    ${productList}
     
   </div>`;
    
}

const init=async()=>{
    const products=await fetchProducts()
    displayProducts(products)
    
   
}
window.addEventListener('DOMContentLoaded',init)

