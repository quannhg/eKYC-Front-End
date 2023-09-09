import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Result2 from "./Result2";

function Feature2ProcessButton({ referenceImage, queryImages }) {
  const [isLoading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSame, setIsSame] = useState();
  const [distance, setDistance] = useState();

  const handleClick = async () => {
    setLoading(true);
    console.log(referenceImage, queryImages);

    const formData = new FormData();
    formData.append("referenceImage", referenceImage);
    formData.append("queryImages", queryImages);

    try {
      //TODO: Correctly the feature 2 api url
      // const response = await fetch("http://example.com/api", {
      //   method: "POST",
      //   body: formData,
      // });
      // if (!response.ok) {
      //   throw new Error("Network response was not ok");
      // }
      // const data = await response.json();
      // const { isSame, distance } = data;
      // setIsSame(isSame);
      // setDistance(distance);
    } catch (error) {
      window.alert(error);
    } finally {
      setLoading(false);
      setShowModal(true);
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
          width: "fit-content",
        }}
      >
        {isLoading ? "Đang xử lý…" : "Xử lý"}
      </Button>
      {showModal && (
        <Result2
          show={showModal}
          onHide={() => setShowModal(false)}
          referenceImage={referenceImage}
          queryImages={queryImages}
          compareResult={"TODO: implement compare result"}
        />
      )}
    </>
  );
}

export default Feature2ProcessButton;
