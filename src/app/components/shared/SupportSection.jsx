import React from "react";
import Wrapper from "./Wrapper";

const SupportSection = () => {
  return (
    <Wrapper>
      <div className="bg-[#7B0B22] text-white text-center py-8 mt-12 rounded-md shadow-lg">
        <h3 className="text-2xl font-bold mb-2">Need More Information?</h3>
        <p className="text-lg">
          Contact us at{" "}
          <a
            href="mailto:info@solutionsinnov8.com"
            className="underline font-medium"
          >
            info@solutionsinnov8.com
          </a>{" "}
          for further assistance.
        </p>
      </div>
    </Wrapper>
  );
};

export default SupportSection;
