import * as React from "react";
import Link from "next/link";

// It says exactly what it's doing
const Header = () => (
  <div className="container">
    <ul className="space-x-4">
      <li>
        <Link href="https://google.com/">
          <a className="nav-link">Customers</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Header;
