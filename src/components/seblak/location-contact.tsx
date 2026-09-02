import { Bike, Clock, MapPin, MessageCircle, ShoppingBag } from "lucide-react";
import { Container, SectionLabel, btnPrimary } from "./ui";
import { business } from "../../data/seblak";
import { buildWhatsAppUrl, track, useCart } from "../../lib/seblak-cart";

export function LocationContact() {
  const { items, total, discount } = useCart();

  return (
    <section id="kontak" className="border-b border-border py-16 lg:py-24">
      <Container>
        <SectionLabel no="08">Kontak</SectionLabel>
        <div className="mt-6 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <h2 className="text-[clamp(1.875rem,5vw,3.25rem)] leading-[1] font-extrabold tracking-[-0.03em]">
              Lokasi &amp; Jam Buka
            </h2>
            <dl className="mt-8">
              <div className="flex gap-3 border-t border-border py-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <dt className="text-[13px] font-bold tracking-[0.14em] uppercase">Alamat</dt>
                  <dd className="text-[16px] text-muted-foreground">{business.address}</dd>
                </div>
              </div>
              <div className="flex gap-3 border-t border-border py-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <dt className="text-[13px] font-bold tracking-[0.14em] uppercase">Jam Buka</dt>
                  <dd className="text-[16px] text-muted-foreground">{business.hours}</dd>
                </div>
              </div>
              <div className="flex gap-3 border-t border-border py-4">
                <Bike className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <dt className="text-[13px] font-bold tracking-[0.14em] uppercase">Delivery</dt>
                  <dd className="text-[16px] text-muted-foreground">{business.deliveryNote}</dd>
                </div>
              </div>
              <div className="flex gap-3 border-y border-border py-4">
                <ShoppingBag className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div>
                  <dt className="text-[13px] font-bold tracking-[0.14em] uppercase">Pickup</dt>
                  <dd className="text-[16px] text-muted-foreground">{business.pickupNote}</dd>
                </div>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="border border-foreground p-6">
              <p className="text-[13px] font-bold tracking-[0.16em] uppercase">Pesan Langsung</p>
              <p className="mt-3 text-[17px] text-muted-foreground">
                Kirim pesanan lewat WhatsApp, kami balas dan konfirmasi secepatnya.
              </p>
              <p className="mt-4 text-[24px] font-extrabold">{business.whatsappLabel}</p>
              <a
                href={buildWhatsAppUrl({ items, total, discount })}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { from: "kontak" })}
                className={`${btnPrimary} mt-5 w-full`}
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Pesan via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
