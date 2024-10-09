export function Button(props: HTMLButtonElement) {
    
    return (
        <button  className="border border-cyan-900 bg-slate-100 text-slate-700 px-10 p-5 rounded-3xl">{props.name}</button>
    )
}