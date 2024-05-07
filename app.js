console.log("        *")
for (let i = 8; i >= 0; i--) {
  const output = "0"
    .padStart(i - 9, "0")
    .padStart(i + 1, " ")
    .padEnd(17 - i, "0")
  console.log(output)
}
