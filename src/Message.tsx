function Message() {
    const name = "KITTY";
    if (name)
        return <h1> HELLO {name} </h1>;
    else
    return <h1>Hello World!</h1>
}

export default Message