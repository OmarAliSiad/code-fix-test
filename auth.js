 function login(username, password){

    if(username === "admin" && password === "1234"){
        return true;
    }

    return false;

}

module.exports = login;
