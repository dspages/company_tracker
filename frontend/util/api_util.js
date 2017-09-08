export const fetchFirms = () => (
  $.ajax({
    method: 'GET',
    url: '/api/firms'
  })
);

export const fetchFirm = id => (
  $.ajax({
    method: 'GET',
    url: `/api/firms/${id}`,
  })
);

export const createFirm = (firm) => {
  console.log(firm);
    return ($.ajax({
      method: 'POST',
      url: '/api/firms',
      data: {firm: firm}
    })
  );
};

export const editFirm = (firm) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/firms/${firm.id}`,
    data: {firm: firm}
  })
);

export const deleteFirm = firm => {
  return ($.ajax({
    method: 'DELETE',
    url: `api/firms/${firm.id}`
  })
  );
};


export const createFinance = (finance) => {
    return ($.ajax({
      method: 'POST',
      url: '/api/finances',
      data: {finance: finance}
    })
  );
};

export const editFinance = (finance) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/finances/${finance.id}`,
    data: {finance: finance}
  })
);

export const deleteFinance = finance => {
  return ($.ajax({
    method: 'DELETE',
    url: `api/finances/${finance.id}`
  })
  );
};


export const createContact = (contact) => {
    return ($.ajax({
      method: 'POST',
      url: '/api/contacts',
      data: {contact: contact}
    })
  );
};

export const editContact = (contact) => (
  $.ajax({
    method: 'PATCH',
    url: `/api/contacts/${contact.id}`,
    data: {contact: contact}
  })
);

export const deleteContact = contact => {
  return ($.ajax({
    method: 'DELETE',
    url: `api/contacts/${contact.id}`
  })
  );
};
