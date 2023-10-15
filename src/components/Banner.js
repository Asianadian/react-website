import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isPause, setIsPause] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [ "Web Developer", "AI Enthusiast", "UI/UX Designer", "Software Engineer" ];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(250 - Math.random() * 200);
  const period = 75;
  const pauseFull = 1000;
  const pauseEmpty = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();

    }, delta)

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);


    if (isPause) {
      setIsPause(false);
      if (isDeleting) {
        setDelta(period);
      }
      else {
        setDelta(200 - Math.random() * 80);
      }
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(pauseFull);
      setIsPause(true);
    }
    else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(pauseEmpty);
      setIsPause(true);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <p className="tagline">Welcome to my Portfolio</p>
            <h1>{`Hi I'm Daniel,`}<span className="wrap">{text}</span></h1>
            <p>and leetcode afficionado</p>
            <button onClick={() => console.log('conn')}>Let's connect <ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Image" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}