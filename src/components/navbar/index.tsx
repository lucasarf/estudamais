import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar(){
    return(
        <header className="fixed w-full p-5 glass">
            <nav className="flex items-center justify-between mr-5">
                <div>
                    <Image
                        src={"/logotipo.svg"}
                        height={200}
                        width={200}
                        alt="Logotipo"
                    />
                </div>
                <div className="flex items-center gap-7 mr-5">
                    <div className="flex items-center gap-6 text-dark-green tracking-wide text-[15px] font-poppins">
                        <Link href={"#"} className="hover:text-philippine-green hover:font-bold transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-shadow-md hover:text-shadow-none">Quem Somos</Link>
                        <Link href={"#"} className="hover:text-philippine-green hover:font-bold transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-shadow-md hover:text-shadow-none">Recursos</Link>
                        <Link href={"#"} className="hover:text-philippine-green hover:font-bold transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-shadow-md hover:text-shadow-none">Contato</Link>
                    </div>
                    <div className="flex items-center gap-5 text-dark-green tracking-wide text-[15px] font-poppins">
                        <Link href={"#"} className="hover:text-philippine-green hover:font-bold transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 text-shadow-md hover:text-shadow-none">Entrar</Link>
                        <Link href={"#"}>
                            <Button className="bg-dark-green text-white tracking-wider text-[15px] font-poppins p-4 rounded-2xl hover:bg-philippine-green hover:font-bold hover:cursor-pointer transition duration-300 ease-in-out shadow-md">Cadastre-se</Button>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}