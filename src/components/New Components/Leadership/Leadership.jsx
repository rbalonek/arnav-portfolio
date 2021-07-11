import React from "react";
import "./Leadership.css";
import LeadershipCard from "./LeadershipCard/LeadershipCard";

import SpeechDebate from "../../../assets/SpeechandDebate.png";
import JvSoccer from "../../../assets/JvSoccerWider.jpg";
import FBLA from "../../../assets/FBLA.jpg";
import Economics from "../../../assets/Economics.jpg";
import LeadershipOutside from "./LeadershipOutside/LeadershipOutside";

export default function Leadership() {
  return (
    <div className="leadership__container">
      <div className="leadership__banner">
        <h1>Leadership at School</h1>
      </div>

      <div className="leadership-card__holder">
        <LeadershipCard
          title="Co-President: Lynbrook Speech and Debate Club"
          heroImg={SpeechDebate}
          url="https://lynbrooksd.wixsite.com/lhssd"
        />
        <LeadershipCard
          title="Captain: Lynbrook Junior Varsity Soccer Team"
          heroImg={JvSoccer}
          url="https://lynbrookathletics.com/teams/2068897/boys/soccer/junior%20varsity"
        />
        <LeadershipCard
          title="Secretary/Treasurer: FBLA"
          heroImg={FBLA}
          url="https://www.lynbrookfbla.com/"
        />
        <LeadershipCard
          title="Division 1 Captain: Economics Club"
          heroImg={Economics}
          url="https://www.lynbrookecon.org/"
        />
      </div>
      <div className="leadership__banner">
        <h1>Leadership Outside School</h1>
      </div>
      <LeadershipOutside />
    </div>
  );
}
