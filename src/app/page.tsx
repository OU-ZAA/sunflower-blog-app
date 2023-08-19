import Logo from "../../public/logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <div>
          <Image src={Logo} alt="App's logo" width={50} />
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        hello world
      </main>
    </>
  );
}
