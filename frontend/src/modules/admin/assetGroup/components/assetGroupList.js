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

const AssetGroupList = () => {
  let navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [openConfirmDelete, setConfirmDelete] = useState(false);
  const [currentSelectedAssetGroup, setCurrentSelectedAssetGroup] = useState({});
  const [refresh, setRefresh] = useState(false);

  const { data, loading, error } = useFetch(`/api/asset_groups?page=${currentPage}&pageSize=${recordsPerPage}&refresh=${refresh}`);

  const handlePaginationChange = (activePage) => {
    setCurrentPage(activePage);
  };

  const handleRecordsPerPage = (_, value) => {
    setRecordsPerPage(value);
  };

  const handleEditAssetGroup = (assetGroupId) => {
    navigate(`${pageURL.addEditAssetGroup}?assetGroupId=${assetGroupId}`);
  };

  const handleDeleteAssetGroup = (assetGroupObj) => {
    setCurrentSelectedAssetGroup(assetGroupObj);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`/api/asset_groups/${currentSelectedAssetGroup.id}`);
      setCurrentSelectedAssetGroup({});
      setRefresh(!refresh);
    } catch (err) {
      console.error("Failed to delete asset group:", err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const totalPages = data?.total ? Math.ceil(data.total / recordsPerPage) : 0;

  return (
    <div className="assetGroupListWrapper">
      <Header size="medium">Manage Asset Groups</Header>

      <Notification />

      <div style={{ overflowX: "auto", marginBottom: "10px" }}>
        <Table celled striped unstackable>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>S.No.</TableHeaderCell>
              <TableHeaderCell>Asset Id</TableHeaderCell>
              <TableHeaderCell>Group Id</TableHeaderCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data?.data?.length > 0 ? (
              data.data.map((assetGroup, index) => (
                <TableRow key={assetGroup.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <MenuItem
                      onClick={() => handleEditAssetGroup(assetGroup.id)}
                      className="globalLink"
                    >
                    </MenuItem>
                  </TableCell>
                  {/* <TableCell>
                    <Label color={assetGroup.status === "ACTIVE" ? "green" : "red"}>
                      {assetGroup.status}
                    </Label>
                  </TableCell>
                  <TableCell>
                    {getDateTime(assetGroup.created_at).date},{" "}
                    {getDateTime(assetGroup.created_at).time}
                  </TableCell> */}
                  <TableCell>
                    <Button icon onClick={() => handleEditAssetGroup(assetGroup.id)}>
                      <Icon name="edit" color="blue" />
                    </Button>
                    <Button icon onClick={() => handleDeleteAssetGroup(assetGroup)}>
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
        message={`Are you sure you want to delete asset group ${currentSelectedAssetGroup.title} ?`}
        onClose={() => setConfirmDelete(false)}
        handleConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default AssetGroupList;