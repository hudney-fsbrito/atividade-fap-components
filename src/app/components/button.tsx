
export function Button(props: {name:string}) {

  return (
    <div className="flex ">
      <button className={`
        border 
        border-cyan-900 
        bg-slate-100 text-slate-700 px-10 p-5 rounded-3xl 
        active:text-gray-50 active:bg-cyan-900`}>
        {props.name}
      </button>
      {/* <div className="border border-cyan-900 px-10 p-5 rounded-3xl">
        {props.name}
      </div> */}
    </div>
  );
}
