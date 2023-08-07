import React, {useEffect, useState} from 'react';
import qs from "qs";

const Uploading = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const url = 'https://cloud-api.yandex.net/v1/disk/';

  useEffect(() => {
    const queryParams = qs.parse(location.hash.slice(1));
    console.log('queryParams',queryParams)

    fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `OAuth ${queryParams.access_token}`
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, [])

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