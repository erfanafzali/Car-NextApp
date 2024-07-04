import Link from "next/link";

function Layout({ children }) {
  return (
    <div className="w-full flex justify-center items-center flex-col ">
      <Header />

      <main className="w-full">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

function Header() {
  return (
    <header className="bg-blue-00 w-[95%] rounded-tl-[3rem] rounded-br-[3rem] py-5  mt-5  newShadow flex flex-col ">
      <Link href="/cars" className="w-full">
        <h2 className="border-b-4 border-black border-dashed font-bold w-full text-center pb-4 text-2xl md:text-3xl ">
          Car project
        </h2>
      </Link>
      <p className="text-center pt-4 text-base md:text-xl font-semibold">
        Choose and buy your favorite car
      </p>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full text-center py-14 text-xl font-bold bottom-0">Develop By Invoker &copy;</footer>
  );
}
