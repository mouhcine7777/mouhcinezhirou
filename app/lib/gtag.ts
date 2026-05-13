export function gtagSendEvent() {
    if (
      typeof window !== "undefined" &&
      typeof (window as any).gtag === "function"
    ) {
      // Envoyer l'événement GA4 — Google Ads le récupère automatiquement
      (window as any).gtag("event", "conversion_event_contact");
    }
  }