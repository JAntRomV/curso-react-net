export function Promesa() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error('Error:', error));
}

export async function AsyncAwait() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        debugger;
        console.log(json);
    } catch (error) {
        console.error('Error:', error);
    }
}