import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export const Appbar = () => {
  return (
    <div>
      <>
        {[false].map((expand) => (
          <Navbar key={expand} bg="primary" expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand href="/dashboard">
                Washius
                {/* <img
                  className="logos"
                  src="https://cdn.discordapp.com/attachments/617586904866619402/981352043421769728/Add_a_heading_2.png"
                /> */}
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Washius
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    {/* <NavDropdown
                      title="Lists"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item>
                        <Link to="/ghostcar">Ghost Car</Link>
                      </NavDropdown.Item>
                      <br />
                      <NavDropdown.Item href="#action2">
                        Opening Duties
                      </NavDropdown.Item>
                      <br />
                      <NavDropdown.Item href="#action3">
                        Shift Change
                      </NavDropdown.Item>
                      <br />
                      <NavDropdown.Item href="#action4">
                        Closing Duties
                      </NavDropdown.Item>
                      <br />
                      <NavDropdown.Item href="#action5">
                        5 A day
                      </NavDropdown.Item>
                      <br />
                      <NavDropdown.Item href="#action6">
                        Rainy Day
                      </NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Link>
                      <Link to="/lists">List</Link>
                    </Nav.Link>
                    <Nav.Link href="#action7">Calendar PMs</Nav.Link>
                    <Nav.Link href="#action8"></Nav.Link>
                    <NavDropdown
                      title="PMS"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action9">
                        Weekly
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action10">
                        Monthly
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action11">
                        Quarterly
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action12">
                        Stock
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action13">
                        Yearly
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Closing"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="#action14">
                        Turn System Off
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action15">
                        Turn Equipment Off
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action16">
                        Check Chemical Levels
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action17">
                        Cleaning
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </>
    </div>
  );
};
