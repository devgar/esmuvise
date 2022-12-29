const Airtable = require('airtable')
require('dotenv').config()

function importData(table) {
  const data = []
  const base = Airtable.base(process.env.AIRTABLE_APP_KEY)
  return new Promise((resolve, reject) => {
    base(table)
      .select({ maxRecords: 400, view: 'Grid view' })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function(record) {
            data.push(record._rawJson.fields)
          })
          fetchNextPage()
        },
        function done(err) {
          if (err) {
            return reject(err)
          }
          resolve(data)
        }
      )
  })
}

importData.tables = ['Alumnos', 'Asignaturas', 'Matriculas']

module.exports = importData

if (require.main === module) {
  if (!process.argv[2]) {
    console.error('Expected table as argument')
    process.exit(1)
  }
  if (!importData.tables.includes(process.argv[2])) {
    console.error('Argument not available')
    process.exit(1)
  }
  importData(process.argv[2]).then((d) =>
    console.log(JSON.stringify(d, null, 2))
  )
}
