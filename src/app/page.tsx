import { Input } from "@/components/ui/input";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="border-b">
        <div className="container max-w-6xl py-2 flex justify-between">
          <div className="flex items-center gap-4">
            <Image src={Logo} alt="App's logo" width={50} />
            <Input
              type="search"
              placeholder="Search..."
              className="md:w-[100px] lg:w-[300px]"
            />
          </div>
          <Button>
            <Link href="/api/auth/signin">Sign In</Link>
          </Button>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        hello world
      </main>
    </>
  );
}
