export const SearchedItem = (text, query) => {
  if (query !== '' && text.includes(query)) {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));

    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} style={{ fontWeight: 'bold' }}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  }

  return text;
};
