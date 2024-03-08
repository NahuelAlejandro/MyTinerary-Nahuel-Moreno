import { Link } from "react-router-dom";


const Footer = ()=>{
    return(
        <footer className="bg-black flex flex-col items-center text-white justify-around px-4 w-full gap-4 py-4 md:flex-row md:items-start">
               <section className=" flex flex-col items-center gap-3 md:gap-5">
                <h3 className="text-xl font-semibold lg:text-3xl text-sky-400">Navigate</h3>
                <ul className=" flex flex-col lg:text-lg gap-2">
                    <li><Link className="hover:text-sky-400" to="/">Home</Link></li>
                    <li><Link className="hover:text-sky-400"  to="/Cities">Cities</Link></li>
                </ul>
            </section>
            <section className=" flex flex-col items-center gap-3 md:gap-5">
                <h3 className="text-xl font-semibold lg:text-3xl text-sky-400">Policies</h3>
                <ul className="flex flex-col gap-2 lg:text-lg">
                    <li><a className="hover:text-sky-400 py-1 hover:border-b-[1px] border-sky-400" href="#">Privacy</a></li>
                    <li><a className="hover:text-sky-400 py-1 hover:border-b-[1px] border-sky-400" href="#">Terms of use</a></li>
                    <li><a className="hover:text-sky-400 py-1 hover:border-b-[1px] border-sky-400" href="#">Vrbo terms and conditions</a></li>
                    <li><a className="hover:text-sky-400 py-1 hover:border-b-[1px] border-sky-400" href="#">Accessibility</a></li>
                </ul>
            </section>
            <section className=" flex flex-col items-center gap-3 md:gap-5">
                <h3 className="text-xl font-semibold lg:text-3xl text-sky-400">Social Networks</h3>
                <ul className="flex gap-5 items-center lg:text-lg">
                    <li><a className="hover:text-sky-400" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a></li>
                    <li><a className="hover:text-sky-400" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" fill="none" viewBox="0 0 16 18"><path fill="currentColor" fillRule="evenodd" d="M11.663 0c.297 2.554 1.723 4.077 4.201 4.24v2.872c-1.436.14-2.694-.33-4.158-1.215v5.373c0 6.826-7.441 8.96-10.433 4.066-1.922-3.148-.745-8.672 5.422-8.894v3.03c-.47.076-.972.194-1.431.35-1.372.465-2.15 1.335-1.933 2.868.415 2.938 5.805 3.808 5.357-1.933V.005h2.975z" clipRule="evenodd"></path></svg></a></li>
                    <li><a className="hover:text-sky-400" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 18 18"><path fill="currentColor" d="M18 9.055C18 4.054 13.97 0 9.001 0 4.03.001 0 4.054 0 9.056 0 13.575 3.291 17.321 7.593 18v-6.327H5.309V9.056h2.286V7.06c0-2.27 1.344-3.522 3.4-3.522.985 0 2.014.176 2.014.176v2.228h-1.135c-1.117 0-1.466.698-1.466 1.415v1.698h2.495l-.398 2.616h-2.098V18C14.71 17.319 18 13.574 18 9.055"></path></svg></a></li>
                    <li><a className="hover:text-sky-400" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="14" fill="none" viewBox="0 0 19 14"><path fill="currentColor" fillRule="evenodd" d="M16.44 1.087c.775.208 1.38.815 1.59 1.59.548 2.212.512 6.395.01 8.641a2.25 2.25 0 0 1-1.59 1.59c-2.188.542-11.993.475-14.055 0a2.25 2.25 0 0 1-1.59-1.59C.287 9.21.323 4.751.793 2.688a2.25 2.25 0 0 1 1.59-1.59C5.31.489 15.398.686 16.44 1.089M7.682 4.301l4.7 2.696-4.7 2.696z" clipRule="evenodd"></path></svg></a></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer