import React from "react";
import { Modal } from "antd";

const CharacterPreview = ({ character, isVisible, onClose }) => {
  return (
    <Modal
      title={character.name}
      visible={isVisible}
      onOk={onClose}
      onCancel={onClose}
    >
      <p>Name: {character.name}</p>
    </Modal>
  );
};

export default CharacterPreview;
