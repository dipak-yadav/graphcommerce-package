## Manage Validation Messages in Field
---


// Create validation rules
  const validationRules = {
    required: {
      value: required,
      message: i18n._(/* i18n */ 'This is a required.'),
    },
    minLength: {
      value: minLength,
      message: i18n._(/* i18n */ `${label} must be at least ${minLength} characters.`),
    },
    maxLength: {
      value: maxLength,
      message: i18n._(/* i18n */ `${label} must be no more than ${maxLength} characters.`),
    },
    ...(pattern && {
      pattern: {
        value: new RegExp(pattern),
        message: patternMessage ? i18n._(patternMessage) : i18n._(/* i18n */ `Invalid ${label.toLowerCase()} format.`),
      },
    }),
  };


<TextField
        id={inputId}
        fullWidth
        variant="outlined"
        type="text"
        inputMode={inputMode}
        autoComplete={name}
        placeholder={placeholder}
        error={error}
        helperText={helperText}
        required={required}
        aria-invalid={error}
        aria-describedby={helperText ? errorId : undefined}
        aria-label={i18n._(label)}
        disabled={disabled}
        {...muiRegister(name, validationRules)}
      />

````