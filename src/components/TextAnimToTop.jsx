import { motion } from "framer-motion";

const TextAnimToTop = ({ children, duration = 0.8, delay = 0, classname}) => {
  return (
    <motion.div
      className={classname}
      // start hidden + moved down
      initial={{ opacity: 0, y: 50 }}
      // animate when in view
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      // triggers when 20% is visible
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default TextAnimToTop;
