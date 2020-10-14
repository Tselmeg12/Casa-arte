import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function NucleoIcons() {
  return (
    <>
      <div className="section section-nucleo-icons">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <h2 className="title">Ирээдүй</h2>
              <h5 className="description">
              Бидний алсын хараа бол Тогтвортой Хөгжлийн Зорилтуудын хүрээнд Олон улсын эрдэм шинжилгээ судалгааны хүрээлэн байгуулж тогвортой ирээдүйг хойч үедээ үлдээх явдал. Жилээс жилд орхигдож байгаа Монгол орны говь нутгийн хөрсний доройтол цөлжилтийг сааруулж, байгалийн хязгаарлагдмал нөөц дууссаны дараа ч улс орны эдийн засагт бодит үр ашгаа өгөх дөрвөн салбарыг хөгжүүлэх нь бидний ирээдүй юм.
              </h5>
              
            </Col>
            <Col lg="6" md="12">
              <div className="icons-container">
                <i className="now-ui-icons ui-1_send"></i>
                <i className="now-ui-icons ui-2_like"></i>
                <i className="now-ui-icons transportation_air-baloon"></i>
                <i className="now-ui-icons text_bold"></i>
                <i className="now-ui-icons tech_headphones"></i>
                <i className="now-ui-icons emoticons_satisfied"></i>
                <i className="now-ui-icons shopping_cart-simple"></i>
                <i className="now-ui-icons objects_spaceship"></i>
                <i className="now-ui-icons media-2_note-03"></i>
                <i className="now-ui-icons ui-2_favourite-28"></i>
                <i className="now-ui-icons design_palette"></i>
                <i className="now-ui-icons clothes_tie-bow"></i>
                <i className="now-ui-icons location_pin"></i>
                <i className="now-ui-icons objects_key-25"></i>
                <i className="now-ui-icons travel_istanbul"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NucleoIcons;
