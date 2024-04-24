import Footer from "@/containers/footer/footer";
import Header from "@/containers/header/header";
import Banner from "@/containers/banner/banner";
import Description from "@/containers/description/description";
import Features from "@/containers/features/features";
import ProductList from "@/containers/product-list/product-list";
import HowItWorks from "@/containers/how-it-works/how-it-works";
import Delivery from "@/containers/delivery/delivery";
import { SECTIONS_IDS } from "./constants/sections-ids";
import Order from "@/containers/order/order";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[--background-main]">
      <div className="flex justify-center w-full bg-[--background-banner]">
        <div className="w-full max-w-5xl p-4">
          <Header />
          <Banner />
        </div>
      </div>
      <div className="w-full max-w-5xl">
        <Description id={SECTIONS_IDS.description} />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Features id={SECTIONS_IDS.features} />
          <HowItWorks />
        </div>
        <ProductList id={SECTIONS_IDS.products} />
        <Delivery id={SECTIONS_IDS.delivery} />
        <Order id={SECTIONS_IDS.order} />
      </div>
      <Footer />
    </main>
  );
}
