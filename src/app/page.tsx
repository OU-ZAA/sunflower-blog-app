import { Input } from "@/components/ui/input";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
import { UserNav } from "./userNav";

export const metadata = {
  title: "DEV Community",
  description: "Dev blogs home page",
};

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <header className="border-b">
        <div className="container max-w-6xl py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image src={Logo} alt="App's logo" width={50} priority={true} />
            <Input
              type="search"
              placeholder="Search..."
              className="md:w-[300px]"
            />
          </div>
          {!session ? (
            <Link href="/api/auth/signin">
              <Button>Sign In</Button>
            </Link>
          ) : (
            <UserNav {...session} />
          )}
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        hello world
      </main>
    </>
  );
}
