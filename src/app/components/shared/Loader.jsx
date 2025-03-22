import { useEffect, useState } from "react";
export default function Loader() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
  }, []);

  if (!showLoader) return null;
  return (
    <div className="loader">
      <div className="spinner">
        <img src="/images/navbar/small-logo.svg" alt="Company Logo" className="logo" />
      </div>
      <style jsx>{`
        .loader {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
          z-index: 1000;
        }

        .spinner {
          border: 8px solid #f3f3f3;
          border-top: 8px solid #7B0B22;
          border-radius: 50%;
          width: 70px;
          height: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          animation: spin 0.6s linear infinite;
        }

        .logo {
          position: absolute;
          width: 40px; /* Adjust as needed */
          height: auto;
          pointer-events: none; /* Prevents interaction */
          transform: rotate(0deg); /* Ensure the logo remains static */
          animation: no-spin 0.6s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes no-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
}
