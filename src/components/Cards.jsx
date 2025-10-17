import Card from "./Card";

export default function Cards({text,data}){
    const items=data || []

    return(
        <div className="cardBox">
            <h3 className="ml-3 text-base text-center">{text}</h3>
            {items.map((item)=>(
                <Card key={item.id} title={item.title} content={item.content} />
            ))}
        </div>
    )
}