import React, {useEffect} from 'react';

const Auth = () => {

  useEffect(() => {
    window.YaAuthSuggest.init({
        client_id: '1849f3d2dbcc439ab7c5db6147df099d',
        response_type: 'token',
        redirect_uri: 'https://yandex-upload-xi.vercel.app/uploading',
      },
      'https://yandex-upload-xi.vercel.app/',
      {
        view: 'button',
        parentId: 'container',
        buttonView: 'main',
        buttonTheme: 'light',
        buttonSize: 'm',
        buttonBorderRadius: 20,
      }
    )
      .then(function (result) {
        return result.handler();
      })
      .then(function (data) {
        console.log('Сообщение с токеном: ', data);
        document.body.innerHTML += `Сообщение с токеном: ${JSON.stringify(data)}`;
      })
      .catch(function (error) {
        console.log('Что-то пошло не так: ', error);
        document.body.innerHTML += `Что-то пошло не так: ${JSON.stringify(error)}`;
      });
  }, []);

  return (
    <>
      <div id="container"></div>
    </>
  );
};

export default Auth;