export const formatDate = (dateInput: Date | string = new Date()): string => {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;

  if (isNaN(date.getTime())) return 'Invalid Date';

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
};

export const getEmbedUrl = (url: string) => {
  if (!url) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return (match && match[2].length === 11) 
    ? `https://www.youtube.com/embed/${match[2]}`
    : url;
};