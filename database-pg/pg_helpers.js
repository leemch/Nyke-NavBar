module.exports = {
    pgFind: (client, keyword) => {
        return client.query(`select data from shoes where data->'collection' ? '${keyword}' OR data->>'type' ilike '${keyword}%' LIMIT 50`)
    }
}