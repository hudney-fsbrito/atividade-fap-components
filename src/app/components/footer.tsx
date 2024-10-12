export function Footer(props: { desc: string }) {
  return (
    <>
      <footer className="w-4/6 flex justify-around">
        <div>Coded by <a href="#">{props.desc}.</a></div>
        <ul className="flex gap-3 text-blue-400">
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
