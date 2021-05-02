import React from "react";
import { useHistory } from "react-router-dom";

const AboutMe = () => {
  const history = useHistory();
  const handleMessage = () => {
    history.push("/form");
  };
  return (
    <div
      className="container"
      style={{ display: "cover", backgroundColor: "#34495e" }}
    >
      <div style={{ textAlign: "center" }}>
        <img
          style={{ borderRadius: "50%", height: "210px" }}
          src="https://i.ibb.co/3Mm0rWm/778-copy.jpg"
          alt=""
        />
        <br />
        <br />
        <a
          target="_blank"
          href="https://www.linkedin.com/in/istiaqe-ahmed-khan-3984841aa/"
        >
          {" "}
          <button type="button" class="btn btn-outline-info ml-2">
            {" "}
            <b> LinkedIn</b>{" "}
          </button>
        </a>
        <a target="_blank" href="https://github.com/IstiaqeAhmed">
          {" "}
          <button type="button" class="btn btn-info ml-2">
            {" "}
            <b> Github</b>
          </button>
        </a>
        <br /> <br />
        <h5 style={{ color: "white" }}>
          A hard working, experienced website developer studying in Computer{" "}
          <br /> Science and Engineering. Passionate to programming, culture.
          <br />
          Math Lover and comfortable at football, cricket and badminton.
          <br /> A dreamer who works day and night <br /> to achieve the peak
          she cherishes.
        </h5>{" "}
        <br />
        <button
          type="button"
          onClick={handleMessage}
          class="btn btn-outline-info ml-2"
        >
          {" "}
          <b> Send Message</b>{" "}
        </button>
        <a href="https://drive.google.com/file/d/1gMTUZvfetCpHANoDXMkRsfLms9Tg39Y_/view?usp=sharing">
          <button type="button" class="btn btn-info ml-2">
            {" "}
            <b> Download Resume</b>
          </button>
        </a>
      </div>
      <br /> <br /> <br /> <br />
      <div class="card-deck" style={{ color: "white" }}>
        <div class="card">
          <div class="card-body box">
            <h4 class="card-title">Skills:</h4>
            <p class="card-text">
              <ul>
                <li>
                  <b>Expertise:</b> JavaScript, ES6, React, Bootstrap,
                  HTML5,Material UI CSS3, SCSS{" "}
                </li>
                <li>
                  <b>Comfortable:</b> Express, MongoDB, Firebase,Netlify,Heroku,
                  Node.js{" "}
                </li>
                <li>
                  <b>Familiar:</b> Stripe, Redux,C, OOP{" "}
                </li>
                <li>
                  <b>Tools:</b> Git, Github, Chrome Dev Tool, VS Code, Heroku,
                  Netlify, Firebase{" "}
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body box">
            <h4 class="card-title">Education:</h4>
            <p class="card-text">
              <b>B.Sc. in CSE(January 2017 - February 2021) </b> <br />
              <ul>
                <li>
                  <b>Institute:</b> Daffodil International University (DIU)
                </li>
                <li>
                  <b>Department:</b> Computer Science & Engineering (CSE)
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div class="card">
          <div class="card-body box">
            <h4 class="card-title">Personal Info:</h4>
            <p class="card-text">
              <ul>
                <li>
                  <b>Name:</b> Istiaqe Ahmed Khan
                </li>
                <li>
                  <b>Phone:</b> 01521307465
                </li>
                <li>
                  <b>Email:</b> istiaqeahmed.cse@gmail.com
                </li>
                <li>
                  <b>Death Of Birth:</b> 27 February, 1997
                </li>

                <li>
                  <b>Blood Group:</b> O+
                </li>
                <li>
                  <b>Nationality:</b> Bangladeshi
                </li>
                <li>
                  <b>Religion:</b> Islam
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <br /> <br /> <br />
    </div>
  );
};

export default AboutMe;
