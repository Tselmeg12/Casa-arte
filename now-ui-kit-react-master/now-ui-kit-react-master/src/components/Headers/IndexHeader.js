/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/shambala.mp4") + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center ">
            <img
              alt="..."
              className="n-logo"
              src={require("assets/img/logo shambalbig.png")}
            ></img>
            
            <h3>Тууштай хөгжүүлэлт, Хамтын өсөлт</h3>
          </div>
          <h6 className="category category-absolute">
            Designed by{" "}
            <a href="http://invisionapp.com/?ref=creativetim" target="_blank">
              <img
                alt="..."
                className="invision-logo"
                src={require("assets/img/casa log-w.png")}
              ></img>
            </a>
           
            <a
              href="https://www.creative-tim.com?ref=nukr-index-header"
              target="_blank"
            >
            
            </a>
            .
          </h6>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
