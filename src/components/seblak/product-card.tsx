import { Plus } from "lucide-react";
import { Badge, Stars, btnSmall } from "./ui";
import { formatIDR, type Product } from "../../data/seblak";
import { useCart } from "../../lib/seblak-cart";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="flex h-full flex-col border border-border bg-card">
      <div className="relative">
        <img
          src={product.image}
          alt={`Foto ${product.name}`}
          loading="lazy"
          width={1200}
          height={900}
          className="aspect-[4/3] w-full object-cover"
        />
        <div className="absolute top-0 left-0 flex gap-1">
          {product.isBestSeller && <Badge tone="dark">Bestseller</Badge>}
          {product.isPromotion && <Badge>Promo</Badge>}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-[18px] font-bold tracking-tight">{product.name}</h3>
        <p className="mt-1 text-[15px] leading-snug text-muted-foreground">{product.description}</p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-[20px] font-extrabold">{formatIDR(product.price)}</p>
          <Stars rating={product.rating} />
        </div>
        <div className="mt-4 flex-1" />
        <button
          type="button"
          disabled={!product.isAvailable}
          onClick={() =>
            addItem({
              id: product.id,
              name: product.name,
              toppings: [],
              extras: [],
              notes: "",
              quantity: 1,
              unitPrice: product.price,
            })
          }
          className={`${btnSmall} w-full`}
        >
          <Plus className="h-4 w-4" aria-hidden="true" />
          {product.isAvailable ? "Tambah" : "Habis"}
        </button>
      </div>
    </article>
  );
}
