import React from "react";
import Page from "../components/Images/PNF.jpg";
import { useNavigate } from "react-router-dom";
import "./PNF.css";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container d-flex flex-wrap justify-content-center text-center align-items-center position-relative mt-5">
        <div className="container  justify-content-center  ">
          <h3 className="modal-title mt-3 quicksand"> Oops! Did you Lost?</h3>

          <img
            src={Page}
            className="object-fit-fill border rounded w-50 mt-3"
            alt="..."
          />

          <h4 className="mt-3  roboto">Then go back to : </h4>
          <button
            type="button"
            className="btn btn-hover fs-5 fw-semibold roboto"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
