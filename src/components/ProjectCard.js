import { Col } from "react-bootstrap";
import {AiFillEye} from "react-icons/ai";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4} cl>
      <a href={projectUrl} target="_blank">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h5 className="text-white">{title}</h5>
          <h1 className="m-0 p-0 text-light"><AiFillEye /></h1>
        </div>
      </div>
      </a>
    </Col>
  )
}
