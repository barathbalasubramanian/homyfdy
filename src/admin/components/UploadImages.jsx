import React from "react";

const FileUpload = ({fileInputRef,setSelectedFiles}) => {

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log("Selected files:", files);
    setSelectedFiles(files);
  };

  return (
    <div>
      <h2>Upload Multiple Files</h2>
      <input type="file" multiple ref={fileInputRef} onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;
