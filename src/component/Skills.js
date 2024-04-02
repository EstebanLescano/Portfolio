import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Col, Container, Row} from "react-bootstrap";
// import {meter1} from "../assets/img/meter1.svg";
// import {meter2} from "../assets/img/meter1.svg";
// import {meter3} from "../assets/img/meter1.svg";
// import {colorSharp} from "../assets/img/color-sharp.png";

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
                        <h2>
                            Skills
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse varius enim in eros elementum tristique.<br></br>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elite</p>
                        <Carousel responsive={responsive} infinite={true} className=" skill-slider">
                            <div className="items">
                                <img src={"./assets/img/meter1.svg"} alt="Image"/>
                                <h2>Developer</h2>
                            </div>
                            {/*<div>*/}
                            {/*    <img src={meter2} alt=""/>*/}
                            {/*    <h5>Brand Identity</h5>*/}
                            {/*</div>*/}
                            {/*<div>*/}
                            {/*    <img src={meter3} alt=""/>*/}
                            {/*    <h5>Developer</h5>*/}
                            {/*</div>*/}
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
            {/*<img className="background-image-left" src={colorSharp}/>*/}
    </section>
)
}