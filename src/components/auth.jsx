import React, {useEffect} from 'react';

const Auth = () => {

  useEffect(() => {
    window.YaAuthSuggest.init({
        client_id: '1849f3d2dbcc439ab7c5db6147df099d',
        response_type: 'token',
        redirect_uri: 'https://uploading-files-to-yandex.vercel.app/',
      },
      'https://uploading-files-to-yandex.vercel.app/',
      {
        view: 'button',
        parentId: 'container',
        buttonView: 'main',
        buttonTheme: 'light',
        buttonSize: 'm',
        buttonBorderRadius: 0,
      }
    )
      .then(function (result) {
        return result.handler();
      })
      .then(function (data) {
        console.log('Сообщение с токеном: ', data);
        const message = document.createElement('div');
        message.textContent = `Сообщение с токеном: ${JSON.stringify(data)}`;
        document.getElementById('container').appendChild(message);
      })
      .catch(function (error) {
        console.log('Что-то пошло не так: ', error);
        const errorMessage = document.createElement('div');
        errorMessage.textContent = `Что-то пошло не так: ${JSON.stringify(error)}`;
        document.getElementById('container').appendChild(errorMessage);
      });
  }, []);

  return (
    <>
      <div id="container"></div>
    </>
  );
};

export default Auth;