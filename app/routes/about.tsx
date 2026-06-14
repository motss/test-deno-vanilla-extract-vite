import { Link } from "react-router";
import { container, link, title } from "../styles.css";

export default function About() {
  return (
    <div className={container}>
      <h1 className={title}>About</h1>
      <p>Built with Deno + Vite + vanilla-extract + React Router.</p>
      <Link to="/" className={link}>Back to Home</Link>
    </div>
  );
}
