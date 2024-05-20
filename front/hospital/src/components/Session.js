import Cookies from 'js-cookie'

const COOKIE_NAME = 'session'
const LC_USER_DATA = 'lc_user_data'

const Session = {

    isLogged: () => {
        return !!Cookies.get(COOKIE_NAME)
    },

    getUserData: () => {
        return {
            name: 'John Doe',
            email: 'jd@noname.com',
            role: 'doctor',
        }
        if (!Session.isLogged()) {
            return null
        }
        return JSON.parse(localStorage.getItem(LC_USER_DATA))
    },

    setUserData: (userData) => {
        localStorage.setItem(LC_USER_DATA, JSON.stringify(userData))
    },

    logout: () => {
        Cookies.remove(COOKIE_NAME)
        localStorage.removeItem(LC_USER_DATA)
    },
}

export default Session
