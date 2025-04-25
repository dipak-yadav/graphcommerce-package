## Proper use of Memorization
---

### After
```
<EmailInput
                muiRegister={muiRegister}
                name='email'
                error={!!errors.email || emailAvailable === false}
                helperText={
                  errors.email?.message ||
                  (emailAvailable === false ?  AuthErrorMsg.checkEmail : '')
                }
                required
                disabled={isSubmitting}
                hasAccount={emailAvailable === false}
                handleChange={() => setEmailAvailable(true)}
              />
```

```
// Memoize form validation state
  const formValidationState = useMemo(() => ({
    emailError: !!errors.email || emailAvailable === false,
    emailHelperText: errors.email?.message || (emailAvailable === false ? AuthErrorMsg.checkEmail : ''),
    mobileError: !!errors.mobilenumber || mobileNumberAvailable === false,
    mobileHelperText: errors.mobilenumber?.message || (mobileNumberAvailable === false ? AuthErrorMsg.checkMobileNum : ''),
  }), [errors, emailAvailable, mobileNumberAvailable])


<EmailInput
                muiRegister={muiRegister}
                name='email'
                error={formValidationState.emailError}
                helperText={formValidationState.emailHelperText}
                required
                disabled={isSubmitting}
                hasAccount={emailAvailable === false}
                handleChange={handleEmailChange}
              />
```
