// ProfileDetailsCard.js
import React, { useState, useRef, useEffect } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import './LoginPage.css';
import M from 'materialize-css';
import GuideLines from '../Guidelines/Guidelines';
import Breadcrumbs from '../Breadcrumb/Breadcrumbs';
import Loader from '../Loader/Loader';
import { isEmail, isValidPassowrd } from '../../utility/FormUtils';
import { userLogin } from '../../features/auth/authActions';
import {testingSelector} from '../../features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';
// import { BaseUrl } from '../../utility/constants';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const LoginPage = ({ onClose }) => {
  const [focusedField, setFocusedField] = useState(null);  
  const [loading, setLoading] = useState(false);

    
  const [err, setErr] = useState(false);
  
  const formSignin= useRef(null);
  const [formData, setFormData] = useState({name: '', email: '', confirmpsd: '', psd: ''});

  const { userInfo, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(loading, userInfo, error);

  // redirect authenticated user to profile screen
  useEffect(() => {
    setLoading(loading);
    if (userInfo) {
      // window.location.href = BaseUrl;
      window.location.href = 'http://localhost:3001';
    }
  }, [navigate, userInfo, loading])

  console.log('err', err);
  useEffect(() => {
    console.log("err", err);
    if(err && error) {
      setErr(true);
      M.toast({ html: error, classes: 'red' });
    }
  }, [error, err]);


  const [errors, setErrors] = useState({});
  const handleFieldFocus = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setFocusedField(name);
    setFormData(prevState => ({
      ...prevState,
      [name]: value
  }));
  };

  const handleFieldBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
       console.log(formData);
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if(!isEmail(formData.email)){
      newErrors.email = 'valid email is required';
    }

    if (!formData.psd) {
      newErrors.psd = 'Password is required';
    }

    setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
          //setLoading(true);
          setErr(true);
          console.log(formData);
          const payload = {email: formData.email, password: formData.psd};
            console.log("payloadpayload", payload);
            const calling = dispatch(userLogin(payload));
            //console.log(calling.then(data=>data));
            // try {
            //     const response = await fetch('http://localhost:3000/api/login', {
            //         method: 'POST',
            //         body: formData // Use FormData object as the body
            //     });

            //     if (response.ok) {
            //         if (formSignin.current) {
            //           formSignin.current.reset();
            //         };
            //         setLoading(false);
            //         navigate("/home");
            //         // Handle successful API response
            //         console.log('API call successful');
            //     } else {
            //         setLoading(false);
                                        
            //         M.toast({ html: `Something wrong. Please try again.`, classes: 'red' });
            //         // Handle API errors
            //         console.error('API call failed');
            //     }
            // } catch (error) {
              
            //     M.toast({ html: 'Something wrong. Please try again..', classes: 'red' });
            //     setLoading(false);
            //     console.error('Error occurred while calling API:', error);
            // } finally {
            //     setLoading(false);
            // }
        } else {
          M.toast({ html: 'Please fill all the required fields.', classes: 'red' });
        }
  };

  return (
    <>
    <Header />
    <div className='row'>
      <div className="content-wrapper-before admin_banner"></div>
      <div className="breadcrumbs-dark pb-0" id="breadcrumbs-wrapper">
            <div className="container">
                <div className="row">
                    {/* <Breadcrumbs /> */}
                </div>
            </div>
        </div>
        
        <div className='col s12'>
            <div className='container'>
                <div className='section' style={{minHeight: '120px'}}>                  
                    {/* <div className="card">
                    {error && <div className="card-content">
                        <p className="caption mb-0"> <span className="req_star">{error}</span></p>

                        </div>}
                    </div> */}
                </div>
            </div>
        </div>
      </div>
      <GuideLines />
      <Loader loading={loading} />
    <div className='row'>
    <div className="card-container">
      <div className="profile-details-card">
        <div className="card-header">
          <span className="profile-title">Login</span>
          
        </div>
        <form ref={formSignin} id="asset-create" onSubmit={handleSubmit}>
          <div className="card-body">
            <div className="input-field">
                <input id="email"
                    className={errors.email ? 'invalid' : ''}
                    name='email'
                    onChange={handleFieldFocus} type="text" />
                <label>Email <span className="req_star">*</span></label>
                <span className="helper-text" data-error={errors.email}></span>
            </div>
            
            {/* Password Field */}
            <div className="input-field">
                  <input id="psd"
                      className={errors.psd ? 'invalid' : ''}
                      name='psd'
                      onChange={handleFieldFocus} type="password" />
                  <label>Password <span className="req_star">*</span></label>
                  <span className="helper-text"  data-error={errors.psd}></span>
              </div>

          </div>
          <div className="card-footer">
            <button className="submit-button" >
              Sign In
            </button>
            <div className="p-4 box mt-3 text-center">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
    <Footer />
    </>);
};

export default LoginPage;
