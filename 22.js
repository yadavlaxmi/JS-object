  
const d = { 'a': 50, 'b': 58, 'c': 56, 'd': 40, 'e': 100, 'f': 20 }
var l = []
var m_l = []
var k = []
for (i in d) {
  l.push(d[i])
  for (j of l) {
      if (d[i] > j) {
          m_l.push(d[i])
       }
      if (m_l.length === 3) {
          break
       }
  }
}
console.log(m_l)