import Link from "next/link";
import { NavContainer } from "../styles/Navbar.styles";

import { useEffect, useState } from 'react'
import netlifyAuth from '../netlifyAuth.js'
// import { Write } from "./vectors/Write";


const Nav = (): JSX.Element => {






  let [loggedIn, setLoggedIn] = useState(netlifyAuth.isAuthenticated)

useEffect(() => {
  netlifyAuth.initialize((user : any) => {
    setLoggedIn(!!user)
  })
}, [loggedIn])






let [user, setUser] = useState(null)

let login = () => {
  netlifyAuth.authenticate((user: any) => {
    setLoggedIn(!!user)
    setUser(user)
    netlifyAuth.closeModal()
  })
}

let logout = () => {
  netlifyAuth.signout(() => {
    setLoggedIn(false)
    setUser(null)
  })
}
      

  return (    
    <NavContainer>



      <Link href="/">
        <img
          src="https://res.cloudinary.com/dctmgu7mb/image/upload/v1601332391/devLogo_ocngza.png"
          alt="logo"
          className="h-8"
        />
      </Link>
      <div className="flex items-center gap-6">

        {/*code for write button after upgrade*/}
      {/* <div className="flex gap-1 transition duration-200 hover:text-white "><Write/> <span>Write</span></div> */}
      

      {loggedIn ? (
  <div>
    You are logged in!
  </div>
) : (
  <button onClick={login} className="transition duration-200 rounded-3xl border border-black px-3 py-1 md:px-7 md:py-3 md: text-base text-black hover:text-white hover:bg-black">
          Admin Login
        </button>
)}

        



      </div>
    </NavContainer>
  );
};

export default Nav;
