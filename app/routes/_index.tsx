import { APP_TITLE } from "@/lib/app-config";
import { useNavigate } from "react-router";

import { BottomNav } from "@/components/nivala/bottom-nav";
import { HotelIcon, PeopleIcon } from "@/components/nivala/icons";

export function meta() {
  return [
    { title: APP_TITLE },
    {
      name: "description",
      content: "Donate surplus food or receive it from people near you.",
    },
  ];
}

const IMG = "https://api.builder.io/api/v1/image/assets/TEMP/";
const img = {
  pin: `${IMG}a0aec7389b59c267fe9e6cb147a75e605ac97963?width=94`,
  bg: `${IMG}71766ceaf6f4efb84cc4aab330c543e4291bd7bb?width=1350`,
  friedRice: `${IMG}7fdea923d1fd05fcdc02871565acdf88ba79e97f?width=283`,
  dosa: `${IMG}b1719963d19e3d9bfc221881efc28d35571f9bf6?width=225`,
  thaali: `${IMG}90cc653a6258a9bb6fb4b8dcb392b71b05d67430?width=225`,
  discover: `${IMG}a0aec7389b59c267fe9e6cb147a75e605ac97963?width=260`,
  corner: `${IMG}fb371d7372659c871ac62eaa105e81fba1f590d2?width=416`,
  donate: `${IMG}0e020fa8dba513cf724ab2992075569a12f0cf43?width=176`,
  receive: `${IMG}2951182033d5a9e794781422619b56b7c4fc01a3?width=176`,
};

function Wordmark({ big, small }: { big: string; small: string }) {
  return (
    <span
      className="font-display font-bold uppercase leading-none tracking-[-0.02em] text-black"
      style={{ fontSize: small }}
    >
      <span className="text-nv-orange" style={{ fontSize: big }}>
        N
      </span>
      ivala
    </span>
  );
}

function ActionCard({
  lead,
  rest,
  leadSize,
  image,
  imageSide,
  label,
  onClick,
}: {
  lead: string;
  rest: string;
  leadSize: string;
  image: string;
  imageSide: "left" | "right";
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`flex h-[88px] min-w-0 flex-1 items-center gap-2 rounded-[31px] bg-nv-card px-2 text-left transition-transform active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-nv-orange ${
        imageSide === "right" ? "flex-row-reverse pl-[13px]" : "pr-[13px]"
      }`}
    >
      <img
        src={image}
        alt=""
        className="h-[71px] w-[88px] shrink-0 rounded-[48px] object-cover"
      />
      <span
        className={`flex min-w-0 flex-1 flex-col ${
          imageSide === "right" ? "items-start" : "items-end pl-1"
        }`}
      >
        <span className="font-display font-bold uppercase leading-[18.7px] tracking-[-0.02em] text-black">
          <span className="text-2xl">{lead}</span>
          <span style={{ fontSize: leadSize }}>{rest}</span>
        </span>
        <span className="font-body text-[15px] font-light uppercase leading-[18.7px] tracking-[-0.02em] text-[#222]">
          Food
        </span>
      </span>
    </button>
  );
}

