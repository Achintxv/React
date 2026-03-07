import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useNavigate, Link } from "react-router-dom";

const Success = () => {
  const [countDown, setCountDown] = useState(10);
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountDown((preCount) => {
        if (preCount === 1) {
          clearInterval(timeoutId);
          navigate("/");
        }
        return preCount - 1;
      });
    }, 1000);

    return () => {clearInterval(timeoutId);};
  }, [navigate]);

  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/sandwich.png" alt="success" />
          <h1>Redirecting to home in {countDown} seconds.....</h1>
          <Link to={'/'}>Back to home <HiOutlineArrowNarrowRight/></Link>
        </div>
      </section>
    </>
  );
};

export default Success;
