import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <Link to="/">
        <button className="header-button">first</button>
      </Link>
    </header>
  );
}