function FoodCard({
  name,
  place,
  image,
  active,
}: {
  name: string;
  place: string;
  image: string;
  active?: boolean;
}) {
  const a = active;
  return (
    <div
      className={`shrink-0 snap-start overflow-hidden bg-white ${
        a
          ? "h-[194px] w-[157px] rounded-[42px] p-2"
          : "h-[154px] w-[125px] rounded-[34px] p-1.5 opacity-50"
      }`}
    >
      <img
        src={image}
        alt={name}
        className={`object-cover ${
          a
            ? "h-[102px] w-[142px] rounded-[42px]"
            : "h-[81px] w-[113px] rounded-[34px]"
        }`}
      />
      <div className={a ? "px-3 pt-[27px]" : "px-2.5 pt-[21px]"}>
        <div
          className={`flex items-end justify-between ${a ? "h-3.5" : "h-[11px]"}`}
        >
          <span
            className={`font-body font-bold text-black ${a ? "text-[10px]" : "text-[8px]"}`}
          >
            {name}
          </span>
          <span className="flex items-center gap-0.5 opacity-50">
            <PeopleIcon size={a ? 14 : 11} />
            <span
              className={`font-body font-bold text-black ${a ? "text-[10px]" : "text-[8px]"}`}
            >
              10
            </span>
          </span>
        </div>
        <div
          className={`flex items-center gap-[3px] ${a ? "mt-[9px] h-3.5" : "mt-[7px] h-[11px]"}`}
        >
          <HotelIcon size={a ? 14 : 11} />
          <span
            className={`truncate font-body font-light text-black ${a ? "text-[10px]" : "text-[8px]"}`}
          >
            {place}
          </span>
        </div>
      </div>
      <div className={a ? "mx-[3px] mt-[9px]" : "mx-[3px] mt-[8px]"}>
        <div className="h-px bg-black/80" />
        <button
          type="button"
          className={`mx-auto flex items-center justify-center rounded-b-[40px] bg-nv-orange font-body font-bold text-white ${
            a ? "mt-[5px] h-5 w-[114px] text-[10px]" : "mt-1 h-4 w-[91px] text-[8px]"
          }`}
        >
          VIEW →
        </button>
      </div>
    </div>
  );
}

