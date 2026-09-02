import seblakHero from "../assets/seblak-hero.jpg";
import ayamGeprek from "../assets/ayam-geprek.jpg";
import toppingsImg from "../assets/toppings.jpg";
import minumanImg from "../assets/minuman.jpg";

export const images = { seblakHero, ayamGeprek, toppingsImg, minumanImg };

/** Placeholder business data — replace with the real values. */
export const business = {
  name: "Seblak Prasmanan & Ayam Geprek Sereh",
  shortName: "Seblak Sereh",
  city: "Cilegon",
  address: "Jl. Raya Contoh No. 12, Cilegon, Banten",
  hours: "Setiap hari · 10.00 – 21.00 WIB",
  whatsapp: "6281234567890",
  whatsappLabel: "0812-3456-7890",
  deliveryNote: "Delivery radius 5 km · ongkir mulai Rp5.000",
  pickupNote: "Pickup siap ±15 menit setelah pesanan dikonfirmasi",
};

export type Category = "seblak" | "ayam-geprek" | "minuman" | "topping";

export type Product = {
  id: string;
  name: string;
  category: Category;
  description: string;
  image: string;
  price: number;
  rating: number;
  isBestSeller: boolean;
  isPromotion: boolean;
  isAvailable: boolean;
};

export type Topping = {
  id: string;
  name: string;
  price: number;
  stock: number;
  isAvailable: boolean;
};

export type Base = { id: string; name: string; price: number };

export const bases: Base[] = [
  { id: "kerupuk", name: "Kerupuk", price: 15000 },
  { id: "mie", name: "Mie", price: 16000 },
  { id: "kwetiau", name: "Kwetiau", price: 17000 },
  { id: "macaroni", name: "Macaroni", price: 17000 },
];

export const spicyLevels = [
  { level: 0, label: "Tidak Pedas" },
  { level: 1, label: "Sedikit Pedas" },
  { level: 2, label: "Pedas" },
  { level: 3, label: "Pedas Banget" },
  { level: 4, label: "Extra Pedas" },
  { level: 5, label: "Brutal" },
] as const;

export const toppings: Topping[] = [
  { id: "bakso", name: "Bakso", price: 3000, stock: 40, isAvailable: true },
  { id: "sosis", name: "Sosis", price: 3000, stock: 40, isAvailable: true },
  { id: "ceker", name: "Ceker", price: 5000, stock: 25, isAvailable: true },
  { id: "telur", name: "Telur", price: 4000, stock: 50, isAvailable: true },
  { id: "seafood", name: "Seafood", price: 6000, stock: 15, isAvailable: true },
  { id: "dumpling", name: "Dumpling", price: 4000, stock: 30, isAvailable: true },
  { id: "cheese", name: "Cheese", price: 5000, stock: 20, isAvailable: true },
  { id: "sayuran", name: "Sayuran", price: 2000, stock: 60, isAvailable: true },
  { id: "kikil", name: "Kikil", price: 5000, stock: 0, isAvailable: false },
  { id: "tulang", name: "Tulang", price: 5000, stock: 18, isAvailable: true },
];

export const extras: Topping[] = [
  { id: "extra-telur", name: "Extra Telur", price: 4000, stock: 50, isAvailable: true },
  { id: "extra-kerupuk", name: "Extra Kerupuk", price: 3000, stock: 50, isAvailable: true },
  { id: "extra-topping", name: "Extra Topping", price: 5000, stock: 50, isAvailable: true },
  { id: "extra-sambal", name: "Extra Sambal", price: 2000, stock: 50, isAvailable: true },
  { id: "extra-kuah", name: "Extra Kuah", price: 2000, stock: 50, isAvailable: true },
];

