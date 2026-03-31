import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Only scroll to top if there's NO hash
    if (!window.location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // use "auto" if you want instant
      });
    }
  }, [location]);

  return null;
}
