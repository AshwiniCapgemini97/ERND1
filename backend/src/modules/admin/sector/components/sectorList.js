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
import { pageURL } from "../../../../shared/constants/constant";
import axios from "axios";
import { apiBaseURL } from "../../../../shared/constants/constant";

const SectorList = () => {
  let navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [openConfirmDelete, setConfirmDelete] = useState(false);
  const [currentSelectedSector, setCurrentSelectedSector] = useState({});
  const [refresh, setRefresh] = useState(false);
  

  const { data, loading, error } = useFetch(`/api/sectors?page=${currentPage}&pageSize=${recordsPerPage}&refresh=${refresh}`);

  const handlePaginationChange = (activePage) => {
    setCurrentPage(activePage);
  };

  const handleRecordsPerPage = (_, value) => {
    setRecordsPerPage(value);
  };

  const handleEditSector = (sectorId) => {
    navigate(`${pageURL.addEditSector}?sectorId=${sectorId}`);
  };

  const handleDeleteSector = (sectorObj) => {
    setCurrentSelectedSector(sectorObj);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`${apiBaseURL}api/sectors/${currentSelectedSector.id}`);
      setCurrentSelectedSector({});
      setRefresh(!refresh);
    } catch (err) {
      console.error("Failed to delete sector:", err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const totalPages = data?.total ? Math.ceil(data.total / recordsPerPage) : 0;

  return (
    <div className="sectorListWrapper">
      <Header size="medium">Manage Sectors</Header>

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
              data.data.map((sector, index) => (
                <TableRow key={sector.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <MenuItem
                      onClick={() => handleEditSector(sector.id)}
                      className="globalLink"
                    >
                      {sector.title}
                    </MenuItem>
                  </TableCell>
                  <TableCell>
                    <Label color={sector.status === "ACTIVE" ? "green" : "red"}>
                      {sector.status}
                    </Label>
                  </TableCell>
                  <TableCell>
                    {getDateTime(sector.created_at).date},{" "}
                    {getDateTime(sector.created_at).time}
                  </TableCell>
                  <TableCell>
                    <Button icon onClick={() => handleEditSector(sector.id)}>
                      <Icon name="edit" color="blue" />
                    </Button>
                    <Button icon onClick={() => handleDeleteSector(sector)}>
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
        message={`Are you sure you want to delete sector ${currentSelectedSector.title} ?`}
        onClose={() => setConfirmDelete(false)}
        handleConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default SectorList;