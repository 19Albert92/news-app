import Pagination from "@/components/Pagination/Pagination.tsx";
import React from "react";
import {IPaginationProps} from "@/interfaces";

interface Props {
    children: React.ReactNode,
    top?: boolean,
    bottom?: boolean
}

const PaginationWrapper = ({top, bottom, children, ...paginationProps}: Props & IPaginationProps) => {
    return (
        <>
            {top && <Pagination {...paginationProps}/>}

            {children}

            {bottom && <Pagination {...paginationProps}/>}
        </>
    );
};

export default PaginationWrapper;
