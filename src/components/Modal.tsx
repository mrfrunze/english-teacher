import { ReactNode, useEffect } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
};

const Modal = ({ open, onClose, children }: Props) => {
    useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-[rgb(var(--rgb-black)/0.7)]"
        onClick={onClose}
      />
      <div className="relative z-10 w-[min(92vw,520px)] rounded-xl bg-white p-6 shadow-xl">
        {children ?? <p className="section-text">Modal content</p>}
        <div className="mt-6 flex justify-end">
          <button className="btn btn-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default Modal