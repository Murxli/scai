"use client"
import React, { useEffect, useState } from "react";
import logo from './../assets/images/logo.png';
import {signOut, signIn, useSession} from "next-auth/react"
import Link from "next/link"
// import { Button } from "./ui/button";
import Image from "next/image"
import Button from "./ui/Button";

const NavBar = (props) => {
    //   const {currentUser} = useAuth();
    const {data:session} = useSession();
    const currentUser = session?.user;
    
    console.log(currentUser);

  
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setActive(props.page);
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="navbar-container fixed top-0 left-0 w-11/12 m-auto text-violet-700">
        <nav className={`navbar stroke ${scrolled ? 'scrolled' : 'bg-transparent'}`}>
        <Link
            href={"/"}
            onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
            }}
            className="flex items-center"
        >
          {/* <img src={logo} alt="logo" className="h-12"/> */}
            {/* <p className="logo px-1">SCAI</p> */}
            <Image src={logo.src} width={100} height={100} className="w-100 h-100"/>
        </Link>

        <ul className="nav-items" style={{display: props.page === 'auth' || props.page === 'app' ? 'none':''}}>
            <li
                className={`${
                    active === 
                    "About" ? "clicked" : ""
                }`}
                style={{display : active==='contact'?'none':'' }}
                onClick={() => {
                    setToggle(!toggle);
                    setActive("About");
                }}
            >
                <a href="/">Home</a>
            </li>
            <li
                className={`${
                    active === "Our-Services" ? "clicked" : "text-secondary"
                }`}
                style={{display : active==='contact'?'none':'block' }}
                onClick={() => {
                    setToggle(!toggle);
                    setActive("Our-Services");
                }}
            >
                <a href="/test">Take a Test</a>
            </li>
            <li
            className={`${
                active === 
                "why-us" ? "clicked" : "text-secondary"
            }`}
            onClick={() => {
                setToggle(!toggle);
                setActive("why-us");
            }}
            style={{display : active==='contact'?'none':'block' }}
            >
                <a href="/stat">Result</a>
            </li>
            <li  className={`${
                  active === 
                  "contact" ? "contact" : "text-secondary"
              }`}>
                <a href="/contact" onClick={() => {
                  setToggle(!toggle);
                  setActive("contact");
                  }}>Help</a>
            </li>
        </ul>
        {!currentUser ? (
        //   <button>
        //     <a href="/login" style={{display: props.page === 'auth' ? 'none':''}}>Sign in</a>
        //   </button>
            <Button className="text-base text-white" onClick={() => {signIn()}}>Sign in</Button>
        ) : (
        //   props.page === 'app' ? (
        //   <form onSubmit={props.onHandleLogout}>
        //     <button className="rounded">Logout</button>
        //   </form>)  : 
        //   <button><a href="/app">Dashboard</a></button>
            <Button className="text-base text-white" onClick={() => {signOut()}}>Logout</Button>
        )}
        </nav>
    </div>
  );
};

export default NavBar;