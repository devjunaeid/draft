import EditorWrapper from "../components/Editor/Editor";

const getdata = async () => {
  const res = await fetch(`http://localhost:3000/api/categories`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error();
  }
  return res.json();
};


async function Write() {
  const cat = await getdata();

  return (
    <div className="min-h-screen">
      <EditorWrapper cat={cat}/>
    </div>
  );
}

export default Write;
