async function getJSON(URL) {
  let response = await fetch(URL);
  response = await response.json();
  return response;
}

async function postJSON(URL, body) {
  let response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  response = await response.json();
  return response;
}

async function putJSON(URL, body) {
  let response = await fetch(URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  response = await response.json();
  return response;
}

async function deleteJSON(URL, body) {
  let response = await fetch(URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  response = await response.json();
  return response;
}
export { getJSON, postJSON, putJSON, deleteJSON };
