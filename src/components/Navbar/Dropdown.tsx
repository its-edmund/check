import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faPlus,
  faDiagramProject,
  faCaretRight,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ heading }: { heading: string }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full mx-2">
      <button
        className="flex w-full items-center py-2 px-3 overflow-hidden hover:bg-gray-300/20 rounded-lg justify-between font-semibold"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="flex flex-row items-center">
          {open ? (
            <FontAwesomeIcon icon={faCaretDown} width={20} />
          ) : (
            <FontAwesomeIcon icon={faCaretRight} width={20} />
          )}
          <div className="ml-3 font-medium">{heading}</div>
        </div>
      </button>
      <div className={`${open ? "flex" : "hidden"} flex-col ml-3 pl-2`}>
        <button className="flex justify-start items-center hover:bg-gray-300/20 text-gray-500 py-2 px-3 rounded-lg">
          Frontend
        </button>
        <button className="flex justify-start items-center hover:bg-gray-300/20 text-gray-500 py-2 px-3 rounded-lg">
          Backend
        </button>
        <button
          className="flex justify-start items-center hover:bg-gray-300/20 py-2 px-3 rounded-lg"
          onClick={() => navigate("/projects")}
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
