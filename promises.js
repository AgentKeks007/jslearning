
let summator = (a, b) =>
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            if((a + b) < 10)
                resolve(true);
            else
                reject(false);
        }, 2000);
    });
};

let comparator = (str1, str2) =>
{
    return new Promise((resolve, reject) =>
    {
        if(str1 == str2)
            resolve(str1+" == "+str2);
        else
            reject(str1+" != "+str2);
    });
};

summator(5,12).then((result) =>
{
    console.log(result);
}).catch((error) =>
{
    console.log(error);
});
comparator('aaa', 'aaa').then((result) =>
{
    console.log(result);
}).catch((error) =>
{
    console.log(error);
});