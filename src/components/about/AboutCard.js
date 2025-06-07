import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="white">Smruti Subhashree </span>
            from <span className="white"> Bhubaneswar, India.</span>
            <br />
            I am currently pursuing my B.Tech in Electronics and Communicatin Engineering from SRM Institute of Science and Technology.
            <br />
            I have completed certain courses for web development and looking for opportunities to learn and grow together.
            <br />
            <br />
            Apart from developing, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Horror Stories
            </li>
            <li className="about-activity">
              <ImPointRight /> Makeup
            </li>
          </ul>

          <p style={{ color: "rgb(255, 255, 255" }}>
            "Be who you are!"{" "}
          </p>
          <i>
          <footer className="blockquote-footer">Smruti</footer>
          </i>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
