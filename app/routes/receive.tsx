import { useState } from "react";
import { Link } from "react-router";

import { BottomNav } from "@/components/nivala/bottom-nav";
import { APP_TITLE } from "@/lib/app-config";

export function meta() {
  return [{ title: "Receive Food · " + APP_TITLE }];
}

const IMG = "https://api.builder.io/api/v1/image/assets/TEMP/";
const img = {
  ngo: IMG + "b236230090c6d04d7cce4c34b162ab98d0d425af?width=302",
  crowd: IMG + "13a3e44da5affc09f4817ff96197b6e93a57d5ee?width=408",
};

export default function ReceiveRoute() {
  const [isNgo, setIsNgo] = useState(false);
  const [org, setOrg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ready = isNgo && org.trim().length > 0;

  return (
    <div className="flex min-h-full justify-center bg-nv-sun/40 font-body">
      <div className="relative flex min-h-screen w-full max-w-[402px] flex-col overflow-hidden bg-nv-cream">
        <header className="flex h-[87px] shrink-0 items-end justify-between border-b-[0.5px] border-[#8E8E8E] px-3 pb-[14px]">
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
              <span className="text-[43px] font-bold text-nv-orange">R</span>
              <span className="text-xl">eceive Food</span>
            </h1>
          </div>
          <span className="pb-0.5 text-[10px] leading-[11px] text-black opacity-50">
            Pune, Maharastra, 412105
          </span>
        </header>

        <div className="mx-3 mt-9 border-b-[0.3px] border-[#686868] pb-1 text-center">
          <h2 className="mx-auto max-w-[260px] font-display text-[15px] font-bold leading-[1.45] text-black">
            Find available food donations from restaurants and individuals near
            you.
          </h2>
        </div>

        <div className="mx-3 mt-[43px] border-b-[0.3px] border-[#686868] pb-1">
          <h3 className="text-xs font-bold text-black">I am receiving food for?</h3>
        </div>

        <form
          className="flex flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            if (ready) setSubmitted(true);
          }}
        >
          <button
            type="button"
            role="radio"
            aria-checked={isNgo}
            onClick={() => setIsNgo((v) => !v)}
            className="relative mx-3 mt-[42px] flex h-[88px] items-center gap-[9px] overflow-hidden rounded-[31px] bg-nv-card pr-[22px] text-left shadow-[0_4px_4.5px_rgba(0,0,0,0.01)] focus-visible:outline-2 focus-visible:outline-nv-orange"
          >
            <img
              src={img.ngo}
              alt=""
              className="h-[88px] w-[142px] shrink-0 rounded-[48px] object-cover"
            />
            <span className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="font-display text-[15px] font-bold uppercase leading-tight tracking-[-0.015em] text-black">
                NGO / Organisation
              </span>
              <span className="text-[10px] text-black/50">
                Receive food for people in need
              </span>
            </span>
            <span
              className={
                "flex size-[21px] shrink-0 items-center justify-center rounded-full border-2 border-[#EA580C]"
              }
              aria-hidden="true"
            >
              {isNgo && <span className="size-[11px] rounded-full bg-[#EA580C]" />}
            </span>
          </button>

          <div className="mx-3 mt-6 flex flex-col gap-1.5">
            <label htmlFor="org-name" className="text-xs font-bold leading-4 text-[#1A1816]">
              Write your organisation name <span className="text-[#EB5A0C]">*</span>
            </label>
            <input
              id="org-name"
              value={org}
              onChange={(e) => {
                setOrg(e.target.value);
                setSubmitted(false);
              }}
              className="w-full rounded-xl border border-[#E8E1D3] bg-[#FAFAF9] px-3.5 py-3 text-sm text-[#1A1816] focus:border-nv-orange focus:outline-none focus:ring-2 focus:ring-nv-orange/30"
            />
          </div>

          <button
            type="submit"
            disabled={!ready}
            className="mx-[22px] mt-9 flex items-center justify-center gap-2 rounded-full bg-nv-orange px-6 py-4 text-base text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nv-orange disabled:bg-[#E5E5E5] disabled:text-[#B9B9B9]"
          >
            Find Available Food
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M11.6667 4.16663L17.5 9.99996M17.5 9.99996L11.6667 15.8333M17.5 9.99996H2.5"
                strokeWidth="2.08333"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="currentColor"
              />
            </svg>
          </button>
          {submitted && (
            <p role="status" className="mt-2 text-center text-[11px] text-[#78716C]">
              Searching for food near you…
            </p>
          )}
        </form>

        <section className="relative mt-4 flex flex-1 items-end">
          <img
            src={img.crowd}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[-28px] h-[254px] w-[204px] max-w-none opacity-50"
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
