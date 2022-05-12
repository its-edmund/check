import React, { useState } from "react";

const GrowableTextArea = ({ value, onChange }: { value: string; onChange: any }) => {
  const [rows, setRows] = useState(5);
  const [minRows, setMinRows] = useState(5);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textareaLineHeight = 24;
    const previousRows = e.target.rows;
    e.target.rows = minRows;

    const currentRows = e.target.scrollHeight / textareaLineHeight;

    if (currentRows === previousRows) {
      e.target.rows = currentRows;
    }

    setRows(currentRows);
    onChange(e.target.value);
  };

  return (
    <textarea
      placeholder="Type to edit..."
      className="leading-6 w-full text-lg resize-none outline-none mb-10"
      value={value}
      rows={rows}
      onChange={handleChange}
    />
  );
};

export default GrowableTextArea;
