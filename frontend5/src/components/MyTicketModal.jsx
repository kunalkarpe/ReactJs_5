import React, { useState } from "react";
import "./Modal.css";

const MyTicket = ({ closeModal, name, image }) => {
  const price = 30;
  const [number, setNumber] = useState(0);
  const [nameInp, setNameInp] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [totalRs, setTotalRs] = useState(0);

  const submitForm = () => {
    localStorage.setItem("name", nameInp);
    localStorage.setItem("email", email);
    localStorage.setItem("age", age);
    localStorage.setItem("Total", totalRs);
    closeModal();
  };
  return (
    <>
      <div className="container modal-wrapper mt-5"></div>
      <div className="container modal-container mt-5">
        <h2 className="d-flex justify-content-center">My ticket</h2>

        <div className="container d-flex justify-content-center ">
          <img className="img-thumbnail " src={image} alt="" />
        </div>
        <p className="d-flex justify-content-center">
          <b>Movie : {name}</b>
        </p>

        <div className="container d-flex flex-row align-content-center justify-content-evenly">
          <div className="form d-flex flex-row">
            <div className=" container input-group input-group-sm d-flex flex-column">
              <h6>Name:</h6>{" "}
              <input
                type="text"
                className="input-group-text mb-2"
                value={nameInp}
                onChange={(e) => setNameInp(e.target.value)}
              />
            </div>
            <div className="container input-group-sm d-flex flex-column">
              <h6>Email:</h6>
              <input
                type="email"
                className="input-group-text mb-2"
                name="email"
                id=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="container input-group-sm d-flex flex-column">
              <h6>Age:</h6>
              <input
                type="number"
                className="input-group-text mb-2"
                name="age"
                id=""
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-evenly mt-2">
          <div className="container d-flex">
            <p className="card-text">
              <b> Price :</b>${price}
            </p>
          </div>
          <div className="container d-flex">
            <p className="card-text">
              Ticket Quantity:
              <input
                type="number"
                onChange={(e) => setNumber(e.target.value)}
              />
            </p>
          </div>
          <div className="container d-flex">
            <div
              className="card-text d-flex"
              value={totalRs}
              onChange={(e) => setTotalRs(e.target.value)}
            >
              Total :$ {price * number}
            </div>
          </div>
        </div>
        <button
          className="btn btn-outline-danger mt-3 mb-2 btn-sm"
          onClick={submitForm}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default MyTicket;
