import Image from "next/image";
import { Button, Col, Container, Input, Label } from "reactstrap";
import SearchForm from "@/components/common/Search.Form";

const HeaderHome = () => {
  return (
    <>
      <div className="headerHome">
        <div className="cloud">
          {/* <Image src="../assets/images/flights/cloud.png" alt="" className="bg-img d-none"> */}
        </div>
        <Container>
          <Col lg={6}>
            <div className="hContent">
              <div className="w-100">
                <div className="top-cls d-none d-sm-inline-block">#rica</div>
                <h2 className="text-uppercase fw400 mbLg10">
                  great journey begins
                </h2>
                <h3 className="text-uppercase fw800 mbLg40 mb20">
                  with a small step
                </h3>

                <SearchForm />

                <div className="flightConnecting mtLg24">
                  <Label check>
                    <Input name="radio1" type="radio" />{" "}
                    <span className="ms6">multi-city route</span>
                  </Label>
                  <Label check>
                    <Input name="radio1" type="radio" />{" "}
                    <span className="ms6">non stop flights</span>
                  </Label>
                </div>

                <Button
                  color="c3"
                  size="md"
                  className="text-uppercase mtLg10 mt6"
                >
                  Book now
                </Button>
              </div>
            </div>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default HeaderHome;
