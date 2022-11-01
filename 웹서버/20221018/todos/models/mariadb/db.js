const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host:'localhost',
    port: 3306,
    database: 'test',
    user: 'application',
    password: '12345678',
    connectionLimit: 4
});

const getConnection = async()=>{
    return  await pool.getConnection();
}

exports.executeQuery = async(sql, params)=>{
    let conn, rows = null;
    try {
        conn = await getConnection();
        if(params)
            rows = await conn.query(sql, params);
        else  
            rows = await conn.query(sql);
    } catch(e) {
        console.log(e);
    } finally {
        if(conn) conn.end();
    }
    return rows;
};