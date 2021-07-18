import React from "react";
import Modali, { useModali } from "modali";
import { motion } from "framer-motion";
import { CardHover } from "../anim/Anim";
import ReactHLS from "react-hls";
const Modal = () => {
  const [exampleModal, toggleExampleModal] = useModali();

  return (
    <div>
      <motion.button
        variants={CardHover}
        whileHover="whileHover"
        className="preview"
        onClick={toggleExampleModal}
      >
        Preview
      </motion.button>

      <Modali.Modal {...exampleModal}>
        {" "}
        <ReactHLS url="https://content.jwplatform.com/manifests/yp34SRmf.m3u8" />
      </Modali.Modal>
    </div>
  );
};

export default Modal;
