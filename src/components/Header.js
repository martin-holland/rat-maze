import React from "react";

function Header(props) {
  return (
    <div className="headerwrapper">
      <header>
        <h1>The Rat.... in a maze</h1>
        <nav>
          <ul>
            <li>
              <a
                href="https://github.com/martin-holland"
                alt="Link to MH Github"
              >
                Other Work
              </a>
            </li>
          </ul>
        </nav>
        <img
          alt="logo"
          src="https://martin-holland.github.io/assets/LogoWhite.svg"
        ></img>
      </header>
    </div>
  );
}

export default Header;
