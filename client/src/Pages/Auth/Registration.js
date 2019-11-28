import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { FormattedMessage, injectIntl } from "react-intl";
import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import { actions } from '../../store/ducks/auth.duck';
import { register } from '../../crud/auth.crud';

function Registration(props) {
  const dispatch = useDispatch();
  // const { intl } = props;

  return (
    <div className="kt-login__body">
      <div className="kt-login__form">
        <div className="kt-login__title">
          <h3>
            Registration
            {/* <FormattedMessage id="AUTH.REGISTER.TITLE" /> */}
          </h3>
        </div>

        <Formik
          initialValues={{
            email: '',
            password: '',
            acceptTerms: false,
            confirmPassword: '',
            referral: ''
          }}
          validate={values => {
            const errors = {};

            if (!values.email) {
              errors.email = 'Field Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email';
            }

            // if (!values.fullname) {
            //   errors.fullname = 'Field Required';
            // }

            // if (!values.username) {
            //   errors.username = 'Invalid username';
            // }

            if (!values.password) {
              errors.password = 'Field Required';
            } else if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/.test(values.password)) {
              errors.password = 'Minimim of 8 characters, 1 number, and 1 special character'
            }
            
            if (!values.confirmPassword) {
              errors.confirmPassword = 'Field Required';
            } else if (values.password !== values.confirmPassword) {
              errors.confirmPassword =
                "Password and Confirm Password didn't match.";
            }

            // if (!values.acceptTerms) {
            //   errors.acceptTerms = "Accept Terms";
            // }

            return errors;
          }}
          onSubmit={(values, { setStatus, setSubmitting }) => {
            register(values.email, values.password, values.referral)
              .then(({ data: { accessToken } }) => {
                dispatch(actions.register(accessToken));
              })
              .catch(err => {
                console.log(err);
                setSubmitting(false);
                if (
                  err.response.status === 400 ||
                  err.response.status === 500
                ) {
                  setStatus(err.response.data.message);
                }
              });
          }}
        >
          {({
            values,
            status,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
              {status && (
                <div role="alert" className="alert alert-danger">
                  <div className="alert-text">{status}</div>
                </div>
              )}

              <div className="form-group mb-0">
                <TextField
                  label="Email"
                  margin="normal"
                  className="kt-width-full"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  helperText={touched.email && errors.email}
                  error={Boolean(touched.email && errors.email)}
                />
              </div>

              <div className="form-group mb-0">
                <TextField
                  type="password"
                  margin="normal"
                  label="Password"
                  className="kt-width-full"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  helperText={touched.password && errors.password}
                  error={Boolean(touched.password && errors.password)}
                />
              </div>

              <div className="form-group mb-0">
                <TextField
                  type="password"
                  margin="normal"
                  label="Confirm Password"
                  className="kt-width-full"
                  name="confirmPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  error={Boolean(
                    touched.confirmPassword && errors.confirmPassword
                  )}
                />
              </div>

              <div className="form-group">
                <TextField
                  margin="normal"
                  label="Referral Code"
                  className="kt-width-full"
                  name="referral"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.referral}
                  helperText={touched.referral && errors.referral}
                  error={Boolean(touched.referral && errors.referral)}
                />
              </div>

              <div className="kt-login__actions">
                <Link
                  to="/auth/forgot-password"
                  className="kt-link kt-login__link-forgot"
                >
                  {/* <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON" /> */}
                </Link>

                <Link to="/auth">
                  <button
                    type="button"
                    className="btn btn-secondary btn-elevate kt-login__btn-secondary"
                  >
                    Back
                  </button>
                </Link>

                <button
                  disabled={isSubmitting}
                  className="btn btn-primary btn-elevate kt-login__btn-primary"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Registration;
