// LoadingMessage.tsx
import React from "react";
import { ClockLoader } from "react-spinners";

const LoadingMessage: React.FC = () => {
 return (
   <div className="flex justify-center items-center h-[400px]">
     <ClockLoader color="#DD5928" size={70} />
   </div>
 );
};

export default LoadingMessage;
