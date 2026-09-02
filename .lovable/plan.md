# Seblak Prasmanan & Ayam Geprek Sereh — Landing Page

A new food-brand landing page at `/seblak`, kept fully separate from the existing YONSI portfolio at `/`. Swiss International Style adapted for Indonesian street food: white canvas, black typography, orange `#F97316` reserved for conversion and interaction.

## Pages

- `/seblak` — the landing page (hero → categories → best sellers → Racik Seblakmu Sendiri → ayam geprek → promo → why us → reviews → location → final CTA → footer)
- `/seblak/checkout` — cart review + customer details (nama, WhatsApp, delivery/pickup, alamat, catatan, payment method), ending in a structured WhatsApp order message

Cart state is client-side (React context + localStorage), no backend and no online payment. The final "Buat Pesanan" opens WhatsApp with the full order text.

## Sections

1. Header — wordmark left, nav (Menu / Seblak / Ayam Geprek / Promo / Tentang), cart with count + "Pesan Sekarang". Mobile: wordmark, cart, hamburger.
2. Hero — asymmetric split: headline "Seblak Sesuai Selera, Ayam Geprek Penuh Rasa.", subheadline, primary + secondary CTA, editorial labels (LEVEL PEDAS 0—5, TOPPING SESUAI SELERA, ORDER ONLINE), large cropped food image. Micro-conversion strip under the CTAs.
3. `01 / MENU` Kategori — "Mau Makan Apa Hari Ini?" with Seblak, Ayam Geprek, Minuman, Extra Topping in a varied editorial grid.
4. Favorit Pelanggan — product cards: image, badge, name, description, visible price, rating, "+ Tambah".
5. `02 / RACIK` Racik Seblakmu Sendiri — the centrepiece. Interactive counter: 01 base, 02 level pedas 0–5 (Tidak Pedas → Brutal), 03 topping multi-select with prices, 04 extra, 05 catatan, running total, quantity, "Tambah ke Keranjang".
6. `03 / AYAM GEPREK` — one dominant photo + compact list (Original, Sereh, Rica-Rica, Paket Hemat), each addable.
7. `04 / PROMO` — voucher SEBLAKHEMAT, min Rp30.000, potongan Rp5.000, applied at checkout.
8. Kenapa Pilih Kami — four numbered benefits.
9. Kata Mereka — reviews in an editorial layout, structured so real data can replace the placeholders (clearly labelled as contoh).
10. Lokasi & Kontak — address, jam buka, WhatsApp, delivery/pickup info.
11. Final CTA — "Sudah Tahu Mau Makan Apa?" + Pesan Sekarang / Chat WhatsApp.
12. Footer — brand, nav, contact, © 2026.

Plus a mobile sticky bottom bar showing item count and total, linking to checkout.

## Placeholders

No business details were provided, so the following are placeholders that are easy to swap in one data file: WhatsApp number, city/address, opening hours, and all prices (Seblak base from Rp15.000, topping Rp2.000–5.000, geprek Rp18.000–25.000). Tell me the real values any time and I'll update them.

## Design system

- Scoped tokens so the portfolio's Swiss black/red system stays untouched: a `seblak` theme class on the landing routes defining orange `#F97316`, white, `#1F1F1F`, `#F5F5F5`, success `#22C55E`, error `#EF4444`.
- Inter (grotesk) loaded via `<link>` in the root route; existing IBM Plex stays for the portfolio.
- 4/8px spacing scale, max width 1280px, small radii (no pills, no heavy shadows), 12/8/4-column responsive grid, mobile-first from 360px.
- Lucide icons only; animation limited to fade/slide-up reveal, hover, and selection transitions.

## Technical notes

- Stack is TanStack Start + React + TypeScript + Tailwind v4 (this project's fixed stack, not Next.js).
- Components under `src/components/seblak/`: Header, Hero, CategoryGrid, ProductCard, BestSeller, SeblakCustomizer, SpicyLevelSelector, ToppingSelector, AyamGeprekSection, PromotionBanner, WhyChooseUs, Reviews, LocationContact, FinalCTA, Footer, CartButton, StickyOrderBar.
- Typed data in `src/data/seblak.ts` shaped for a future API: product `{ id, name, category, description, image, price, rating, isBestSeller, isPromotion, isAvailable }`, topping `{ id, name, price, stock, isAvailable }`, cart item `{ base, spicyLevel, toppings, extras, notes, quantity, totalPrice }`.
- Food imagery generated as art-directed close-up shots (seblak bowl, ayam geprek, toppings, drinks), exported as optimized assets with alt text and lazy loading below the fold.
- Analytics-ready: a small `track(event, payload)` helper called for page_view, menu_view, product_view, customizer_start, topping_selected, add_to_cart, view_cart, checkout_start, whatsapp_click, promo_clicked — logging only until an analytics provider is chosen.
- SEO: route-level `head()` with title, meta description, og/twitter tags, canonical, and Restaurant JSON-LD; semantic sections, single H1, visible focus states, 16px+ body text.
