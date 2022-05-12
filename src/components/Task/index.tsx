import { faCalendar, faCheck, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Task = () => {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="w-full rounded-md flex flex-row bg-white drop-shadow-md py-3 px-3 rounded-md items-start my-3">
      {completed ? (
        <div
          className="rounded-full w-6 h-6 border-2 border-black mr-3 flex justify-center items-center bg-green-400 text-white"
          onClick={() => setCompleted(false)}
        >
          <FontAwesomeIcon icon={faCheck} />
        </div>
      ) : (
        <div
          className="rounded-full w-6 h-6 border-2 border-gray-300 mr-3"
          onClick={() => setCompleted(true)}
        />
      )}
      <div className="flex flex-col">
        <h4 className={`text-md font-medium ${completed && "line-through text-gray-400"}`}>
          Complete main UI components
        </h4>
        <p className={`text-md font-regular text-gray-400 ${completed && "line-through"}`}>
          Needs a review from designers
        </p>
        <div
          className={`flex flex-row mt-2 text-sm items-center ${
            completed ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <FontAwesomeIcon icon={faCalendar} className="mr-1" /> 6 Apr 2022{" "}
          <div className="w-1 h-1 bg-gray-400 rounded-full mx-2" />
          <FontAwesomeIcon icon={faUser} className="mr-1" />
          Esther Howard
        </div>
      </div>
    </div>
  );
};

export default Task;
