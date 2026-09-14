"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import WhatsAppLink from "./WhatsAppLink";
import { useHideOnScroll, useMeasuredHeight } from "./useHideOnScroll";

const HOME = "/";

export type SiteHeaderLink =
  | { type: "pill"; label: string; href: string }
  | { type: "text"; label: string; href: string }
  | { type: "cta"; label: string; href: string };

/**
 * Shared top bar for every non-hero page (blog, city landing pages, FAQ…).
 * Fixed to the viewport and auto-hides on scroll-down / reappears on
 * scroll-up, so it stays out of the way while reading without giving up
 * quick access to navigation. A measured spacer keeps the page from
 * jumping when the bar toggles.
 */
export default function SiteHeader({
  links,
  homeHref = HOME,
}: {
  links: SiteHeaderLink[];
  homeHref?: string;
}) {
  const visible = useHideOnScroll();
  const { ref, height } = useMeasuredHeight<HTMLDivElement>();

  return (
    <>
      <div
        ref={ref}
        className={`fixed left-0 top-0 z-30 flex w-full items-center justify-between border-b border-black/10 bg-[#F2F0EB]/90 px-6 py-4 backdrop-blur-md transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-14 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link href={homeHref} className="group flex items-center gap-3" style={{ textDecoration: "none" }}>
          {/* Plain <img>, not next/image — this small static mark doesn't
              need runtime optimization, and it avoids the optimizer's
              response cache going stale after the file is replaced. */}
          <img
            src="/logo.png"
            alt="Mouhcine Zhirou"
            className="h-5 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-black/45">
            Mouhcine Zhirou
          </span>
        </Link>
        <div className="flex items-center gap-5">
          {links.map((link) => (
            <SiteHeaderLinkItem key={link.label} link={link} />
          ))}
        </div>
      </div>
      {/* Layout spacer — the bar above is `fixed`, this keeps its place in flow. */}
      <div aria-hidden style={{ height }} />
    </>
  );
}

function SiteHeaderLinkItem({ link }: { link: SiteHeaderLink }) {
  if (link.type === "cta") {
    return (
      <WhatsAppLink
        href={link.href}
        className="border border-black bg-black px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#F2F0EB] transition-colors hover:bg-transparent hover:text-black"
      >
        {link.label as ReactNode}
      </WhatsAppLink>
    );
  }

  if (link.type === "pill") {
    return (
      <Link
        href={link.href}
        prefetch={false}
        className="bg-[#e8ff47] px-3 py-2 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-black transition-transform hover:scale-[0.97]"
      >
        {link.label}
      </Link>
    );
  }

  return (
    <Link
      href={link.href}
      prefetch={false}
      className="hidden text-[0.62rem] font-bold uppercase tracking-[0.16em] text-black/50 transition-colors hover:text-black sm:inline"
    >
      {link.label}
    </Link>
  );
}
