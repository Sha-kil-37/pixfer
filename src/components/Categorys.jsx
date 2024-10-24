import Category from "./Category";
import { GiClothes } from "react-icons/gi";
import { GiGoldBar } from "react-icons/gi";
import { PiDressLight } from "react-icons/pi";
import { MdTv } from "react-icons/md";
import { GiRunningShoe } from "react-icons/gi";
import { SiElectron } from "react-icons/si";

const Categorys = () => {
  //
  const categorys = [
    { name: "Men's clothing", icon: <GiClothes /> },
    { name: "ornament", icon: <GiGoldBar /> },
    { name: "Electronics", icon: <SiElectron /> },
    { name: "Women's clothing", icon: <PiDressLight /> },
    { name: "Home applience", icon: <MdTv /> },
    { name: "Shose", icon: <GiRunningShoe /> },
  ];

  //
  return (
    <section>
      <div className="container flex flex-wrap">
        {categorys.map((category, i) => {
          return <Category key={i} data={category} />;
        })}
      </div>
    </section>
  );
};

export default Categorys;
