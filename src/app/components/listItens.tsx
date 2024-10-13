export function ListItens(props: {links: string[]}) {

    const listLinks = props.links.map((item:string,i:number)=><li className="hover:cursor-pointer" key={i}>{item}</li>)

    return (
        <ul className="flex flex-row gap-5">
            {listLinks}
        </ul>
    )
}