
// {codingNinja: 10}
export const sendResults = (skills)=> {
  fetch('/api/results', {method: 'POST', body: JSON.stringify(skills),  headers: {
    'Content-Type': 'application/json',}})
}