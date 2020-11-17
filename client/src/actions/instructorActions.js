import { axiosWithAuth } from '..utils/axiosWithAuth'

export const ADD_CLASS = 'ADD_CLASS'    //POST
export const DELETE_CLASS = 'DELETE_CLASS'//DELETE
export const FOUND_CLASSES = 'FIND_CLASSES' //GET
export const IS_LOADING = 'IS_LOADING'
export const EDIT_CLASS = 'EDIT_CLASS' //PUT
export const FAILURE = 'FAILURE'  //ERROR CATCH

export const editClass = (item) => {
    return (dispatch) => {
        axiosWithAuth()
            .put('', item)
            .then(res => {
                dispatch({ type: EDIT_CLASS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FAILURE, payload: err.message })
            })
    }
}

export const addClass = (item) => {
    return (dispatch) => {
        axiosWithAuth()
            .post('', item) //add api endpoint
            .then(res => {
                dispatch({ type: ADD_CLASS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FAILURE, payload: err.message })
            })
    }
}

export const deleteClass = () => {
    return (dispatch) => {
        axiosWithAuth()
            .delete('') //enter api endpoint for delete
            .then(res => {
                dispatch({ type: DELETE_CLASS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FAILURE, payload: err.message })
            })
    }
}

export const findingClasses = () => {
    return (dispatch) => {
        dispatch(({ type: IS_LOADING }))
        axiosWithAuth()
            .get('')  //add api endpoint
            .then(res => {
                dispatch({ type: FOUND_CLASSES, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FAILURE, payload: err.message })
            })
    }
}
