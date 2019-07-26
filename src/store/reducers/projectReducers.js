const initialState = {
    projects: [
        {id: 1, title: 'Rails App', context: "dvbfhdbv dfvbhfbd bhfdvbf"},
        {id: 2, title: 'React App', context: "dvbfhdbv dfvbhfbd bhfdvbf"},
        {id: 3, title: 'Redux App', context: "dvbfhdbv dfvbhfbd bhfdvbf"}
    ]

}

const projectReducers = (state=initialState, action) => {
    switch (action.type){
        case 'ADD_PROJECT':
            console.log(action.project)
            state.projects.push(action.project)
            return state
    }
 return state
}

export default projectReducers;