import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";

import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";

import "./ListTeacher.css"
import "./ShowTeacher.css"
import { useState } from "react";


// currentTeacher là danh sách các giáo viên cần in
function ShowTeacher({ currentTeacher, indexOfFirstStudent }) {
  const a = "%";
  console.log(currentTeacher);
  const [clickHeart, setClickHeart] = useState(false);
  const handleClick = () => {
    setClickHeart(!clickHeart);
  }
  return (
    <Row xs={3} md={3} className="g-4" style={{ marginTop: "5px" }}>
      {currentTeacher.map((teacher, idx) => (

        <Col key={idx}>

          <Link to={`/teacher/${teacher.id}` } className="link-no-underline">
          <Card >
            <div className="card">
            <div className="avatar-background"></div>
            <div className="avatar-wrapper">
            <Card.Img
              variant="top"
              src={teacher.avatar}
              style={{
                width: '100%',
                height: '250px',
                borderRadius: '50%',
                objectFit: 'cover',
            }}
            />
            
            </div>
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card.Title>{teacher.name}</Card.Title>
              <Card.Text>
                 {teacher.point && Math.round(teacher.point*100) + a  }
                <br />
                <strong>レベル:</strong> {teacher.level}
                <br />
                {teacher.address + ", Ha Noi"}
                <br />
                <strong>評価:</strong> {teacher.vote}{" "}
                <FontAwesomeIcon icon={faStar} style={{ color: "#ffd500" }} />
                {clickHeart ? (
                <FontAwesomeIcon icon={faHeart} style={{ marginLeft: "50px", color: "red" }} onClick={handleClick}/>

                ):(
                  <FontAwesomeIcon icon={faHeart} style={{ marginLeft: "50px"}} onClick={handleClick}/>

                )}
              </Card.Text>
            </Card.Body>
            </div>
          </Card>
        </Link>

         
        </Col>
      ))}
    </Row>

  );
}

export default ShowTeacher;