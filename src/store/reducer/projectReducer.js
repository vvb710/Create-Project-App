const initState = {
    projects: [
        { id: 1, title: "project1", content: "content1" },
        { id: 2, title: "project2", content: "content1" },
        { id: 3, title: "project3", content: "content3" }

    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log(action.project);
            return state;
        case "CREATE_PROJECT_ERROR":
            console.log("error", action.error);
            return state;
        default: return state
    }
}

export default projectReducer;