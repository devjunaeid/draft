"use client";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useState, useRef, useEffect, ChangeEvent, ReactElement } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { RiVideoAddLine } from "react-icons/ri";
import { MdOutlineFileUpload } from "react-icons/md";
import { Editor } from "@tinymce/tinymce-react";
import { Editor as TinyMCEEditor } from "tinymce";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { app } from "@/utils/firebase";

interface catt {
  title: string;
}

interface cat {
  cat: Array<catt>;
}

const storage = getStorage(app);

function EditorWrapper(props: cat): ReactElement {
  // Setting Values.
  const [tog, setTog] = useState(false);
  const [cont, setCont] = useState("");
  const [title, setTitle] = useState("");
  const [sdesc, setSdesc] = useState("");
  const [cate, setCate] = useState("other");
  const [coverurl, setCoverurl] = useState("");
  const [file, setFile] = useState(new Blob());
  const [filename, setFilename] = useState("");
  const editorRef = useRef<TinyMCEEditor | null>(null);

  //Handle Image Upload
  useEffect(() => {
    const uploadImg = () => {
      const fileName = new Date().getTime + filename;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setCoverurl(downloadURL);
          });
        }
      );
    };

    file && uploadImg();
  }, [file]);

  // Session vaidation.
  const { status } = useSession();
  const router = useRouter();
  if (status == "loading") {
    return <div className="text-4xl font-montserrat">Loading....</div>;
  }
  if (status == "unauthenticated") {
    router.push("/login");
    return (
      <div>
        You are not Authenticated <br />{" "}
        <h1 className="text-red-500 font-2xl">Rdireacting...</h1>
      </div>
    );
  }

  // TinyMCE Config
  const log = () => {
    if (editorRef.current) {
      setCont(editorRef.current.getContent());
    }
  };

  //Create slug from title.
  const makeSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  //Handleing submit
  const handleSubmit = async () => {
    const res = await fetch("https://draft-9vokpg4lj-devjunaeids-projects.vercel.app/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: cont,
        img: coverurl,
        catSlag: cate,
        sdesc: sdesc,
        slug: makeSlug(title),
      }),
    });
    router.push(`/posts/${makeSlug(title)}`);
  };

  const handleFile = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;
    const imgName = files?.[0].name || "";
    const img = files?.[0] as Blob;
    setFile(img);
    setFilename(imgName);
  };

  return (
    <>
      <div className="p-2 w-full relative">
        <button
          onClick={handleSubmit}
          className=" absolute top-10 right-5 py-2 px-4 bg-blue-600 rounded-md text-white"
        >
          Post
        </button>
        <div>
          <div className="flex flex-col justify-center items-start">
            <input
              type="text"
              placeholder="Title"
              className="px-2 text-3xl md:text-6xl font-bold bg-transparent w-full outline-none py-10"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              rows={5}
              cols={20}
              required
              maxLength={400}
              placeholder="Write a short descripton of your blog within 400 character."
              className="px-2 text-xl md:text-2xl bg-transparent w-full my-8"
              onChange={(e) => setSdesc(e.target.value)}
            />
          </div>
          <div className="flex gap-6 items-center mb-6">
            <button onClick={() => setTog(!tog)}>
              <FiPlusCircle className="w-8 h-8" />
            </button>
            <div className={`${tog ? "frm gap-4 text-accent" : "hidden"}`}>
              <input
                type="file"
                id="coverImg"
                onChange={(e) => handleFile(e)}
                className="hidden"
              />
              <button>
                <label htmlFor="coverImg">
                  <MdOutlineAddAPhoto className="w-8 h-8" />
                </label>
              </button>
              <button>
                <MdOutlineFileUpload className=" hidden w-4 h-4 md:w-8 md:h-8" />
              </button>
              <button>
                <RiVideoAddLine className="hidden w-8 h-8" />
              </button>
            </div>
            <div className="flex justify-center items-center gap-4">
              <h3>Category: </h3>
              <select
                name="Categoires"
                id="categories"
                className="px-2 py-2 rounded-md"
                onChange={(e) => setCate(e.target.value)}
              >
                {props.cat.map((it) => (
                  <option value={it?.title}>{it?.title}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="w-[100%] mx-auto">
          <Editor
            apiKey={process.env.TNYMCE}
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>Write here...</p>"
            init={{
              height: 400,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
          <button onClick={log} className="px-2 py-2 bg-pri mt-4 rounded-md">
            Save
          </button>
          <br />
          <span className="text-red-600">Note: Save before post.</span>
        </div>
      </div>
    </>
  );
}

export default EditorWrapper;