export default function HomeRoute() {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-full justify-center bg-nv-sun/40 font-body">
      <div className="relative flex min-h-screen w-full max-w-[402px] flex-col overflow-hidden bg-nv-cream sm:my-0">
        <img
          src={img.bg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[-154px] top-[344px] h-[346px] w-[675px] max-w-none opacity-10"
        />

        <header className="relative flex h-[87px] items-center justify-between border-b-[0.5px] border-[#8E8E8E] pl-0 pr-4 pt-[34px]">
          <div className="-mt-[34px] flex h-[39px] w-[110px] items-center justify-center pt-[34px]">
            <Wordmark big="43px" small="24px" />
          </div>
          <div className="-mt-[34px] flex items-end gap-2 pt-[34px]">
            <img src={img.pin} alt="" className="h-[23px] w-[47px]" />
            <span className="text-[10px] leading-[11px] text-black">
              Pune, Maharastra, 412105
            </span>
          </div>
        </header>

        <div className="relative px-[22px] pt-3">
          <label className="flex h-10 items-center rounded-xl bg-nv-card/70 px-3">
            <span className="sr-only">Search available food</span>
            <input
              type="search"
              placeholder="Search available food"
              className="w-full bg-transparent text-xs text-black placeholder:text-black/60 focus:outline-none"
            />
          </label>
        </div>

        <div className="relative mx-3 mt-[14px] flex h-[88px] gap-2">
          <ActionCard
            lead="D"
            rest="onate"
            leadSize="15px"
            image={img.donate}
            imageSide="left"
            label="Donate food"
            onClick={() => navigate("/donate")}
          />
          <ActionCard
            lead="R"
            rest="eceive"
            leadSize="16px"
            image={img.receive}
            imageSide="right"
            label="Receive food"
            onClick={() => navigate("/receive")}
          />
          <svg
            width="37"
            height="35"
            viewBox="0 0 37 35"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[28px] -translate-x-1/2 drop-shadow-[0_4px_28px_rgba(0,0,0,0.05)]"
          >
            <path
              d="M35.5 2.53164C35.5 9.4352 44.5 39.0316 9.5 33.5316C2.59644 33.5316 0 9.43521 0 2.53165C0 -4.37191 10.0964 5.03163 17 5.03163C23.9036 5.03163 35.5 -4.37192 35.5 2.53164Z"
              className="fill-nv-card"
            />
          </svg>
        </div>

        <section className="relative mt-[23px]">
          <div className="mx-3 flex items-center justify-between border-b-[0.3px] border-[#686868] pb-1">
            <div className="flex flex-col gap-0.5">
              <h2 className="text-xs font-bold text-black">Available Near You</h2>
              <p className="text-[10px] text-black/50">
                All foods are here available for 2-5 hours
              </p>
            </div>
            <button
              type="button"
              aria-label="See all available food"
              className="flex h-[29px] w-[26px] items-center justify-center rounded-[7.5px] border border-nv-orange focus-visible:outline-2 focus-visible:outline-nv-orange"
            >
              <svg width="11" height="14" viewBox="9 7 9 15" fill="none" aria-hidden="true">
                <path
                  d="M9.23633 7.84204L16.7626 14.6841L9.23633 20.842"
                  strokeWidth="1.36842"
                  strokeLinecap="round"
                  className="stroke-nv-orange"
                />
              </svg>
            </button>
          </div>

          <div className="mt-[9px] flex snap-x gap-[15px] overflow-x-auto pb-1 pl-[108px] pr-3 pt-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <FoodCard name="Fried Rice" place="Cafe Durga, Wagho..." image={img.friedRice} active />
            <div className="mt-5 flex">
              <FoodCard name="DOSA" place="UDDUPI, Vimaan Rd." image={img.dosa} />
            </div>
            <div className="mt-5 flex">
              <FoodCard name="Veg Thaali" place="Cafe Durga, Wagho..." image={img.thaali} />
            </div>
            <div className="relative mt-5 h-[154px] w-[125px] shrink-0 snap-start overflow-hidden rounded-[34px] bg-white opacity-50">
              <img
                src={img.discover}
                alt=""
                className="absolute left-0 top-[-32px] h-[231px] w-[130px] max-w-none"
              />
              <div className="absolute left-[44px] top-[51px] flex h-[46px] w-[42px] items-center justify-center rounded-xl border-[1.6px] border-nv-orange">
                <svg width="15" height="22" viewBox="14 11 14 24" fill="none" aria-hidden="true">
                  <path
                    d="M14.7637 12.5339L26.7929 23.4696L14.7637 33.3116"
                    strokeWidth="2.18713"
                    strokeLinecap="round"
                    className="stroke-nv-orange"
                  />
                </svg>
              </div>
              <button
                type="button"
                className="absolute left-3 top-[131px] flex h-4 w-[105px] items-center justify-center rounded-b-[32px] bg-nv-orange text-[8px] font-bold text-white"
              >
                Discover all
              </button>
            </div>
          </div>

          <div className="mt-2 flex items-center justify-center gap-[2px]" aria-hidden="true">
            <span className="h-[6px] w-[39px] rounded-full bg-nv-orange" />
            <span className="size-[6px] rounded-full bg-nv-dot" />
            <span className="size-[6px] rounded-full bg-nv-dot" />
            <span className="size-[6px] rounded-full bg-nv-dot" />
          </div>
        </section>

        <section className="relative mt-[22px] flex flex-1 items-end pb-3">
          <img
            src={img.corner}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[-18px] left-0 h-[228px] w-[208px] max-w-none opacity-40"
          />
          <div className="relative ml-auto flex w-[222px] flex-col gap-[43px] pr-[1px] pb-6 mr-[1px]">
            <p className="text-[10px] uppercase leading-[12.4px] tracking-[-0.02em] text-black">
              <span className="font-light">
                While millions face hunger, the world wastes about{" "}
              </span>
              <span className="font-bold">1.05 billion tonnes of food</span>
              <span className="font-light"> every year.</span>
            </p>
            <p className="ml-[35px] w-[176px] font-display text-[9.5px] font-bold text-black opacity-50">
              Every donation follows a simple path: List → Redeem → Verify →
              Deliver → Distribute.
            </p>
          </div>
          <div className="absolute bottom-[14px] right-3 opacity-50">
            <Wordmark big="28px" small="16px" />
          </div>
        </section>

        <BottomNav />
      </div>
    </div>
  );
}
