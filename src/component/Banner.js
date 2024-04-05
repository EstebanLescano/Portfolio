import {Container, Row, Col} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headerImg from "../assets/img/png/fotocarnet.png";

import {useEffect, useState} from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Developer", "Backend Java","SpringBoot"];
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
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Bienvenido a mi Portfolio</span>
                            <h1>{`¡Hola soy Esteban Lescano!`}<span className = "wrap"> {text}</span></h1>
                            <p>Técnico Desarrollador enfocado en proyectos de desarrollo de aplicaciones seguras.
                                Comprometido con la gestión efectiva del tiempo y la entrega de resultados.
                                Apasionado por la informática y dedicado a mantenerme actualizado en tecnologías
                                especialmente en Kotlin para Android, aunque actualmente me dedico a el backend de aplicaciones web.
                                Mi determinación y constante búsqueda de conocimiento me impulsan a superarme día a día,
                                siempre en busca de soluciones efectivas que faciliten la vida diaria de las personas y las empresas.</p>
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