import Image from "next/image";
import Header from "../components/shared/header";
import Footer from "../components/shared/footer";
import Portfolio from "@/components/shared/portfolio";
export default function Home() {
  return (
      <body className="antialiased bg-gray-200 font-sans">
    <Header/>
    <Portfolio/>
    <Footer/>
</body>
  );
}
