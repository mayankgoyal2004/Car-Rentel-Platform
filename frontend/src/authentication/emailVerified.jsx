import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import apiService from "../../Apiservice/apiService";

function EmailVerified() {
  const [searchParams] = useSearchParams();
  const [isHover, setIsHover] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const verify = async () => {
      const token = searchParams.get("token");
      if (!token) {
        toast.error("No verification token provided.");
        setLoading(false);
        return;
      }

      try {
        const response = await apiService.verifyEmail(token);

        if (response.data.success) {
          setIsVerified(true);
          toast.success(response.data.message);
        } else {
          setIsVerified(false);
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [searchParams]);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2>Verifying your email...</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        marginTop: 184,
        marginBottom: 72,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isVerified ? (
        <div className="enailverify-body">
          <div className="enailverifycontainer">
            <div
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <div className="success-icon" style={{ fontSize: 24, marginRight: 8 }}>
                &#10004;
              </div>
              <h2>Email Verification Successful</h2>
            </div>
            <p>Your Email has been Successfully Verified.</p>
            <div style={{ display: "flex" }}>
              <p>Thank you for using our Application.</p>
              <div className="success-emoji">😀</div>
            </div>
            <div>
              <button
                style={{
                  backgroundColor: !isHover ? "#7A7F34" : "#AFA957",
                  color: !isHover ? "#fff" : "#000",
                  width: "296px",
                  height: "54px",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/"
                  style={{ color: "inherit", fontFamily: "Lato", fontSize: 24 }}
                >
                  Return to Homepage
                </Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="enailverify-body">
          <div className="enailverifycontainer">
            <h2>Email Verification Failed ❌</h2>
            <p>Invalid or expired link. Please try again.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmailVerified;
