
const mongoose = require('mongoose');

exports.connectDB =async () =>{
        try {
                const db =  await mongoose.connect(process.env.DB)
                if(db){
                        console.log("Mongodb connected");
                        
                }
        } catch (error) {
                console.log("error--->", error);
                
                throw error
        }
}
// mongoose.connect('mongodb://localhost/dashboard', {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       })
//         .then(() => console.log('Connected to MongoDB'))
//         .catch((err) => console.error('Error connecting to MongoDB', err));