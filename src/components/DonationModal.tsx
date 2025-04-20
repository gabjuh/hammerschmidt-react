import { FC, ReactNode, useEffect } from 'react';

interface DonationModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  qrImage?: string;
  children?: ReactNode;
}

const DonationModal: FC<DonationModalProps> = ({ visible, onClose, title, qrImage, children }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;

    if (visible) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKey);
    } else {
      document.body.style.overflow = originalOverflow;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [visible]);

  if (!visible) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center px-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-[#54372A] text-white rounded-lg shadow-lg w-full max-w-lg relative flex flex-col max-h-[90vh] px-0 sm:px-10">
        {/* Cím */}
        <h2 className="font-title text-center text-3xl font-bold text-orange-300 mt-7">{title}</h2>

        {/* Bezáró gomb */}
        <button
          onClick={onClose}
          className="text-white text-2xl font-bold hover:text-orange-400 transition absolute right-5 top-3"
          aria-label="Bezárás"
        >
          &times;
        </button>

        {/* Tartalom */}
        <div className="overflow-y-auto px-6 pb-6 pt-4 space-y-6 text-sm text-white/80">
          {qrImage && (
            <div className="hidden md:flex justify-center items-start mt-2">
              <img
                src={qrImage}
                alt={`${title} QR kód`}
                className="w-32 h-32 object-contain rounded shadow"
              />
              </div>
            )}
          <div className="flex flex-col md:flex-row gap-6">
            {/* BAL OLDAL – adatok táblázatban */}
            <div className="flex-1">
              <table className="w-full text-sm border-separate border-spacing-y-2">
                <tbody>
                  {children && Array.isArray(children)
                    ? children.map((child, i) => {
                        if (
                          typeof child === 'object' &&
                          'props' in child &&
                          typeof child.props.children === 'string' &&
                          child.type === 'p' &&
                          child.props.children.includes(':')
                        ) {
                          const fullText = child.props.children;
                          const [label, value] = fullText.split(':').map((s: string) => s.trim());

                          return (
                            <tr key={i} className="align-top">
                              <td className="pr-2 font-semibold whitespace-nowrap text-white/90">{label}:</td>
                              <td className="font-mono break-all">{value}</td>
                              <td className="pl-2">
                                <button
                                  onClick={() => handleCopy(value)}
                                  className="text-xs text-orange-300 opacity-60 hover:opacity-100 transition"
                                  title="Másolás"
                                >
                                  📋
                                </button>
                              </td>
                            </tr>
                          );
                        }

                        // Gombok, egyéb elemek külön sorban, középen
                        return (
                          <tr key={i}>
                            <td colSpan={3} className="pt-1">
                              <div className="flex justify-center text-center">{child}</div>
                            </td>
                          </tr>
                        );
                      })
                    : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p className="text-center italic text-sm text-white/70">
          A legkisebb hozzájárulás is sokat jelent nekünk,<br />köszönjük a támogatást!
        </p>
        <p className="text-3xl text-center mb-7 mt-3">🫶🏼</p>
      </div>
    </div>
  );
};

export default DonationModal;
