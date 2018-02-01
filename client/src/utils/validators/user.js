import Validator from 'validator';
import { isEmpty } from 'lodash';

/**
 * @class defaultClass
 * @description Validate inputs for user credentials
 * @param {object} inputs 
 * @param{string} type
 * @return {object} isValid and errors
 */

export default function(inputs, type) {
    let errors = {};
    const {
        username,
        email,
        password,
        confirmPassword,
        oldPassword
    } = inputs;

    if (type === 'register' || type === 'change-password' || type === 'login') {
        let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w$/;
        if (Validator.isEmpty(password)) {
            errors.password = 'Please enter password'
        }
        if (!Validator.isLength(password, { min: 6 })) {
            errors.password = 'Password must contain at least six characters'
        }
        if (Validator.equals(username, password)) {
            errors.password = 'Password must be different from username'
        }
        if (!re.test(password)) {
            errors.password = 'Password must contain at least one number,one lowercase and uppercase with no space'
        }
    }
    if (type !== 'login') {
        if (Validator.isEmpty(confirmPassword)) {
            errors.confirmPassword = 'Please confirm password'
        }
        if (!Validator.equals(password, confirmPassword)) {
            errors.confirmPassword = 'Password does not match'
        }
    }
    if (type !== 'change-password') {
        let re = /^\w+$/;
        if (Validator.isEmpty(username)) {
            errors.username = 'Please specify username'
        }
        if (Validator.isEmpty(email)) {
            errors.email = 'Please specify email'
        }
        if (!Validator.isEmail(email)) {
            errors.email = 'Please enter a valid email address'
        }
        if (!re.test(username)) {
            errors.username = 'Username must contain only letters, numbers and underscores'
        }
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
};