const admin = { username: "mjmartinez", password: "123456" }

const user = { username: document.getElementById("username").value, password: document.getElementById("password").value }

const validation = async ()=> {
    event.preventDefault();

    const user = { name: document.getElementById("username").value, password: document.getElementById("password").value }

    const url = `http://168.194.207.98:8081/tp/login.php?user=${user.name}&pass=${user.password}`;

    console.log(url)

    try {
        const res = await fetch(url);
        const result = await res.json();
        console.log(result);
        if(result.respuesta === "OK"){
            location.href = 'http://127.0.0.1:5500/resouces/template/lista.html';
        }

        alert(`${result.respuesta}!!! \n${result.mje}`);


    } catch (err) {
        console.error(err)
    }
}


