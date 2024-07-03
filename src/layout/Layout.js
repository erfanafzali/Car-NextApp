import Link from "next/link";

function Layout({ children }) {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <Header />

      <main className="">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

function Header() {
  return (
    <header className="bg-blue-400 w-[95%] rounded-tl-[3rem] rounded-br-[3rem] py-5  mt-5  newShadow flex flex-col ">
      <Link href="#" className="w-full">
        <h2 className="border-b-4 border-white border-dashed font-bold w-full text-center pb-4 text-2xl md:text-3xl ">
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
    <footer className="w-full border-b-2 fixed bottom-0">Develop By invoker &copy;</footer>
  );
}
