import { Link, useParams } from "react-router-dom";
import { projectsData } from "../data/projects";
import { FiExternalLink } from "react-icons/fi";

export default function DetalheProjeto() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id == id);

  return (
    <div className="container mx-auto">
      <div className="flex justify-between">
        <p className="font-general text-left w-fit text-3xl sm:text-4xl font-medium text-primary-dark dark:text-primary-light mb-7">
          {project.title}
        </p>

        <Link
          to={project.url}
          className="font-general h-fit flex gap-5 font-medium items-center w-fit px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
        >
          <span>Repositório</span>
          <FiExternalLink />
        </Link>
      </div>

      <div className="w-full max-h-[400px] overflow-hidden rounded-3xl">
        <div className="mb-10 sm:mb-0" key={project.id}>
          <img
            src={`/${project.image}`}
            className="rounded-xl min-w-full cursor-pointer shadow-lg sm:shadow-none"
            alt={project.title}
          />
        </div>
      </div>

      <div className="block sm:flex gap-0 sm:gap-10 mt-14">
        <div className="w-full sm:w-1/3 text-left">
          <div className="mb-7">
            <p className="font-general text-2xl font-medium text-ternary-dark dark:text-ternary-light mb-2">
              Tecnologias
            </p>
            <p className="font-general text-primary-dark dark:text-ternary-light">
              {"techs" in project && project.techs.join(", ")}
            </p>
          </div>

          <div className="mb-7">
            <p className="font-general text-2xl font-medium text-ternary-dark dark:text-ternary-light mb-2">
              Objetivo
            </p>
            <p className="font-general text-primary-dark dark:text-ternary-light">
              {project.subtitle}
            </p>
          </div>
        </div>

        <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
          {project.description.split("\n").map((paragraph) => (
            <p className="font-general mb-5 text-lg text-ternary-dark dark:text-ternary-light">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
