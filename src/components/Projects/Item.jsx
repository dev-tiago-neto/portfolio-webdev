import { Link } from "react-router-dom";

export const ProjectItem = ({ id, title, category, image }) => {
  return (
    <div>
      <Link to={`/projetos/${id}`}>
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div className="max-h-[180px] overflow-hidden">
            <img
              src={image}
              className="rounded-t-xl border-none"
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general font-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};
