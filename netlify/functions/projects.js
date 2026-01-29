export async function handler() {
  const TABLE_ID = process.env.BASEROW_TABLE_ID;
  const TOKEN = process.env.BASEROW_TOKEN;

  if (!TABLE_ID || !TOKEN) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Missing BASEROW_TABLE_ID or BASEROW_TOKEN",
      }),
    };
  }

  try {
    const res = await fetch(
      `https://api.baserow.io/api/database/rows/table/${TABLE_ID}/?user_field_names=true`,
      {
        headers: {
          Authorization: `Token ${TOKEN}`,
        },
      },
    );

    if (!res.ok) {
      return {
        statusCode: res.status,
        body: JSON.stringify({ error: "Failed fetch Baserow" }),
      };
    }

    const data = await res.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(data.results),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
