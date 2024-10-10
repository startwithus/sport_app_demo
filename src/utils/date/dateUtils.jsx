// Assuming formatDate is a function defined elsewhere in your project
export const formatDate = (dateString, includeTime = false) => {
    const options = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
  
    const date = new Date(dateString);
  
    if (includeTime) {
      return date.toLocaleDateString('en-US', options).replace(',', ' ');
    } else {
      return date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }).replace(',', ' ');
    }
  };
  