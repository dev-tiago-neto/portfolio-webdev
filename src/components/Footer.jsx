import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const socialLinks = [
  {
    id: 1,
    icon: <FiMail />,
    url: "mailto:profissional.tiago.mn@outlook.com",
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://github.com/dev-tiago-neto",
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    url: "https://linkedin.com/in/tiago-morais-neto",
  },
];

export const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
        {/* Footer social links */}
        <div className="font-general font-normal flex flex-col justify-center items-center mb-12 sm:mb-28">
          <ul className="flex gap-4 sm:gap-8">
            {socialLinks.map((link) => (
              <a
                href={link.url}
                target="__blank"
                key={link.id}
                className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
              >
                <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
              </a>
            ))}
          </ul>
        </div>

        <div className="font-general font-normal flex justify-center items-center text-center">
          <div className="text-lg text-ternary-dark dark:text-ternary-light">
            &copy; {new Date().getFullYear()}
            <a
              href="https://github.com/realstoman/react-tailwindcss-portfolio"
              target="__blank"
              className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
            >
              Todos direitos reservados
            </a>
            .
            <span
              href="#"
              target="__blank"
              className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
            >
              Tiago Morais Neto
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
