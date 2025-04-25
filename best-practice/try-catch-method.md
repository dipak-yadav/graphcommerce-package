## Proper Use of Try and Catch Method should be used.
----

### Before
```
onComplete: async (response) => {
        const values = fullFormValuesRef.current
        const otpGet = response?.data?.requestOtp?.otp ?? ''
        if (!values) return

        const signupData = {
          firstname: values.firstname,
          email: values.email,
          password: values.password,
          mobilenumber: values.mobilenumber,
          otp: otpGet,
        }

        localStorage.setItem('signupData', JSON.stringify(signupData))
        notifySuccess(i18n._(/* i18n */ 'OTP sent successfully.'))

        await router.push({
          pathname: 'verification',
          query: { from: 'mobile', fromPage: 'signup' },
        })
      },
```

### After
```
onComplete: async (response) => {
        const values = fullFormValuesRef.current
        const otpGet = response?.data?.requestOtp?.otp ?? ''
        if (!values) return

        try {
          const signupData = {
            firstname: values.firstname,
            email: values.email,
            password: values.password,
            mobilenumber: values.mobilenumber,
            otp: otpGet,
          }

          localStorage.setItem('signupData', JSON.stringify(signupData))
          notifySuccess(i18n._(/* i18n */ 'OTP sent successfully.'))

          await router.push({
            pathname: 'verification',
            query: { from: 'mobile', fromPage: 'signup' },
          })
        } catch (error) {
          console.error('Error saving signup data:', error)
        }
      }

