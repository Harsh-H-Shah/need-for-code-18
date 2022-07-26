import React from "react";
import { useState } from "react";
import AdoptCard from "../components/AdoptCard";
import AdoptModal from "../components/AdoptModal";

const Adopt = () => {
  const [id, setId] = useState(-1);

  return (
    <div>
      <AdoptCard id={0} setId={setId} />
      {id !== -1 ? <AdoptModal id={id} setId={setId} /> : <></>}
    </div>
  );
};

export default Adopt;
