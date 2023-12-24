 /// { } ---> scope of the program

// var --- Global scope, same variable can be declared twice, no need to initialize value
// let --- block level scope, cannot be declared twice, need to be initialization
// const --- value cannot be changed


function one(){
    const user = "sagar";

    function two(){
        const website = "youtube";
        console.log(user);
    }
    // console.log(website);
    two()
}
one()

