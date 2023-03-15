var table = document.getElementById("table");

window.onload = async function () {
    const url = `http://168.194.207.98:8081/tp/lista.php?action=BUSCAR`;

    try {
        const res = await fetch(url);
        const result = await res.json();
        // console.log(result);
        fillTable(result);
    } catch (err) {
        console.error(err)
    }
}

const search = async () => {
    const search = document.getElementById("search")

    try {
        const res = await fetch("http://168.194.207.98:8081/tp/lista.php?action=BUSCAR");
        const results = await res.json();

        const users = results.filter(result => result.usuario === search.value);
        // alert(typeof users.)

        if (users.length !== 0) {
            
            cleanTable();
   
            let tr = document.createElement("TR");
            tr.setAttribute("style", color(users[0]))
            tr.innerHTML = `
        <th scope="row">${users[0].id}</th>
        <td>${users[0].usuario}</td>
        <td">${users[0].bloqueado}</td>
        <td>${users[0].apellido}</td>
        <td>${users[0].nombre}</td>
        <td><button type="button" class="btn" onclick="block(${users[0].id}, 'Y')">Y</button></td>
        <td><button type="button" class="btn" onclick="block(${users[0].id}, 'N')">N</button></td>`;

            table.appendChild(tr);
        } else {
            alert("Ese usuario no existe, se reiniciara la tabla")
            window.location.reload();
        }




    } catch (err) {
        console.error(err)
    }
}


const block = async (id, type) => {
    const res = await fetch(`http://168.194.207.98:8081/tp/lista.php?action=BLOQUEAR&idUser=${id}&estado=${type}`);
    window.location.reload();
}

const fillTable = (result) => {
    let fragment = document.createDocumentFragment();

    result.forEach(e => {
        let tr = document.createElement("TR");
        tr.setAttribute("style", color(e))
        tr.innerHTML += `
            <th scope="row">${e.id}</th>
            <td>${e.usuario}</td>
            <td">${e.bloqueado}</td>
            <td>${e.apellido}</td>
            <td>${e.nombre}</td>
            <td><button type="button" class="btn" onclick="block(${e.id}, 'Y')">Y</button></td>
            <td><button type="button" class="btn" onclick="block(${e.id}, 'N')">N</button></td>`;
        fragment.appendChild(tr);
    })

    table.appendChild(fragment);

}


const color = (element) => {
    if (element.bloqueado === "Y") {
        return "background-color: #d99594;"
    }
    return "background-color: #4fdaae;"
}


const cleanTable = () => {
    let rowCount = table.rows.length;

            while(table.rows.length > 0)
            {
                table.deleteRow(rowCount -1);
                rowCount--;
            }
}