"use client";

import type { CSSProperties, MouseEvent, ReactNode } from "react";
import { gtagSendEvent } from "../lib/gtag";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  "aria-label"?: string;
};

/**
 * WhatsApp CTA. Fires the GA4 `whatsapp_click` event (Google Ads conversion)
 * and only then navigates, so the hit isn't lost as the page unloads.
 */
export default function WhatsAppLink({
  href,
  children,
  className,
  style,
  ...rest
}: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Leave modifier / middle clicks to the browser (open-in-new-tab etc.).
    if (
      e.defaultPrevented ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    ) {
      return;
    }
    e.preventDefault();
    gtagSendEvent(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      style={style}
      rel="noopener noreferrer"
      {...rest}
    >
      {children}
    </a>
  );
}
