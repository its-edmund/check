import React, { useEffect, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, Link } from 'react-router-dom';

import { parseDate } from '../../utils/parseDate';
import Sidebar from "../Navbar";
import axios from '../../axios'

type DocType = {
  title: string;
  body: string;
  lastViewed: number;
  lastEdited: number;
  tags: string[];
  userId: string;
  _id: string;
}

const Docs = () => {
  const [docs, setDocs] = useState<DocType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDocs = async () => {
      const response = await axios.post('/docs', {
          token: localStorage.getItem('jwt_token')
      })
      console.log(response.data);
      setDocs(response.data);
    }
    fetchDocs();
  }, [])

  const handleNewDoc = async () => {
    const response = await axios.post('/docs/new', { body: "", title: "", token: localStorage.getItem('jwt_token') })
    navigate(`/docs/${response.data}`)
  }

  const handleDeleteDoc = async (id: string) => {
    await axios.delete(`/docs/${id}`)
  }

  return (
    <div className="w-screen flex flex-row">
      <Sidebar />
      <div className="flex flex-col mx-auto mt-10">
        <h1 className="text-3xl font-semibold">Docs</h1>
        <div className="flex flex-row justify-between">
          <input
            className="rounded-full border-2 border-black font-bold py-1 px-3 w-1/2 my-3"
            placeholder="Filter by name..."
          />
            <button className="btn-primary px-4 my-2" onClick={handleNewDoc}>
              <FontAwesomeIcon icon={faPlus} /> New Doc
            </button>
        </div>

        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Document Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Tags
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Edited
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Viewed
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {docs.map((doc) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    <Link to={`/docs/${doc._id}`}>
                      {doc.title}
                    </Link>
                  </th>
                  <td className="px-6 py-4">Sliver</td>
                  <td className="px-6 py-4">{parseDate(doc.lastEdited)}</td>
                  <td className="px-6 py-4">{parseDate(doc.lastViewed)}</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      onClick={() => {
                          handleDeleteDoc(doc._id)
                        }}
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Docs;
