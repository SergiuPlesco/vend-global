import Footer from "@/containers/footer/footer";
import Header from "@/containers/header/header";
import Banner from "@/containers/banner/banner";
import Description from "@/containers/description/description";
import Features from "@/containers/features/features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[--background-main]">
      <div className="flex justify-center w-full bg-[--background-banner]">
        <div className="w-full max-w-5xl p-4">
          <Header />
          <Banner />
        </div>
      </div>
      <Description />
      <Features />
      <Footer />
    </main>
  );
}
