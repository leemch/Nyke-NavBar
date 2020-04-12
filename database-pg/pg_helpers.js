module.exports = {
    pgFind: (client, keyword) => {
        return client.query(`select data from shoes where data->'collection' ? '${keyword}' OR data->>'type' ilike '${keyword}%' LIMIT 50`)
        //return client.query(`select data from shoes where data->>'nikeID' = '10000000' LIMIT 50`)
    },
    pgFindById: (client, id) => {
        return client.query(`select data from shoes where data->>'nikeID' = '${id}' LIMIT 50`)
    },
    pgFindLessThanPrice: (client, price) => {
        return client.query(`select * from shoes WHERE (data->>'discountPrice')::int < ${price} LIMIT 50`)
    }
}