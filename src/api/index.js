const base_url = "http://mvc-with-vue.test/api/";
const globals = {
    // mode: "no-cors",
    headers: {
        'Content-Type': 'application/json'
    }
}

const ref = localStorage.getItem("user");

// Rendez Vous
export async function test() {
    const res = await fetch(`${base_url}rendezvous/update/`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        ...globals,
        credentials: 'include',
        body: JSON.stringify({
            name: "bla"
        })
    });

    return await res.json();
}
export async function getRendezVous() {
    const res = await fetch(`${base_url}rendezvous/index/${ref}`);
    return await res.json();
}
export async function addRendezVous(data) {
    const res = await fetch(`${base_url}rendezvous/create`, {
        method: "POST",
        ...globals,
        body: JSON.stringify({
            ...data,
            ref_user: ref
        })
    });
    console.log(res);
    return await res.json();
}
export async function editRendezVous(data, id) {
    const res = await fetch(`${base_url}rendezvous/update/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
            ...data,
            ref_user: ref
        })
    });
    return await res.json();
}
export async function deleteRendezVous(id) {
    const res = await fetch(`${base_url}rendezvous/delete/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return await res.json();
}

// User
export async function identifyUser({ ref }) {
    const res = await fetch(`${base_url}user/identify/${ref}`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();

    localStorage.setItem("user", data.reference);

    return data;
}
export async function addUser(data) {
    console.log(data);
}