const dataInitialState = [
    {
        title: "Default TodoList",
        id: "1",
        todos: [
                {
                    title: "Homework",
                    id: "001",
                    isCompleted: false,
                    isImportant: false,
                    deadlineDate: "",
                    createDate: "20 Nov 2023",
                    note: ""
                },
                {
                    title: "Project",
                    id: "002",
                    isCompleted: false,
                    isImportant: false,
                    deadlineDate: "03 Jun 2024",
                    createDate: "23 Nov 2023",
                    note: "Default note"
                },
                {
                    title: "Sketch",
                    id: "003",
                    isCompleted: true,
                    isImportant: true,
                    deadlineDate: "28 Sep 2024",
                    createDate: "20 Nov 2023",
                    note: "Default note"
                }
        ]
    },
    {
        title: "New TodoList",
        id: "2",
        todos: [
                {
                    title: "Pack",
                    id: "004",
                    isCompleted: false,
                    isImportant: false,
                    deadlineDate: "",
                    createDate: "20 Nov 2023",
                    note: ""
                },
                {
                    title: "Do laundry",
                    id: "005",
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