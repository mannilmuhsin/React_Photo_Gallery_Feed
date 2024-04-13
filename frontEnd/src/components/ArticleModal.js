import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

function ArticleModal({ isOpen, onClose, article }) {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box className="modal-box bg-white rounded-lg p-4 mx-auto my-24 max-w-2xl">
        <img
          src={article?.node?.field_photo_image_section}
          alt={article?.node?.title}
          className="w-full h-96 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold">{article?.node?.title}</h2>
      </Box>
    </Modal>
  );
}

export default ArticleModal;
