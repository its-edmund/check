import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import axios from '../../axios';
import GrowableTextArea from './GrowableTextArea';

const Editor = () => {
  let params = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const getDoc = async () => {
      const response = await axios.get(`/docs/${params.id}`)
      const data = response.data;
      setTitle(data.title);
      setBody(data.body);
    }
    getDoc();
  }, [])

  const handleChange = async () => {
    await axios.patch(`/docs/${params.id}`, { body, title })
  }

  return <div>
    <div className='absolute top-0 w-screen border-b-2 flex flex-row items-center'>
      <Link to='/docs'>
        <button className='hover:bg-gray-200 py-2 px-2 my-2 ml-2 flex items-center rounded-lg text-gray-700'>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </Link>
    </div>
    <div className='container mx-auto px-48 mt-20'>
      <input placeholder='Untitled' className='border-none font-bold text-5xl outline-none' value={title} onChange={(e) => {
          setTitle(e.target.value);
          handleChange();
        }} />
      <div className='textarea-grow'>
        <GrowableTextArea value={body} onChange={(value: string) => {
            handleChange();
            setBody(value);
          }} />
      </div>
    </div>
  </div>
}

export default Editor;
