import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Col, Container, Row} from "react-bootstrap";
import  meter100 from "../assets/img/svg/100.svg";
import meter90 from "../assets/img/svg/90.svg";
import meter75 from "../assets/img/svg/75.svg";
import meter60 from "../assets/img/svg/60.svg"
import meter50 from "../assets/img/svg/50.svg"
import meter40 from "../assets/img/svg/40.svg"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {max: 4000, min: 3000}, items: 5
        }, desktop: {
            breakpoint: {max: 3000, min: 1024}, items: 3
        }, tablet: {
            breakpoint: {max: 1024, min: 464}, items: 2
        }, mobile: {
            breakpoint: {max: 464, min: 0}, items: 1
        }
    };

    return (
        <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className="skills-bx">
                        <h3>
                            Skills
                        </h3>
                        <h2>
                            Herramientas y tecnologias que uso a diario y que voy mejorando dia a dia
                        </h2>
                        <Carousel responsive={responsive} className=" skill-slider">
                            <div className="items">
                                <img src={meter90} alt="90%" className="carousel-image"/>
                                <h2>Java</h2>
                            </div>
                            <div>
                                <img src={meter90} alt="90%" className="carousel-image"/>
                                <h2>Spring Boot</h2>
                            </div>
                            <div>
                                <img src={meter100} alt="100%" className="carousel-image"/>
                                <h2>Jira</h2>
                            </div>
                            <div>
                                <img src={meter60} alt="60%" className="carousel-image"/>
                                <h2>Kotlin</h2>
                            </div>
                            <div>
                                <img src={meter40} alt="40%" className="carousel-image"/>
                                <h2>Go</h2>
                            </div>
                            <div>
                                <img src={meter90} alt="90%" className="carousel-image"/>
                                <h2>MongoDB</h2>
                            </div>
                            <div>
                                <img src={meter90} alt="90%" className="carousel-image"/>
                                <h2>Posgress</h2>
                            </div>
                            <div>
                                <img src={meter100} alt="100%" className="carousel-image"/>
                                <h2>Git</h2>
                            </div>
                            <div>
                                <img src={meter75} alt="75%" className="carousel-image"/>
                                <h2>Android</h2>
                            </div>
                            <div>
                                <img src={meter100} alt="100%" className="carousel-image"/>
                                <h2>Postman</h2>
                            </div>
                            <div>
                                <img src={meter90} alt="90%" className="carousel-image"/>
                                <h2>Swagger</h2>
                            </div>
                            <div>
                                <img src={meter90} alt="90%" className="carousel-image"/>
                                <h2>AWS</h2>
                            </div>
                            <div>
                                <img src={meter50} alt="50%" className="carousel-image"/>
                                <h2>Terraform</h2>
                            </div>
                            <div>
                                <img src={meter90} alt="90%" className="carousel-image"/>
                                <h2>Docker</h2>
                            </div>
                            <div>
                                <img src={meter50} alt="50%" className="carousel-image"/>
                                <h2>React</h2>
                            </div>
                            <div>
                                <img src={meter50} alt="50%" className="carousel-image"/>
                                <h2>VueJs</h2>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
            {/*<img className="background-image-left" src={colorSharp}/>*/}
        </section>
)
}