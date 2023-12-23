import EditorWrapper from "../components/Editor/Editor";
import prisma from "@/utils/db";


async function Write() {
  async function getdata() {
    "use server";
    try {
      const cat = await prisma?.category.findMany();
      return cat
    } catch (error) {
      console.log(error);
      Response.json(error);
    }
  }
  const cat = await getdata();

  return (
    <div className="min-h-screen">
      <EditorWrapper cat={cat!} />
    </div>
  );
}

export default Write;
