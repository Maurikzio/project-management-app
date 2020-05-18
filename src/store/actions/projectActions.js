export const createProject = (project) => {
    return (dispatch, getState, { gteFirebase, getFirestore }) => {
        dispatch({ type: 'CREATE_PROJECT', project})
    }
}

