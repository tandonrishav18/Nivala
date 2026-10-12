import { useState } from "react";
import { Link } from "react-router";

import { BottomNav } from "@/components/nivala/bottom-nav";
import { HotelIcon, PeopleIcon } from "@/components/nivala/icons";
import { APP_TITLE } from "@/lib/app-config";

export function meta() {
  return [{ title: "Available Food · " + APP_TITLE }];
}

const IMG = "https://api.builder.io/api/v1/image/assets/TEMP/";
const img = {
  rice: IMG + "877ebd8781c0739ac11b40b9f484b095935dbb85?width=334",
  chicken: IMG + "c4f34ecb82a0c4102231fd57100d2cfa96d7f831?width=334",
  plate: IMG + "ea1e4665c4d67fb3e657eda6b018449892dfc2d2?width=370",
};

type Filter = "Pure Vegetarian" | "NON Vegetarian" | "Bulk order";
const filters: Filter[] = ["Pure Vegetarian", "NON Vegetarian", "Bulk order"];

const items = [
  {
    name: "Fried Rice",
    servings: "10 Servings",
    distance: "2.4 km",
    place: "Cafe Durga, Wagholi, Pune",
    pickup: "7:30PM",
    image: img.rice,
    tags: ["Pure Vegetarian"] as Filter[],
  },
  {
    name: "Chicken breast | 50 kg",
    servings: "----",
    distance: "4 km",
    place: "Pind Punjab, Vimaan Rd. Pune",
    pickup: "9:30PM",
    image: img.chicken,
    tags: ["NON Vegetarian", "Bulk order"] as Filter[],
  },
];

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="shrink-0">
      <path
        d="M7.3298 3.73242H6.67218C6.61202 3.73242 6.5628 3.78164 6.5628 3.8418V7.60567C6.5628 7.64121 6.57921 7.67403 6.60792 7.69453L8.86788 9.34473C8.9171 9.38027 8.98546 9.3707 9.02101 9.32149L9.41202 8.78828C9.44894 8.7377 9.438 8.66934 9.38878 8.63516L7.43917 7.22559V3.8418C7.43917 3.78164 7.38995 3.73242 7.3298 3.73242ZM10.3349 4.76055L12.4786 5.28418C12.547 5.30059 12.614 5.24863 12.614 5.17891L12.6249 2.9709C12.6249 2.8793 12.5196 2.82735 12.4485 2.88477L10.2939 4.56778C10.2776 4.58037 10.2652 4.59731 10.2581 4.61664C10.251 4.63597 10.2495 4.65691 10.2538 4.67705C10.2581 4.69719 10.268 4.71571 10.2823 4.73048C10.2967 4.74525 10.3149 4.75567 10.3349 4.76055ZM12.6276 8.87715L11.8525 8.61055C11.8254 8.60128 11.7958 8.60296 11.77 8.61523C11.7442 8.62749 11.7243 8.64937 11.7144 8.67617C11.6884 8.7459 11.661 8.81426 11.6323 8.88262C11.389 9.45821 11.0403 9.97637 10.5946 10.4207C10.1539 10.8628 9.63154 11.2152 9.05655 11.4584C8.4609 11.7102 7.82063 11.8395 7.17394 11.8385C6.52042 11.8385 5.88741 11.7113 5.29132 11.4584C4.71633 11.2152 4.19399 10.8628 3.75323 10.4207C3.3089 9.97637 2.96026 9.45821 2.71554 8.88262C2.46508 8.28664 2.33676 7.64647 2.33819 7C2.33819 6.34649 2.46534 5.71211 2.71827 5.11602C2.96163 4.54043 3.31026 4.02227 3.75597 3.57793C4.19672 3.13581 4.71907 2.7834 5.29405 2.54024C5.88741 2.28731 6.52179 2.16016 7.1753 2.16016C7.82882 2.16016 8.46183 2.28731 9.05792 2.54024C9.63291 2.7834 10.1553 3.08581 10.596 3.57793C10.7355 3.71875 10.8667 3.86504 10.987 4.01953L11.8046 3.37969C10.7286 2.0043 9.05382 1.11973 7.17257 1.1211C3.89679 1.12246 1.26632 3.78301 1.29913 7.06016C1.33194 10.2799 3.95011 12.8789 7.1753 12.8789C9.71144 12.8789 11.8716 11.2711 12.6946 9.01934C12.7151 8.96192 12.6851 8.89766 12.6276 8.87715Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function AvailableFoodRoute() {
  const [filter, setFilter] = useState<Filter | null>(null);
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const visible = items.filter(
    (i) =>
      (!filter || i.tags.includes(filter)) &&
      (!q || (i.name + " " + i.place).toLowerCase().includes(q)),
  );

  return (
    <div className="flex min-h-full justify-center bg-nv-sun/40 font-body">
      <div className="relative flex min-h-screen w-full max-w-[402px] flex-col overflow-hidden bg-nv-cream">
        <header className="flex h-[87px] shrink-0 items-end justify-between border-b-[0.5px] border-[#8E8E8E] px-3 pb-[14px]">
          <div className="flex items-end gap-[10px]">
            <Link
              to="/receive"
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
              <span className="text-[43px] font-bold text-nv-orange">R</span>
              <span className="text-xl">eceive Food</span>
            </h1>
          </div>
          <span className="pb-0.5 text-[10px] leading-[11px] text-black opacity-50">
            Pune, Maharastra, 412105
          </span>
        </header>

        <div className="mx-3 mt-2 border-b-[0.3px] border-[#686868] pb-1 text-center">
          <h2 className="font-display text-[15px] font-bold text-black">Available food</h2>
        </div>

        <div className="mx-3 flex items-center gap-1 border-b-[0.3px] border-[#686868] py-0.5">
          <span aria-hidden="true" className="text-sm">📍</span>
          <label className="sr-only" htmlFor="city">City</label>
          <select
            id="city"
            defaultValue="Pune, Maharashtra"
            className="flex-1 cursor-pointer bg-transparent py-0.5 text-sm text-black focus:outline-none"
          >
            <option>Pune, Maharashtra</option>
          </select>
        </div>

        <div className="mx-5 mt-3">
          <label className="flex h-10 items-center rounded-xl bg-nv-card/70 px-3">
            <span className="sr-only">Search available food</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search available food"
              className="w-full bg-transparent text-xs text-black placeholder:text-black/60 focus:outline-none"
            />
          </label>
        </div>

        <div
          className="mx-3 mt-[14px] flex gap-1.5 overflow-x-auto pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          role="group"
          aria-label="Filters"
        >
          {filters.map((f) => {
            const on = filter === f;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(on ? null : f)}
                className={
                  "flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] leading-[16.5px] transition-colors focus-visible:outline-2 focus-visible:outline-nv-orange " +
                  (on
                    ? "border-black bg-black text-white"
                    : "border-[#E2E2E2]/70 bg-white text-[#7B7B7B]")
                }
              >
                <span className={"size-1.5 rounded-full " + (on ? "bg-white" : "bg-black")} />
                {f}
              </button>
            );
          })}
        </div>

        <ul className="mx-3 mt-[18px] flex flex-col gap-2">
          {visible.map((i) => (
            <li
              key={i.name}
              className="flex min-h-[165px] items-stretch gap-[18px] overflow-hidden rounded-[42px] bg-white p-3"
            >
              <img
                src={i.image}
                alt={i.name}
                className="w-[167px] shrink-0 rounded-[42px] object-cover"
              />
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-3">
                <div className="flex flex-col gap-[5px]">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-bold leading-tight text-black">{i.name}</h3>
                      <p className="flex items-center gap-[2.5px] text-[10px] text-black opacity-50">
                        <PeopleIcon />
                        {i.servings}
                      </p>
                    </div>
                    <p className="text-[10px] font-bold text-black">{i.distance}</p>
                  </div>
                  <hr className="border-t-[0.5px] border-black" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="flex items-start gap-2 text-[11px] leading-tight text-black">
                    <HotelIcon />
                    {i.place}
                  </p>
                  <p className="flex items-center gap-2 text-[10px] text-black/70">
                    <ClockIcon />
                    <span className="text-black">
                      Pickup before: <b>{i.pickup}</b>
                    </span>
                  </p>
                </div>
                <button
                  type="button"
                  className="self-center rounded-b-[40px] bg-nv-orange px-[37px] py-1 text-[10px] font-bold text-white focus-visible:outline-2 focus-visible:outline-black"
                >
                  VIEW →
                </button>
              </div>
            </li>
          ))}
          {visible.length === 0 && (
            <li className="py-8 text-center text-xs text-black/50">
              No matching food right now.
            </li>
          )}
        </ul>

        <section className="relative mt-4 flex flex-1 items-end">
          <img
            src={img.plate}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-[-1px] h-[183px] w-[185px] max-w-none -scale-x-100 opacity-50"
          />
          <div className="absolute left-1/2 top-0 flex -translate-x-[calc(50%-1px)] flex-col items-center gap-1 opacity-60">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path
                d="M24.9377 15.3125C24.0627 19.6875 20.7641 23.8063 16.1339 24.7273C11.5038 25.6484 6.80529 23.4946 4.48064 19.3858C2.15599 15.2771 2.72989 10.1404 5.90402 6.646C9.07815 3.15155 14.4377 2.18751 18.8127 3.93751"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.0625 13.5625L14.4375 17.9375L24.9375 6.5625"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-[10px] font-bold uppercase tracking-[-0.03em] text-black">
              You are all catch up
            </p>
          </div>
          <span
            aria-hidden="true"
            className="absolute bottom-[30px] right-[-20px] font-display font-bold uppercase leading-none tracking-[-0.02em] text-black opacity-10"
          >
            <span className="text-[70px] text-nv-orange">N</span>
            <span className="text-[39px]">ivala</span>
          </span>
          <p className="relative ml-auto mr-3 mt-24 w-[176px] pb-3 font-display text-[9.5px] font-bold text-black opacity-50">
            Every donation follows a simple path: List → Redeem → Verify →
            Deliver → Distribute.
          </p>
        </section>

        <BottomNav />
      </div>
    </div>
  );
}
