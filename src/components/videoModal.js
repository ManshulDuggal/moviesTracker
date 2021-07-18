import React, { useState } from "react";
import ReactDOM from "react-dom";
import ModalVideo from "react-modal-video";
import "../main.scss";

import styled from "styled-components";
import { motion } from "framer-motion";
import { CardHover } from "../anim/Anim";

export const VideoModal = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />
      <Preview>
        <motion.button
          variants={CardHover}
          whileHover="whileHover"
          className="preview"
          onClick={() => setOpen(true)}
        >
          VIEW DEMO
        </motion.button>
      </Preview>
    </React.Fragment>
  );
};

const Preview = styled.div`
.preview {
  border-bottom-left-radius: 1rem;
  border-top-left-radius: 0rem;
  border-bottom-right-radius: 1rem;
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
  }`;

ReactDOM.render(<VideoModal />, document.getElementById("root"));
