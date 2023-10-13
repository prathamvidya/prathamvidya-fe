import React from 'react';
import { BsXCircle } from 'react-icons/bs';
import Modal from 'shared-resources/components/Modal/Modal';
import Button from './Button/Button';

interface Props {
  title: string;
  description: string;
  confirm: any;
  loadingConfirm?: boolean;
  cancel: any;
  loadingCancel?: boolean;
  open: any;
  setOpen: any;
}

const ConfirmDialog: React.FC<Props> = ({
  title,
  description,
  confirm,
  loadingConfirm,
  cancel,
  loadingCancel,
  open,
  setOpen,
}) => (
  <Modal
    visible={open}
    handleVisibility={(b) => setOpen(b)}
    closeOnOutsideClick
    className='max-w-2xl !bg-transparent'
  >
    <div className='relative px-10 bg-white pt-9 rounded-10'>
      <svg width='0' height='0'>
        <linearGradient id='blues-gradient' x1='0' y1='1' x2='1' y2='0'>
          <stop stopColor='#1357BE' offset='0%' />
          <stop stopColor='#0E1028' offset='100%' />
        </linearGradient>
      </svg>
      <BsXCircle
        className='absolute right-4 top-4 fill-[url(#blues-gradient)] cursor-pointer'
        size={26}
        onClick={() => cancel()}
      />
      <h4 className='mb-4 text-base font-[500] capitalize md:text-xl md:leading-5 text-brandSecondary'>
        {title}
      </h4>
      <p className='pb-8 text-brandSecondary'>{description}</p>
      <div className='flex justify-center gap-4'>
        <Button
          className={`absolute w-28 xs:w-36 -bottom-7 `}
          theme='secondaryFilled2'
          onClick={() => cancel()}
          disabled={loadingCancel}
          isSubmitting={loadingCancel}
        >
          Cancel
        </Button>
        <Button
          className={`absolute w-28 xs:w-36 -bottom-7 `}
          theme='primary'
          onClick={() => confirm()}
          disabled={loadingConfirm}
          isSubmitting={loadingConfirm}
        >
          Confirm
        </Button>
      </div>
    </div>
  </Modal>
);

ConfirmDialog.defaultProps = {};

export default React.memo(ConfirmDialog);
