"use client";
import ReactGA from "react-ga";
import { FC, ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

interface GoogleAnalyticsProps {
  children: ReactNode;
}

const GoogleAnalytics: FC<GoogleAnalyticsProps> = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLEANALYTICS!);

    const handleRouteChange = (url: URL) => {
      ReactGA.pageview(url.pathname);
    };
    //@ts-expect-error
    handleRouteChange(new URL(router.asPath, window.location.origin));

    const handleNavigation = (event: CustomEvent) => {
      if (event.detail.route) {
        handleRouteChange(new URL(event.detail.route, window.location.origin));
      }
    };

    window.addEventListener(
      "appStateChange",
      handleNavigation as EventListener
    );

    return () => {
      window.removeEventListener(
        "appStateChange",
        handleNavigation as EventListener
      );
    };
  }, []);

  return <>{children}</>;
};

export default GoogleAnalytics;
