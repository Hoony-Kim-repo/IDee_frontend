import { Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const IDCard = ({ front: Front, back: Back }) => {
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
            width: "100%",
            height: "100%",
          }}
        >
          {Front ? <Front /> : <Text>No FrontGround Yet</Text>}
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
          {Back ? <Back /> : <Text>No BackGround Yet</Text>}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IDCard;
