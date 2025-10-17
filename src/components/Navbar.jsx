export default function Navbar(){
    return(
        <div className="sticky top-0 flex justify-between bg-slate-900/75 max-h-screen p-2 items-center mb-2 z-10">
            <div className="text-2xl font-bold">
                    <a href="/">Shivom</a>
                </div>
            <nav className="px-1 align-center min-[376px]:mx-1">
                <a href="#bio" className="px-2 sm:px-1">About</a>
                <a href="#skills" className="px-2 sm:px-1">Skills</a>
                <a href="#projects" className="px-2 sm:px-1">Projects</a>
                <a href="#achievements" className="px-2 sm:px-1">Contact</a>
            </nav>
        </div>
    )
}