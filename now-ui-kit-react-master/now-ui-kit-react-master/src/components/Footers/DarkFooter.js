/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href=""
                target="_blank"
              >
                Tselmeg's art
              </a>
            </li>
            <li>
              <a
                href="r"
                target="_blank"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href=""
            target="_blank"
          >
          
          </a>
          . Coded by{" "}
          <a
            href=""
            target="_blank"
          >
           
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
