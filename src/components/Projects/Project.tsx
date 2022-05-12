import {
  faCaretDown,
  faCaretRight,
  faChevronDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import Sidebar from "../Navbar";
import Task from "../Task";

const Project = () => {
  const [completedOpen, setCompletedOpen] = useState(false);
  const [milestones, setMilestones] = useState([]);
  const [meetings, setMeetings] = useState([]);
  const [completed, setCompleted] = useState(["hello"]);

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="px-10 pt-10 w-full bg-gray-100/20">
        <h1 className="text-3xl font-bold">Frontend</h1>
        <div className="flex flex-row w-full h-full">
          <div className="w-4/6 pr-10">
            <div className="flex flex-row justify-between items-center my-5">
              <h3 className="text-xl font-semibold">Tasks</h3>
              <div>
                <button className="font-bold border-2 bg-gradient-to-r from-green-400 to-teal-400 border-black rounded-l-full px-3 hover:from-black hover:to-black text-black hover:text-white py-1">
                  Add task
                </button>
                <button className="font-bold border-y-2 border-r-2 bg-gradient-to-r from-green-400 to-teal-400 border-black rounded-r-full px-3 hover:from-black hover:to-black text-black hover:text-white py-1">
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
              </div>
            </div>
            <Task />
            <button
              className="flex w-full items-center overflow-hidden justify-between font-semibold text-gray-600"
              onClick={() => {
                setCompletedOpen(!completedOpen);
              }}
            >
              <div className="flex flex-row items-center">
                {completedOpen ? (
                  <FontAwesomeIcon icon={faCaretDown} width={20} />
                ) : (
                  <FontAwesomeIcon icon={faCaretRight} width={20} />
                )}
                <div className="ml-3 font-medium">Completed</div>
                <div className="rounded-full bg-green-400 text-white text-sm px-2 ml-2">
                  {completed.length}
                </div>
              </div>
            </button>
            <div className={`${completedOpen ? "flex flex-col" : "hidden"}`}>
              <Task />
            </div>
          </div>
          <div className="flex flex-col w-2/6 h-full">
            <div className="w-full">
              <h3 className="text-xl font-semibold">Milestones</h3>
              {milestones.length === 0 ? (
                <p className="text-gray-400 my-5 text-center">No milestones created yet!</p>
              ) : (
                <div>There are milestones</div>
              )}
            </div>
            <div className="h-full">
              <h3 className="text-xl font-semibold">Meetings</h3>
              {meetings.length === 0 ? (
                <p className="text-gray-400 my-5 text-center">No meetings created yet!</p>
              ) : (
                <div>There are meetings</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
