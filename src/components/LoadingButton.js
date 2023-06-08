import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Result1 from './Result1';

function LoadingButton(image1, image2) {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 100));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("image1", image1);
    formData.append("image2", image2);


    setShowModal(true);

    // const response = await fetch("http://example.com/api", {
    //   method: "POST",
    //   body: formData,
    // });

    // const data = await response.json();
    // setResponse(data);
    setLoading(false);
  };

  return (
    <>
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading
        ? "Đang xử lý…"
        : response
          ? `Kết quả: ${response}`
          : "Xử lý"}
    </Button>
      {showModal && <Result1 show={showModal} onHide={() => setShowModal(false)} image1={image1} image2={image2} /> }
    </>
  );
}

export default LoadingButton;
