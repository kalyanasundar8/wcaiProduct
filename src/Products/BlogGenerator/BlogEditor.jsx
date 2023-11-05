import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles

export default function BlogEditor() {
    const [text, setText] = useState('');

  const handleChange = (value) => {
    setText(value);
  };
  return (
    <div>
      <ReactQuill value={text} onChange={handleChange} />
    </div>
  )
}
