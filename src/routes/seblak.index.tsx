import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { SeblakHeader } from "../components/seblak/header";
import { SeblakHero } from "../components/seblak/hero";
import { CategoryGrid } from "../components/seblak/category-grid";
import { BestSeller } from "../components/seblak/best-seller";
import { SeblakCustomizer } from "../components/seblak/seblak-customizer";
import { AyamGeprekSection } from "../components/seblak/ayam-geprek-section";
import { PromotionBanner } from "../components/seblak/promotion-banner";
import { WhyChooseUs } from "../components/seblak/why-choose-us";
import { Reviews } from "../components/seblak/reviews";
import { LocationContact } from "../components/seblak/location-contact";
import { FinalCTA } from "../components/seblak/final-cta";
import { SeblakFooter } from "../components/seblak/footer";
import { StickyOrderBar } from "../components/seblak/sticky-order-bar";
import { business } from "../data/seblak";
import { track } from "../lib/seblak-cart";

const title = "Seblak Prasmanan & Ayam Geprek Sereh | Cilegon";
const description =
  "Nikmati seblak prasmanan dengan topping pilihan dan ayam geprek bumbu sereh rica-rica. Pesan online dengan mudah.";
const url = "https://yonsi-portofolio.lovable.app/seblak";

export const Route = createFileRoute("/seblak/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: business.name,
          servesCuisine: "Indonesian",
          telephone: `+${business.whatsapp}`,
          url,
          address: {
            "@type": "PostalAddress",
            streetAddress: business.address,
            addressLocality: business.city,
            addressCountry: "ID",
          },
          openingHours: "Mo-Su 10:00-21:00",
          priceRange: "Rp",
        }),
      },
    ],
  }),
  component: SeblakLanding,
});

function SeblakLanding() {
  useEffect(() => {
    track("page_view", { page: "seblak_landing" });
  }, []);

  return (
    <>
      <SeblakHeader />
      <main className="pb-24 lg:pb-0">
        <SeblakHero />
        <CategoryGrid />
        <BestSeller />
        <SeblakCustomizer />
        <AyamGeprekSection />
        <PromotionBanner />
        <WhyChooseUs />
        <Reviews />
        <LocationContact />
        <FinalCTA />
      </main>
      <SeblakFooter />
      <StickyOrderBar />
    </>
  );
}
