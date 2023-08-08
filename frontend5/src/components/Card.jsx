import React, { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";

import { Link } from "react-router-dom";

const Card = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = () => {
      console.log("Btn clicked");
      axios
        .get("https://api.tvmaze.com/search/shows?q=all")
        .then((res) => setData(res.data));
    };
    fetch();
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <div className="spinner-border mt-5" role="status">
            <span className="visually-hidden mt-5">Loading...</span>
          </div>
        </div>
      ) : (
        <div className=" d-flex flex-wrap mt-3 d-flex flex-row  m-3 p-3  justify-content-evenly ">
          {data
            .map((element) => {
              return element.show;
            })
            .map((show) => {
              return (
                <>
                  {console.log(show)}
                  <div className="  d-flex mb-5 me-3" key={show.id}>
                    <div className=" card card-w">
                      <img
                        src={
                          !show.image?.medium
                            ? "https://static.tvmaze.com/uploads/images/original_untouched/200/501970.jpg"
                            : show.image.medium
                        }
                        alt=""
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          <b>Movie : </b>
                          <Link
                            to={`/singlepage/shows/${show.id}`}
                            className="link-underline link-underline-opacity-0"
                          >
                            {show.name}
                          </Link>
                        </h5>
                        <p className="card-text">Language : {show.language}</p>
                        <p className="card-text">
                          Released on :
                          {!show.premiered ? "12-06-1990" : show.premiered}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      )}
      {/* <img src="..." className="card-img-top" alt="..." />

      <h5 className="card-title">Card title</h5>
      <p className="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p> */}
    </>
  );
};

export default Card;
