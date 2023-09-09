import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Result1 from "./Result1";

function Feature1ProcessButton({ image1, image2 }) {
  const [isLoading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSame, setIsSame] = useState();
  const [distance, setDistance] = useState();
  const [faceDetected, setFaceDetected] = useState(false);

  const handleClick = async () => {
    setLoading(true);

    const formData = new FormData();

    formData.append("file", image1);
    formData.append("file", image2);

    try {
      const response = await fetch("http://localhost:3001/api/verify", {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      const { distance, error, result, status } = data;

      setIsSame(result);
      setDistance(distance);
      setFaceDetected(status);

      setShowModal(true);
    } catch (error) {
      window.alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        variant="primary"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        className="border border-0"
        style={{
          backgroundColor: "#00ADC6",
          minHeight: "3em",
          minWidth: "20em",
        }}
      >
        {isLoading ? "Đang xử lý…" : "Xử lý"}
      </Button>
      {showModal && (
        <Result1
          show={showModal}
          onHide={() => setShowModal(false)}
          image1={image1}
          image2={image2}
          isSame={isSame}
          distance={distance}
          faceDetected={faceDetected}
        />
      )}
    </>
  );
}

export default Feature1ProcessButton;
