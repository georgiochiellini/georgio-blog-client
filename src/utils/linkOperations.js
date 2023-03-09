

// https://www.youtube.com/watch?v=n5WjiQlrlb4&list=PLnBfpqujHnDfjMMWAdkpjUMu3R-rtYuu7

const HOST_PART = 'https://www.youtube.com/watch'
const VIDEO_PART = 'v'
const LIST_PART = 'list'

export const checkLink = (url) => {
  const qSplit = url.split('?')
  if (qSplit.length !== 2 || qSplit[0] !== HOST_PART) return false
  const ampSplit = qSplit[1].split('&')
  if (ampSplit.length < 2) return false
  const vSplit = ampSplit[0].split('=')
  const listSplit = ampSplit[1].split('=')
  if (vSplit.length !== 2 || vSplit[0] !== VIDEO_PART) return false
  if (listSplit.length !== 2 || listSplit[0] !== LIST_PART) return false
  return true
}


export const getLinkIds = (url) => {
  const splitParts = url.split('?')[1].split('&')
  const videoId = splitParts[0].split('=')[1]
  const playlistId = splitParts[1].split('=')[1]
  return {videoId, playlistId}
}