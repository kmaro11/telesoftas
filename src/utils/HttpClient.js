const HttpClient = async (url) => {
    const actionData = {
        data: null,
        error: null,
    };

    try {
        actionData.data = await fetch(url).then((res) => res.json())
      } catch(err) {
        actionData.error = err
      }

      return actionData
}

export default HttpClient