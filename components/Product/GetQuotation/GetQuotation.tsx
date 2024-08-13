'use client'
import { Modal, Button } from '@mantine/core';
import { ModalContent } from '../ModalContent/ModalContent';

 export default function GetQuotationModal({opened,close,title}) {


  return (
    <>
      <Modal opened={opened} onClose={close} size='lg' centered>
        <ModalContent/>
      </Modal>
    </>
  );
}