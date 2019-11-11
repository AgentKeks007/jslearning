
async function multy (a, b)
{
    return a*b;
}

multy(3,3).then(res => console.log(res));

async function multy2 (a, b)
{
    return new Error('oooops');
}

multy2(3,3).then(res => console.log(res)).catch(error => console.log(error));