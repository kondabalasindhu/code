import React, { useState } from "react";
import Modal from "simple-react-modal";
import Video from "../video/video.component";
import vsportfolio from "../../assets/vsportfolio.png";
import calloutsevolved from "../../assets/calloutsevolved.png";
import langsynth from "../../assets/langsynth.png";

const Frontend = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  return (
    <>
      <div className="gridlayout1">
        <div>
          <img src={vsportfolio} alt="Visual Studio Code Inspired Portfolio" height={350}/>
          {/* <img src={vsportfolio} alt="Visual Studio Code Inspired Portfolio" /> */}
        </div>
        <div>
          <h3>PROJECT1: LESM (Lancesoft Employee status Monitor)</h3>
          <p>
          Lancesoft Employee Status Monitor (LESM) is a web application that manages employee hiring, 
deployment, and client tenures, including expenses, salaries, and profit/loss calculations. LESM 
tracks employee information such as joining date, salary, and client billing. This application provides a 
hierarchical drill-down tree model, starting from the managing director trainee, showcasing details of 
all employees. LESM is an excellent solution for tracking employee status and revenues, providing 
valuable insights to the management.
          </p>
          <b>Responsibilities </b>
          <p>
          Developed a component for displaying the hierarchical drill-down tree model of employees.
          Retrieved employee data from the backend API.
          Incorporated a search bar and filtering options to enable users to easily locate specific 
          employees.
          Implemented functionality for filtering employees based on criteria such as Name, Employee 
          ID, and Department.
          Designed a component dedicated to presenting comprehensive information about a selected 
          employee.
          Established navigation from the employee list to the detailed employee profile page.
          Performed API calls to fetch employee data, encompassing details regarding hiring, 
          deployment, expenses, and client tenures.
          Managed authentication and authorization procedures to ensure secure access to employee 
          data.
          </p>
          <b>Features</b>
          {/* <p>98/100 performance, 100/100 SEO</p> */}
          <br />
          <p>React</p>
          <div className="gridlayout2">
          <a
              href="https://github.com/kondabalasindhu/LESM_project.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Code /&gt;
            </a>
   </div>
          
        </div>
      </div>
      <div className="gridlayout3">
        <div>
          <h3>PROJECT 2: OMG(Online Market for Groceries)
</h3>
          <p>
          The "Online Market for Groceries" project aims to create an e-commerce platform where customers 
can conveniently purchase groceries online. This platform will provide a seamless and user-friendly 
shopping experience, offering a wide range of products, secure payment options, and efficient 
delivery services
          </p>
          <b>Responsibilities</b>
          <p>
          Designed and implemented the homepage layout with featured products and promotions.
 Fetched and displayed product data from an API.
 Developed a user profile page where customers can view and update their personal 
information.
 Designed and built a shopping cart component to display the selected items.
 Implemented functionalities like adding/removing items, updating quantities, and calculating 
the total price.
 Integrated a secure payment gateway like Paytm for processing transactions
          </p>
         
          <p>
            <b>Version 1.0: HTML5, CSS3</b>
            <br />
            <b>Version 2.0: React, Redux</b>
            <br />
           {/* <b> All: Firebase, Web Speech API</b> */}
          </p>
          <div className="gridlayout2">
            <a
              href="https://github.com/kondabalasindhu/OMG"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Code /&gt;
            </a>
          </div>
          <Modal
            className="projectModal"
            containerClassName="projectModel__inner"
            closeOnOuterClick={true}
            show={modal2}
            onClose={() => setModal2(!modal2)}
          >
            <div>
              <button onClick={() => setModal2(!modal2)} className="closeModal">
                X
              </button>
              <Video source="https://www.youtube.com/embed/l34z2rXUW94" />
            </div>
          </Modal>
        </div>
        <div>
          <img
            src={calloutsevolved}
            alt="Real time alternative communication for disabled gamers"
          />
        </div>
      </div>
      <div className="gridlayout1">
      
        <div>
          {/* <h3>LangSynth</h3>
          <p>
            Learn to speak any number languages at your pace and as
            inexpensively as possible! This site memics high end features from
            other language learning platforms by incorperating the Web Speech
            API and Google’s Translation API.
          </p>
          <b>What problem it solves</b>
          <p>
            The end result allows users indicate what they want to say in
            another language through speech to text, then when their input is
            translated the site speaks the translated output and provides the
            user with a chance to practice the phrase.
          </p>
          <br />
          <p>Angular, TypeScript</p> */}
          {/* <div className="gridlayout2">
            <button onClick={() => setModal3(!modal3)}>&lt; Video /&gt;</button>
            <a
              href="https://github.com/MaverickCER/LangSynth"
              rel="noopener noreferrer"
            >
              &lt; Live Site /&gt;
            </a>
            <a
              href="https://github.com/MaverickCER/LangSynth"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Code /&gt;
            </a>
          </div> */}
          {/* <Modal
            className="projectModal"
            containerClassName="projectModel__inner"
            closeOnOuterClick={true}
            show={modal3}
            onClose={() => setModal3(!modal3)}
          > */}
            {/* <div>
              <button onClick={() => setModal3(!modal3)} className="closeModal">
                X
              </button>
              <Video source="https://www.youtube.com/embed/l34z2rXUW94" />
            </div>
          </Modal> */}
        </div>
      </div>
    </>
  );
};

export default Frontend;
