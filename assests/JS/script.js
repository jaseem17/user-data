document.getElementById("loadData").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            const tablebody = document.querySelector("#table1 tbody");
            tablebody.innerHTML = data.map(user =>
                `<tr><td>${user.id}</td><td>${user.username}</td><td>${user.email}</td><td>${user.website}</td></tr>`
            ).join('');
        });
});
