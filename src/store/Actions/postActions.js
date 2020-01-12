

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //async call
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: "Vicky",
            authorLastName: "lastvicky",
            authorId: 3214,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: "CREATE_PROJECT", project })
        }).catch((error) => {
            dispatch({ type: "CREATE_PROJECT_ERROR", error })
        })
    }
}
