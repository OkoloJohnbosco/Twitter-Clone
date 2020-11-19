import React from "react";
import "./Backdrop.css";
import { motion } from "framer-motion";

function Backdrop({ children, close }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={close}
      className="backdrop"
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;
