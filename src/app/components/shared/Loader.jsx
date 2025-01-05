export default function Loader() {
    return (
      <div className="loader">
        <div className="spinner">
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
            // background: rgba(255, 255, 255, 0.8);
            background: #7B0B22;
            z-index: 1000;
          }
  
          .spinner {
            border: 8px solid #f3f3f3;
            border-top: 8px solid #3498db;
            border-radius: 50%;
            width: 70px;
            height: 70px;
            animation: spin 1s linear infinite;
            display: flex;
            justify-content: center;
            align-items: center;
          }
  
         
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }
  