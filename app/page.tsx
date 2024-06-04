import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";


export default function Home() {
  return (
   <main className=" relative flex items-center justify-center flex-col bg-black-100 overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
        <FloatingNav navItems={[
          {name:"Home", link: "/", icon: <FaHome/>}
        ]}/>
         <Hero/>
         <Grid/>
         <RecentProjects/>
      </div>
   </main>
  );
}
