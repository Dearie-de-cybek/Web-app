import styled from "styled-components";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const StyledNote = styled.div`
  font-size: 1.4rem;
  width: 100%;
  height: 25rem;
  overflow: hidden;
  color: var(--color-ash-700);
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  border: 1px solid transparent;

  .ql-toolbar.ql-snow,
  .ql-container.ql-snow {
    border: none;
  }

  .ql-toolbar.ql-snow {
    border-bottom: 2px solid var(--color-pink-200);
  }

  .ql-container.ql-snow {
    height: 100%;
    width: 100%;
    color: var(--color-ash-700);

    &::-webkit-input-placeholder {
      font-style: italic;
    }
  }
`;

function Note() {
  const [value, setValue] = useState({ editorHtml: "" });

  useEffect(() => {
    const note = localStorage.getItem("videoNote");
    setValue({ editorHtml: note });
  }, []);

  function handleChange(html) {
    setValue({ editorHtml: html });
    localStorage.setItem("videoNote", html);
  }

  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
    ],
  };

  const formats = [
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "indent",
  ];

  return (
    <StyledNote>
      <ReactQuill
        value={value.editorHtml}
        theme="snow"
        onChange={handleChange}
        modules={modules}
        formats={formats}
      ></ReactQuill>
    </StyledNote>
  );
}

export default Note;
