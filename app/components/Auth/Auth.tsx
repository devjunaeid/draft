import Link from "next/link";
import { TbPencilPlus } from "react-icons/tb";

function Auth() {
  const status: String = "notauth";


  return (
    <>
      {(status === "notauth") ? (
        <Link href={"/login"}>LogIn/SignUp</Link>
      ) : (
        <div className="flex gap-2 justify-center items-center">
          <Link href={"/write"}><TbPencilPlus size="1.5em" /></Link>
          <span className="cursor-pointer">Logout</span>
        </div>
      )}
    </>
  )
}

export default Auth