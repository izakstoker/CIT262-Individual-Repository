import hello from "CIT262-Individual-Repository/hello.js";

it("Should say hello", ()=>{
    const helloString = hello();
    console.log(helloString);
    expect(helloString).toBe("hello");
})