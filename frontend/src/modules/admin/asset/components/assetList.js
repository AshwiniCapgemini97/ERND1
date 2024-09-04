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

const AssetList = () => {
  let navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [openConfirmDelete, setConfirmDelete] = useState(false);
  const [currentSelectedUser, setCurrentSelectedUser] = useState({});
  const [refresh, setRefresh] = useState(false);

  const { data, loading, error } = useFetch(`/api/assets?page=${currentPage}&pageSize=${recordsPerPage}&refresh=${refresh}`);
 
  const handlePaginationChange = (activePage) => {
    setCurrentPage(activePage);
  };

  const handleRecordsPerPage = (_, value) => {
    setRecordsPerPage(value);
  };

  const handleEditUser = (userId) => {
    navigate(`${pageURL.addEditAsset}?assetId=${userId}`);
  };

  const handleDeleteUser = (userObj) => {
    setCurrentSelectedUser(userObj);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`/api/asset/${currentSelectedUser.id}`);
      setCurrentSelectedUser({});
      setRefresh(!refresh);
    } catch (err) {
      console.error("Failed to delete user:", err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const totalPages = data?.total ? Math.ceil(data.total / recordsPerPage) : 0;

  return (
    <div className="userListWrapper">
      <Header size="medium">Manage Assets</Header>

      <Notification />

      <div style={{ overflowX: "auto", marginBottom: "10px" }}>
        <Table celled striped unstackable>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>S.No.</TableHeaderCell>
              <TableHeaderCell>Name</TableHeaderCell>
              {/* <TableHeaderCell>E-mail</TableHeaderCell> */}
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Created</TableHeaderCell>
              <TableHeaderCell>Action</TableHeaderCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data?.data?.length > 0 ? (
              data.data.map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <MenuItem
                      onClick={() => handleEditUser(user.id)}
                      className="globalLink"
                    >
                      {user.name}
                    </MenuItem>
                  </TableCell>
                  {/* <TableCell>{user.email}</TableCell> */}
                  <TableCell>
                    <Label color={user.status === "ACTIVE" ? "green" : "red"}>
                      {user.status}
                    </Label>
                  </TableCell>
                  <TableCell>
                    {getDateTime(user.created_at).date},{" "}
                    {getDateTime(user.created_at).time}
                  </TableCell>
                  <TableCell>
                    <Button icon onClick={() => handleEditUser(user.id)}>
                      <Icon name="edit" color="blue" />
                    </Button>
                    <Button icon onClick={() => handleDeleteUser(user)}>
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
        message={`Are you sure you want to delete user ${currentSelectedUser.name} ?`}
        onClose={() => setConfirmDelete(false)}
        handleConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default AssetList;