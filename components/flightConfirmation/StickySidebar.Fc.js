import { Input, InputGroup, Label } from "reactstrap";

const StickySidebarFc = () => {
  return (
    <div className="sticky-cls-top">
      <div className="review-section">
        <div className="review_box">
          <div className="title-top">
            <h5>booking summery</h5>
          </div>
          <div className="flight_detail">
            <div className="summery_box">
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td>adults (3 X $2501)</td>
                    <td>$250</td>
                  </tr>
                  <tr>
                    <td>total taxes</td>
                    <td>$25</td>
                  </tr>
                  <tr>
                    <td>Insurance</td>
                    <td>$15</td>
                  </tr>
                  <tr>
                    <td>Convenience fee</td>
                    <td>$18</td>
                  </tr>
                </tbody>
              </table>
              <div className="grand_total">
                <h5>
                  grand total: <span>$2500</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="review_box">
          <div className="flight_detail">
            <div className="promo-section">
              <div className="form-group mb-0">
                <Label>have a coupon code?</Label>
                <InputGroup>
                  <Input
                    type="text"
                    className="form-control"
                    placeholder="Promo Code"
                  />
                  <div className="input-group-prepend">
                    <span className="input-group-text">apply</span>
                  </div>
                </InputGroup>
              </div>
              <div className="promos">
                <form>
                  <div className="form-check">
                    <Input
                      className="form-check-input radio_animated"
                      type="radio"
                      name="exampleRadios2"
                      id="exampleRadios3"
                      value="option1"
                      checked
                    />
                    <div>
                      <Label
                        className="form-check-label title"
                        for="exampleRadios3"
                      >
                        RICA500
                      </Label>
                      <Label className="form-check-label" for="exampleRadios3">
                        Use RICA50, and get $50 off on first booking
                      </Label>
                    </div>
                  </div>
                  <div className="form-check">
                    <Input
                      className="form-check-input radio_animated"
                      type="radio"
                      name="exampleRadios2"
                      id="exampleRadios4"
                      value="option2"
                    />
                    <div>
                      <Label
                        className="form-check-label title"
                        for="exampleRadios4"
                      >
                        FLY10
                      </Label>
                      <Label className="form-check-label" for="exampleRadios4">
                        Use FLY10, and get 10% off upto $50 on flight ticket
                        bookings.
                      </Label>
                    </div>
                  </div>
                  <div className="form-check">
                    <Input
                      className="form-check-input radio_animated"
                      type="radio"
                      name="exampleRadios2"
                      id="exampleRadios5"
                      value="option2"
                    />
                    <div>
                      <Label
                        className="form-check-label title"
                        for="exampleRadios5"
                      >
                        FLIGHT80
                      </Label>
                      <Label className="form-check-label" for="exampleRadios5">
                        Upto 80% Off + Upto 40% Cashback on Flight booking &
                        more + Extra 10% off via ICICI Cards (10th-13th Oct)
                      </Label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickySidebarFc;
