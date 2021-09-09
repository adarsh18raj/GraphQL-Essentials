import mongoose from 'mongoose';

//Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/students', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    gender: {
        type: String
    },
    email: {
        type: String
    },
    age: {
        type: Number
    },
    score: {
        type: Number
    },
    subjects: {
        type: Array
    }
});

const Students = mongoose.model('students', studentSchema);

export { Students };