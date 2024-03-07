import Footer from "../components/Footer"
import Header from "../components/Header"

const LayoutMain =(props)=>{
    return(
        <>
            <Header/>
            {props.children}
            <Footer/>
        </>
    )
}

export default LayoutMain;