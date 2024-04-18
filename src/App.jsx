//import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Build from "./components/Build";
import HowBuild from "./components/HowBuild";
import Technologies from "./components/Technologies";

const Layout = ({ children }) => {
  return (
    <div className="flex justify-center w-full overflow-hidden pb-72">
      <div className="max-w-[1300px] w-full px-4 md:px-6 lg:px-4 xl:px-0 ">
        {children}
      </div>
    </div>
  );
};

function App() {
  //
  return (
    <main className="bg-[#302c42] min-h-[100vh]">
      <Layout>
        <Hero />
        <About />
        <Build />
        <Technologies />
        <HowBuild />
      </Layout>
    </main>
  );
}

export default App;
