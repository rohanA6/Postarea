import Image from "next/image";
import AddPost from "./components/AddPost";


export default function Home() {
  return (
    <main>
      <div className=" mx-2 lg:mx-96">
        <div className=" mt-8">
          <AddPost />
        </div>
      </div>
    </main>
  );
}
