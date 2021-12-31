import styled from "styled-components";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
const CopyIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
      />
    </svg>
  );
};

const CopyButton = styled.button`
  cursor: pointer;
  transition: all 0.3s;

  color: #006661;
  &:hover {
    color: #3cbb95;
  }
  svg {
    width: 24px;
    height: 24px;
  }
`;

const CopyToClipboardLink = ({ url }) => {
  return (
    <>
      <CopyToClipboard
        text={url}
        onCopy={() => toast.success("Link copied to clipboard successfully!")}
      >
        <CopyButton>
          <CopyIcon />
        </CopyButton>
      </CopyToClipboard>
      <Toaster />
    </>
  );
};

export default CopyToClipboardLink;
