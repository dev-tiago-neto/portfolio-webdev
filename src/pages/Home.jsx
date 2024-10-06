import { Link } from "react-router-dom";
import { FiArrowDownCircle } from "react-icons/fi";
import { ProjectsList } from "../components/Projects/List";

export default function Home() {
  return (
    <div className="container mx-auto">
      <section className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2">
        <div className="w-full md:w-1/3 text-left">
          <h1 className="font-general font-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase">
            Oi, sou o Tiago!
          </h1>
          <p className="font-general font-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200">
            Desenvolvedor e estudante Engenharia de Software!
          </p>
          <div className="flex justify-center sm:block">
            <a
              download="curriculum.pdf"
              href="curriculum.pdf"
              className="font-general font-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
            >
              <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
              <span className="text-sm sm:text-lg font-general font-medium duration-100">
                Currículo
              </span>
            </a>
          </div>
        </div>
        <div className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0">
          <img src={"developer.svg"} />
        </div>
      </section>

      <ProjectsList />

      <div className="mt-8 sm:mt-10 flex justify-center">
        <Link
          to="/projetos"
          className="font-general font-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
        >
          Mais projetos
        </Link>
      </div>
    </div>
  );
}
