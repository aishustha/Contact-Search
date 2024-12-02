import "./Pagination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const Pagination = () => {
  return (
    <section className="paginationSection">
    
            <FontAwesomeIcon icon={faChevronLeft} />
            <button className="paginationBtn">1</button>
            <FontAwesomeIcon icon={faChevronRight} />
   
    </section>
  )
}
