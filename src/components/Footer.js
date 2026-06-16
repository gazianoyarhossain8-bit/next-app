import Link from "next/link";
export default function Footer() {
    return (
      <footer className="bg-black text-white text-center py-6">
        <h2 className="text-xl font-bold">
          MyWebsite
        </h2>
  
        <p className="mt-2">admin
          © 2026 All Rights Reserved
        </p>
        <div className="mt-4">
          <Link href="/admin/dashboard" className="mx-2 hover:underline border-3 
          hover:bg-gray-500 rounded-lg">
            Admin dashboard
          </Link>
        </div>
        <Link href="/products" className="mx-2 hover:underline">
          Products
          </Link>
      </footer>
    );
  }


