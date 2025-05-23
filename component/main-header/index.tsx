'use client';
import NavLink from "../nav-link";
import Link from "next/link"

const MainHeader = () => {
 


  return (
    <header id="main-header">
    <div id="logo">
      <Link href="/">NextNews</Link>
    </div>
    <nav>
      <ul>
        <li>
          <NavLink href={"/news"}>News</NavLink>
        </li>
        <li>
         <NavLink href={"/archive"}>Archived</NavLink>
        </li>
      </ul>
    </nav>
  </header> 
  )
}

export default MainHeader;
