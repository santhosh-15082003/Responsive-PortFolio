/**
 * @copyright 2025 SanThosh
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/project1.png",
    title: "AI-Based Image Tagging and Browsing System",
    tags: ["API", "MVC", "Development"],
    projectLink:
      "https://github.com/santhosh-15082003/AI-Based-Tagging-and-Browsing-for-Efficient-Manual-Image-Annotation",
  },
  // {
  //   imgSrc: "/images/project-2.jpg",
  //   title: "Free stock photo app",
  //   tags: ["API", "SPA"],
  //   projectLink: "https://pixstock-official.vercel.app/",
  // },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Recipe app",
    tags: ["Development", "API"],
    projectLink: "",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real state website",
    tags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee-org/wealthome",
  },
  // {
  //   imgSrc: "/images/project-5.jpg",
  //   title: "eCommerce website",
  //   tags: ["eCommerce", "Development"],
  //   projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
  // },
  // {
  //   imgSrc: "/images/project-6.jpg",
  //   title: "vCard Personal portfolio",
  //   tags: ["Web-design", "Development"],
  //   projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
  // },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8">My Portfolio highlights</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-5">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
