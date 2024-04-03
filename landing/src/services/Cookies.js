"use client";
import Script from "next/script";

export const CookieConsent = () => {
  return (
    <div>
      <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="a22d4341-c516-40c6-b7e3-8b2a928acbb8" type="text/javascript" />
    </div>
  );
};