export const products: Product[] = [
  {
    id: "seblak-komplit",
    name: "Seblak Komplit",
    category: "seblak",
    description: "Kerupuk, mie, telur, bakso, sosis, dan topping pilihan.",
    image: seblakHero,
    price: 25000,
    rating: 4.9,
    isBestSeller: true,
    isPromotion: false,
    isAvailable: true,
  },
  {
    id: "seblak-ceker",
    name: "Seblak Ceker Komplit",
    category: "seblak",
    description: "Pedas, gurih, ceker empuk dengan topping melimpah.",
    image: seblakHero,
    price: 22000,
    rating: 4.8,
    isBestSeller: true,
    isPromotion: true,
    isAvailable: true,
  },
  {
    id: "geprek-sereh",
    name: "Ayam Geprek Sereh",
    category: "ayam-geprek",
    description: "Ayam crispy dengan racikan bumbu sereh khas kami.",
    image: ayamGeprek,
    price: 22000,
    rating: 4.9,
    isBestSeller: true,
    isPromotion: false,
    isAvailable: true,
  },
  {
    id: "geprek-rica",
    name: "Ayam Geprek Rica-Rica",
    category: "ayam-geprek",
    description: "Sambal rica-rica pedas segar, nasi hangat, timun.",
    image: ayamGeprek,
    price: 23000,
    rating: 4.8,
    isBestSeller: true,
    isPromotion: false,
    isAvailable: true,
  },
  {
    id: "geprek-original",
    name: "Ayam Geprek Original",
    category: "ayam-geprek",
    description: "Ayam crispy digeprek sambal bawang, plus nasi.",
    image: ayamGeprek,
    price: 18000,
    rating: 4.7,
    isBestSeller: false,
    isPromotion: false,
    isAvailable: true,
  },
  {
    id: "paket-hemat",
    name: "Paket Hemat Geprek",
    category: "ayam-geprek",
    description: "Ayam geprek + nasi + es teh manis.",
    image: ayamGeprek,
    price: 25000,
    rating: 4.8,
    isBestSeller: false,
    isPromotion: true,
    isAvailable: true,
  },
  {
    id: "es-teh",
    name: "Es Teh Manis",
    category: "minuman",
    description: "Teh segar dingin, teman makan pedas.",
    image: minumanImg,
    price: 5000,
    rating: 4.7,
    isBestSeller: false,
    isPromotion: false,
    isAvailable: true,
  },
  {
    id: "es-lemon-tea",
    name: "Es Lemon Tea",
    category: "minuman",
    description: "Asam segar, pas untuk level pedas tinggi.",
    image: minumanImg,
    price: 8000,
    rating: 4.8,
    isBestSeller: true,
    isPromotion: false,
    isAvailable: true,
  },
];

export const categories = [
  {
    id: "seblak" as Category,
    name: "Seblak",
    description: "Racik sendiri sesuai selera.",
    image: seblakHero,
    cta: "Racik Sekarang",
    href: "#racik",
  },
  {
    id: "ayam-geprek" as Category,
    name: "Ayam Geprek",
    description: "Ayam crispy dengan racikan bumbu khas.",
    image: ayamGeprek,
    cta: "Lihat Ayam Geprek",
    href: "#ayam-geprek",
  },
  {
    id: "minuman" as Category,
    name: "Minuman",
    description: "Teman makan yang menyegarkan.",
    image: minumanImg,
    cta: "Lihat Minuman",
    href: "#menu",
  },
  {
    id: "topping" as Category,
    name: "Extra Topping",
    description: "Tambah topping favoritmu.",
    image: toppingsImg,
    cta: "Pilih Topping",
    href: "#racik",
  },
];

export const promo = {
  code: "SEBLAKHEMAT",
  minSpend: 30000,
  discount: 5000,
};

export const reviews = [
  {
    name: "Rani",
    rating: 5,
    text: "Seblaknya bisa pilih topping sendiri, jadi puas banget.",
  },
  {
    name: "Dimas",
    rating: 5,
    text: "Level 4 beneran nendang, kuahnya gurih dan cekernya empuk.",
  },
  {
    name: "Putri",
    rating: 5,
    text: "Ayam geprek serehnya wangi, beda dari geprek biasa.",
  },
  {
    name: "Bayu",
    rating: 4,
    text: "Harga jelas dari awal, pesan lewat WhatsApp cepat direspon.",
  },
];

export const benefits = [
  { no: "01", title: "Bisa Racik Sendiri", text: "Pilih topping dan level pedas sesuai selera." },
  { no: "02", title: "Harga Transparan", text: "Harga makanan dan topping terlihat jelas." },
  { no: "03", title: "Pesan Cepat", text: "Proses pemesanan dibuat sederhana." },
  {
    no: "04",
    title: "Delivery atau Pickup",
    text: "Pilih cara menerima pesanan sesuai kebutuhan.",
  },
];

export function formatIDR(value: number) {
  return "Rp" + value.toLocaleString("id-ID");
}
