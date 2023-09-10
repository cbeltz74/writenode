import { Link } from "react-router-dom";
import image from "../assets/images/page-not-found.jpg";

export const PageNotFound = () => {
  return (
    <section className="pageNotFound">
      <p>404 / Page Not Found</p>
      <img src={image} alt="Page not found" />
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </section>
    )
}
