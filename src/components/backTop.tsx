import React, { useEffect } from "react";

import { AiOutlineArrowUp } from "react-icons/ai";

const Back = () => {
  useEffect(() => {
    var btn = document.querySelector("#button");
    btn.addEventListener("click", function () {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <>
      <div className="text-right pr-4 pb-5 p-4 pt-12" id="button">
        <button
          type="button"
          className="text-white bg-[#888] p-2 rounded-sm hover:bg-[#1c1b1a]"
        >
          <AiOutlineArrowUp />
        </button>
      </div>
    </>
  );
};

export default Back;
