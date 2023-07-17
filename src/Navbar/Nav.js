import { Outlet, Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
    <nav>
      <ul className="flex">
        <li>
          <Link to="/Skill">Pokemon/Skill</Link>
        </li>
        <li className="ml-5">
        <Link to="/PlayPokemon">How To Play</Link>
        </li>
        <li>
          
        </li>
      </ul>
    </nav>

    <Outlet />
  </div>
  );
}
