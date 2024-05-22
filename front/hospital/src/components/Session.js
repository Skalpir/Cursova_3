import Cookies from 'js-cookie'


const LC_USER_DATA = 'lc_user_data'
const COOKIE_NAME = 'session'

const Session = {

    isLogged: () => {
        return !!Cookies.get(COOKIE_NAME)
    },

    test : {
        name: 'John Doe',
        email: 'jd@noname.com',
        role: 'doctor',
    },

    getUserData: () => {
        if (!Session.isLogged()) {
            return null
        }
        console.log(JSON.parse(localStorage.getItem(LC_USER_DATA)))
        return JSON.parse(localStorage.getItem(LC_USER_DATA))
    },

    setUserData: (userData) => {
        console.log(userData)
        localStorage.setItem(LC_USER_DATA, JSON.stringify(userData))
    },

    logout: () => {
        Cookies.remove(COOKIE_NAME)
        localStorage.removeItem(LC_USER_DATA)
        Session.test = null
    },
}

export default Session
