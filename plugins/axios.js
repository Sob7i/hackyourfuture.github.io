import axios from 'axios'

const isGenerating = process.env.isGenerating
const isClient = typeof window !== 'undefined' 


let baseURL = process.env.apiUrl

if (!isGenerating) {
  baseURL += '/api'
}

if (isClient && isGenerating) {
  baseURL = ''
}

export default axios.create({
  baseURL
})
