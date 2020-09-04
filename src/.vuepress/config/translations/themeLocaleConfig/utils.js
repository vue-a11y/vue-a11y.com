const sidebar = require('./sidebarStructures')

function generateSidebar (page, titles, localePath = '/') {
  if (!titles) return sidebar[page]

  return titles.map((title, index) => {
    const data = { ...sidebar[page][index] }
    if (!data) return false
    data.title = title
    if (data.type === 'manual') {
      data.children = setLocalePath(data.children, localePath)
    }
    return data
  }).filter(Boolean)
}

function setLocalePath (items, localePath) {
  return items.map(item => {
    if (!Array.isArray(item)) return item
    const data = [item[0]]
    if (item[1]) {
      data.push(item[1].indexOf('/') === 0 ? item[1].replace('/', localePath) : localePath + item[1])
    }
    return data
  })
}

module.exports = {
  generateSidebar
}
