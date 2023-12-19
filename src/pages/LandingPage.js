import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerComponent } from "src/components/BannerComponent";
import {
  CallToActionComponent,
  CallToActionComponentText,
} from "src/components/CallToActionComponent";
import { FiturComponent } from "src/components/FiturComponent";
import { NavbarComponentDefault } from "src/components/NavbarComponent";
import { ScreenshotComponent } from "src/components/ScreenshotComponent";
import { TestimonialComponent } from "src/components/TestimonialComponent";
import { MapComponent } from "src/components/MapComponent";
import { ContactComponent } from "src/components/ContactComponent";
import { FooterComponent } from "src/components/FooterComponent";
import { CounterComponent } from "src/components/CounterComponent";
import { ButtonRating, RatingComponent } from "src/components/RatingComponent";
import { useEffect, useState } from "react";
import getLinkDownload from "src/service/link-download/getLinkDownload";
import sendDownload from "src/service/download/sendDownload";
import sendVisit from "src/service/visit/sendVisit";

export function LandingPage() {
  const [showRating, setShowRating] = useState(false);
  const [pathDownload, setPathDownload] = useState("");

  useEffect(() => {
    getLinkDownload()
      .then((res) => {
        setPathDownload(res);
      })
      .catch((err) => {
        console.log(err);
      });

    sendVisit("-");
  }, []);

  function handleCounterDownload() {
    sendDownload("-");
  }

  return (
    <>
      <RatingComponent show={showRating} cancel={() => setShowRating(false)} />
      <ButtonRating
        action={() => {
          setShowRating(true);
        }}
      />
      <NavbarComponentDefault />
      <BannerComponent
        pathDownload={pathDownload}
        action={handleCounterDownload}
      />
      <CounterComponent />
      <FiturComponent />
      <CallToActionComponent
        pathDownload={pathDownload}
        action={handleCounterDownload}
      />
      <ScreenshotComponent />
      <TestimonialComponent />
      <CallToActionComponentText
        pathDownload={pathDownload}
        action={handleCounterDownload}
      />
      <MapComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  );
}
