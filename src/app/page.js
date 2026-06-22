import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen flex items-center justify-center animate-pulse">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

        {/* Left Side */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to Our Store
          </h1>

          <p className="text-white text-lg mb-6">
            Discover amazing products at the best prices.
          </p>

          <Link
            href="/products"
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-green-500 hover:text-white transition"
          >
            Start Shopping
          </Link>
        </div>

        {/* Right Side Image */}
        <div className="mt-10 md:mt-0">
          <Image
            src="/hero.png"
            alt="Shopping"
            width={300}
            height={300}
            className="animate-none"
          />
        </div>

      </div>
    </div>
  );
}