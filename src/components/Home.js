import React from "react";
import "../styles/Home.css";
import SG from "../images/Skullgirls Logo.png";
import ToDo from "../images/Todo.PNG";
import TechDoc from "../images/TechnicalDoc.PNG";
import Eco from "../images/EcoImg.jpg";

import Modal from "../components/Modal.js";

import { useState, useEffect } from "react";

import emailjs from '@emailjs/browser'

function Home() {
  const [show, setShow] = useState(false);

  const [modalHeader, setModalHeader] = useState("");
  const [modalBody, setModalBody] = useState("");
  const [modalLink, setModalLink] = useState("");
  const [modalGithub, setModalGithub] = useState("");

  useEffect(() => {
    function animateOnScroll() {
      const scrollPosition = window.scrollY;
      const animateElements = document.querySelectorAll('.scroll-up');

      

      animateElements.forEach(function(element) {
        if (scrollPosition >= (element.offsetTop - window.innerHeight + 100)) {
          element.classList.add('scroll-up-active');
        }
        else if(scrollPosition <= (element.offsetTop - window.innerHeight + 100)){
          element.classList.remove('scroll-up-active');
        }
      });
    }

    window.addEventListener('scroll', animateOnScroll);
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  function changeModal(cardInfo) {
    setModalHeader(cardInfo.header);
    setModalBody(cardInfo.body);
    setModalLink(cardInfo.link);
    setModalGithub(cardInfo.github);
    setShow(true);
  }




  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted!")
    // emailjs.send("service_qftjt3r","template_fqgvajx");
    emailjs.send(process.env.REACT_APP_SERVICE_ID, "template_fqgvajx",{
      conctact_name: formData.name,
      contact_message: formData.message,
      contact_subject: formData.subject,
      reply_to: formData.email,
      contact_email: formData.email,
      }, process.env.REACT_APP_PUBLIC_KEY);
    // emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_PUBLIC_KEY)

    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   auth: {
    //     user: "your_email@example.com",
    //     pass: "your_password",
    //   },
    // });

    // const mailOptions = {
    //   from: formData.email,
    //   to: "your_email@example.com",
    //   subject: formData.subject,
    //   text: formData.message,
    // };

    // transporter.sendMail(mailOptions, function (error, info) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log("Email sent: " + info.response);
    //   }
    // });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };






  return (
    <>
      <div className="container">
        <navbar id="home">
          <nav>
            <div className="title">Adam Princiotta</div>
            <ul>
              <li>
                <a href="#home" 
                onClick={(e) => { 
                  e.preventDefault();
                  document.querySelector('#home').scrollIntoView({ 
                      behavior: 'smooth' 
                  }); 
              }}>Home</a>
              </li>
              <li>
                <a href="#about"
                onClick={(e) => { 
                  e.preventDefault();
                  document.querySelector('#about').scrollIntoView({ 
                      behavior: 'smooth' 
                  }); 
              }}>About Me</a>
              </li>
              <li>
                <a href="#portfolio" onClick={(e) => { 
                    e.preventDefault();
                    document.querySelector('#portfolio').scrollIntoView({ 
                        behavior: 'smooth' 
                    }); 
                }}>Portfolio</a>
              </li>
              <li>
                <a href="#skills" 
                onClick={(e) => { 
                  e.preventDefault();
                  document.querySelector('#skills').scrollIntoView({ 
                      behavior: 'smooth' 
                  }); 
              }}>Skills</a>
              </li>
              <li>
                <a href="#contact" 
                onClick={(e) => { 
                  e.preventDefault();
                  document.querySelector('#contact').scrollIntoView({ 
                      behavior: 'smooth' 
                  }); 
              }}>Contact</a>
              </li>
            </ul>
          </nav>
        </navbar>
        {/* <h1>Welcome to my website!</h1> */}
        <a className="scroll-up" href="#home" 
        onClick={(e) => { 
          e.preventDefault();
          document.querySelector('#home').scrollIntoView({ 
              behavior: 'smooth' 
          }); 
      }}><div className="arrow-up"/>Scroll Up</a>
        <div className="intro" >
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
            <div className="introSpacer"><br/></div>
            <span className="bounce Princiotta">P</span>
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
          <br className="titleBreak"/>
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
        <span className="movingScroll">Scroll Down</span> <div className="arrow-down"></div>
      </div>

      <div className="spacer"></div>
      <hr></hr>

      <div className="aboutMe" id="about">
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
          <a className="toContact" href="#contact"
          onClick={(e) => { 
            e.preventDefault();
            document.querySelector('#contact').scrollIntoView({ 
                behavior: 'smooth' 
            }); 
        }}>
            Let's work together to bring your web project to life!
          </a>
        </p>
      </div>
      <hr style={{ marginTop: "40px" }}></hr>
      <div className="portfolio" id="portfolio">
        <h1>My Portfolio</h1>
        <div className="cards">
          <div
            className="card"
            onClick={() =>
              changeModal({
                header: "Online Video Database",
                body: "One More Once is an online video database exclusively dedicated to hosting gameplay footage of the fighting game Skullgirls. It functions by gathering user submissions of match links and organizing them in a single, centralized location. To improve the user experience, I developed a tailored dropdown menu to allow for easy selection of preferred characters or teams to view. Additionally, I integrated a search feature to enable users to efficiently locate specific matches that align with their interests.",
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
              changeModal({
                header: "To Do List",
                body: "I developed a personalized task management system that is seamlessly connected to each user's account. This feature enables users to log in to their account from any device and keep track of their progress at any time. With this system, users have the flexibility to name their tasks, specify their due date and time, designate their task type, and select which days the task will recur. Once created, users can customize their tasks as needed and remove any that are no longer relevant. The system will display the task list only on the designated recurring days, and users can easily track their progress by marking each task as completed or incomplete.",
                link: "https://todoadamprinciotta.netlify.app/",
                github: "https://github.com/adamprinciotta/ToDo/tree/master/ToDo",
              })
            }
          >
            <div className="card2">
              <div className="cardTitle">To Do List</div>
              <img src={ToDo}></img>
            </div>
          </div>
          <div
            className="card"
            onClick={() =>
              changeModal({
                header: "Technical Documentation",
                body: "I developed a technical documentation page that comprehensively covers four core coding structures, namely variables, functions, loops, and conditionals. The documentation provides an explanation of each structure, including practical applications and coding examples to illustrate their use. The page is user-friendly, with a simple and intuitive navigation system that makes it easy for users to locate the information they need.",
                link: "https://adamprinciotta.github.io/Techincal-Documentation/",
                github: "https://github.com/adamprinciotta/Techincal-Documentation"
              })
            }
          >
            <div className="card2">
              <div className="cardTitle">Technical Documentation</div>
              <img src={TechDoc} ></img>
            </div>
          </div>
          <div
            className="card"
            onClick={() =>
              changeModal({
                header: "EcoBottle Landing Page",
                body: "I designed and developed a landing page for a fictitious company named EcoBottle. The page comprises several user-friendly features, including an intuitive navigation bar, a section for signing up to receive email updates from the company, a comprehensive list of features, a testimonial from a satisfied customer, a pricing section with images of the available options, a clear call-to-action message, and a copyright footer.",
                link: "https://adamprinciotta.github.io/Landing-Page/",
                github: "https://github.com/adamprinciotta/Landing-Page",
              })
            }
          >
            <div className="card2">
              <div className="cardTitle">Landing Page</div>
              <img src={Eco} width="100%" height="65%" objectFit="contain"></img>
            </div>
          </div>
          <Modal
            header={modalHeader}
            link={modalLink}
            github={modalGithub}
            onClose={() => setShow(false)}
            show={show}
            body={modalBody}
          >
            {/* <p>{modalBody}</p> */}
          </Modal>
        </div>
      </div>
      {/* <div className="scrollDown2"><span className="movingScroll">Scroll Down</span> --{">"}</div> */}
      <hr style={{ marginTop: "40px" }}></hr>
      <div className="skills" id="skills">
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
      {/* <div className="spacer" style={{ marginTop: "100px" }}></div> */}
      {/* <div className="contact" id="contact">
        <h1>Contact Me</h1>
        <div className="formBox">
          <div class="nameEmail">
            <div class="inputbox">
              <input required="required" type="text" />
              <span>Name</span>
              <i></i>
            </div>
            <br></br>
            <div class="inputbox">
              <input required="required" type="text" />
              <span>Email</span>
              <i></i>
            </div>
          </div>
          <div class="inputbox subject">
            <input required="required" type="text" />
            <span>Subject</span>
            <i></i>
          </div>
          <div class="inputbox message">
            <p className="messageP">Message</p>
            <textarea required="required" rows="10" id="textarea"></textarea>
          </div>
          <button className="sendMessageBtn" onClick={() => sendMessage}>Send Message</button>
        </div>
      </div> */}
      <div className="contact" id="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div className="formBox">
          <div className="nameEmail">
            <div className="inputbox">
              <input
                required="required"
                type="text"
                name="name"
                id="contact_name"
                value={formData.name}
                onChange={handleChange}
              />
              <span>Name</span>
              <i></i>
            </div>
            <br></br>
            <div className="inputbox">
              <input
                required="required"
                type="email"
                name="email"
                id="contact_email"
                value={formData.email}
                onChange={handleChange}
              />
              <span>Email</span>
              <i></i>
            </div>
          </div>
          <div className="inputbox subject">
            <input
              required="required"
              type="text"
              name="subject"
              id="contact_subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <span>Subject</span>
            <i></i>
          </div>
          <div className="inputbox message">
            <p className="messageP">Message</p>
            <textarea
              required="required"
              rows="10"
              id="contact_message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="sendMessageBtn" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </div>
  
    </>
  );
}

export default Home;
