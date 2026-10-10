import { Link } from "react-router";

import {
  BellIcon,
  DiscoverIcon,
  HomeIcon,
  ProfileIcon,
} from "@/components/nivala/icons";

const navBtn =
  "flex size-[42px] items-center justify-center rounded-[14px] bg-nv-card text-black focus-visible:outline-2 focus-visible:outline-nv-orange";

export function BottomNav() {
  return (
    <nav
      aria-label="Primary"
      className="sticky bottom-0 z-10 flex h-[66px] items-end justify-between bg-nv-sun px-12 pb-3 pt-3"
    >
      <Link
        to="/"
        aria-label="Home"
        className="flex size-[42px] items-center justify-center rounded-[14px] bg-nv-orange text-white focus-visible:outline-2 focus-visible:outline-black"
      >
        <HomeIcon />
      </Link>
      <button type="button" aria-label="Discover" className={navBtn}>
        <DiscoverIcon />
      </button>
      <button type="button" aria-label="Notifications" className={navBtn}>
        <BellIcon />
      </button>
      <button type="button" aria-label="Profile" className={navBtn}>
        <ProfileIcon />
      </button>
    </nav>
  );
}
