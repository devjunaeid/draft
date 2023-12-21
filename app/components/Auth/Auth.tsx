import { signOut } from "next-auth/react";
import Link from "next/link";
import { TbPencilPlus } from "react-icons/tb";

type props = {
  status: string
}

function Auth(props : props) {
  const status: String = props.status;


  return (
    <>
      {(status === "unauthenticated") ? (
        <Link href={"/login"}>LogIn/SignUp</Link>
      ) : (
        <div className="flex gap-2 justify-center items-center">
          <Link href={"/write"}><TbPencilPlus size="1.5em" /></Link>
          <span className="cursor-pointer" onClick={() => signOut()}>Logout</span>
        </div>
      )}
    </>
  )
}

export default Auth