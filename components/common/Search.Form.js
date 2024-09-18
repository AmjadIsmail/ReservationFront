import AutoComplete from "@/components/common/AutoComplete";
import {
  faCalendar,
  faCrosshairs,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import { Button, Col, Input, Label, Row } from "reactstrap";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PassengersQty from "./Passengers.Qty";

const SearchForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [showPassengers, setShowPassengers] = useState(false);

  // Step 2: Show the div when the input is focused
  const handleFocus = () => {
    setShowPassengers(true);
  };

  // Step 3: Hide the div when the input loses focus
  const handleBlur = () => {
    setShowPassengers(false);
  };

  const fromItems = [
    {
      id: 0,
      country: "paris, france",
      destination: "Charles de Gaulle Airport",
      extension: "par",
    },
    {
      id: 1,
      country: "Dubai, UAE",
      destination: "Dubai International Airport",
      extension: "par",
    },
    {
      id: 2,
      country: "london",
      destination: "Heathrow",
      extension: "par",
    },
    {
      id: 3,
      country: "singapore, singapore",
      destination: "changi Airport",
      extension: "par",
    },
    {
      id: 4,
      country: "vancouver, canada",
      destination: "vancouver International Airport",
      extension: "par",
    },
    {
      id: 5,
      country: "sydney, australia",
      destination: "rose bay SPB",
      extension: "par",
    },
    {
      id: 6,
      country: "kuala lumpur, malaysia",
      destination: "sentral",
      extension: "par",
    },
  ];
  const toItems = [
    {
      id: 0,
      country: "paris, france",
      destination: "Charles de Gaulle Airport",
      extension: "par",
    },
    {
      id: 1,
      country: "Dubai, UAE",
      destination: "Dubai International Airport",
      extension: "par",
    },
    {
      id: 2,
      country: "london",
      destination: "Heathrow",
      extension: "par",
    },
    {
      id: 3,
      country: "singapore, singapore",
      destination: "changi Airport",
      extension: "par",
    },
    {
      id: 4,
      country: "vancouver, canada",
      destination: "vancouver International Airport",
      extension: "par",
    },
    {
      id: 5,
      country: "sydney, australia",
      destination: "rose bay SPB",
      extension: "par",
    },
    {
      id: 6,
      country: "kuala lumpur, malaysia",
      destination: "sentral",
      extension: "par",
    },
  ];
  return (
    <>
      <div className="searchForm">
        <AutoComplete
          items={fromItems}
          placeholder="Form"
          className="position-relative z-2"
          icon={faCrosshairs}
        />
        <AutoComplete
          items={toItems}
          placeholder="To"
          className="position-relative z-1"
          icon={faLocationDot}
        />

        <Row className="g-lg-3">
          <Col lg={4} md={4}>
            <div className="inputGroup">
              <DatePicker
                className=" px12 form-control rounded-0"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />

              <div className="icon">
                <FontAwesomeIcon icon={faCalendar} />
              </div>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="inputGroup">
              <DatePicker
                className=" px12 form-control rounded-0"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />

              <div className="icon">
                <FontAwesomeIcon icon={faCalendar} />
              </div>
            </div>
          </Col>
          <Col lg={4} md={4}>
            <div className="position-relative">
              <div className="inputGroup">
                <Input
                  type="text"
                  placeholder="Passengers"
                  className="rounded-0 "
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />

                <div className="icon">
                  <FontAwesomeIcon icon={faUser} />
                </div>
              </div>
              {showPassengers && <PassengersQty />}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SearchForm;
