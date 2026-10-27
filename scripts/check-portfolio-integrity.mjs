import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const read = (file) => readFileSync(new URL(`../${file}`, import.meta.url), 'utf8')

const contact = read('src/pages/Contact.tsx')
const projects = read('src/data/projects.ts')
const services = read('src/data/services.ts')
const about = read('src/pages/About.tsx')
const schema = read('src/lib/schema.ts')
const settings = read('src/data/settings.ts')

const checks = [
  ['No fake contact success', () => assert.doesNotMatch(contact, /alert\s*\(/)],
  ['No nonfunctional submission form', () => assert.doesNotMatch(contact, /<form\b/)],
  ['Direct working email CTA', () => assert.match(contact, /mailto:\$\{siteConfig\.email\}/)],
  ['Single contact address source', () => assert.doesNotMatch(contact, /jonas@rendetalje\.dk/)],
  ['No unverified expert title', () => {
    assert.doesNotMatch(about, /AI-automatiseringsekspert/i)
    assert.doesNotMatch(schema, /AI automation specialist/i)
  }],
  ['Education disclosure', () => assert.match(about, /ikke afsluttet/)],
  ['Aftergraph engineering projects shown', () => {
    assert.match(projects, /id: 'aftergraph-works'/)
    assert.match(projects, /id: 'aftergraph-studio'/)
  }],
  ['Legacy personal demos not featured', () => {
    assert.doesNotMatch(projects, /id: 'leadradar'/)
    assert.doesNotMatch(projects, /id: 'roro-luxury'/)
  }],
  ['No unsupported Lighthouse score guarantee', () => assert.doesNotMatch(services, /Lighthouse score 95\+/)],
  ['SEO describes verified IT and Aftergraph', () => assert.match(schema, /Aftergraph/)],
  ['Current main project contact', () => assert.match(settings, /empire1266@gmail\.com/)],
]

let failed = 0
for (const [name, run] of checks) {
  try {
    run()
    console.log('PASS: ' + name)
  } catch (error) {
    failed++
    console.error('FAIL: ' + name + ' — ' + error.message.split('\n')[0])
  }
}
console.log(`Portfolio integrity: ${checks.length - failed}/${checks.length}`)
if (failed) process.exitCode = 1
