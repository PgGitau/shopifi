import bcrypt from 'bcrypt';

//when registering user to hash the password given
export const hashPassword = (password) => { //pass plain password as argument
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => { //generate salt to hash the password
            if (err) {
                reject(err)
            } else {
                bcrypt.hash(password, salt, (err, hash) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(hash)
                    }
                })
            }
        } ) 
    })
};

// when logging in to app to check if user has given right password
export const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed)
}