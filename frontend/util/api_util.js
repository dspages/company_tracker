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

export const createFirm = (firm, contacts) => {
  console.log(firm);
    return ($.ajax({
      method: 'POST',
      url: '/api/firms',
      data: {firm: firm, contacts: contacts}
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

export const createContact = (contact) => {
    return ($.ajax({
      method: 'POST',
      url: '/api/contacts',
      data: {contact: contact}
    })
  );
};

export const deleteContact = contact => {
  return ($.ajax({
    method: 'DELETE',
    url: `api/contacts/${contact.id}`
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
