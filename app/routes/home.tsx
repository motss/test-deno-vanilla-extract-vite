import { Link } from "react-router";
import { container, link, title } from "../styles.css";

export default function Home() {
  return (
    <div className={container}>
      <h1 className={title}>hello world</h1>
      <p>Welcome to the home page.</p>
      <Link to="/about" className={link}>Go to About</Link>
    </div>
  );
}
