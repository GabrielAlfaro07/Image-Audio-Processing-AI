import logoPath from "../assets/logo.png";

interface LogoProps {
  size?: "small" | "large";
}

const Logo = ({ size = "small" }: LogoProps) => {
  const className = size === "small" ? "w-8 h-8" : "w-32 h-32";

  return <img src={logoPath} alt="Logo" className={className} />;
};

export default Logo;
