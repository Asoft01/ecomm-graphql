const {email, password, ...userData} = args.data;

//////////////////////////// Simplified Code //////////////////////////////
// const userData = {}; 
// const email = args.data.email; 
// const password = args.data.password; 

// for(const key in args.data){
//     if(key !== 'email' && key !== 'password'){
//         userData[key] = args.data[key];
//     }
// }
