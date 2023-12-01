import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/^(?=.*[A-Z])(?=.*[0-9!@#$%^&*()_+|~=\`{}\[\]:;"'<>,.?/\\-]).+$/, 'Password must contain at least one uppercase letter and one number or symbol')
    .required('Password is required'),
});

export default LoginSchema;