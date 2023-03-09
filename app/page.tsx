import Image from "next/image";
import { Inter } from "@next/font/google";
import AddPost from "./components/AddPost";

const inter = Inter({ subsets: ["latin"] });

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
