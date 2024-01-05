import React from "react";
import { motion } from "framer-motion";
import { Check } from "../assets/check";

export function StepForm() {
  const [step, setStep] = React.useState(1);
  console.log(step);

  return (
    <div className="h-60 w-60 p-6 bg-white flex flex-col justify-between">
      <div className="flex justify-between ">
        <Step step={1} currentStep={step} />
        <Step step={2} currentStep={step} />
        <Step step={3} currentStep={step} />
        <Step step={4} currentStep={step} />
      </div>
      <svg viewBox="0 0 100 100" strokeWidth={10} className="border relative bg-red-300">
        <circle
          r="30"
          cx="50"
          cy="50"
          fill="white"
          className="border"
        />
      </svg>
      

      <div className="flex justify-between">
        <button onClick={() => setStep(step < 2 ? step : step - 1)}>
          Prev
        </button>
        <button onClick={() => setStep(step > 4 ? step : step + 1)}>
          Continue
        </button>
      </div>
    </div>
  );
}

function Step({ step, currentStep }: { step: number; currentStep: number }) {
  const status =
    currentStep === step
      ? "active"
      : currentStep < step
      ? "inactive"
      : "complete";

  return (
    <motion.div animate={status} className="relative">
      <motion.div
        variants={{
          active: {
            scale: 1,
            transition: {
              delay: 0,
              // duration:0.2
            },
          },
          complete: {
            scale: 1.25,
          },
        }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          type: "tween",
          ease: "circIn",
        }}
        className="inset-0 absolute rounded-full bg-[#3b82f650]"
      />
      <motion.div
        initial={false}
        variants={{
          inactive: {
            backgroundColor: "white",
            color: "rgb(100 116 139)",
            borderColor: "rgb(100 116 139)",
          },
          active: {
            backgroundColor: "white",
            color: "#3b82f6",
            borderColor: "#3b82f6",
          },
          complete: {
            backgroundColor: "#3b82f6",
            color: "white",
            borderColor: "#3b82f6",
          },
        }}
        transition={{ duration: 0.2 }}
        className={`relative rounded-full border-2 p-2`}
      >
        {status === "complete" ? <Check /> : <h1 className="px-2 ">{step}</h1>}
      </motion.div>
    </motion.div>
  );
}
