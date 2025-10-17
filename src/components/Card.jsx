export default function Card({title,content}){
    return(
        <div className="bg-white/10 text-white shadow-lg rounded-lg p-6 backdrop-blur-sm border border-white/10 m-2 w-40 lg:w-64">
            <div className="title font-bold text-center">{title}</div>
            <p className="content text-xs text-center">{content}</p>
        </div>
    )
}