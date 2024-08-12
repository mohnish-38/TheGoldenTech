import { Welcome } from "../components/Welcome/Welcome";
import Layout from "../components/AppLayout/Layout";
import HomeCrousel from "../components/HomeCrousel/HomeCrousel";
import EmblaCarousel from "../components/HomeCrousel/HomeCrousel";
import { useDisclosure } from "@nextui-org/react";
import Home from "./Home/Home";

export default function HomePage() {
  return (
    <>
    <Layout>
      {/* <Welcome/> */}
      {/* <EmblaCarousel/> */}
      <Home/>
    </Layout>
    </>
  );
}
