import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Icon,
  Label,
  MenuItem,
  Header,
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "semantic-ui-react";
import Pagination from "../../../../shared/components/pagination/pagination";
import ConfirmPopup from "../../../../shared/components/confirmPopup/confirmPopup";
import Notification from "../../../../shared/components/notification/notification";
import useFetch from "../../../../shared/utils/useFetch";
import { getDateTime } from "../../../../shared/utils/util";
import { apiBaseURL, pageURL } from "../../../../shared/constants/constant";
import axios from "axios";

const PortfolioList = () => {
  let navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [openConfirmDelete, setConfirmDelete] = useState(false);
  const [currentSelectedPortfolio, setCurrentSelectedPortfolio] = useState({});
  const [refresh, setRefresh] = useState(false);

  const { data, loading, error } = useFetch(`/api/portfolios?page=${currentPage}&pageSize=${recordsPerPage}&refresh=${refresh}`);

  const handlePaginationChange = (activePage) => {
    setCurrentPage(activePage);
  };

  const handleRecordsPerPage = (_, value) => {
    setRecordsPerPage(value);
  };

  const handleEditPortfolio = (portfolioId) => {
    navigate(`${pageURL.addEditPortfolio}?portfolioId=${portfolioId}`);
  };

  const handleDeletePortfolio = (portfolioObj) => {
    setCurrentSelectedPortfolio(portfolioObj);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`${apiBaseURL}api/portfolios/${currentSelectedPortfolio.id}`);
      setCurrentSelectedPortfolio({});
      setRefresh(!refresh);
    } catch (err) {
      console.error("Failed to delete portfolio:", err);
    }
  };

  if (loading) return <div>Loadin${apiBaseURL}g...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const totalPages = data?.total ? Math.ceil(data.total / recordsPerPage) : 0;

  return (
    <div className="portfolioListWrapper">
      <Header size="medium">Manage Portfolios</Header>

      <Notification />

      <div style={{ overflowX: "auto", marginBottom: "10px" }}>
        <Table celled striped unstackable>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>S.No.</TableHeaderCell>
              <TableHeaderCell>Title</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Created</TableHeaderCell>
              <TableHeaderCell>Action</TableHeaderCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data?.data?.length > 0 ? (
              data.data.map((portfolio, index) => (
                <TableRow key={portfolio.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <MenuItem
                      onClick={() => handleEditPortfolio(portfolio.id)}
                      className="globalLink"
                    >
                      {portfolio.title}
                    </MenuItem>
                  </TableCell>
                  <TableCell>
                    <Label color={portfolio.status === "ACTIVE" ? "green" : "red"}>
                      {portfolio.status}
                    </Label>
                  </TableCell>
                  <TableCell>
                    {getDateTime(portfolio.created_at).date},{" "}
                    {getDateTime(portfolio.created_at).time}
                  </TableCell>
                  <TableCell>
                    <Button icon onClick={() => handleEditPortfolio(portfolio.id)}>
                      <Icon name="edit" color="blue" />
                    </Button>
                    <Button icon onClick={() => handleDeletePortfolio(portfolio)}>
                      <Icon name="delete" color="red" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableHeaderCell colSpan="6" textAlign="center">
                  No record available
                </TableHeaderCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Pagination
        activePage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePaginationChange}
        recordsPerPage={recordsPerPage}
        handleRecordsPerPage={handleRecordsPerPage}
      />

      <ConfirmPopup
        open={openConfirmDelete}
        heading="Confirm Delete"
        message={`Are you sure you want to delete portfolio ${currentSelectedPortfolio.title} ?`}
        onClose={() => setConfirmDelete(false)}
        handleConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default PortfolioList;