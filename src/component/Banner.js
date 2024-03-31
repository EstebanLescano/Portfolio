import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from"../assets/img/foto1.png";

import {useEffect, useState} from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeletenig, setIsDeletenig] = useState(false);
    const toRotate = ["Web Developer", "Backend Java","SpringBoot"];
    const [text, setText] = useState ("");
    const [delta, setDelta] = useState (300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => {clearInterval(ticker)};
    }, [text])
    const  tick = ()=> {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeletenig ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeletenig) {
            setDelta(prevDelta => prevDelta + 2);
        }

        if (!isDeletenig && updatedText === fullText) {
            setIsDeletenig(true);
            setDelta(period);
        } else if (isDeletenig && updatedText === "") {
            setIsDeletenig(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my Portfolio</span>
                            <h1>{`¡Hi I'm Esteban Lescano!`}<span className = "text-wrap"> {text}</span></h1>
                            <p> Lorem Ipsum is simpley dummy text of the printing and typesetting industry.</p>
                            <butoon onClick={() => console.log('connect')}> Let's connect <ArrowRightCircle size={25}/></butoon>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}