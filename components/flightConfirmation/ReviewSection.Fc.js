import Image from "next/image";
import img1 from "@/public/images/flights/airlines/1.png";
import { Input, Label } from "reactstrap";

const ReviewSectionFc = () => {
  return (
    <div className="review-section">
      <div className="review_box">
        <div className="title-top">
          <h5>flight details</h5>
        </div>
        <div className="flight_detail">
          <div className="row">
            <div className="col-md-3">
              <div className="logo-sec">
                <Image src={img1} className="img-fluid" alt="" />
                <span className="title">Egyptair</span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="airport-part">
                <div className="airport-name">
                  <h6>
                    DXB <span>17.00</span>
                  </h6>
                  <p>sat, 12 oct 2019</p>
                </div>
                <div className="airport-progress">
                  <i className="fas fa-plane-departure float-start"></i>
                  <i className="fas fa-plane-arrival float-end"></i>
                </div>
                <div className="airport-name arrival">
                  <h6>
                    CDG <span>17.00</span>
                  </h6>
                  <p>sat, 12 oct 2019</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="duration">
                <div>
                  <h6>20h 45m</h6>
                  <p>1 stop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review_box">
        <div className="title-top">
          <h5>Information</h5>
        </div>
        <div className="flight_detail">
          <div className="row">
            <div className="col-md-12">
              <div className="boxes">
                <h6>Cancellation Charges</h6>
                <ul>
                  <li>
                    airline fee : <span>$2012</span>
                  </li>
                  <li>
                    This airline allows cancellation only before 2 hrs from
                    departure time.
                  </li>
                </ul>
              </div>
              <div className="boxes">
                <h6>Reschedule Charges</h6>
                <ul>
                  <li>
                    airline fee : <span>$2012</span>
                  </li>
                  <li>
                    This airline allows reschedule only before 2 hrs from
                    departure time.
                  </li>
                </ul>
              </div>
              <div className="boxes">
                <h6>baggage policy</h6>
                <ul>
                  <li>
                    Check-in Baggage : <span>15 kg</span>
                  </li>
                  <li>
                    Cabin Baggage: <span>7 kg</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review_box">
        <div className="title-top">
          <h5>traveller details</h5>
        </div>
        <div className="flight_detail">
          <div className="row form_flight">
            <div className="col-md-12">
              <form>
                <h6>adult 1</h6>
                <div className="row">
                  <div className="form-group col-md-2">
                    <Label for="inputState">title</Label>
                    <Input id="inputState" type="select">
                      <option selected>Choose...</option>
                      <option>Mr.</option>
                      <option>Ms.</option>
                      <option>Mrs.</option>
                    </Input>
                  </div>
                  <div className="form-group col-md-5">
                    <Label for="first">first name</Label>
                    <Input type="text" className="form-control" id="firstt" />
                  </div>
                  <div className="form-group col-md-5">
                    <Label for="last">last name</Label>
                    <Input type="text" className="form-control" id="lastt" />
                  </div>
                </div>
              </form>
              <form>
                <h6>adult 2</h6>
                <div className="row">
                  <div className="form-group col-md-2">
                    <Label for="input">title</Label>
                    <Input id="input" type="select">
                      <option selected>Choose...</option>
                      <option>Mr.</option>
                      <option>Ms.</option>
                      <option>Mrs.</option>
                    </Input>
                  </div>
                  <div className="form-group col-md-5">
                    <Label for="first">first name</Label>
                    <Input type="text" className="form-control" id="first" />
                  </div>
                  <div className="form-group col-md-5">
                    <Label for="last">last name</Label>
                    <Input type="text" className="form-control" id="last" />
                  </div>
                </div>
              </form>
              <form>
                <h6>contact details</h6>
                <div className="row">
                  <div className="form-group col-md-6">
                    <Label for="inputEmail4">Email</Label>
                    <Input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <Label for="inputnumber">Phone no:</Label>
                    <Input
                      type="number"
                      className="form-control"
                      id="inputnumber"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="review_box">
        <div className="title-top">
          <h5>Travel Insurance</h5>
        </div>
        <div className="flight_detail">
          <div className="row">
            <div className="col-md-12">
              <div className="boxes">
                <h6>secure your travel with travel insurance for $25/person</h6>
                <div className="form-check">
                  <Input
                    className="form-check-input radio_animated"
                    type="radio"
                    name="exampleRadios1"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <Label className="form-check-label" for="exampleRadios1">
                    yes, i want to secure my travel with insurance
                  </Label>
                </div>
                <div className="form-check">
                  <Input
                    className="form-check-input radio_animated"
                    type="radio"
                    name="exampleRadios1"
                    id="exampleRadios2"
                    value="option2"
                  />
                  <Label className="form-check-label" for="exampleRadios2">
                    no, i do not want to secure my travel with insurance
                  </Label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSectionFc;
