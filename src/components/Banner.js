import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState(" ");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "UI Designer"];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // if (isDeleting) {
    //   setDelta((prevDelta) => prevDelta / 2);
    // }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <span className="tagline">Welcome to my portfolio</span>
        <h1>{`Hi! I'm Sonam Gupta `}</h1>
        <h2>
          {`And I'm a `}
          <span className="wrap">{text}</span>
        </h2>

        <button onClick={() => console.log("connect")}>
          <a
            href={require("../Latest Sonam Resume.pdf")}
            download="Sonam_Gupta_Resume"
          >
            Download Resume
          </a>
        </button>
      </Container>
    </section>
  );
};

export default Banner;
