import Meta from "@/components/common/Meta";
import BreadcrumbSectionFc from "@/components/flightConfirmation/BreadcrumbSection.Fc";
import FrontLayout from "@/components/layouts/Front.Layout";

import { Col, Container, Row } from "reactstrap";
import ReviewSectionFc from "@/components/flightConfirmation/ReviewSection.Fc";
import StickySidebarFc from "@/components/flightConfirmation/StickySidebar.Fc";

const FlightConfirmation = () => {
  return (
    <>
      <Meta title="Flight confirmation" />

      <BreadcrumbSectionFc />

      <div className="small-section">
        <Container>
          <Row>
            <Col lg={8}>
              <ReviewSectionFc />
            </Col>
            <Col lg={4} className="res-margin">
              <StickySidebarFc />
            </Col>
          </Row>
          <div className="continue-btn">
            <button
              onclick="window.location.href='flight-booking-addons.html'"
              className="btn btn-solid"
              type="submit"
            >
              continue booking
            </button>
          </div>
        </Container>
      </div>
    </>
  );
};

export default FlightConfirmation;

FlightConfirmation.getLayout = function getLayout(page) {
  return <FrontLayout navTheme={"light innerNav"}>{page}</FrontLayout>;
};
