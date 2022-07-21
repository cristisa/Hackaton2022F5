import { Link } from "react-router-dom";
import { DivLogin, DivLogo, DivNavBar, ImgLogo, LoginBtn } from "./NavBar.styled";
// import logook from '../../img/logook.png';


export const NavBar = () => {
  return (
    <>
      <DivNavBar>
        <Link style={{ textDecoration: "none" }} to="/">
          <DivLogo>ArteDeAutor</DivLogo>
          {/* <DivLogo><ImgLogo src={logook}/></DivLogo> */}
        </Link>

        <DivLogin>
          <Link style={{ textDecoration: "none" }} to="/login"><LoginBtn>LogIn</LoginBtn></Link>
        </DivLogin>
      </DivNavBar>
    </>
  );
};
