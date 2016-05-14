import dispatcher from '../dispatcher'
import RegisterConstant from '../constants/registerFormsConstants'

const RegisterActions = {

    createUser(user) {
        dispatcher.dispatch({
            type: RegisterConstant.CREATE_USER,
            user
        })
    },
}

export default RegisterActions
