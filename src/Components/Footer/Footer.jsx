import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-200 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} -{" "}
          <Link className="font-bold" to={""}>
            All right reserved by FlagshipFaceOff
          </Link>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
