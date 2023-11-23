import React from "react";
import salon from "../../assets/salon.png";
import salonowner from "../../assets/salonowner.png";
import grad from "../../assets/grad.png";
import college from "../../assets/college.png"
import school from "../../assets/school.png";
import './test.css';

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>EDUCATION</h2>
      <div class="container qualification">
 
   <div class="row d-flex">
      <div class="col-sm-4">
         <div class="test-module">
            <img class="" src={grad} alt="" />
            <h3>B.Tech (69%)</h3>
            <h4>Priyadrshini Institute of Science <br/> & Tech for Women</h4>
         </div>
      </div>
      <div class="col-sm-4">
         <div class="test-module">
            <img class="" src={college} alt="" />
            <h3>Intermediate(65%)</h3>
            <h4>Krishnaveni<br/> Jr. College</h4>
         </div>
      </div>
      <div class="col-sm-4">
         <div class="test-module">
            <img class="" src={school} alt="" />
            <h3>SSC (8.7)</h3>
            <h4>Goodnews English <br/>Medium High School</h4>
         </div>
      </div>
   </div>
</div>
      <div className="gridlayout1">
        {/* <div>
          <img src={salon} alt="Mockup of Darling Salon Website" />
        </div> */}
        <div>
          {/* <div>
            <img
              className="clientPicture"
              src={salonowner}
              alt="Wendy Darling, the owner of Darling Salon"
            />
          </div> */}
          {/* <h3>
            <a
              href="https://codepen.io/maverickcer/pen/KKmPLxB"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fiverr.com
            </a>
          </h3> */}
          {/* <p>
            Maverick is a talented developer with very good design skills which
            surprised me with super professional communication skills and a
            strong marketing sense that enables him to see the big picture of
            projects.
          </p>
          <p>
            He will get the job done on time, suggest improvements, and will
            leave you with an overall feeling that you received a lot more then
            you paid for it.
          </p>
          <p>
            He goes the extra mile to create long-term partnerships, not just
            one-time jobs. A pleasure to work with.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
