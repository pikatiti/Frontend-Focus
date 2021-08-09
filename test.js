const input = '12345.6789'

const [zhengshu, xiaoshu] = input.split('.')
console.log('zhengshu :>> ', zhengshu)
console.log('xiaoshu :>> ', xiaoshu)

let count = 3
let output = ''
for (let i = 0; i < zhengshu.length; i++) {
    count --
    output += zhengshu[i]
    if (!count) {
        output += ','
        count = 3
    }
}

count = 3
output += '.'
for (let i = 0; i < xiaoshu.length; i++) {
    count --
    output += xiaoshu[i]
    if (!count) {
        output += ','
        count = 3
    }
}

console.log('output :>> ', output)