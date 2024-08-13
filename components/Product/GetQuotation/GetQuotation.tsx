'use client'
import { Modal, Button } from '@mantine/core';
import { ModalContent } from '../ModalContent/ModalContent';

interface GetQuotationModalProps {
    opened: boolean;
    close: () => void;
    title: string;
  }

 export default function GetQuotationModal({opened,close,title}:GetQuotationModalProps ) {


  return (
    <>
      <Modal opened={opened} onClose={close} size='lg' centered>
        <ModalContent/>
      </Modal>
    </>
  );
}