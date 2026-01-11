const user = {
    username: "张三",
    age: 18
}

const isAdult = (age) => {
    if (age < 18) {
        console.log("用户未成年")
    }else{
        console.log("用户已成年")
    }
}

export {user, isAdult}