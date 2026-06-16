"use client"
import React from 'react'

function page() {
  const [users, setUsers] = React.useState([]);
  const[products, setProducts] = React.useState("");

  async function getUsers() {
    const res = await fetch("/api/users");
    const data = await res.json();
    setUsers(data);
  }

  async function getProducts() {
    const res = await fetch("/api/products");
    const data = await res.json();
    setProducts(data);
  }

  React.useEffect(() => {
    getUsers();
    getProducts();
  }, []);

  return (
    <div className='bg-gradient-to-r from-blue-800 to-green-700 min-h-screen flex flex-col items-center justify-center text-white'>
       <h1 className='bg-black'>name of users</h1>
      {users.map((u) => (
        <div key={u._id}className='bg-white h-16 w-52 text-black flex flex-col'>
         
          <p> Name:{u.name}</p>
          <p>Email:{u.email}</p>
        </div>
      ))}
      {products && (
        <div className="bg-blue-100 text-blue-800 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-bold mb-2">Products:</h3>
          <p>{products.message}</p>
        </div>
      )}
    </div>
  )
}

export default page