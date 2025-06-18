"use client";
import React from "react";
import ToastInnerComponent from "@/Components/Toast/ToastInnerComponent";
import useToastStore from "@/zustand/toast";
import { isEmpty } from "@/helpers/utils";

const Toast = () => {
  const toasts = useToastStore((state) => state?.toast);

  if (isEmpty(toasts)) {
    return null;
  }
  return (
    <div id="toast" className="fixed top-4 right-4 z-50">
      {toasts.map((toast) => (
        <ToastInnerComponent toastText={toast?.text} toastColor={toast?.color} key={toast?.id} />
      ))}
    </div>
  );
};

export default Toast;
