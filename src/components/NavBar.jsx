function Navbar() {
  return (
    <nav className="">
      <ul className="mt-6 flex">
        <li>
          <a href="" className="border-primary text-primary ml-20 border-b-2 font-bold uppercase">
            Start Line
          </a>
        </li>
        <li>
          <a
            href=""
            className="hover:border-primary hover:text-primary ml-10 uppercase hover:border-b-2 hover:pb-2"
          >
            Racing DNA
          </a>
        </li>
        <li>
          <a
            href=""
            className="hover:border-primary hover:text-primary ml-10 uppercase hover:border-b-2 hover:pb-2"
          >
            Performance Lab
          </a>
        </li>
        <li>
          <a
            href=""
            className="hover:border-primary hover:text-primary ml-10 uppercase hover:border-b-2 hover:pb-2"
          >
            Victories
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
