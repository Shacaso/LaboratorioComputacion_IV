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

const block = async (id, type) => {
    const res = await fetch(`http://168.194.207.98:8081/tp/lista.php?action=BLOQUEAR&idUser=${id}&estado=${type}`);
    window.location.reload();
}

const fillTable = (result) =>{
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
        });

        table.appendChild(fragment);
}


const color = (e) => {
    if (e.bloqueado === "Y") {
        return "background-color: #d99594;"
    }
    return "background-color: #4fdaae;"
}


