import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Result1 from "./Result1";

function Feature2ProcessButton({ image1, image2 }) {
  const [isLoading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSame, setIsSame] = useState();
  const [distance, setDistance] = useState();

  const handleClick = async () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("image1", image1);
    formData.append("image2", image2);

    try {
      //TODO: Correctly the feature 1 api url
      const response = await fetch("http://example.com/api", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      const { isSame, distance } = data;

      setIsSame(isSame);
      setDistance(distance);
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
        className="border border-0 px-5"
        style={{
          backgroundColor: "#00ADC6",
          minHeight: "3em",
          width:"fit-content"
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
        />
      )}
    </>
  );
}

export default Feature2ProcessButton;
