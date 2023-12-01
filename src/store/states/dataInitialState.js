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
                    deadline: {
                        deadlineString: "Today",
                        deadlineObj: new Date()
                    },
                    createDate: new Date(),
                    note: ""
                },
                {
                    title: "Project",
                    id: "002",
                    parentListId: "1",
                    isCompleted: false,
                    isImportant: false,
                    deadline: {
                        deadlineString: "Fri, 1 Dec",
                        deadlineObj: new Date (2023, 11, 1)
                    },
                    createDate: new Date(),
                    note: "Default note"
                },
                {
                    title: "Sketch",
                    id: "003",
                    parentListId: "1",
                    isCompleted: true,
                    isImportant: true,
                    deadline: {
                        deadlineString: "",
                        deadlineObj: new Date()
                    },
                    createDate: new Date(),
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
                    deadline: {
                        deadlineString: "",
                        deadlineObj: new Date()
                    },
                    createDate: new Date(),
                    note: ""
                },
                {
                    title: "Do laundry",
                    id: "005",
                    parentListId: "2",
                    isCompleted: false,
                    isImportant: false,
                    deadline: {
                        deadlineString: "",
                        deadlineObj: new Date()
                    },
                    createDate: new Date(),
                    note: "Default note"
                }
        ]
    }
];

export default dataInitialState;