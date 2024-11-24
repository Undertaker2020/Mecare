import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/logo.svg'
import Wrapper from "@/components/ui/Wrapper";
import Button from "@/components/ui/Button";

export default function Navbar() {
    const links = ["home", "service", "doctors", "pricing"]
    return (
        <Wrapper>
            <nav className="w-full h-[86px] flex justify-between items-center">
                <Link href="/" className="logo flex items-center text-neutral-800 font-bold gap-2">
                    <Image src={logo} width={40} height={40} alt="logo"/>
                    <span>Mecare</span>
                </Link>
                <ul className="flex items-center text-neutral-800 font-medium gap-[30px]">
                    {links.map((link, index) => (
                        <li key={index} className="px-2 py-1">
                            <Link href={link} className="capitalize">{link}</Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center text-neutral-800 font-medium gap-[30px]">
                    <Link href="/singup">Join Doctor</Link>
                    <Button>
                        Get Appointment
                    </Button>
                </div>
            </nav>
        </Wrapper>
    );
}
