



export const changeDateFormat=(date)=>{
  let a = new Date(date* 1000);
  let b = new Date(date* 1000).toISOString();
  let month = a.toLocaleString('default', {month: 'short'})
  b = b.split('T')[0]
  let finalDate = b.split('-')
  finalDate = finalDate[2] + " " + month 
  return finalDate

  
} 
export const formateTime=(dateString)=>{
  const parsedDate = new Date(dateString);
  return parsedDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    
  });
}
