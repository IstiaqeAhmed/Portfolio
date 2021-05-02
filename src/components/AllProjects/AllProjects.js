import React from "react";

const AllProjects = () => {
  var Carousel = require("3d-react-carousal").Carousel;
  let slides = [
    <img src="https://i.ibb.co/XpmRkNT/masterdriving.png" alt="1" />,
    <img src="https://i.ibb.co/7z48H6h/masterdriving1.png" alt="2" />,
    <img src="https://i.ibb.co/0mZWRnj/masterdriving2.png" alt="3" />,
  ];
  let slides1 = [
    <img src="https://i.ibb.co/HB8fY9d/freshproduct.png" alt="1" />,
    <img src="https://i.ibb.co/g36tVWK/freshproduct1.png" alt="2" />,
    <img src="https://i.ibb.co/x2tWP3Z/freshproduct3.png" alt="3" />,
  ];
  let slides2 = [
    <img src="https://i.ibb.co/RCmL0k3/supremrider.png" alt="1" />,
    <img src="https://i.ibb.co/DCxr7x1/supremerider1.png" alt="2" />,
    <img src="https://i.ibb.co/W0qCryj/supremerider3.png" alt="3" />,
  ];
  let slides3 = [
    <img src="https://i.ibb.co/b7xp2pn/clubfootball.png" alt="1" />,
    <img src="https://i.ibb.co/n6Y7dSv/clubfootball1.png" alt="2" />,
    <img src="https://i.ibb.co/DgBpXKZ/clubfootball2.png" alt="3" />,
  ];

  return (
    <div>
      {" "}
      <br />
      {/* first slide */}
      <div
        className="row box"
        style={{
          color: "white",
          border: "3px solid #17A2B8",
          borderRadius: "2px",
          padding: "20px",
          margin: "20px",
        }}
      >
        <div className="col-md-5">
          <h1>
            Master <span class="text-info">Driving</span>
          </h1>
          <ul>
            <li>
              This Website provides information on driving courses and admission
              to the course.
            </li>
            <li>
              Developed this full-stack website in this way where it can detect
              the entrance of user or admin.And also can show the result
              according to the user or admin.
            </li>
            <li>
              Users can admit any courses and give feedback.Admin can make both
              courses and admin. And also can see the detailed information of
              users.
            </li>
            <li>
              All the interaction information is saved in the database and is
              loaded from the database.
            </li>
          </ul>
          <p>
            <b>Technology:</b> React,React Router,Node.js,MongoDB,Firebase
            Authentication,Heroku,Bootstrap,CSS3,HTML5
          </p>
          <br />
          <a
            target="_blank"
            href="https://github.com/IstiaqeAhmed/drivingSchool"
          >
            <button
              style={{ width: "150px" }}
              type="button"
              class="btn btn-outline-info ml-2"
            >
              <b> Github</b>
            </button>
          </a>
          <a target="_blank" href="https://master-driving-db47d.web.app/">
            {" "}
            <button
              type="button"
              style={{ width: "150px" }}
              class="btn btn-info ml-2"
            >
              <b>Website</b>
            </button>
          </a>
        </div>
        <div className="col-md-7" style={{ padding: "50px" }}>
          <Carousel slides={slides} autoplay={false} interval={1000} />
        </div>
      </div>{" "}
      <br />
      {/* slide 2 */}
      <div
        className="row box"
        style={{
          color: "white",
          border: "3px solid #17A2B8",
          borderRadius: "2px",
          padding: "20px",
          margin: "20px",
        }}
      >
        <div className="col-md-5">
          <h1>
            Fresh <span class="text-info"> Product</span>
          </h1>
          <ul>
            <li> This is an E-commerce based Website</li>
            <li>
              Engineered the full-stack website so that users can choose any
              Product.Using the cart user can see their product.
            </li>
            <li>
              Besides admin can see all the user details and can update product
              for everyone which is shown on the home page.
            </li>
            <li>
              All the interaction information is saved in the database and is
              loaded from the database.MongoDB is used in this purpose.
            </li>
          </ul>
          <p>
            <b>Technology:</b> React,React Router,Node.js,MongoDB,Firebase
            Authentication,Heroku,Bootstrap,CSS3,HTML5
          </p>
          <a href="https://github.com/IstiaqeAhmed/fresh-product">
            <button
              style={{ width: "150px" }}
              type="button"
              class="btn btn-outline-info ml-2"
            >
              {" "}
              <b>Github</b>{" "}
            </button>
          </a>
          <a
            target="_blank"
            href="https://fresh-product-9f3c7.firebaseapp.com/"
          >
            {" "}
            <button
              style={{ width: "150px" }}
              type="button"
              class="btn btn-info ml-2"
            >
              <b>Website</b>
            </button>
          </a>
        </div>
        <div className="col-md-7" style={{ padding: "50px" }}>
          <Carousel slides={slides1} autoplay={false} interval={1000} />
        </div>
      </div>{" "}
      <br />
      {/* slide 3 */}
      <div
        className="row box"
        style={{
          color: "white",
          border: "3px solid #17A2B8",
          borderRadius: "2px",
          padding: "20px",
          margin: "20px",
        }}
      >
        <div className="col-md-5">
          <h1>
            Supreme <span class="text-info"> Rider</span>
          </h1>
          <ul>
            <li> This is a Ride sharing Application.</li>
            <li>
              Created a Ride Sharing website where users can book his/her
              suitable Ride for any places.React router is used in this purpose.
            </li>
            <li>
              Using google map user and rider can see their destination way
            </li>
            <li>
              This site is capable of securing both user's and rider
              information.
            </li>
          </ul>
          <p>
            <b>Technology:</b>
            React,React RouterFirebase Authentication,Netlify,Material
            UI,Bootstrap,CSS3,HTML5
          </p>
          <a
            target="_blank"
            href="https://github.com/IstiaqeAhmed/supreme-rider"
          >
            <button
              style={{ width: "150px" }}
              type="button"
              class="btn btn-outline-info ml-2"
            >
              <b> Github</b>
            </button>
          </a>
          <a target="_blank" href="https://supreme-rider-952dc.web.app/home">
            {" "}
            <button
              style={{ width: "150px" }}
              type="button"
              class="btn btn-info ml-2"
            >
              <b>Website</b>
            </button>
          </a>
        </div>
        <div className="col-md-7" style={{ padding: "50px" }}>
          <Carousel slides={slides2} autoplay={false} interval={1000} />
        </div>
      </div>{" "}
      <br />
      {/* slide 4 */}
      <div
        className="row box"
        style={{
          color: "white",
          border: "3px solid #17A2B8",
          borderRadius: "2px",
          padding: "20px",
          margin: "20px",
        }}
      >
        <div className="col-md-5">
          <h1>
            Club Football <span class="text-info"> Association</span>
          </h1>
          <ul>
            <li> This is a Club football based Website. </li>
            <li> Where the user can see the website of any device.</li>
            <li>User can see all information about club</li>
            <li>User gain knowledge about club from this website</li>
          </ul>
          <p>
            <b>Technology:</b> React,React RouterFirebase
            Authentication,Netlify,Material UI,Bootstrap,CSS3,HTML5
          </p>
          <a
            target="_blank"
            href="https://github.com/Porgramming-Hero-web-course/react-router-IstiaqeAhmed"
          >
            <button
              style={{ width: "150px" }}
              type="button"
              class="btn btn-outline-info ml-2"
            >
              <b> Github</b>
            </button>
          </a>
          <a target="_blank" href="https://festive-easley-82ac63.netlify.app/">
            {" "}
            <button
              style={{ width: "150px" }}
              type="button"
              class="btn btn-info ml-2"
            >
              <b>Website</b>
            </button>
          </a>
        </div>
        <div className="col-md-7" style={{ padding: "50px" }}>
          <Carousel slides={slides3} autoplay={false} interval={1000} />
        </div>
      </div>{" "}
      <br /> <br />
    </div>
  );
};

export default AllProjects;
