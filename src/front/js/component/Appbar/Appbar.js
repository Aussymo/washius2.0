import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Appbar/Appbar.css";

export const Appbar = () => {
  const history = useHistory("");
  const logout = () => {
    sessionStorage.clear();
    history.push("/");
    console.log("logout");
    location.reload();
  };
  return (
    <div>
      <>
        {[false].map((expand) => (
          <Navbar key={expand} bg="primary" expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand href="/app">
                <div className="washius">
                  <img src="https://cdn.discordapp.com/attachments/617586904866619402/981352043421769728/Add_a_heading_2.png" />
                </div>
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
                    <div className="title">Washius</div>
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
                    <button className="button-56" role="button">
                      <Nav.Link>
                        <Link to="/lists">List</Link>
                      </Nav.Link>
                    </button>
                    <br />
                    <button className="button-56" role="button">
                      <Nav.Link>
                        <Link to="/events">Calendar PMs</Link>
                      </Nav.Link>
                    </button>
                    <br />
                    <button className="button-56" role="button">
                      <Nav.Link>
                        <Link to="scheduler">Scheduler</Link>
                      </Nav.Link>
                    </button>
                    <br />

                    <button className="button-56" role="button">
                      <Nav.Link>
                        <Link to="/forms">Forms</Link>
                      </Nav.Link>
                    </button>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <button
                      className="button-27"
                      role="button"
                      onClick={() => logout()}
                    >
                      <Nav.Link>LogOut</Nav.Link>
                    </button>
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
