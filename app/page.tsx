import AddPost from "./components/AddPost";
import AllPost from "./components/AllPost";

export default function Home() {
  return (
    <main>
      <div className=" mx-1 lg:mx-96">
        <div className=" mt-4 lg:mt-8">
          <AddPost />
          <AllPost />
        </div>
      </div>
    </main>
  );
}
