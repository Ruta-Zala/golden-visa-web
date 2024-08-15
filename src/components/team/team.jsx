import React from "react";
import "./team.css";

import person1 from "/src/assets/team/2a079a739ab81665ffaf8d6bf79c6123.jpeg";
import person2 from "/src/assets/team/2cc9039a9719fa58d5312e73a492470f.jpeg";
import person3 from "/src/assets/team/19ee7af70bc413396a70596a9f78e414.jpeg";
import person4 from "/src/assets/team/27c93aa27a8665956627ed9981c5a296.jpeg";
import person5 from "/src/assets/team/b2afa92a5cc56a99731036b4a1a9744c.jpeg";
import person6 from "/src/assets/team/d11675305a77a342074db068f63469e0.jpeg";
import person7 from "/src/assets/team/57f8d7ea70bda5136d1f454b3b60be49.jpeg";

const teamMembers = [
  { name: "John Doe", title: "CEO & Co-founder", image: person1 },
  { name: "Jane Doe", title: "Blockchain Developer", image: person2 },
  { name: "John Doe", title: "Smart Contract Auditor", image: person3 },
  { name: "Jane Doe", title: "Community Manager", image: person4 },
  { name: "John Doe", title: "Tokenomics Lead", image: person5 },
  { name: "John Doe", title: "DAO Architect", image: person6 },
  { name: "Jane Doe", title: "Solidity Engineer", image: person7 },
];

const Team = () => {
  return (
    <div className="team-container max-w-screen-2xl mx-auto px-4 py-10">
      <div className="headline teamhead">
        <div className="tagline">
          <p>Building the Future of Web3</p>
        </div>
        <h1>Meet Our Team</h1>
        <p>
          Here, you'll encounter the passionate builders and visionaries shaping
          the future of Web3 at iOPN. We're a diverse group of technologists,
          crypto enthusiasts, and community champions, all united by a shared
          belief in a more decentralized and user-owned internet.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {teamMembers.map((member, index) => (
          <>
            <div
              className="team-member-card"
              key={index}
              style={{ backgroundImage: `url(${member.image})` }}
            >
              <div className="team-content">
                <h2 className="card-name">{member.name}</h2>
                <p className="card-title">{member.title}</p>
              </div>
            </div>
          </>
        ))}
        <div className="cta-team sm:col-span-2 lg:col-span-1">
          <div className="team-content-cta">
            <div>
              <h2>
                Passionate builders and visionaries shaping the future of Web3
              </h2>
              <p>Learn more about our team and get to know us better</p>
            </div>
            <div className="cta-arrow-2">
              <span>→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
