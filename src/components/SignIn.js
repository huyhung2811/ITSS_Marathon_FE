import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signUp.css';

const SignIn = () => {
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [signInData, setSignInData] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  const handleSignIn = () => {
   
    if (signInEmail && signInPassword) {
      if(!validateEmail(signInEmail)){
        setErrorMessage('Email không đúng. Hãy nhập lại email');
      setSuccessMessage('')
      setShowPopup(true);
        // Tự động ẩn popup sau 5 giây
        setTimeout(() => {
          setShowPopup(false);
          setErrorMessage('');
          setSuccessMessage('');
        }, 3000);
        return
      }


      setSignInData({
        email: signInEmail,
        password: signInPassword
      })
      console.log({signInData})
      // Xử lý đăng nhập tại đây, ví dụ gửi request đến server

      // Đăng nhập thành công
     
          window.location.href = '/';
      // Chuyển tới trang nào đó của ứng dụng
    } else {
      setErrorMessage('Vui lòng điền đầy đủ email và  mật khẩu!');
      setSuccessMessage('')
      setShowPopup(true);
        // Tự động ẩn popup sau 5 giây
        setTimeout(() => {
          setShowPopup(false);
          setErrorMessage('');
          setSuccessMessage('');
        }, 3000);
    }
  };

  

  return (
    <div className = "signin">
      <div className = "left-column">
      <img src="login-elearning.png" alt="elearning" />
    </div>
     <div className = "right-column">

      <div className = "login-form">
      <div className = "login-title"><h2>ログイン</h2></div>
      <div className = "sign-in-container">
      <img src="avatar_default.png" alt="Default Avatar" />
      </div>
     <div className="sign-in-container">
      <input
        type="email"
        value={signInEmail}
        placeholder='メール'
        onChange={(e) => setSignInEmail(e.target.value)}
      />
      </div>
      <div className="sign-in-container">
      <input
        type="password"
        placeholder='パスワード'
        value={signInPassword}
        onChange={(e) => setSignInPassword(e.target.value)}
      />
      </div>
      <div className='sign-in-container'>
      <button onClick={handleSignIn}>ログイン</button>
      </div>
      <div className='sign-in-container'>
      <p>アカウントを持っていないのですか? <Link to="/signup"><span className = "link-signup">サインアップ</span></Link></p>
      </div>
      
      </div>
      <div className = "alert-part">
      {
      showPopup &&
      <div className = "popup">
    
          {successMessage && <p className="success">{successMessage}</p>}
          {errorMessage && <p className="error">{errorMessage}</p>}
        
    </div>
    }
      </div>
     </div>
     
    </div>
  );
};

export default SignIn;