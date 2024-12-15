const Logo = ({ colored, size }) => {
  return (
    <div
      className={`font-unlock ${
        size === "large"
          ? "text-size-34 lg:text-size-40"
          : "text-size-28 lg:text-size-34"
      } ${colored ? "text-primary" : "text-white"}`}
    >
      JHONTRAKTOR
    </div>
  );
};

export default Logo;
