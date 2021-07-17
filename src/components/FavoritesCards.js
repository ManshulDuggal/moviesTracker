import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

//animations
import { CardHover } from "../anim/Anim";
//Rudux
import { useDispatch } from "react-redux";
import { getDetail } from "../redux/actions/detailsAction";
import { favoriteRemoveAction } from "../redux/actions/favouriteAction";
//link
import { Link } from "react-router-dom";
const FavoritesCards = ({ name, rating, date, votes, img, id, isLoading }) => {
  let imageLink = " https://image.tmdb.org/t/p/w342";

  const dispatch = useDispatch();
  //creating a new state after removing the card which user clicked on.

  const RemoveFav = (id) => {
    dispatch(favoriteRemoveAction(id));
    alert(name + " " + "removed from favourites");
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
          onClick={() => RemoveFav(id)}
        >
          remove
        </motion.button>
        <Link
          to={`/favorites/${id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card
            variants={CardHover}
            whileHover="whileHover"
            onClick={detailHandler}
          >
            {/* This right here is options if you wanna display the name, BUt then again I thought that the poster itself was 
            self explanatory :) */}
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
          <div></div>
        </Link>
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
      background-color: #b92512a3;

      cursor: pointer;
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
    /* object-fit: cover; */
    min-height: 50vh;
    max-height: 50vh;
  }

  box-shadow: #130101ba 1px 1px 20px;
  @media only screen and (max-width: 800px) {
    img {
      min-height: 30vh;
      max-height: 30vh;
    }
  }
`;

// const Favourites = styled.div`
//   z-index: 2;
//   border: none;
//   padding: 2rem;
//   button {
//     height: 20px;
//     width: 100%;
//   }
//   /* img {
//     cursor: pointer;
//     pointer-events: all;
//     width: 30px;
//   } */
// `;

export default FavoritesCards;
