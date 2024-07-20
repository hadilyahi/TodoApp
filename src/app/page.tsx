import Image from "next/image";
import TodoWrapper from "./component/TodoWrapper";

export default function Home() {
  return (
    <>
     <div className="bg-violet-400 h-screen flex justify-center items-center">
      <TodoWrapper/>
     </div>
    </>
  );
}
