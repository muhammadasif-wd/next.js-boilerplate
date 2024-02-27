import React from "react";

const Footer = ({styles}: {styles: string}) => {
  const date = new Date().getFullYear();

  return (
    <footer className={`${styles ? styles : "flex justify-center"}`}>
      <small className="">Copyright &copy; {date} | Muhammad Asif.</small>
    </footer>
  );
};

export default Footer;
