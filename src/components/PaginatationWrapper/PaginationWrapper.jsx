import Pagination from "@/components/Pagination/Pagination.jsx";
import PropTypes from "prop-types";

const PaginationWrapper = ({top, bottom, children, ...props}) => {
    return (
        <>
            {top && <Pagination {...props}/>}

            {children}

            {bottom && <Pagination {...props}/>}
        </>
    );
};

PaginationWrapper.propTypes = {
    top: PropTypes.bool,
    bottom: PropTypes.bool,
    children: PropTypes.node,
}

export default PaginationWrapper;
