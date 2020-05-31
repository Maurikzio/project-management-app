const initState = {
    projects: [
        {id: '1', title: 'Correcto', content: 'This project is going to destroy grammarly...'},
        {id: '2', title: 'Virtual Bank', content: 'new way to bank system less expensive than real banks'},
        {id: '3', title: 'Face Detection', content: 'Project to help the sity secutiry. shhhh its private..lol'}

    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT': {
            console.log('created project', action.project);
            return state;
        }
        case 'CREATE_PROJECT_ERROR': {
            console.log('create project error: ', action.err);
            return state;
        }
        default:
            return state;
    }
}

export default projectReducer;