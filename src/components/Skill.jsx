/**
 * @copyright 2025 SanThosh
 * @license Apache-2.0
 */

import SkillCard from "./SkillCard";

const Skill = () => {

    const skillItem = [
      {
        imgSrc: "/images/htmllogo.png",
        label: "HTML",
        desc: "Structuring the website",
      },
      {
        imgSrc: "/images/css3.svg",
        label: "CSS",
        desc: "User Interface",
      },
      {
        imgSrc: "/images/javascript.svg",
        label: "JavaScript",
        desc: "Interaction",
      },
      {
        imgSrc: "/images/react.svg",
        label: "React",
        desc: "Framework",
      },
      {
        imgSrc: "/images/tailwindcss.svg",
        label: "TailwindCSS",
        desc: "User Interface",
      },
      {
        imgSrc: "/images/javalogo.png",
        label: "Java",
        desc: "Back-End",
      },
      {
        imgSrc: "/images/python.png",
        label: "Python",
        desc: "",
      },
      {
        imgSrc: "/images/c++.png",
        label: "C++",
        desc: "",
      },
    ];

  return( 
        <section className="section" id="skills">
            <div className="container">
                <h2 className="headline-2">
                    Essential Tools and Skills i use
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                    Discover the Powerful tools and technologies I use to create exceptional, high-performing websites & applications 
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc}, key) =>
                        (
                            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
                        ))
                    }    
                </div>                
            </div>
        </section>
    )
};

export default Skill;
