class RegisterService {
    register = function (userObj) {
        var usersTemp = JSON.parse(localStorage.getItem("USERS"));
        var users = usersTemp ? usersTemp : [];
        users.push(userObj);
        localStorage.setItem("USERS", JSON.stringify(users));
        let result = "success";
        return result;
    }
}
