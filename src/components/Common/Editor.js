import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
    toolbar: [
      [{ font: [] }],
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      ["image"],
      ["clean"],
    ],
  };
  
  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "align",
    "color",
    "image",
    "background",
  ];

const Editor = ({ value, setData, height }) => {
    return (
        <ReactQuill
            theme="snow"
            style={{'height':  `${height ? height : '200px'}`}}
            modules={modules}
            formats={formats}
            onChange={setData}
            value={value}
        />
    )
}

export default Editor
