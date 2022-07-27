import React from "react";
import PanelCard from "./PanelCard";

const Panel = () => {
  return (
    <div>
      <div className="flex flex-row w-screen h-72 items-center justify-center shadow-inner">
        <div className="flex flex-row place-content-between w-4/5">
          <PanelCard className="panel1" />
          <PanelCard className="panel1" />
          <PanelCard className="panel1" />
          <PanelCard className="panel1" />
          <PanelCard className="panel1" />
        </div>
      </div>
    </div>
  );
};

export default Panel;
