import React from 'react';
import { FaReact } from "react-icons/fa";
import { SiFlask } from "react-icons/si";

const Footer = () => {
    return (
        <footer className="text-center py-3" style={{backgroundColor: "#f9f9f9"}}>
                <p> &lt;&#47;&gt; with &hearts; by <span id="name">Team 33</span> using &nbsp;
                    <FaReact /> and <SiFlask />
                </p>
        </footer>
    )
}

export default Footer;