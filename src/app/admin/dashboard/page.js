"use client";

import { useState } from "react";

export default function AdminDashboard() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload Image
      const formData = new FormData();
      formData.append("image", image);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadRes.json();

      if (!uploadData.success) {
        alert("Image upload failed");
        return;
      }

      // Save Product
      const productRes = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price,
          image: uploadData.imageUrl,
          color,
          description,

        }),
      });

      const productData = await productRes.json();

      if (productData.success) {
        alert("Product Added Successfully");

        setName("");
        setPrice("");
        setImage(null);
        setColor("")
        setDescription("");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="border p-2 w-full"
          required
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
          className="border p-2 w-full"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setImage(e.target.files[0])
          }
          className="border p-2 w-full"
          required
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="border-2 w-full text-gray-700 placeholder:text-gray-400"
          required />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="border p-2 w-full"
          required
        />

        <button
          type="submit"
          className="bg-black text-white px-5 py-2"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}