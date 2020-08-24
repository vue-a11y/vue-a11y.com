const sidebar = require('./sidebarStructures')

function generateSidebar (page, titles) {
  if (!titles) return sidebar[page]

  return titles.map((title, index) => {
    const data = { ...sidebar[page][index] }
    if (!data) return false
    data.title = title
    return data
  }).filter(Boolean)
}

module.exports = {
  generateSidebar
}
