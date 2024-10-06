export default function Sobre() {
  return (
    <div className="container mx-auto">
      <div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
        <div className="w-full sm:w-1/4 mb-7 sm:mb-0">
          <img src="profile.jpeg" className="rounded-lg w-96" alt="" />
        </div>

        <div className="font-general font-normal w-full sm:w-3/4 text-left">
          <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
            Profissional de Engenharia e Desenvolvimento de Software –
            Programador Júnior 🚀🔥
          </p>
          <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
            Adepto ao Life-long Learning para edificar minha bagagem de
            aprendizados aos desafios e projetos do futuro • Aventureiro, justo
            e comprometido à inovação tecnológica por um mundo mais empático •
            Acredito na constante atualização das minhas habilidades como parte
            essencial ao dinâmico mercado e suas tendências, sem preterir uma
            sólida base.
          </p>

          <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
            Fluência em Inglês, com Nível de Proficiência TOEFL ITP: C1
          </p>

          <p className="mb-4 text-ternary-dark dark:text-ternary-light text-lg">
            Estou sempre aberto a conhecer novas histórias e trocar
            experiências, pelo engrandecimento profissional coletivo. Assim,
            convido você a me enviar uma mensagem para debatermos sobre nossos
            objetivos comuns!
          </p>
        </div>
      </div>
    </div>
  );
}
