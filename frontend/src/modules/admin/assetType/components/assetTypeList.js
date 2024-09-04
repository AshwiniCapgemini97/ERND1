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

const AssetTypeList = () => {
  let navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [openConfirmDelete, setConfirmDelete] = useState(false);
  const [currentSelectedAssetType, setCurrentSelectedAssetType] = useState({});
  const [refresh, setRefresh] = useState(false);

  const { data, loading, error } = useFetch(`/api/asset_types?page=${currentPage}&pageSize=${recordsPerPage}&refresh=${refresh}`);

  const handlePaginationChange = (activePage) => {
    setCurrentPage(activePage);
  };

  const handleRecordsPerPage = (_, value) => {
    setRecordsPerPage(value);
  };

  const handleEditAssetType = (assetTypeId) => {
    navigate(`${pageURL.addEditAssetType}?assetTypeId=${assetTypeId}`);
  };

  const handleDeleteAssetType = (assetTypeObj) => {
    setCurrentSelectedAssetType(assetTypeObj);
    setConfirmDelete(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`/api/asset_types/${currentSelectedAssetType.id}`);
      setCurrentSelectedAssetType({});
      setRefresh(!refresh);
    } catch (err) {
      console.error("Failed to delete asset type:", err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const totalPages = data?.total ? Math.ceil(data.total / recordsPerPage) : 0;

  return (
    <div className="assetTypeListWrapper">
      <Header size="medium">Manage Asset Types</Header>

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
              data.data.map((assetType, index) => (
                <TableRow key={assetType.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <MenuItem
                      onClick={() => handleEditAssetType(assetType.id)}
                      className="globalLink"
                    >
                      {assetType.title}
                    </MenuItem>
                  </TableCell>
                  <TableCell>
                    <Label color={assetType.status === "ACTIVE" ? "green" : "red"}>
                      {assetType.status}
                    </Label>
                  </TableCell>
                  <TableCell>
                    {getDateTime(assetType.created_at).date},{" "}
                    {getDateTime(assetType.created_at).time}
                  </TableCell>
                  <TableCell>
                    <Button icon onClick={() => handleEditAssetType(assetType.id)}>
                      <Icon name="edit" color="blue" />
                    </Button>
                    <Button icon onClick={() => handleDeleteAssetType(assetType)}>
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
        message={`Are you sure you want to delete asset type ${currentSelectedAssetType.title} ?`}
        onClose={() => setConfirmDelete(false)}
        handleConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default AssetTypeList;