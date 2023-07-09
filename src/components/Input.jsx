import { useState } from "react";
import db from "../firebase";
import { unique as uniqueId } from "tiny-unique-id";
import copy from "../assets/copy.svg";

// const tinyid = require('tiny-unique-id') // eslint-disable-line

function Input() {
  const [input, setInput] = useState("");
  const [shorten, setShorten] = useState("");

  const handledb = async () => {
    const slug = uniqueId();
    await db.collection("urls").add({
      url: input,
      slug: slug,
    });
    setShorten(`${window.location.origin}/${slug}`);
  };

  return (
    <div className="flex flex-col  px-2 lg:px-[100px] lg:w-1/2 mb-[100px]">
      <div className=" flex-row">
        <input
          type="url"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter URL"
          className="border-2 border-gray-300 rounded-md p-2 m-2 lg:w-[300px]"
        />
        <button
          onClick={handledb}
          className="bg-[#57989d] hover:bg-[#f16456] text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out"
        >
          Shorten
        </button>
      </div>

      <div className="flex flex-row lg:w-[550px]">
        <input
          type="url"
          disabled
          value={shorten}
          className="border-2 border-gray-300 rounded-md p-2 m-2 w-[300px] lg:w-[500px]"
        />
        <button
          onClick={() => {
            navigator.clipboard.writeText(shorten);
            alert("Text copied to clipboard!");
          }}
          className=""
        >
          <img src={copy} alt="copy" className="w-6 h-6 hover:scale-105" />
        </button>
      </div>
    </div>
  );
}

export default Input;
