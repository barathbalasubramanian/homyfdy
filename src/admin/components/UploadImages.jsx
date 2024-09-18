import React from "react";

const FileUpload = ({fileInputRef,setSelectedFiles}) => {

  const handleFileChange = (e) => {
    const files = e.target.files;
    console.log("Selected files:", files);
    setSelectedFiles(files);
  };

  return (
    <div className="mt-2">
      <h2 className="text-neutral-500">Upload Multiple Files</h2>
      <input type="file" className="mt-2" multiple ref={fileInputRef} onChange={handleFileChange} />
    </div>
  );
};

export default FileUpload;
