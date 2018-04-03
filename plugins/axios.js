// Extend relative request with a base url.

import axios from 'axios'
let baseURL = process.env.apiUrl

// You can also prefix in context of execution.
//
// isGenerating = process.env.isGenerating
// isClient = typeof window !== 'undefined'

export default axios.create({
  baseURL
})
