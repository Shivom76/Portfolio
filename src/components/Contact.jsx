export default function Contact(){
    const submitForm=(e)=>{
        e.preventDefault();
        console.log("the form is submitted")
    }

    return(
        <div className="text-center bg-black/30 m-3 mx-4">
            <h2 className="m-3 text-2xl text-white font-semibold">Contact</h2>
            <form action="/">
                <label htmlFor="name">Name: </label>
                <input placeholder="Name" className="rounded-sm p-1 text-black" id="name"></input>
                <br/>
                <br/>
                <label htmlFor="name">Email: </label>
                <input placeholder="Email" className="rounded-sm p-1 text-black" id="email"></input>
                <br></br>
                <button type="submit" onClick={submitForm} className="m-3 rounded-3xl p-2 px-4 bg-gradient-to-r from-cyan-400 via-blue-700 to-blue-800">Loading...</button>
            </form>
        </div>
    )
}