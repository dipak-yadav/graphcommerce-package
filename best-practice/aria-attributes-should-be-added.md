## Aria Label should be added properly.
---
            <Button
              fullWidth
              type='submit'
              id='create-account'
              variant='contained'
              loading={isSubmitting}
              disabled={isSubmitting}
              aria-label={i18n._(/* i18n */ 'Verify and Register')}
            >
```


````
        <Box 
          sx={{ 
            maxWidth: '528px', 
            backgroundColor: '#fff', 
            borderRadius: '10px', 
            padding: { md: '40px', xs: '15px' }, 
            margin: 'auto', 
          }}
          component="section"
          aria-labelledby="signup-heading"
        >
````

