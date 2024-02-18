import React from "react";
import { Modal } from "antd";

interface CharacterPreviewProps {
  character: {
    name: string;
  };
  isVisible: boolean;
  onClose: () => void;
}

const CharacterPreview: React.FC<CharacterPreviewProps> = ({
  character,
  isVisible,
  onClose,
}) => {
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
