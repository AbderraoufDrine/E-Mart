import React from "react";

const Skelaton = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="h-5 w-full max-w-screen-sm bg-slate-200 animate-pulse"></div>
      <div className="h-5 w-1/4 max-w-screen-xs bg-slate-200 animate-pulse"></div>
      <div className="h-5 w-full max-w-screen-sm bg-slate-200 animate-pulse"></div>
      <div className="h-5 w-3/4 max-w-screen-sm bg-slate-200 animate-pulse"></div>
      <div className="h-5 w-2/3 max-w-screen-sm bg-slate-200 animate-pulse"></div>
      <div className="h-5 w-1/2 max-w-screen-xs bg-slate-200 animate-pulse"></div>
    </div>
  );
};

export default Skelaton;
