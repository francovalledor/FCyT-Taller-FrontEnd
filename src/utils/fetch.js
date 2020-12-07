async function getJSON(URL) {
  return await fetchJSON(URL, "GET");
}

async function postJSON(URL, body) {
  return await fetchJSON(URL, "POST", body);
}

async function putJSON(URL, body) {
  return await fetchJSON(URL, "PUT", body);
}

async function deleteJSON(URL, body = {}) {
  return await fetchJSON(URL, "DELETE", body);
}

export { getJSON, postJSON, putJSON, deleteJSON };

function isJSON(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function toJSON(obj) {
  if (isJSON(obj)) {
    return obj;
  } else {
    return JSON.stringify(obj);
  }
}

async function fetchJSON(address, method, data = {}) {
  console.log(`fetch ${method} ${address}`);
  let response;
  if (method === "GET") {
    response = await fetch(address);
  } else {
    response = await fetch(address, {
      method: method,
      headers: {
        "Content-Type": "application/json"
      },
      body: toJSON(data)
    });
  }

  if (response.ok) {
    response = await response.json();
    return response;
  } else {
    // console.log(await response.json());
    return null;
  }
}
