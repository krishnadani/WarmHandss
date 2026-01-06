import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhoWeAre from "./components/WhoWeAre";
import WhatWeDo from "./components/WhatWeDo";
import NewsEvents from "./components/NewsEvents";
import GetInvolved from "./components/GetInvolved";
import WhyTrustUs from "./components/WhyTrustUs";
import DonatePage from "./components/DonatePage";
import ContactUs from "./components/ContactUs";
import DonateCausesPage from "./components/DonateCausesPage";
import CauseStory from "./components/CauseStory";
import HelpRequestPage from "./components/HelpRequestPage";
import Footer from "./components/Footer";

function App() {
  const [showContact, setShowContact] = useState(false);
  const [showDonate, setShowDonate] = useState(false);
  const [showCauses, setShowCauses] = useState(false);
  const [showStory, setShowStory] = useState(null);
  const [showHelp, setShowHelp] = useState(false);

  return (
    <div>
      <Navbar
        onContactClick={() => {
          setShowContact(true);
          setShowDonate(false);
          setShowCauses(false);
        }}
        onDonateClick={() => {
          setShowDonate(true);
          setShowContact(false);
          setShowCauses(false);
        }}
      />

      {showStory ? (
        <>
          <CauseStory story={showStory} onBack={() => setShowStory(null)} />
          <Footer />
        </>
      ) : showContact ? (
        <>
          <ContactUs onBack={() => setShowContact(false)} />
          <Footer />
        </>
      ) : showDonate ? (
        <>
          <DonatePage onBack={() => setShowDonate(false)} />
          <Footer />
        </>
      ) : showCauses ? (
        <>
          <DonateCausesPage
            onBack={() => setShowCauses(false)}
            onViewStory={(story) => setShowStory(story)}
          />
          <Footer />
        </>
      ) : showHelp ? (
        <>
          <HelpRequestPage onBack={() => setShowHelp(false)} />
          <Footer />
        </>
      ) : (
        <>
          <HeroSection
            onHeroDonate={() => setShowCauses(true)}
            onNeedHelp={() => setShowHelp(true)}
          />
          <WhoWeAre />
          <WhatWeDo
            onDonateClick={() => {
              setShowDonate(true);
              setShowCauses(false);
              setShowHelp(false);
              setShowStory(null);
            }}
          />
          <NewsEvents />
          <GetInvolved
            onDonateClick={() => {
              setShowDonate(true);
              setShowCauses(false);
              setShowHelp(false);
              setShowStory(null);
            }}
          />
          <WhyTrustUs />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
