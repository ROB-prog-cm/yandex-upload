import React, {useState} from 'react';

const Uploading = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 100) {
      setErrorMessage('Максимальное количество файлов - 100');
    } else {
      setErrorMessage('');
      setSelectedFiles([...selectedFiles, ...files]);
    }
  };

  const handleUpload = () => {
    console.log('Загрузка файлов:', selectedFiles);
  };

  return (
    <div>
      <h2>Форма для отправки файлов</h2>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
      />
      {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
      <button onClick={handleUpload}>Загрузить файлы</button>
    </div>
  );
};

export default Uploading;