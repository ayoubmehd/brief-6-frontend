const base_url = "http://mvc-with-vue.test/api/";
// Rendez Vous
export async function getRendezVous() {

}
export async function addRendezVous(data) {
    const res = await fetch(`${base_url}rendezvous/create`, {
        method: "POST",
        mode: "no-cors",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ...data,
            ref_user: "0aO2W-2nEQ4-3zDYU-1qWYPa"
        })
    });

    return await res.json();
}
export async function editRendezVous(data, id) {
    console.log({ data, id });
}
export async function deleteRendezVous(id) {
    console.log(id);
}

// User
export async function identifyUser(ref) {
    console.log(ref);
}
export async function addUser(data) {
    console.log(data);
}