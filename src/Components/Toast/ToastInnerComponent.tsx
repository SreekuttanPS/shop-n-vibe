"use client";
import useToastStore from "@/zustand/toast";
import React, { useEffect, useState } from "react";

const ToastInnerComponent = ({ toastColor, toastText }: { toastColor: "red" | "green" | "yellow"; toastText: string }) => {
  const closeToast = useToastStore((state) => state?.closeToast);
  
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const animateStart = setTimeout(() => {
      setAnimate(true);
    }, 100);

    const animateStop = setTimeout(() => {
      setAnimate(false);
    }, 5000);

    const timeout = setTimeout(() => {
      closeToast();
    }, 6000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(animateStart);
      clearTimeout(animateStop);
    };
  }, [closeToast]);

  return (
    <div
      className={`mb-2 flex items-center gap-4 bg-${toastColor}-500 text-white px-4 py-3 rounded-lg shadow-lg transition-all duration-700 ${
        animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5"
      }`}
    >
      <p className="text-sm">{toastText}</p>
    </div>
  );
};

export default ToastInnerComponent;
