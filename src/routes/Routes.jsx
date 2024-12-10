import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Glavniy from "./glavniy/Glavniy"
import Pro_zabros from "../routes/pro_zabros/Pro_zabros"
import Garaj from "./garaj/Garaj"
import Kontact from "./kontact/Kontact"
import Zakas from "./zakas/Zakas"

import { Route } from "react-router-dom"

const Routes = () => {
    return (
        <>
            <Header />

            <Route exact path="/">
                <Glavniy />
            </Route>

            <Route path= "/pro_zabros">
                <Pro_zabros />
            </Route>

            <Route path="/garaj">
                <Garaj />
            </Route>

            <Route path ="/kontact">
                <Kontact />
            </Route>

            <Route path="/zakas">
                <Zakas />
            </Route>


            <Footer />
        </>
    )
}

export default Routes