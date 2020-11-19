import React from "react";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import "./Modal.css";

function Modal({ imageUrl, setSelectedImg }) {
  const closeModal = (e) => {
    if (!e.target.classList.contains("modal__img")) {
      setSelectedImg(null);
    }
  };
  return (
    <Backdrop close={closeModal}>
      <motion.div
        initial={{ y: "-100px" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, type: "spring", stiffness: 250 }}
        className="modal__imageContainer"
      >
        <img src={imageUrl} alt="" role="presentation" className="modal__img" />
      </motion.div>
    </Backdrop>
  );
}

export default Modal;
