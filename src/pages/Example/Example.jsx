import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ExampleBack from "./back/ExampleBack";
import ExampleFront from "./front/ExampleFront";

const Example = () => {
  const [isFront, setIsFront] = useState(true);

  const onClick = () => setIsFront((prev) => !prev);

  return (
    <AnimatePresence mode="wait">
      {isFront ? (
        <motion.div
          key={"front"}
          onClick={onClick}
          initial={{ rotateY: 180 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: 0 }}
          transition={{ duration: 0.6 }}
          display="flex"
          style={{
            transformStyle: "preserve-3d",
            justifyItems: "center",
          }}
        >
          <ExampleFront />
        </motion.div>
      ) : (
        <motion.div
          key={"back"}
          onClick={onClick}
          initial={{ rotateY: -180 }}
          animate={{ rotateY: 0 }}
          exit={{ rotateY: 0 }}
          transition={{ duration: 0.6 }}
          display="flex"
          style={{
            transformStyle: "preserve-3d",
            justifyItems: "center",
          }}
        >
          <ExampleBack />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Example;
