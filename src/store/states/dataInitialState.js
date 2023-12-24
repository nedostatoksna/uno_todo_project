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
                        deadlineString: "Fri, 10 Dec",
                        deadlineObj: new Date (2023, 11, 10)
                    },
                    createDate: new Date(2023, 10, 15),
                    note: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
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
                    createDate: new Date(2023, 10, 29),
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