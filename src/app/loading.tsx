import React from "react";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className="px-5 py-5 animate-pulse">
      <h2 className="text-3xl mb-5 w-32 h-10 bg-slate-300"></h2>
      <h3 className="text-2xl w-32 h-10 bg-slate-300"></h3>
      <hr className="my-2" />
      <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="h-52 w-full bg-slate-300"></div>
          <div className="h-52 w-full bg-slate-300"></div>
          <div className="h-52 w-full bg-slate-300"></div>
          <div className="h-52 w-full bg-slate-300"></div>
          <div className="h-52 w-full bg-slate-300"></div>
          <div className="h-52 w-full bg-slate-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
