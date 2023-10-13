import { Dialog, Transition } from '@headlessui/react';
import cx from 'classnames';
import useEscapeKeyDetector from 'hooks/useEscapeKeyDetector';
import useOutsideClickDetector from 'hooks/useOutsideClickDetector';
import React, { Fragment } from 'react';
import { CgClose } from 'react-icons/cg';

interface ModalProps {
  children: React.ReactNode;
  visible: boolean;
  className?: string;
  overlay?: boolean;
  showCloseButton?: boolean;
  handleVisibility: (value: boolean) => void;
  title?: React.ReactNode | string;
  closeOnOutsideClick?: boolean;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const {
    children,
    visible,
    overlay,
    showCloseButton,
    className,
    handleVisibility,
    title,
    closeOnOutsideClick,
  } = props;

  const closeModal = () => {
    if (closeOnOutsideClick) {
      handleVisibility(false);
    }
  };

  const wrapperRef = useOutsideClickDetector<HTMLDivElement>(closeModal);
  const wrap = useEscapeKeyDetector<HTMLDivElement>(closeModal);

  return (
    <Transition show={visible} as={Fragment}>
      <Dialog
        as='div'
        className='fixed inset-0 z-50 overflow-y-auto'
        onClose={() => null}
      >
        <div className='min-h-screen text-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='inline-block h-screen align-middle'
            aria-hidden='true'
          >
            &#8203;
          </span>
          {!!overlay && (
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-2xl dark:bg-opacity-40 dark:bg-black' />
          )}
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div
              ref={wrapperRef}
              className={cx(
                'inline-block overflow-auto text-left align-middle transition-all transform',
                className
              )}
            >
              <div ref={wrap}>
                <div className='relative'>
                  {title &&
                    (typeof title === 'string' ? (
                      <Dialog.Title
                        as='h3'
                        className='text-2xl font-[700] mt-3 mb-2.5 leading-4'
                      >
                        {title}
                      </Dialog.Title>
                    ) : (
                      title
                    ))}
                  {showCloseButton && (
                    <button
                      onClick={() => closeModal()}
                      className='absolute p-1 text-3xl transition-colors duration-300 rounded-md dark:hover:bg-slate-100 hover:bg-opacity-10 hover:bg-slate-900 dark:hover:bg-opacity-10 right-6 top-6 dark:text-slate-100 text-slate-900'
                    >
                      <CgClose />
                    </button>
                  )}
                </div>
                {children}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

Modal.defaultProps = {
  overlay: true,
};

export default React.memo(Modal);
