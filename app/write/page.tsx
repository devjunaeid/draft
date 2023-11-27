"use client";
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { MdOutlineFileUpload } from "react-icons/md";

function Write() {
  const [tog, setTog] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="min-h-screen">
      <input
        type="text"
        placeholder="Title"
        className="px-2 text-3xl md:text-6xl font-bold bg-transparent outline-none py-10"
      />
      <div className="flex gap-6 items-center mb-6">
        <button onClick={()=> setTog(!tog)}>
          <FiPlusCircle className="w-8 h-8" />
        </button>
        <div className={`${(tog) ? "frm gap-4 text-accent" : "hidden"}`}>
          <button>
            <MdOutlineAddAPhoto className="w-8 h-8" />
          </button>
          <button>
            <MdOutlineFileUpload className="w-8 h-8" />
          </button>
          <button>
            <RiVideoAddLine className="w-8 h-8" />
          </button>
        </div>
      </div>
      <ReactQuill value={value} onChange={setValue} theme="snow" className="w-full"/>
    </div>
  );
}

export default Write;
