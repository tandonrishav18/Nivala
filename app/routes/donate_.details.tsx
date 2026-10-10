import { useState } from "react";
import { Link } from "react-router";

import { BottomNav } from "@/components/nivala/bottom-nav";
import { APP_TITLE } from "@/lib/app-config";

export function meta() {
  return [{ title: "Donation details · " + APP_TITLE }];
}

const categories = ["Pure Vegetarian", "NON Vegetarian", "NUT Free"];

const card =
  "flex flex-col rounded-[48px] bg-nv-card px-6 py-8 shadow-[0_1px_3px_rgba(135,107,72,0.08)]";
const field =
  "w-full rounded-xl border border-[#E8E1D3] bg-[#FAFAF9]/40 px-3.5 py-3 text-sm text-[#1A1816] placeholder:text-[#A8A29E] focus:border-nv-orange focus:outline-none focus:ring-2 focus:ring-nv-orange/30";
const iconField = field + " pl-10";

function Label({
  children,
  required,
  htmlFor,
}: {
  children: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
}) {
  return (
    <label htmlFor={htmlFor} className="text-xs font-bold leading-4 text-[#1A1816]">
      {children}
      {required && <span className="text-[#EB5A0C]"> *</span>}
    </label>
  );
}

function IconInput({
  id,
  icon,
  ...props
}: { id: string; icon: React.ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2">
        {icon}
      </span>
      <input id={id} className={iconField} {...props} />
    </div>
  );
}

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none",
  "aria-hidden": true,
} as const;
const iconStroke = {
  strokeWidth: 1.33333,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "stroke-[#A8A29E]",
} as const;

