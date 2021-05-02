import React from "react";
import { useHistory } from "react-router-dom";
import "./RecentProjects.css";

const RecentProjects = () => {
  const history = useHistory();
  const handleAllProjects = () => {
    history.push("/allProjects");
  };
  return (
    <div className="container ">
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginBottom: "80px",
          fontSize: "60px",
        }}
      >
        Recent <span class="text-info">Projects</span>{" "}
      </h1>
      <div class="card-deck ">
        <div class="card box">
          <img
            src="https://i.ibb.co/XpmRkNT/masterdriving.png"
            class="card-img-top img-fluid"
            alt="..."
          />
          <div class="card-body " style={{ color: "white" }}>
            <h5 style={{ textAlign: "center" }} class="card-title">
              Master <span class="text-info">Driving</span>{" "}
            </h5>
            <p class="card-text">
              This Website provides information on driving courses and admission
              to the course.User can admit courses and pay for course.
            </p>
          </div>
          <div class="card-footer">
            <a
              target="_blank"
              href="https://github.com/IstiaqeAhmed/drivingSchool"
            >
              <button
                style={{ width: "305px", marginBottom: "7px" }}
                type="button"
                class="btn btn-outline-info ml-2"
              >
                <b> Github</b>
              </button>
            </a>{" "}
            <br />
            <a target="_blank" href="https://master-driving-db47d.web.app/">
              {" "}
              <button
                type="button"
                style={{ width: "305px", marginBottom: "7px" }}
                class="btn btn-info ml-2"
              >
                <b>Website</b>
              </button>
            </a>
            <a href="">
              <button
                onClick={handleAllProjects}
                style={{ width: "305px", marginBottom: "7px" }}
                type="button"
                class="btn btn-outline-info ml-2"
              >
                {" "}
                <b>Visit All Projects</b>{" "}
              </button>
            </a>
          </div>
        </div>
        <div class="card box">
          <img
            src="
            https://i.ibb.co/HB8fY9d/freshproduct.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body" style={{ color: "white" }}>
            <h5 style={{ textAlign: "center" }} class="card-title">
              Fresh <span class="text-info">Product</span>{" "}
            </h5>
            <p class="card-text">
              This is an E-commerce based Website. Besides admin can see all the
              user details and can update product for everyone which is shown on
              the home page.
            </p>
          </div>
          <div class="card-footer">
            <a href="https://github.com/IstiaqeAhmed/fresh-product">
              <button
                style={{ width: "305px", marginBottom: "7px" }}
                type="button"
                class="btn btn-outline-info ml-2"
              >
                {" "}
                <b>Github</b>{" "}
              </button>
            </a>{" "}
            <br />
            <a
              target="_blank"
              href="https://fresh-product-9f3c7.firebaseapp.com/"
            >
              {" "}
              <button
                style={{ width: "305px", marginBottom: "7px" }}
                type="button"
                class="btn btn-info ml-2"
              >
                <b>Website</b>
              </button>
            </a>
            <a href="">
              <button
                onClick={handleAllProjects}
                style={{ width: "305px", marginBottom: "7px" }}
                type="button"
                class="btn btn-outline-info ml-2"
              >
                {" "}
                <b>Visit All Projects</b>{" "}
              </button>
            </a>
          </div>
        </div>
        <div class="card box">
          <img
            src="https://i.ibb.co/b7xp2pn/clubfootball.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body" style={{ color: "white" }}>
            <h5 style={{ textAlign: "center" }} class="card-title">
              Club Football <span class="text-info"> Association</span>
            </h5>
            <p class="card-text">
              This is a Club football based Website. User can see information
              about their favorite league,club and player.
            </p>
          </div>
          <div class="card-footer">
            <a
              target="_blank"
              href="https://github.com/Porgramming-Hero-web-course/react-router-IstiaqeAhmed"
            >
              <button
                style={{ width: "305px", marginBottom: "7px" }}
                type="button"
                class="btn btn-outline-info ml-2"
              >
                <b> Github</b>
              </button>
            </a>{" "}
            <br />
            <a
              target="_blank"
              href="https://festive-easley-82ac63.netlify.app/"
            >
              {" "}
              <button
                style={{ width: "305px", marginBottom: "7px" }}
                type="button"
                class="btn btn-info ml-2"
              >
                <b>Website</b>
              </button>
            </a>
            <button
              onClick={handleAllProjects}
              style={{ width: "305px", marginBottom: "7px" }}
              type="button"
              class="btn btn-outline-info ml-2"
            >
              {" "}
              <b>Visit All Projects</b>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
