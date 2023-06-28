import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = Math.ceil(
        window.pageYOffset || document.documentElement.scrollTop
      );
      setScrollValue(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <header>
        <h1>{`스크롤 값`}</h1>
        <h2>{scrollValue}</h2>
      </header>
      <section className="section section01"></section>
      <section className="section section02"></section>
      <section className="section section03"></section>
    </div>
  );
}
