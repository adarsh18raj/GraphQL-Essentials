import { Students } from './dbConnectors';

// resolver map
export const resolvers = { 
    Query: {
        getOneStudent: (root, { id }) => {
            return new Promise((resolve, object) => {
                Students.findById(id, (err, student) => {
                    if (err) reject(err)
                    else resolve(student)
                })
            })
        }
    },
    Mutation: {
        createStudent: (root, { input }) => {
            const newStudent = new Students({
                firstName: input.firstName,
                lastName: input.lastName,
                gender: input.gender,
                email: input.email,
                age: input.age,
                score: input.score,
                subjects: input.subjects
            });

            newStudent.id = newStudent._id;

            return new Promise((resolve, object) => {
                newStudent.save((err) => {
                    if (err) reject(err)
                    else resolve(newStudent)
                })
            })
        },
        updateStudent: (root, { input }) => {
            return new Promise((resolve, object) => {
                Students.findOneAndUpdate({ _id: input.id }, input, { new: true }, (err, student) => {
                    if (err) reject(err)
                    else resolve(student)
                })
            })
        },
        deleteStudent: (root, { id }) => {
            return new Promise((resolve, object) => {
                Students.remove({ _id: id }, (err) => {
                    if (err) reject(err)
                    else resolve("Successfully deleted student")
                })
            })
        }
    },
};