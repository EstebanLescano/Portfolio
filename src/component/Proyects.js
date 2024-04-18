import {Container, Col, Nav, Row, Tab, TabContainer, TabContent, TabPane} from "react-bootstrap";
import * as projects from "react-bootstrap/ElementChildren";

export const Proyects = () => {
    const proyects = [
        {
            title: "business Startup",
            descripcion: "",
            imgUrl: ""
        },
        {
            title: "business Startup",
            descripcion: "",
            imgUrl: ""
        }
    ];
    return (
        <section className="proyect" id="proyect">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey ="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Another Tab</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Yet Another Tab</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Panel eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => (
                                            <div key={index}>
                                                <h2>{project.title}</h2>
                                                <p>{project.descripcion}</p>
                                                {/* Add image display logic here if needed */}
                                            </div>
                                        ))}
                                    </Row>
                                </Tab.Panel>
                                <Tab.Pane eventKey="second">
                                    <p>Lorem ipsum</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p>Lorem ipsum</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
