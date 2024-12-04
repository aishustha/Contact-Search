import "./Pagination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export const Pagination = ({ currentPage, totalPages, onNext, onPrev}) => {
  return (
    <section className="paginationSection">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className="btnPrevNext"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      <button className="paginationBtn">{currentPage}</button>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="btnPrevNext"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

    </section>
  )
}