export default function DonationDetailsRoute() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [qty, setQty] = useState(10);
  const [prepared, setPrepared] = useState("");
  const [bestBefore, setBestBefore] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [fssai, setFssai] = useState("");
  const [notes, setNotes] = useState("");
  const [published, setPublished] = useState(false);

  const hoursLeft =
    prepared && bestBefore
      ? (new Date(bestBefore).getTime() - Date.now()) / 36e5
      : null;
  const ready =
    name.trim() &&
    category &&
    qty > 0 &&
    prepared &&
    bestBefore &&
    location.trim() &&
    contact.trim() &&
    fssai.trim();

  return (
    <div className="flex min-h-full justify-center bg-nv-sun/40 font-body">
      <div className="relative flex min-h-screen w-full max-w-[402px] flex-col bg-nv-cream">
        <header className="flex h-[87px] shrink-0 items-end justify-between border-b-[0.5px] border-[#8E8E8E] px-3 pb-[14px]">
          <div className="flex items-end gap-[10px]">
            <Link
              to="/donate"
              aria-label="Back"
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

        <form
          className="flex flex-1 flex-col gap-3.5 px-5 pb-8 pt-6"
          onSubmit={(e) => {
            e.preventDefault();
            if (ready) setPublished(true);
          }}
        >
          <section className={card + " gap-4"}>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="food-name" required>Food name</Label>
              <input
                id="food-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={field + " bg-[#FAFAF9]"}
              />
            </div>

            <fieldset className="flex flex-col gap-1.5">
              <legend className="text-xs font-bold leading-4 text-[#1A1816]">
                Food category <span className="text-[#EB5A0C]">*</span>
              </legend>
              <div className="-mx-4 flex gap-1.5 pt-1">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={category === c}
                    onClick={() => setCategory(c)}
                    className={
                      "flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border px-2 py-1 text-[11px] leading-[16.5px] transition-colors focus-visible:outline-2 focus-visible:outline-nv-orange " +
                      (category === c
                        ? "border-black bg-black text-white"
                        : "border-[#E2E2E2]/70 bg-white text-[#7B7B7B]")
                    }
                  >
                    <span
                      className={
                        "size-1.5 rounded-full " +
                        (category === c ? "bg-white" : "bg-black")
                      }
                    />
                    {c}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="mt-2 flex flex-col gap-1.5">
              <Label>Add food image</Label>
              <label className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border-2 border-dashed border-[#D6D3CB] bg-[#FAFAF9]/50 px-4 py-8 text-center focus-within:ring-2 focus-within:ring-nv-orange/30">
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  className="sr-only"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    setPhoto(f ? f.name : null);
                  }}
                />
                <span className="flex size-10 items-center justify-center rounded-full bg-black">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M3 9C3 7.89617 3.89617 7 5 7H5.93C6.59856 7.0001 7.22295 6.66614 7.594 6.11L8.406 4.89C8.77705 4.33386 9.40144 3.9999 10.07 4H13.93C14.5986 3.9999 15.223 4.33386 15.594 4.89L16.406 6.11C16.777 6.66614 17.4014 7.0001 18.07 7H19C20.1038 7 21 7.89617 21 9V18C21 19.1046 20.1046 20 19 20H5C3.89617 20 3 19.1038 3 18V9"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="white"
                    />
                    <path
                      d="M15 13C15 14.6557 13.6557 16 12 16C10.3443 16 9 14.6557 9 13C9 11.3443 10.3443 10 12 10C13.6557 10 15 11.3443 15 13"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="white"
                    />
                  </svg>
                </span>
                <span className="mt-1 text-xs font-bold text-[#1A1816]">
                  {photo ?? "+ Add or Capture Photo"}
                </span>
                <span className="text-[11px] text-[#78716C]">
                  Helps shelters verify food condition &amp; hygiene
                </span>
              </label>
            </div>
          </section>

          <section className={card + " gap-2"}>
            <Label required>Available quantity</Label>
            <div className="flex items-center gap-3 pb-1">
              <div className="flex items-center gap-[3.8px] rounded-[22px] border border-[#E8E1D3] bg-black p-1 shadow-[inset_0_2px_4px_1px_rgba(0,0,0,0.05)]">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex size-10 items-center justify-center rounded-[19px] border border-[#E8E1D3] bg-white text-lg font-bold text-black focus-visible:outline-2 focus-visible:outline-nv-orange"
                >
                  −
                </button>
                <input
                  aria-label="Quantity"
                  inputMode="numeric"
                  value={qty}
                  onChange={(e) => {
                    const n = parseInt(e.target.value.replace(/\D/g, ""), 10);
                    setQty(Number.isNaN(n) ? 0 : Math.min(n, 9999));
                  }}
                  className="w-16 bg-transparent px-2 text-center text-xl text-white focus:outline-none"
                />
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => Math.min(9999, q + 1))}
                  className="flex size-10 items-center justify-center rounded-[19px] border border-[#E8E1D3] bg-white text-lg font-bold text-black focus-visible:outline-2 focus-visible:outline-nv-orange"
                >
                  +
                </button>
              </div>
              <div className="flex flex-1 items-center justify-center rounded-xl border border-[#E8E1D3] bg-[#FAFAF9] px-3 py-3 text-xs text-[#1A1816]">
                Servings / Plates
              </div>
            </div>
            <p className="flex items-center gap-1.5 text-[11px] text-[#78716C]">
              <span className="size-1.5 shrink-0 rounded-full bg-nv-orange" />
              <span>
                Can nourish approximately{" "}
                <b className="text-[#1A1816]">
                  {Math.round(qty * 1.2)}-{Math.round(qty * 1.5)} individuals
                </b>
              </span>
            </p>
          </section>

          <section className={card + " gap-6"}>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="prepared" required>Prepared on</Label>
              <IconInput
                id="prepared"
                type="datetime-local"
                value={prepared}
                onChange={(e) => setPrepared(e.target.value)}
                icon={
                  <svg {...iconProps}>
                    <path d="M8 5.33333V8L10 10M14 8C14 11.3115 11.3115 14 8 14C4.68851 14 2 11.3115 2 8C2 4.68851 4.68851 2 8 2C11.3115 2 14 4.68851 14 8" {...iconStroke} />
                  </svg>
                }
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-2">
                <Label htmlFor="best-before" required>Best before / Pickup by</Label>
                <span className="rounded-[11px] bg-black px-2 py-0.5 text-[10px] leading-[16.5px] text-white/70">
                  Window:{" "}
                  {hoursLeft !== null && hoursLeft > 0
                    ? hoursLeft.toFixed(1)
                    : "5.5"}
                  h remaining
                </span>
              </div>
              <IconInput
                id="best-before"
                type="datetime-local"
                value={bestBefore}
                onChange={(e) => setBestBefore(e.target.value)}
                icon={
                  <svg {...iconProps}>
                    <path d="M5.33333 4.66667V2M10.6667 4.66667V2M4.66667 7.33333H11.3333M3.33333 14H12.6667C13.4026 14 14 13.4026 14 12.6667V4.66667C14 3.93078 13.4026 3.33333 12.6667 3.33333H3.33333C2.59745 3.33333 2 3.93078 2 4.66667V12.6667C2 13.4026 2.59745 14 3.33333 14" {...iconStroke} />
                  </svg>
                }
              />
              <p className="px-0.5 text-[11px] font-light leading-[16.5px] text-[#78716C]">
                Unclaimed meals are automatically delisted after expiry for
                quality compliance.
              </p>
            </div>
          </section>

          <section className={card + " gap-6"}>
            <div className="flex flex-col gap-3">
              <Label htmlFor="location" required>Restaurant / Pickup location</Label>
              <IconInput
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                icon={
                  <svg {...iconProps}>
                    <path
                      d="M4.04079 3.23977C6.22638 1.05419 9.77521 1.05419 11.9608 3.23977C14.1464 5.42536 14.1464 8.97419 11.9608 11.1598L8.00079 15.1198L4.04079 11.1598C2.99047 10.1096 2.40039 8.68509 2.40039 7.19977C2.40039 5.71446 2.99047 4.28999 4.04079 3.23977ZM8.00079 8.79977C8.88386 8.79977 9.60079 8.08284 9.60079 7.19977C9.60079 6.31671 8.88386 5.59977 8.00079 5.59977C7.11773 5.59977 6.40079 6.31671 6.40079 7.19977C6.40079 8.08284 7.11773 8.79977 8.00079 8.79977Z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      className="fill-[#EB5A0C]"
                    />
                  </svg>
                }
              />
              <div className="flex items-center justify-between px-1 text-[11px]">
                <span className="text-[#78716C]">Select on map</span>
                <button
                  type="button"
                  className="font-medium text-[#EB5A0C] focus-visible:outline-2 focus-visible:outline-nv-orange"
                >
                  Change
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact" required>Contact</Label>
              <IconInput
                id="contact"
                type="tel"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                icon={
                  <svg {...iconProps}>
                    <path d="M2 3.33333C2 2.59745 2.59745 2 3.33333 2H5.52C5.80683 2.00022 6.06136 2.18387 6.152 2.456L7.15067 5.45133C7.25528 5.76603 7.11267 6.10978 6.816 6.258L5.31133 7.01133C6.04888 8.64369 7.35631 9.95112 8.98867 10.6887L9.742 9.184C9.89022 8.88733 10.234 8.74472 10.5487 8.84933L13.544 9.848C13.8164 9.93871 14.0001 10.1936 14 10.4807V12.6667C14 13.4026 13.4026 14 12.6667 14H12C6.47733 14 2 9.52267 2 4V3.33333" {...iconStroke} />
                  </svg>
                }
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="fssai" required>Fssai Number</Label>
              <input
                id="fssai"
                inputMode="numeric"
                value={fssai}
                onChange={(e) => setFssai(e.target.value)}
                className={field}
              />
            </div>
            <div className="flex flex-col gap-1.5 pb-[7px]">
              <Label htmlFor="notes">Additional information</Label>
              <textarea
                id="notes"
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className={field + " resize-none"}
              />
            </div>
          </section>

          <div className="mt-16 flex flex-col gap-2">
            <button
              type="submit"
              disabled={!ready}
              className="flex items-center justify-center gap-2 rounded-full bg-nv-orange px-6 py-4 text-base font-bold text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nv-orange disabled:bg-[#E5E5E5] disabled:text-[#B9B9B9]"
            >
              {published ? "Donation Published" : "Publish Donation"}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M11.6667 4.16667L17.5 10M17.5 10L11.6667 15.8333M17.5 10H2.5"
                  strokeWidth="2.08333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="currentColor"
                />
              </svg>
            </button>
            <div className="flex flex-col items-center gap-0.5">
              <p
                className="text-[11px] font-medium leading-[16.5px] text-[#78716C]"
                role="status"
              >
                {published
                  ? "Verified partners and shelters have been notified."
                  : "Verified partners and shelters will be notified instantly."}
              </p>
              <p className="flex items-center gap-1 text-[10px] leading-[15px] text-[#A89F91]">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M10.0235 3.17567C10.2577 3.40997 10.2577 3.78977 10.0235 4.02407L5.22347 8.82407C4.98917 9.0583 4.60937 9.0583 4.37507 8.82407L1.97507 6.42407C1.74768 6.18864 1.75094 5.81442 1.98238 5.58298C2.21382 5.35154 2.58804 5.34829 2.82347 5.57567L4.79927 7.55147L9.17507 3.17567C9.40937 2.94144 9.78917 2.94144 10.0235 3.17567"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#059669"
                  />
                </svg>
                Follows <u>Food Safety Charter</u> guidelines
              </p>
            </div>
          </div>
        </form>

        <BottomNav />
      </div>
    </div>
  );
}
