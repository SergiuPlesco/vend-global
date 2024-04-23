import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Banner from "@/components/banner/banner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex justify-center w-full bg-[--background-banner]">
        <div className="w-full max-w-5xl p-4">
          <Header />
          <Banner />
        </div>
      </div>
      <Footer />
    </main>
  );
}
