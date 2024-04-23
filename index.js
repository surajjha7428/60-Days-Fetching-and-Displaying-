let mainContainer = document.querySelector("#container");

//============================== Get Data=============================//
function getData(URL){
    fetch(URL)
    .then(function(data){
        return data.json();
    })
    .then(function(data){
        showData(data)
    })
}
getData("https://reqres.in/api/users");

//==============================Show Data==========================//
function showData(obj){
    obj.data.forEach((user) => {
        let childDiv = document.createElement("div");
        childDiv.className="child";

        let name = document.createElement("h2");
        name.className="name";
        name.textContent=user.first_name+" "+user.last_name;

        let email = document.createElement("p");
        email.className="email";
        email.textContent=user.email;

        let image = document.createElement("img");
        image.className="image";
        image.src=user.avatar;

        childDiv.append(image, name, email);
        mainContainer.append(childDiv);
    });
}