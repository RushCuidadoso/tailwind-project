import { FaCss3, FaDatabase, FaHtml5, FaJsSquare, FaPython, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import React from "react";

const icons = [<FaHtml5 />, <FaCss3 />, <FaJsSquare />, <FaPython />, <TbSql />, <DiMongodb />, <FaReact />, <SiNextdotjs />];

const Skills = () => {
  return (
    <div className="skills-section flex flex-col bg-gray-700 text-white p-2 gap-2 lg:flex-row lg:justify-center">
      <div className="bg-gray-900 p-2 lg:w-2/5">
        <h1 className="font-bold text-2xl">Skills</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel unde cumque amet deserunt deleniti molestiae mollitia quia eum reiciendis ut, consequatur magni doloremque
          sunt quo hic modi, sit itaque? Asperiores.
        </p>
      </div>
      <div className="list grid grid-cols-2 place-items-center gap-2 sm:grid-cols-3 md:grid-cols-4 lg:w-2/5">
        {icons.map((icon, index) => (
          <div key={index} className='bg-gray-900 w-full flex justify-center py-5 last:sm:col-span-2 last:md:col-span-1'>{React.cloneElement(icon, { size: "70" })}</div>
        ))}
      </div>
    </div>
  );
};

// const Card = ({ icon }) => {
//   return <div>{icon}</div>;
// };

export default Skills;

