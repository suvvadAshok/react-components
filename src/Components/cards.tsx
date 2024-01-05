import { motion } from "framer-motion";
// import { User } from "lucide-react";
import React from "react";

export function Cards() {
  const [show, setShow] = React.useState<boolean>(false);
  return (
    <div
      className="h-screen w-screen relative bg-orange-800"
      //   onClick={() => setShow(false)}
    >
      <div className="w-20 h-20 bg-green-100 " onClick={() => setShow(!show)}>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1], transition: { duration: 1 } }}
            className="w-96 h-60 bg-red-100 absolute top-0 "
          />
        )}
      </div>
    </div>
  );
}
