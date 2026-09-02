import { Container, SectionLabel } from "./ui";
import { formatIDR, promo } from "../../data/seblak";
import { track } from "../../lib/seblak-cart";

export function PromotionBanner() {
  return (
    <section id="promo" className="border-b border-border py-16 lg:py-24">
      <Container>
        <SectionLabel no="05">Promo</SectionLabel>
        <div className="mt-6 grid gap-8 border border-foreground p-6 sm:p-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <h2 className="text-[clamp(1.875rem,5vw,3.25rem)] leading-[1] font-extrabold tracking-[-0.03em]">
              Lagi Ada Promo.
            </h2>
            <p className="mt-3 text-[17px] text-muted-foreground">
              Potongan {formatIDR(promo.discount)} untuk pembelian minimal{" "}
              {formatIDR(promo.minSpend)}. Otomatis dihitung saat checkout.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="flex flex-wrap items-center justify-between gap-4 bg-brand p-5 text-brand-foreground">
              <div>
                <p className="text-[12px] font-semibold tracking-[0.18em] uppercase">Kode Voucher</p>
                <p className="text-[28px] font-extrabold tracking-tight">{promo.code}</p>
              </div>
              <a
                href="#racik"
                onClick={() => track("promo_clicked", { code: promo.code })}
                className="rounded-md bg-background px-5 py-3 text-[15px] font-semibold text-foreground"
              >
                Ambil Promo
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
