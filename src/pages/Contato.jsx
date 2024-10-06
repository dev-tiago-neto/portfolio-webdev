import { Input } from "../components/Input";

export default function Contato() {
  function handleSubmit(event) {
    event.preventDefault();

    const form = new FormData(event.target);

    console.log("🧾 Contato recebido!", {
      nome: form.get("nome"),
      email: form.get("email"),
      assunto: form.get("assunto"),
      mensagem: form.get("mensagem"),
    });
  }

  return (
    <div className="container mx-auto flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full lg:w-1/2 m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
      >
        <p className="font-general font-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
          Contato
        </p>
        <Input
          inputLabel="Nome"
          labelFor="nome"
          inputType="text"
          inputId="nome"
          inputName="nome"
          placeholderText="Nome Sobrenome"
        />
        <Input
          inputLabel="Email"
          labelFor="email"
          inputType="email"
          inputId="email"
          inputName="email"
          placeholderText="seu.email@exemplo.com.br"
        />
        <Input
          inputLabel="Assunto"
          labelFor="assunto"
          inputType="text"
          inputId="assunto"
          inputName="assunto"
          placeholderText="Assunto"
        />

        <div className="mt-6">
          <label
            className="block text-lg text-primary-dark dark:text-primary-light mb-2"
            htmlFor="mensagem"
          >
            Mensagem
          </label>
          <textarea
            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
            id="mensagem"
            name="mensagem"
            cols="14"
            rows="6"
          ></textarea>
        </div>

        <div className="font-general font-medium w-40 px-4 py-2.5 text-white text-center tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
          <button>Enviar Contato</button>
        </div>
      </form>
    </div>
  );
}
