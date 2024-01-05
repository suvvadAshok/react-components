import { motion } from "framer-motion";

export function Check() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-check"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1, opacity:1 }}
        transition={{
          delay: 0.2,
          type: "tween",
          ease: "easeOut",
          duration: 0.3,
        }}
        d="M20 6 9 17l-5-5"
      />
    </svg>
  );
}
