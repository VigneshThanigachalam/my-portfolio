import React from "react";
import { Link } from "react-router-dom";
import contactImg from "../assets/img/contact-img.svg";


export const SkillCard = (props) => {
    return (
        <>
                {/* <Link to="/blog/:id" className="blog-card"> */}
                  <div className="card-image py-4">
                    <img src={props.image} alt="blog" className="img-fluid w-50" />
                  </div>
                  <div className="blog-content">
                    <h5 className="title">
                      {props.name}
                    </h5>
                    
                    {/* <Link to="/blog/:id" className="button">Read More</Link> */}
                  </div>
                {/* </Link> */}
        </>
    );
};
