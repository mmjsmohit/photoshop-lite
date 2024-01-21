function UploadButton({ handleUpload }) {
  return (
    <div>
      <input className="upload-button" type="file" onChange={handleUpload} />
    </div>
  );
}

export default UploadButton;
