import { motion } from "framer-motion";
import { CircleDot } from "lucide-react";
import React from "react";

export function Circle() {
  // const [state, setState] = React.useState<number>(0);
  return (
    <>
        <svg viewBox="0 0 100 100">
          <circle radius={30} cx={100} cy={100} />
        </svg>
      <div className="p-2 w-40 h-40  bg-red-100">
        <motion.span
          animate={{
            rotate: 60,
            transition: {
              repeat: Infinity,
              duration: 1,
              ease: "linear",
            },
          }}
          className="w-20 h-20 border-green-500 border-2 rounded-full "
        >
          {/* <CircleDot /> */}
        </motion.span>
      </div>
    </>
  );
}
