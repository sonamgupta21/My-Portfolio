import React from "react";
import { Col } from "react-bootstrap";

const DesignCard = ({ design }) => {
  return (
    <Col className="proj" sm={12} lg={5} style={{
      width: design.id===1 ? "70%" : '500px !important'
    }}>
      <div className="proj-imgbx">
        <img src={design.imgUrl} alt="" />
        <div className="proj-txtx">
          <h4>{design.title}</h4>

          <div>
            <a
              className="button"
              href={design.dribble}
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribble
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default DesignCard;
