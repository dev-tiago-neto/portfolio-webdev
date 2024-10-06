import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { projectsData } from "../../data/projects";

import { ProjectItem } from "./Item";

export const ProjectsList = () => {
  const [searchProject, setSearchProject] = useState("");

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general font-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Projetos
        </p>
      </div>

      <div className="mt-10 sm:mt-16">
        <div className="flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3">
          <input
            onInput={(e) => setSearchProject(e.target.value)}
            className="font-general font-medium pl-3 pr-1 sm:px-4 py-2 border border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light w-full"
            id="name"
            name="name"
            type="search"
            placeholder="Procurar..."
          />

          <span className="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
            <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {projectsData
          .filter((p) =>
            p.title.toLowerCase().includes(searchProject.toLowerCase())
          )
          .map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
      </div>
    </section>
  );
};
