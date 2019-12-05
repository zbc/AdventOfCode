function getCode(data, index) {
  let code = data[index].toString().split('')
  if (code.length < 5) {
    code.unshift(...Array(5 - code.length).fill('0'))
  }
  const opcode = parseInt(`${code[3]}${code[4]}`)
  return {
    opcode,
    code
  }
}

export { getCode }