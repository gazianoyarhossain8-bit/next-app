import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600
     min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-6">
        Welcome to Our Store
      </h1>


      <Link href="/products" className="px-6 py-3
       bg-white text-blue-600 font-semibold rounded-lg shadow-md 
        hover:bg-green-500 text-blue-600 transition duration-300">
        start shopping
      </Link>
    </div>
  );
}