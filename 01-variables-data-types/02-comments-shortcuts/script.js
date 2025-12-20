// This is a single-line comment

/*
 This is a multi-line comment
 It can span multiple lines
*/

console.log(100)
console.log("Hello World")
console.log(20, "Hello", true)
const x = 100
console.log(x)
console.error("This is an error message")
console.warn("This is a warning message")
console.table({ name: "Nelson", email: "nmiranda@xyz.com" })
console.group("Simple")
console.log(x)
console.error("This is an error message")
console.warn("This is a warning message")
console.groupEnd()
const styles = "color: white; background-color: red; font-size: 20px; padding: 5px;"
console.log('%cHello World', styles)