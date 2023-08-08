import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MyTicket from "./MyTicketModal";

const SinglePage = () => {
  const params = useParams();

  const [singleData, setSingleData] = useState({});

  const [modal, setModal] = useState(false);

  const closeModal = () => setModal(false);

  const { name, image, summary, language, premiered, status } = singleData;

  useEffect(() => {
    const fetchById = () => {
      axios
        .get(`https://api.tvmaze.com/shows/${params.id}`)
        .then((res) => setSingleData(res.data));
    };
    fetchById();
  }, [params]);

  return (
    <>
      <div className="container mt-5">
        <div className="container mt-5 d-flex ">
          <div className="container mt-5 d-flex border border-dark border-1 rounded-3">
            <img
              className="img-fluid rounded m-3"
              src={
                !image?.medium
                  ? "https://static.tvmaze.com/uploads/images/original_untouched/200/501970.jpg"
                  : image.medium
              }
              alt=""
            />
            <div className="container ms-2 mt-3">
              <div className="card-body">
                <h5 className="card-title mt-2">{name}</h5>
              </div>
              <p className="card-text mt-4">{summary}</p>

              <div className="container d-flex flex-row justify-content-between">
                <p className="card-text">
                  <b>Language </b>: {!language ? "English" : language}
                </p>
                <p className="card-text">
                  <b>Status </b>: {status}
                </p>
                <p className="card-text">
                  <b>Released on : </b>
                  {premiered}
                </p>
              </div>

              <button
                type="button"
                className="btn btn-outline-success mb-4"
                onClick={() => setModal(true)}
              >
                Book Now !
              </button>
              {modal && (
                <MyTicket
                  closeModal={closeModal}
                  name={name}
                  image={image.medium}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
