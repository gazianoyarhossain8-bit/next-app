import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          ShopHub
        </Link>

        {/* Navigation Links */}
        <div className=" md:flex items-center gap-8">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link href="/products" className="hover:text-blue-600 transition">
            Products
          </Link>

          <Link href="/categories" className="hover:text-blue-600 transition">
            Categories
          </Link>

          <Link href="/cart" className="hover:text-blue-600 transition">
            Cart
          </Link>
        </div>

        {/* Search + Cart */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search products..."
            className="hidden md:block border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <Link
            href="/cart"
            className="relative text-xl"
          >
            🛒
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>

          <Link
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}