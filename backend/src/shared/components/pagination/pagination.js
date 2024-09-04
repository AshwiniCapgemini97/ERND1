import React from "react";
import { Icon, Pagination as PaginationSementic } from "semantic-ui-react";
import SelectBox from "../selectBox/selectBox";
import "./pagination.scss";

export default function Pagination({
  activePage = 1,
  totalPages = 0,
  onPageChange = () => {},
  recordsPerPage = 5,
  handleRecordsPerPage = () => {},
}) {
  const disable = activePage === totalPages;

  const handlePagination = (event, obj) => {
    onPageChange(obj.activePage, obj, event);
  };

  const recordsPerPageList = [
    { text: "5", value: "5" },
    { text: "10", value: "10" },
    { text: "15", value: "15" },
    { text: "20", value: "20" },
    { text: "30", value: "30" },
    { text: "40", value: "40" },
    { text: "50", value: "50" },
    { text: "60", value: "60" },
    { text: "70", value: "70" },
  ];

  return (
    <div className="paginationWrapper">
      {totalPages > 0 && (
        <>
          <div className="pageSize">page Size</div>
          <SelectBox
            name="recordsPerPage"
            value={recordsPerPage.toString()}
            options={recordsPerPageList}
            onChange={handleRecordsPerPage}
          />{" "}
          &nbsp; &nbsp;
          <PaginationSementic
            activePage={activePage}
            ellipsisItem={{
              content: <Icon name="ellipsis horizontal" />,
              icon: true,
            }}
            firstItem={{
              content: <Icon name="angle double left" />,
              icon: true,
            }}
            lastItem={{
              content: <Icon name="angle double right" />,
              icon: true,
              disabled: disable,
            }}
            prevItem={{ content: <Icon name="angle left" />, icon: true }}
            nextItem={{
              content: <Icon name="angle right" />,
              icon: true,
              disabled: disable,
            }}
            totalPages={totalPages}
            onPageChange={handlePagination}
          />
        </>
      )}
    </div>
  );
}
