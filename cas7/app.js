function najveciBr(niz){
    const a=[0];
    const b=[1];
    const c=[2];
    if(a>=b && a>=c){
        console.log("broja a je najveci",a)
    }else if(b>a && b>c){
        console.log("broj b najveci", b)
    }else{
        console.log("broj c je najveci", c)
    }
}
najveciBr([2,8,7]);