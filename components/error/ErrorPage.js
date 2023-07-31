import { useRouter } from "next/router";
import React from "react";
import Button from "../Button";

const ErrorPage = () => {
  const router = useRouter();

  const handleTryAgain = () => {
    router.reload();
  };

  return (
    <div className="error_div">
      <Image src="./images/error.svg" />
      <h3>Oops Something went Wrong!</h3>
      <Button value="try Again" onClick={handleTryAgain} />
    </div>
  );
};

export default ErrorPage;
