import React from "react";
import EngagementItem from "../../components/EngagementStuff/EngagementItem/EngagementItem";
import "./Engagement.css";
import { Button } from "react-bootstrap";

import ThunderShots from "../../assets/ThunderShotSite.png";
import PaperBridges from "../../assets/PaperBridges.png";
import KoreKloud from "../../assets/KoreKloud.png";
import SpecialOlymipcs from "../../assets/SpecialOlympics.webp";
import EEI from "../../assets/EEI.png";

import Eei from "../../components/EEI/Eei";

export default function engagement() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Community Engagement</h1>
      <hr />
      <div className="engagement-items__container">
        <EngagementItem
          className="engagement-item-card"
          banner={ThunderShots}
          title="Thunder Shots"
          position="Founder & CEO"
          subtitle="International non-profit organization"
          description="Soccer is my passion and I have been playing soccer since the age of 6. I started this organization during the tough times of COVID to connect our global community through soccer and help kids develop leadership, compassion, and teamwork skills. "
          points={[
            "Built an organization from scratch, have a solid team of 25+ members from diverse backgrounds. Assigned roles and responsibilities for Marketing, Operations, Outreach, Finance, and IT etc.",
            "Hosted 100+ trainings, webinars and co-write blogs/prepare video tutorials for community kids, refugee camps in Africa, and orphanages in Peru. Impacted over 500+ kids during COVID with safety precautions.",
            "Visited and stayed at Casa Hogar Orphanage in Peru to connect with them through soccer. Shared resources to bring a smile on their faces and experience the life of underprivileged children.",
            "Built partnerships with Special Olympics, Paper bridges, and iACT",
            "Successfully ran donation campaigns to become financially independent (Raised over $4000 in donations).",
          ]}
          websiteLink="https://www.thethundershots.org/"
        />

        <EngagementItem
          className="engagement-item-card"
          banner={PaperBridges}
          title="Paper Bridges"
          position="California State President"
          subtitle="Non-profit organization"
          description="Paper bridges is an NPO to support orphans and vulnerable children around the world. Since my engagement, we started 18 active chapters throughout California and have paired each chapter with an orphanage in Peru and Nepal where we oversee projects such as digital letter campaigns, art kits distribution, fundraisers, etc."
          points={[]}
          websiteLink="https://www.paper-bridges.org/"
        />

        <EngagementItem
          className="engagement-item-card"
          banner={KoreKloud}
          title="Kore Cloud"
          position="Vice President of Marketing (Since Sep 2020)"
          subtitle="Director of Operations	Sep 2019–Aug 2020"
          description="I helped start this nonprofit organization to provide a variety of educational programs, free of charge, to needy students through digital/in person classes. "
          points={[
            "Developed an intensive business, finance and economics course garnering 100+ students (5 countries).",
            "Managed social media platforms to engage 700+ students for over 25 different courses/ workshops.",
            "Oversaw product development for 20+ courses and workshops including java, biology, economics, and math competition courses reaching 200+ students.",
          ]}
          websiteLink="https://www.korekloud.org/"
        />

        <EngagementItem
          className="engagement-item-card"
          banner={SpecialOlymipcs}
          title="Special Olympics"
          position="Soccer Coach"
          subtitle=""
          description="Special Olympics is the world's largest sports organization for children and adults with disabilities providing year-round training."
          points={[
            "Coached (virtual) 200+ kids, helped lead drills ",
            "A donor to Special Olympics from the funds raised from The Thunder Shots NPO.",
          ]}
          websiteLink="https://www.thethundershots.org/special-olympics"
        />

        <Eei
          className="engagement-item-card"
          banner={EEI}
          title="Economics Education Initiative"
          position="Product Development"
          subtitle="business education NPO"
          description="EEI is a business education NPO with workshops across US and Caribbean. It has a reach to 1800+ students."
          points={[
            "Leveraged Economics and Financial Literacy Curriculum and held online workshops with EEI community.",
            "The EEI is committed to catering a multifaceted and research-based curriculum to our students. Our primary pillars of focus include financial literacy, design thinking, and investing. Through gamifying and exploring the core fundamentals aforementioned topics, the EEI aims to empower our students to be eccentrically thought leaders and thinkers!",
          ]}
          videoOne="https://res.cloudinary.com/bobalobbadingdong/video/upload/v1624838466/Arnav/EEI_VID_1_dglk4y.mp4"
          videoTwo="https://res.cloudinary.com/bobalobbadingdong/video/upload/v1624838559/Arnav/EEI_VID_2_m39teq.mp4"
          videoThree="https://res.cloudinary.com/bobalobbadingdong/video/upload/v1624838612/Arnav/EEI_VID_4_zl8krs.mp4"
          websiteLink="https://www.eeinj.org/course-details.html"
        />
      </div>

      <div className="next-page-button__engagement">
        <a href="/workexperience">
          <Button variant="primary" size="lg">
            Next Page >
          </Button>
        </a>
      </div>
    </div>
  );
}
