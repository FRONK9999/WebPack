function promise() {
    return new Promise((resolve, rejecte) => {
        setTimeout(() => {
            console.log('Hey, i am the promise')
        }, 2000);
    });
}

export default async function () {
    await promise();
    console.log('Terminou');
}