export function Footer(props: { desc: string }) {
  return (
    <>
      <footer className="w-full py-10 m-0 bg-black bg-opacity-50 flex justify-around">
        <div>Coded by <a href="#">{props.desc}.</a></div>
        <ul className="flex gap-3 text-blue-400  text-white">
          <li>
            <a href="https://www.linkedin.com/in/hudneyfernandes-dev">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/hudney-fsbrito">Github</a>
          </li>
        </ul>
      </footer>
    </>
  );
}
