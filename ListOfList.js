function ff (...args)
{
    let res = 0;
    args.forEach(function(item){res += item;});
    return function(...args2)
    {
        let res2 = 0;
        args2.forEach(function(item){res2 += item;});
        return res + res2;
    };
}

console.log(ff(2,1)(3,1));