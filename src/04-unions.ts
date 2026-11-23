<<<<<<< HEAD
type Status = "idle" | "loading" | "success" | "error";
let currentStatus: Status = "error";
console.log(currentStatus);

function getMessage(status: Status): String {
    switch (status) {
        case "idle":
            return "Status: Idle";
        case "loading":
            return "Status: Loading";
        case "success":
            return "Status: Success";
        case "error":
            return "Status: Error";
        default:
            return "Unknown status";
    }
}
console.log(getMessage("error"));


function formatId(id:string|number):string{
    if(typeof id==="number"){
        return `ID:${id}`
    }
    return id;
}
=======
type Status = "idle" | "loading" | "success" | "error";
let currentStatus: Status = "error";
console.log(currentStatus);

function getMessage(status: Status): String {
    switch (status) {
        case "idle":
            return "Status: Idle";
        case "loading":
            return "Status: Loading";
        case "success":
            return "Status: Success";
        case "error":
            return "Status: Error";
        default:
            return "Unknown status";
    }
}
console.log(getMessage("error"));


function formatId(id:string|number):string{
    if(typeof id==="number"){
        return `ID:${id}`
    }
    return id;
}
>>>>>>> 61d7b8aaf87c8af01f46ae9fcea0f42497120a39
console.log(formatId(12));