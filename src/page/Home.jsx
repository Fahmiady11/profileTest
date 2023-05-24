import Content from "../component/content";
import Header from "../component/header";
import Profile from "../component/profile";

export default function Home() {

  return (
    <div className="w-full h-full">
      <Header title="Profile" />
      <div className="flex flex-col gap-5 p-3 w-full h-[90%] overflow-auto">
        <Profile />
        <Content />
      </div>
    </div>
  );
}
