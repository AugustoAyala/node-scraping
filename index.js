'use strict'

const axios = require('axios')
const cheerio = require('cheerio')

async function scrapingNode () {
  const pageNodeDocumentation = await axios.get('https://nodejs.org/docs/latest-v13.x/api/')
  const $ = cheerio.load(pageNodeDocumentation.data)
  const tableOfContents = $('div#apicontent').map((_, el) => {
    el = $(el)
    const item = el.find('ul').text()
    return { item }
  }).get()
  return tableOfContents
}

async function scrapingReact () {
  const pageNodeDocumentation = await axios.get('https://es.reactjs.org/docs/getting-started.html')
  const $ = cheerio.load(pageNodeDocumentation.data)
  const tableOfContents = $('div.css-1q9mcvr').map((_, el) => {
    el = $(el)
    const item = el.find('div.css-12bsqfj').text()
    return { item }
  }).get()
  return tableOfContents
}

scrapingNode().then(data => { console.log(data) })
scrapingReact().then(data => { console.log(data) })
