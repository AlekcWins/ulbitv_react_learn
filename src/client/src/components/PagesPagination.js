import React, {useContext} from 'react';
import Pagination from 'react-bootstrap/Pagination'
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const PagesPagination = () => {
    const {device} = useContext(Context)

    const pageCount = Math.ceil(device.totalCount / device.limitPerPage)

    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i+1)
    }

    return (
        <Pagination className='mt-5'>
            {/*<Pagination.First/>*/}
            {/*<Pagination.Prev/>*/}
            {/*<Pagination.Item>{1}</Pagination.Item>*/}
            {/*<Pagination.Ellipsis/>*/}

            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={device.page === page}
                    onClick={() => device.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}


            {/*<Pagination.Ellipsis/>*/}
            {/*<Pagination.Item>{20}</Pagination.Item>*/}
            {/*<Pagination.Next/>*/}
            {/*<Pagination.Last/>*/}
        </Pagination>
    );
};

export default observer(PagesPagination);
