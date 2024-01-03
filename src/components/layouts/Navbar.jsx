import PropTypes from "prop-types";
import Container from "@/components/layouts/Container";
import clsx from "clsx";

const Navbar = ({ className, ...rest }) => {
  return (
    <header className={clsx("sticky top-0 z-[1]", className)} {...rest}>
      <Container className="flex items-center justify-between py-5">
        <h1>SIG Test</h1>
      </Container>
      <div className="h-[6px] shadow-md bg-gradient-to-r from-accent-peach to-accent-grape"></div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
