import { readDatabase } from "../utils";

export default class StudentsController {
    static getAllStudents(request, response) {
        const path = process.argv[2];

        readDatabase(path).then((result) => {
            let displayStudents = "This is the list of our students\n";

            Object.keys(result).sort().forEach(field => {
                displayStudents += `Number of students in ${field}: ${result[field].length}. List: ${result[field].join(", ")}\n`
            })
            response.status(200).send(displayStudents.trim());
        }).catch((reason) => {
            response.status(500).send("Cannot load the database");
        })
    }

    static getAllStudentsByMajor(request, response) {
        const { major } = request.params;

        if (!["CS", "SWE"].includes(major)) {
            response.status(500).send("Major parameter must be CS or SWE")
        }

        const path = process.argv[2];
        readDatabase(path).then((result) => {
            response.status(200).send(`List: ${result[major].join(", ")}`);
        }).catch(reason => {
            response.status(500).send("Cannot load the database")
        })
    }
}
