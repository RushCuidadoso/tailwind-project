import { FaCss3, FaDatabase, FaHtml5, FaJsSquare, FaPython, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import React, { useState } from "react";

const icons = [
  { component: <FaHtml5 />, text: "HTML" },
  { component: <FaCss3 />, text: "CSS" },
  { component: <FaJsSquare />, text: "Javascript" },
  { component: <FaPython />, text: "Python" },
  { component: <TbSql />, text: "SQL" },
  { component: <DiMongodb />, text: "MongoDB" },
  { component: <FaReact />, text: "React" },
  { component: <SiNextdotjs />, text: "Next" },
  { component: <SiTailwindcss/>, text: 'Tailwind'}
];
//,

const Skills = () => {
  const [text, setText] = useState(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel unde cumque amet deserunt deleniti molestiae mollitia quia eum reiciendis ut, consequatur magni doloremque sunt quo hic modi, sit itaque? Asperiores."
  );

  const hoverEnter = (newText) => {
    setText(newText);
  };

  const hoverLeave = (initialText) => {
    setText(initialText);
  };

  return (
    // h-screen items-center
    <div className="skills-section flex flex-col bg-gray-700 text-white p-2 gap-2 lg:flex-row lg:justify-center ">
      <div className="bg-gray-900 p-2 lg:w-2/5">
        <h1 className="font-bold text-2xl transition-all duration-300 ease-linear">Habilidades</h1>
        <p>{text}</p>
      </div>
      <div className="list grid grid-cols-2 place-items-center gap-2 sm:grid-cols-3 md:grid-cols-4 lg:w-2/5 xl:grid-cols-5 ">
        {icons.map((icon, index) => (
          <div
            key={index}
            className="bg-gray-900 w-full flex justify-center py-5 last:col-span-2 last:md:col-span-1 border-2 border-gray-900 
            hover:border-green-500 hover:text-green-500 transition-all duration-300 ease-linear"
            onMouseEnter={() => hoverEnter(icon.text ? icon.text : "Default")}
            onMouseLeave={() =>
              hoverLeave(
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel unde cumque amet deserunt deleniti molestiae mollitia quia eum reiciendis ut, consequatur magni doloremque sunt quo hic modi, sit itaque? Asperiores."
              )
            }
          >
            {React.cloneElement(icon.component, { size: "70" })}
          </div>
        ))}
      </div>
    </div>
  );
};

// const Card = ({ icon }) => {
//   return <div>{icon}</div>;
// };

export default Skills;
