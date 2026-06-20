export default async function ProductDetails({ params }) { 
     const { id } = await params; 
      const product = await getProduct(id); 
       return (   
         <div>     
             <img src={product.image} alt={product.title} width={300} />   
             <h1>{product.title}</h1>    
     <p>{product.description}</p>      <h2>${product.price}</h2>  
       </div> 
       
    );
}
export async function getProduct(id) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await res.json();
    return product;
}