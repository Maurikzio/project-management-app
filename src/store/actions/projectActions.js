export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        //this gonna create a new document, its asynchonous
        firestore.collection('projects').add({
            ...project, //like project.title and project.content of project we are passing to fn
            authorFirstName: 'Jhon',
            authorLastName: 'Travolta',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project})
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err})
        })
    }
};

