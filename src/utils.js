async function postData(url = "", data = {}) {
  const response = await (
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
  ).json();

  console.log("response :>> ", response);
  return await response;
}

export default postData;
