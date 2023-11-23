import React from "react";
import { ReactComponent as Html } from "../../assets/html.svg";
import { ReactComponent as Css } from "../../assets/css.svg";
import { ReactComponent as Js } from "../../assets/js.svg";
import { ReactComponent as Ts } from "../../assets/ts.svg";
import { ReactComponent as Node } from "../../assets/node.svg";
import { ReactComponent as Reacti } from "../../assets/react.svg";
import { ReactComponent as Fire } from "../../assets/fire.svg";
import { ReactComponent as Boot } from "../../assets/boot.svg";
import { ReactComponent as Figma } from "../../assets/figma.svg";
import { ReactComponent as Git } from "../../assets/git.svg";
import { ReactComponent as Gulp } from "../../assets/gulp.svg";
import { ReactComponent as Post } from "../../assets/post.svg";

const About = () => {
  return (
    <div id="about">
      <div>
        <h2>About</h2>
        <p>
          Hello! My name is Sindhu and I am a self taught frontend developer.
        </p>
        <p>
          The scope of my work is mostly includes responsive design, design to
          html css js, CSS/JS annimations,react, firebase, REST APIs
          and other works based on web development and javascript.
        </p>
        {/* <p>
          That being said, I like learning all aspects of web development and
          take pride in my fullstack work. Because of this, I am always open to
          new projects in new development environments.
        </p> */}
      </div>
      <div>
        <h3 style={{ marginTop: "2rem" }}>Current Skills</h3>
        <div className="skillgrid">
          <div>
            <div className="skillemblem">
              <Html />
            </div>
            <p>HTML5</p>
          </div>
          <div>
            <div className="skillemblem">
              <Css />
            </div>
            <p>CSS3</p>
          </div>
          <div>
            <div className="skillemblem">
              <Js />
            </div>
            <p>JS</p>
          </div>
          
         
          <div>
            <div className="skillemblem">
              <Reacti />
            </div>
            <p>React</p>
          </div>
          <div>
            <div className="skillemblem">
              <Figma />
            </div>
            <p>Figma</p>
          </div>
          <div>
            <div className="skillemblem">
              <Boot />
            </div>
            <p>Bootstrap</p>
          </div>
          
          <div>
            <div className="skillemblem">
              <Git />
            </div>
            <p>Git</p>
          </div>
          {/* <div> */}
            {/* <div className="skillemblem">
              <Gulp />
            </div>
            <p>Gulp</p>
          </div>
          <div> */}
            {/* <div className="skillemblem">
              <Post />
            </div>
            <p>Postgresql</p>
          </div> */}
        </div>
      </div>
      <div>
        {/* <h3>Programming Directive</h3>
        <p>Consume, as in to consume knowledge to serve the end user.</p>
        <p>
          Enhance, as in to share solutions in order to enhance the problem.
        </p>
        <p>
          Replicate, as in to replicate the process to consistently solve
          problems.
        </p> */}
      </div>
    </div>
  );
};

export default About;
