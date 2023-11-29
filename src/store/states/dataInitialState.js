const dataInitialState = [
    {
        title: "Default TodoList",
        id: "1",
        todos: [
                {
                    title: "Homework",
                    id: "001", 
                    parentListId: "1",
                    isCompleted: false,
                    isImportant: false,
                    deadlineDate: "Tomorrow",
                    createDate: "",
                    note: ""
                },
                {
                    title: "Project",
                    id: "002",
                    parentListId: "1",
                    isCompleted: false,
                    isImportant: false,
                    deadlineDate: "Fri, 1 Dec",
                    createDate: "",
                    note: "Default note"
                },
                {
                    title: "Sketch",
                    id: "003",
                    parentListId: "1",
                    isCompleted: true,
                    isImportant: true,
                    deadlineDate: "",
                    createDate: "",
                    note: "Default note"
                }
        ]
    },
    {
        title: "New TodoList",
        id: "2",
        todos: [
                {
                    title: "Pack bags",
                    id: "004",
                    parentListId: "2",
                    isCompleted: false,
                    isImportant: false,
                    deadlineDate: "",
                    createDate: "20 Nov 2023",
                    note: ""
                },
                {
                    title: "Do laundry",
                    id: "005",
                    parentListId: "2",
                    isCompleted: false,
                    isImportant: false,
                    deadlineDate: "",
                    createDate: "23 Nov 2023",
                    note: "Default note"
                }
        ]
    }
];

export default dataInitialState;