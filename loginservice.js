class LoginService {
    login = function (email, password) {
        var usersTemp = JSON.parse(localStorage.getItem("USERS"));
        var users = usersTemp ? usersTemp : [];
        let exists = false;
        for (let obj of users) {
            if (obj.email == email && obj.password == password) {
                exists = true;
                localStorage.setItem("LOGGED_IN_USER", JSON.stringify(obj));
                break;
            }
        }
        console.log(exists);
        return exists;
    }
}