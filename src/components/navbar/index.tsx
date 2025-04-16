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
                        <Link href={"#"} className="links">Quem Somos</Link>
                        <Link href={"#"} className="links">Recursos</Link>
                        <Link href={"#"} className="links">Contato</Link>
                    </div>
                    <div className="flex items-center gap-5 text-dark-green tracking-wide text-[15px] font-poppins">
                        <Link href={"#"} className="links">Entrar</Link>
                        <Link href={"#"}>
                            <Button className="button font-bold hover:cursor-pointer">Cadastre-se</Button>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}