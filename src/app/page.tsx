import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function Page(){
  return(
    <><Navbar />
    <main className="bg-[#D9C6AC] flex flex-col gap-[100px]">
      <section className="imagemFundo h-[926px] flex items-center justify-center">
        <div className="text-center text-white flex flex-col items-center w-[80vw]">
          <h1 className="font-quando font-bold text-[70px] tracking-[2px]">O tempo de estudo nunca é perdido!</h1>
          <p className="text-[28px] text-justify my-[30px] font-quando w-[75%] font-bold tracking-[2px]">Proporcionamos ferramentas e métodos de estudos eficazes para auxiliar estudantes à atingir seus objetivos acadêmicos e pessoais.</p>
          <Link href="#">
            <Button className="button font-bold hover:cursor-pointer tracking-normal text-xl">Saiba Mais</Button>
          </Link>
        </div>
      </section>
      <section className="flex items-center justify-center mx-[50px]">
        <div id="texto" className="mr-[20px]">
          <h2 className="font-bold font-quando text-center text-[50px] mb-[20px]">Quem Somos</h2>
          <p className="text-justify font-roboto-serif tracking-wider text-[20px] leading-7">Somos um time apaixonado por educação, comprometido em ajudar vestibulandos a organizarem seus estudos de forma eficiente e estratégica. Nosso objetivo é oferecer ferramentas e métodos que facilitam a gestão do tempo. o planejamento personalizado e a motivação ao longo da jornada. Acreditamos que a disciplina aliada a boas técnicas de estudo pode transformar o aprendizado e aumentar as chances de aprovação. Aqui, você encontra o suporte necessário para estudar de forma inteligente e alcançar seus objetivos!</p>
        </div>
        <Image
          src={"/quemSomos.png"}
          alt="Arte Conceitual Quem Somos"
          width={700}
          height={700}
          quality={80} 
        />
      </section>
      <section>
        <h2>Nossos Recursos</h2>
        <div id="conteudo">
          <div className="card">
            <Image
              src={"/calendario.png"}
              alt="Arte Conceitual Calendário"
              width={100}
              height={100}
              quality={80} />
            <h3>Calendário Personalizado</h3>
            <p>Com nosso calendário personalizado, você pode organizar seus estudos de forma prática e eficiente! Marque datas importantes, defina semanas dedicadas a matérias específicas e crie um cronograma adaptado às suas necessidades. Assim, você mantém o controle do seu progresso e garante um planejamento equilibrado até o dia da prova!</p>
          </div>
          <div className="card">
            <Image
              src={"/tarefa.png"}
              alt="Arte Conceitual Tarefa"
              width={100}
              height={100}
              quality={80} />
            <h3>Tarefas</h3>
            <p>Nosso sistema de tarefas ajuda você a manter o foco e a disciplina nos estudos! Defina prazos para concluir exercícios, resumos e revisões, além de estipular um tempo limite para cada atividade. Assim, você gerencia melhor sua rotina, evita atrasos e garante um estudo mais organizado e produtivo!</p>
          </div>
          <div className="card">
            <Image
              src={"/lembretes.png"}
              alt="Arte Conceitual Lembrete"
              width={100}
              height={100}
              quality={80} />
            <h3>Lembretes Automáticos</h3>
            <p>Nunca mais perca um prazo! Nosso sistema de lembretes envia notificações para avisar sobre tarefas pendentes, prazos chegando ao fim e horários de estudo. Assim, você se mantém no ritmo certo, sem esquecer nenhuma etapa do seu planejamento!</p>
          </div>
        </div>
      </section>
      <section>
        <div id="texto">
          <h2>Fale Conosco</h2>
          <p>Sua opinião é muito importante para nós! Queremos tornar sua experiência de estudo ainda melhor. Envie suas sugestões, ideias de melhoria, depoimentos, ou feedbacks - cada mensagem nos ajuda a crescer e oferecer um serviço mais eficiente para você. Agradecemos por fazer parte dessa jornada com a gente!</p>
          <form action="#">
            <label htmlFor="nome">Nome (Obrigatório)</label>
            <input type="text" name="nome" required />

            <label htmlFor="sobrenome">Sobrenome</label>
            <input type="text" name="sobrenome" />

            <label htmlFor="email">E-mail (Obrigatório)</label>
            <input type="email" name="email" required />

            <label htmlFor="mensagem">Mensagem (Obrigatório)</label>
            <textarea name="mensagem" id="mensagem" required></textarea>

            <Link href={"#"}>
              <button type="submit">Enviar</button>
            </Link>
          </form>
        </div>
        <Image
          src={"/faleConosco.png"}
          alt="Arte Conceitual Fale Conosco"
          width={100}
          height={100}
          quality={80} />
      </section>
      <footer>
        <h1>Projeto de Trabalho de Conclusão de Curso - Estuda+ 2025.1</h1>
      </footer>
    </main></>
  )
}