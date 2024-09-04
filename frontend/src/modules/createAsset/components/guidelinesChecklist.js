import React from "react";
import PropTypes from "prop-types";
import {
  ModalHeader,
  ModalContent,
  ModalActions,
  Button,
  Modal,
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "semantic-ui-react";

function GuidelinesChecklist({ isOpen, onClose }) {
  return (
    <Modal
      size="small"
      open={isOpen}
      onClose={onClose}
      closeOnDimmerClick={false}
      closeOnDocumentClick={false}
    >
      <ModalHeader>Innovation Theater QC / Guidelines Checklist</ModalHeader>
      <ModalContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Sr.No</TableHeaderCell>
              <TableHeaderCell>Check Point</TableHeaderCell>
              <TableHeaderCell>Description</TableHeaderCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Asset Name</TableCell>
              <TableCell>
                Describe what Asset name is should be consistent and
                descriptive. The name related to branding, Technology domain,
                and usability
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>
                Describe about the Asset details. The description should be
                easily understood. E.g. Asset belongs to which sector, what kind
                of customers it can be used, or technology domain, or any
                benchmarking with other demos
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Customer Issue</TableCell>
              <TableCell>
                Describe what the asset will address. E.g. customer challenges,
                a problem with customer service/product or internal processes
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>Benefits/Solutions</TableCell>
              <TableCell>
                Describe reasons a product or service is valuable to a customer.
                The details about the solution provided by Capgemini that meet
                new requirements, unarticulated needs or existing customer needs
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>Deployment/Solutions</TableCell>
              <TableCell>
                Describe about the how POC / Innovation helps customer their
                business or service. Also add details about how to install
                solution in the system (Solution Implementation Instructions).
                E.G. What hardware, what software, procedures etc.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6</TableCell>
              <TableCell>Logo</TableCell>
              <TableCell>
                Describe the unique identity of the Asset and what it
                represents. The Logo should be simple, clear and high in
                resolution
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>7</TableCell>
              <TableCell>Files</TableCell>
              <TableCell>
                Describe a collection of data stored in one unit, identified by
                an asset name. It can be a document, picture, audio or video
                stream. The file format should be in .pdf, .ppt and/or video
                file
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>8</TableCell>
              <TableCell>Links</TableCell>
              <TableCell>
                Describe the link for the source code. E.G. Github or link for
                the asset uploaded on another store
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <p style={{ color: "red", fontSize: "12px" }}>
          * The Asset details and support document should not contain any
          project id/name, customer name, logo, contact number or email id
        </p>
      </ModalContent>
      <ModalActions>
        <Button negative onClick={onClose}>
          AGREE
        </Button>
      </ModalActions>
    </Modal>
  );
}

GuidelinesChecklist.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default GuidelinesChecklist;
