import Layout from "../../components/AppLayout/Layout";
import { BannerCrousel } from "../../components/Crousel/BannerCrousel";
import { SideNav } from "../../components/Product/SideNavBar/SideNav";


function Products() {
    return ( 
        <Layout>
        {/* <BannerCrousel/> */}
        <div>
            <SideNav/>
        </div>
        </Layout>
     );
}

export default Products;