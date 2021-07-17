import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import { CardHover } from "../anim/Anim";
//Rudux
import { useDispatch } from "react-redux";
import { getDetail } from "../redux/actions/detailsAction";
import { favoriteAddAction } from "../redux/actions/favouriteAction";

import { Link } from "react-router-dom";

const MovieCards = ({ name, rating, date, votes, img, id }) => {
  let imageLink = " https://image.tmdb.org/t/p/w342";

  const dispatch = useDispatch();
  const preview = () => {
    console.log("it ran");
  };
  const detailHandler = () => {
    document.body.style.overflow = "auto";
    dispatch(getDetail(id));
  };

  return (
    <div>
      <Wrapper>
        <motion.button
          variants={CardHover}
          whileHover="whileHover"
          onClick={() =>
            dispatch(favoriteAddAction({ name, rating, date, votes, img, id }))
          }
        >
          add to favorites
        </motion.button>
        <Link
          to={`/movie/${id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card
            variants={CardHover}
            whileHover="whileHover"
            onClick={detailHandler}
          >
            {/* <h2>{name}</h2>

            <h3>{date}</h3> */}

            <div className="poster">
              <img
                src={
                  img ? (
                    imageLink + img
                  ) : (
                    <div className="default-image"> notFound </div>
                  )
                }
                alt={img}
              />
            </div>
            <h4>
              votes:
              <span>{votes}</span>
              {rating}
            </h4>
          </Card>
        </Link>
        <motion.button
          className="preview"
          variants={CardHover}
          whileHover="whileHover"
          onClick={preview}
        >
          Preview
        </motion.button>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled(motion.div)`
  cursor: "pointer";
  button {
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    color: white;
    height: 30px;
    background-color: #00000060;
    width: 100%;
    overflow: hidden;
    border: none;
    &:hover {
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
      display: block;
      transition: all 0.2s ease-in-out;
      background-color: #34c717a4;

      cursor: pointer;
    }
  }

  .preview {
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border-top-left-radius: 0rem;
    border-top-right-radius: 0rem;
    color: white;
    height: 30px;
    background-color: #00000060;
    width: 100%;
    overflow: hidden;
    border: none;
    &:hover {
      border-bottom-left-radius: 1rem;
      border-bottom-right-radius: 1rem;
      border-top-left-radius: 0rem;
      border-top-right-radius: 0rem;
      display: block;
      transition: all 0.2s ease-in-out;
      background-color: #000000a3;

      cursor: pointer;
    }
    button {
    }
  }
`;

const Card = styled(motion.div)`
  background-color: white;
  border-radius: 2%;
  cursor: pointer;

  .default-image {
    height: 500px;
    img {
      height: 500px;
    }
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
    min-height: 40vh;
    max-height: 40vh;
  }

  box-shadow: #130101ba 1px 1px 20px;
  @media only screen and (max-width: 600px) {
    img {
      min-height: 30vh;
      max-height: 30vh;
    }
  }
`;

export default MovieCards;
