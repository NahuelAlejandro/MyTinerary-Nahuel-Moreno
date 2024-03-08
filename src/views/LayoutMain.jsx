import Footer from "../components/Footer"
import Header from "../components/Header"

const LayoutMain =(props)=>{
    return(
        <div className=' flex flex-col min-h-screen font-["kanit"]'>
            <Header/>
            {props.children}
            <Footer/>     
        </div>
           
    )
}

export default LayoutMain;