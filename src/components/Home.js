import React from "react";
import "../styles/Home.css";
import SG from "../images/Skullgirls Logo.png";
import ToDo from "../images/Todo.PNG";
import TechDoc from "../images/TechnicalDoc.PNG";

import Modal from "../components/Modal.js";

import { useState } from "react";

function Home() {
  const [show, setShow] = useState(false);

  const [modalHeader, setModalHeader] = useState("");
  const [modalBody, setModalBody] = useState("");
  const [modalLink, setModalLink] = useState("");
  const [modalGithub, setModalGithub] = useState("");

  // function changeModal(project) {
  //   if(project === 'todo') {
  //     setModalHeader('To Do')
  //     setModalBody('This is a To Do List')
  //   } else if(project === 'techdoc') {
  //     setModalHeader('Technical Doc')
  //     setModalBody('This is a Technical Doc')
  //   } else if (project === 'sg') {
  //     setModalHeader('Skullgirls Logo')
  //     setModalBody('This is a Skullgirls Logo')
  //   } else if (project === 'landing') {
  //     setModalHeader('About Me')
  //     setModalBody('This is a About Me')
  //   }
  //   setShow(true)
  // }

  function changeModal(cardInfo) {
    setModalHeader(cardInfo.header);
    setModalBody(cardInfo.body);
    setModalLink(cardInfo.link);
    setModalGithub(cardInfo.github);
    setShow(true);
  }

  return (
    <>
      <div>
        {/* <h1>Welcome to my website!</h1> */}
        <div className="intro">
          <span className="bounce">H</span>
          <span className="bounce">I</span>
          <span className="bounce">,</span>
          <br />
          <span className="bounce">I</span>
          <span className="bounce">'</span>
          <span className="bounce">M</span>
          <br />
          <div className="name">
            <span className="A bounce">A</span>
            <span className="bounce">D</span>
            <span className="bounce">A</span>
            <span className="bounce">M</span>
            <span>&nbsp; </span>
            <span className="bounce">P</span>
            <span className="bounce">R</span>
            <span className="bounce">I</span>
            <span className="bounce">N</span>
            <span className="bounce">C</span>
            <span className="bounce">I</span>
            <span className="bounce">O</span>
            <span className="bounce">T</span>
            <span className="bounce">T</span>
            <span className="bounce">A</span>
          </div>
          <br />
          <span className="devTitle">F</span>
          <span className="devTitle">R</span>
          <span className="devTitle">O</span>
          <span className="devTitle">N</span>
          <span className="devTitle">T</span>
          <span>&nbsp; </span>
          <span className="devTitle">E</span>
          <span className="devTitle">N</span>
          <span className="devTitle">D</span>
          <span>&nbsp; </span>
          <span className="devTitle">D</span>
          <span className="devTitle">E</span>
          <span className="devTitle">V</span>
          <span className="devTitle">E</span>
          <span className="devTitle">L</span>
          <span className="devTitle">O</span>
          <span className="devTitle">P</span>
          <span className="devTitle">E</span>
          <span className="devTitle">R</span>
        </div>
      </div>

      <div className="scrollDown">
        <span className="movingScroll">Scroll Down</span> --{">"}
      </div>

      <div className="spacer"></div>
      <hr></hr>

      <div className="aboutMe">
        <h1>About Me</h1>
        <p>
          I'm a front-end developer with a passion for creating responsive and
          dynamic websites that deliver an exceptional user experience.
          <br />
          <br />
          With a strong eye for detail, I strive to design clean, elegant, and
          intuitive user interfaces that are both functional and visually
          appealing.
          <br />
          <br />
          My expertise lies in front-end technologies such as HTML, CSS, and
          JavaScript, with a focus on the React library.
          <br />
          <br />
          I began my coding journey in high school and pursued my passion by
          studying computer science in college, where I discovered my love for
          front-end development.
          <br />
          <br />
          I'm always eager to learn and grow, and I'm constantly seeking new
          opportunities to expand my skillset. The seemingly endless
          possibilities of programming amaze me, and I'm dedicated to staying
          up-to-date with the latest trends and technologies in the field.
          <br />
          <br />
          {/* Make this link to the contact page */}
          <a className="toContact">
            Let's work together to bring your web project to life!
          </a>
        </p>
      </div>
      <hr style={{ marginTop: "40px" }}></hr>
      <div className="portfolio">
        <h1>My Portfolio</h1>
        <div className="cards">
          <div
            className="card"
            onClick={() =>
              changeModal({
                header: "Online Video Database",
                body: "One more once is an online video database for the fighting game Skullgirls. It takes user submissions for links to matches and compiles them in one place. I created a customized dropdown menu to help decide which characters or teams the user would like to see. I also implemented a search functionality to help narrow down the matches to only those that the user would like to see.",
                link: "https://onemoreonce.net/",
                github:
                  "https://github.com/adamprinciotta/online_video_database",
              })
            }
          >
            <div className="card2">
              <div className="cardTitle">One More Once</div>
              <img src={SG}></img>
            </div>
          </div>
          <div
            className="card"
            onClick={() =>
              changeModal({ header: "To Do", body: "This is a To Do List" })
            }
          >
            <div className="card2">
              <div className="cardTitle">ToDo List</div>
              <img src={ToDo}></img>
            </div>
          </div>
          <div
            className="card"
            onClick={() =>
              changeModal({
                header: "Technical Doc",
                body: "This is a Technical Doc",
              })
            }
          >
            <div className="card2">
              <div className="cardTitle">Technical Documentation</div>
              <img src={TechDoc}></img>
            </div>
          </div>
          <div
            className="card"
            onClick={() =>
              changeModal({ header: "About Me", body: "This is a About Me" })
            }
          >
            <div className="card2">
              <div className="cardTitle">Landing Page</div>
              <img src={TechDoc}></img>
            </div>
          </div>
          <Modal
            title={modalHeader}
            link={modalLink}
            github={modalGithub}
            onClose={() => setShow(false)}
            show={show}
          >
            <p>{modalBody}</p>
          </Modal>
        </div>
      </div>
      {/* <div className="scrollDown2"><span className="movingScroll">Scroll Down</span> --{">"}</div> */}
      <hr style={{ marginTop: "40px" }}></hr>
      <div className="skills">
        <h1>Skills</h1>
        <div className="skillsList">
          <div className="skill">
            <div className="skillTitle">
              HTML <span class="skillSpan">80%</span>
            </div>
            <div className="skillBar">
              <div className="barPercent eighty"></div>
            </div>
          </div>
          <div className="skill">
            <div className="skillTitle">
              CSS <span class="skillSpan">75%</span>
            </div>
            <div className="skillBar">
              <div className="barPercent seventyFive"></div>
            </div>
          </div>
          <div className="skill">
            <div className="skillTitle">
              React <span class="skillSpan">75%</span>
            </div>
            <div className="skillBar">
              <div className="barPercent seventyFive"></div>
            </div>
          </div>
          <div className="skill">
            <div className="skillTitle">
              JavaScript <span class="skillSpan">85%</span>
            </div>
            <div className="skillBar">
              <div className="barPercent eightyFive"></div>
            </div>
          </div>
          <div className="skill">
            <div className="skillTitle">
              Node.js <span class="skillSpan">50%</span>
            </div>
            <div className="skillBar">
              <div className="barPercent fifty"></div>
            </div>
          </div>
          <div className="skill">
            <div className="skillTitle">
              MySQL <span class="skillSpan">40%</span>
            </div>
            <div className="skillBar">
              <div className="barPercent forty"></div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="spacer" style={{ marginTop: "100px" }}></div>
    </>
  );
}

export default Home;
