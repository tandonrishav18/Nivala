import { Link, useNavigate } from "react-router";

import { BottomNav } from "@/components/nivala/bottom-nav";
import { APP_TITLE } from "@/lib/app-config";

export function meta() {
  return [{ title: "Donate Food · " + APP_TITLE }];
}

const IMG = "https://api.builder.io/api/v1/image/assets/TEMP/";
const img = {
  business: IMG + "50d966a5af9d1a9c9825ce2ec23a67e8902aaf64?width=316",
  individual: IMG + "e6ae1abb862b025aa86da400046053b36363cf3f?width=316",
  child: IMG + "5006a5d642ecf569d6df17a78f0672c4b8df0f7c?width=260",
};

function Chevron() {
  return (
    <svg width="26" height="27" viewBox="0 0 26 27" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M9.23633 6.84216L16.7626 13.6843L9.23633 19.8422"
        strokeWidth="1.36842"
        strokeLinecap="round"
        className="stroke-nv-orange"
      />
    </svg>
  );
}

function DonorCard({
  image,
  title,
  description,
  onClick,
}: {
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex h-[88px] w-full items-center gap-[9px] overflow-hidden rounded-[31px] bg-nv-card pr-[10px] text-left shadow-[0_4px_4.5px_rgba(0,0,0,0.01)] transition-transform active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-nv-orange"
    >
      <img
        src={image}
        alt=""
        className="h-[88px] w-[138px] shrink-0 rounded-[48px] object-cover"
      />
      <span className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="font-display text-[15px] font-bold uppercase leading-tight tracking-[-0.015em] text-black">
          {title}
        </span>
        <span className="text-[10px] text-black/50">{description}</span>
      </span>
      <Chevron />
    </button>
  );
}

export default function DonateRoute() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-full justify-center bg-nv-sun/40 font-body">
      <div className="relative flex min-h-screen w-full max-w-[402px] flex-col overflow-hidden bg-nv-cream">
        <header className="flex h-[87px] items-end justify-between border-b-[0.5px] border-[#8E8E8E] px-3 pb-[14px]">
          <div className="flex items-end gap-[10px]">
            <Link
              to="/"
              aria-label="Back to home"
              className="flex h-[29px] w-[26px] items-center justify-center rounded-[7.5px] border border-nv-orange focus-visible:outline-2 focus-visible:outline-nv-orange"
            >
              <svg width="11" height="14" viewBox="9 7 9 15" fill="none" aria-hidden="true">
                <path
                  d="M16.7637 7.84216L9.23736 14.6843L16.7637 20.8422"
                  strokeWidth="1.36842"
                  strokeLinecap="round"
                  className="stroke-nv-orange"
                />
              </svg>
            </Link>
            <h1 className="font-display font-semibold uppercase leading-none tracking-[-0.02em] text-black">
              <span className="text-[43px] font-bold text-nv-orange">D</span>
              <span className="text-xl">onate Food</span>
            </h1>
          </div>
          <span className="pb-0.5 text-[10px] leading-[11px] text-black opacity-50">
            Pune, Maharastra, 412105
          </span>
        </header>

        <div className="mx-3 mt-[37px] border-b-[0.3px] border-[#686868] pb-1 text-center">
          <h2 className="font-display text-[15px] font-bold text-black">
            Tell Us Little About your donation
          </h2>
        </div>

        <div className="mx-3 mt-[79px] border-b-[0.3px] border-[#686868] pb-1">
          <h3 className="text-xs font-bold text-black">Who Are You Donating As?</h3>
        </div>

        <div className="mx-3 mt-5 flex flex-col gap-5">
          <DonorCard
            image={img.business}
            title="Restaurant / Business"
            description="Donate surplus from your restaurant/organisation"
            onClick={() => navigate("/donate/details")}
          />
          <DonorCard
            image={img.individual}
            title="Individual"
            description="Donate food personally"
            onClick={() => navigate("/donate/details")}
          />
        </div>

        <p className="mt-[14px] text-center text-[10px] font-light text-black/50">
          Your waste is valuable to us with million others
        </p>

        <section className="relative mt-6 flex flex-1 items-end">
          <img
            src={img.child}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[27px] h-[282px] w-[130px] max-w-none opacity-40"
          />
          <div className="relative ml-auto flex w-[222px] flex-col gap-[53px] pb-[56px]">
            <p className="text-[10px] uppercase leading-[12.4px] tracking-[-0.02em] text-black">
              <span className="font-light">Around </span>
              <span className="font-bold">645 million</span>
              <span className="font-light"> people faced hunger worldwide in </span>
              <span className="font-bold">2025.</span>
            </p>
            <p className="ml-[35px] w-[176px] font-display text-[9.5px] font-bold text-black opacity-50">
              Every donation follows a simple path: List → Redeem → Verify →
              Deliver → Distribute.
            </p>
          </div>
          <span className="absolute bottom-[14px] right-3 font-display font-bold uppercase leading-none tracking-[-0.02em] text-black opacity-50">
            <span className="text-[28px] text-nv-orange">N</span>
            <span className="text-base">ivala</span>
          </span>
        </section>

        <BottomNav />
      </div>
    </div>
  );
}
