import Navbar from "@/components/Home Page/Navbar";
import Header from "@/components/Home Page/Header";
import Department from "@/components/Home Page/Department";

export default function Home() {
    return (
        <main className="w-full flex flex-col items-center bg-white">
            <Navbar/>
            <Header/>
            <Department/>
        </main>

    );
}
