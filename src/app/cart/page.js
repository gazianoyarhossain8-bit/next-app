import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function CartButton() {
  return (
    <div className="h-screen">
    <Link href="/cart" className="relative">
      <ShoppingCart size={40} />

      
    </Link>
    </div>
  );
}