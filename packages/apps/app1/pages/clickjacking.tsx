import { Button } from "@chakra-ui/react";
import * as React from "react";

const Clickjacking = () => {
  return (
    <div>
      <iframe
        style={{
          width: "100vw",
        }}
        src="http://127.0.0.1:3000/clickjacking-embedded"
      />
      <Button
        position="fixed"
        top="0"
        left="0"
        colorScheme="red"
        onClick={() => {
          alert("Йо-хо-хо!");
        }}
      >
        Click
      </Button>
    </div>
  );
};

export default Clickjacking;
