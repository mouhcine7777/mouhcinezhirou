type GtagFn = (...args: unknown[]) => void;

/** GA4 event name wired to the Google Ads conversion. */
export const WHATSAPP_EVENT = "whatsapp_click";

/** How long to wait for GA before navigating anyway. */
const NAV_TIMEOUT_MS = 2000;

function getGtag(): GtagFn | null {
  if (typeof window === "undefined") return null;
  const g = (window as unknown as { gtag?: GtagFn }).gtag;
  return typeof g === "function" ? g : null;
}

/**
 * Fires the GA4 `whatsapp_click` event, then navigates to `url`.
 *
 * Navigation is held until GA confirms the hit (`event_callback`) or
 * `event_timeout` elapses, so the conversion isn't lost when the browser
 * leaves the page.
 *
 * If gtag hasn't loaded yet we navigate immediately — never trap the user
 * behind analytics.
 */
export function gtagSendEvent(
  url?: string,
  params?: Record<string, unknown>
): false {
  const navigate = () => {
    if (typeof url === "string" && url) window.location.href = url;
  };

  const gtag = getGtag();
  if (!gtag) {
    navigate();
    return false;
  }

  let navigated = false;
  const navigateOnce = () => {
    if (navigated) return;
    navigated = true;
    navigate();
  };

  gtag("event", WHATSAPP_EVENT, {
    ...params,
    event_callback: navigateOnce,
    event_timeout: NAV_TIMEOUT_MS,
  });

  // Safety net in case event_callback never fires (blocked/failed request).
  window.setTimeout(navigateOnce, NAV_TIMEOUT_MS);

  return false;
}
