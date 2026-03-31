import "./css/Footer.css"

export default function Footer(){
    return(
        <div className="bg-black text-white text-center w-auto bottom-0 p-4 mt-6">
            <h2 className="text-center mb-1">Digital design by <b>Shivom</b></h2>
            <p className="text-xs mb-4">Thanks for visiting &hearts; </p>
            <hr className="w-2/3 mx-auto " />
            <div className="logos mt-3">
                <a href="https://www.linkedin.com/in/shivom-paul-53072222b/"  target="_blank" rel="noreferrer" className="px-1"><i className="fa-brands fa-linkedin opacity-70"></i></a>  
                <a href="https://github.com/Shivom76" className="px-1" target="_blank" rel="noreferrer" ><i className="fa-brands fa-github opacity-70"></i></a>
                <a href="#" className="px-1" target="_blank" rel="noreferrer" ><i className="fa-brands fa-x-twitter opacity-70"></i></a>
                <a href="https://www.instagram.com/_.abyssal_mist/" target="_blank" rel="noreferrer" className="px-1"><i className="fa-brands fa-instagram opacity-70"></i></a>
            </div>
        </div>
    )
}