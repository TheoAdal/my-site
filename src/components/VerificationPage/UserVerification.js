import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
// import "./EmailVerificationStyles.scss";

const UserVerification = () => {
  const { token } = useParams();
  const [validUrl, setValidUrl] = useState(true);

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/tokenbasedroutes/verify?token=${token}`
        );

        if (res.status === 200) {
          setValidUrl(true);
        } else {
          setValidUrl(false);
        }
      } catch (err) {
        console.error("Verification failed:", err);
        setValidUrl(false);
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="verification-container">
      {validUrl ? (
        <div className="verification-window">
          <h1>Email verified successfully</h1>
          <Link to="/login">
            <button className="green_btn">Go to the Login Page</button>
          </Link>
        </div>
      ) : (
        <div className="verification-window">
          <h1>This verification link is invalid or expired</h1>
        </div>
      )}
    </div>
  );
};

export default UserVerification;
