// Add your code here
function submitData(name, email) {
  const data = {
    name: name,
    email: email
  };

  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  };

  return fetch("http://localhost:3000/users", configObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      let title = document.createElement("p")
      title.innerHTML = json.id;
      document.body.appendChild(title);

    })
    .catch(function (error) {
      console.log(error);
      //error.message = "Unauthorized Access";
      let errorMessage = document.createElement("p")
      errorMessage.innerHTML = error.message;
      document.body.appendChild(errorMessage);
    });
}
