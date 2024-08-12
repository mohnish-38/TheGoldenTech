import Layout from "../../components/AppLayout/Layout";
import { Header } from "../../components/Header/Header";
import EmblaCarousel from "../../components/HomeCrousel/HomeCrousel";
import Industries from "../../components/Industries/Industries";
import { Statistics } from "../../components/Stat/Statistics";
import Products from "../Products/page";

function Home() {
    return (
        <>
        <EmblaCarousel/>
        <Statistics/>
        <Industries/>
        </>
     );
}

export default Home;