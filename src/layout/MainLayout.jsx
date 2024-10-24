import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MobNavbar from "../components/MobNavbar";
import MobileSearchBar from "../components/MobileSearchBar";
import Header from "../components/Header";
import { useEffect, useRef, useState } from "react";

//
const MainLayout = ({ children }) => {
  //
  const [mobNavHeight, setMobNavHeight] = useState(0);
  const componentRef = useRef(null);
  //
  // console.log(mobNavHeight);

  // handle mobNav height
  useEffect(() => {
    // Get the height after the component is mounted
    if (componentRef.current) {
      const height = componentRef.current.getBoundingClientRect().height;
      setMobNavHeight(height); // Update the state with the component height
    }
  }, []);
  //
  return (
    <section className="relative mb-[48px] sm:mb-[48px] md:mb-[48px] lg:mb-0 xl:mb-0 2xl:mb-0">
      <Header />
      <Navbar />
      <MobNavbar data={componentRef} />
      <MobileSearchBar />
      <main>{children}</main>
      <Footer />
    </section>
  );
};

export default MainLayout;
