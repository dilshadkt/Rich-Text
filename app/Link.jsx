import React, { useRef, useState } from "react";

const MyComponent = () => {
  const textRef = useRef();
  const [userLink, setUserLink] = useState("");

  const handleSelection = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString();

    if (selectedText) {
      const range = selection.getRangeAt(0);
      const span = document.createElement("span");
      span.className = "custom-link";
      span.innerHTML = `<a href="${userLink}" target="_blank">${selectedText}</a>`;

      range.deleteContents();
      range.insertNode(span);
    }
  };

  const handleLinkChange = (e) => {
    setUserLink(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter link URL"
        value={userLink}
        onChange={handleLinkChange}
      />
      <p ref={textRef} onMouseUp={handleSelection}>
        This is some text. Try selecting part of it.
      </p>
    </div>
  );
};

export default MyComponent;
