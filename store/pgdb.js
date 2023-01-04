const pool = require('./pool')
const { Client } = require('pg')
const client = new Client(pool)
client.connect()

async function list(table, idpadre){
    if(idpadre==0){
      const query=`SELECT t.*, s.name as names, p.name as namep FROM ${table} t 
      inner join status s on s.idstatus=t.idstatus
      inner join priority p on p.idpriority=t.idpriority
      where idpadre = 0 order by  idpriority asc, idstatus asc, enddate asc, duration asc`;      
      const rst = await client.query(query);
          return rst.rows
    }if(idpadre>0){ 
      const query=`SELECT t.*, s.name as names, p.name as namep FROM ${table} t
      inner join status s on s.idstatus=t.idstatus
      inner join priority p on p.idpriority=t.idpriority
      where idpadre= ${idpadre} order by  idpriority asc, idstatus asc, enddate asc, duration asc`;
      const rst = await client.query(query);
      return rst.rows
    }else{
      const query=(`SELECT * FROM ${table}`)
      const rst = await client.query(query);
      return rst.rows
    }
  }

  async function upsert(table, data) {
    const {idtask, description, begindate, enddate,  duration, idpadre, idpriority, idstatus, estado} = data;
    let obj_info = (idtask ==  null) ? { strh: '', strv: ``} : { strh: 'idtask,', strv: `'${idtask}',`};
    const query=`insert into ${table}
                     ( ${obj_info.strh} description, begindate, enddate,  duration, idpadre, idpriority, idstatus, estado) 
                    values(${obj_info.strv}'${description}','${begindate}','${enddate}','${duration}','${idpadre}','${idpriority}','${idstatus}','${estado}')
                        ON CONFLICT (idtask) DO UPDATE 
                        SET description=EXCLUDED.description,
                        begindate=EXCLUDED.begindate, 
                        enddate=EXCLUDED.enddate, 
                        duration=EXCLUDED.duration, 
                        idpadre=EXCLUDED.idpadre, 
                        idpriority=EXCLUDED.idpriority, 
                        idstatus=EXCLUDED.idstatus, 
                        estado=EXCLUDED.estado;`;
    const rst = await client.query(query); 
    const state=(rst.rowCount !== undefined && rst.rowCount > 0) ? true : false;
    return state                
  }

  async function remove(table, id){
      const query=(`DELETE  FROM ${table}  where idtask=${id} `)
      const rst = await client.query(query);
      return rst.rowCount
  }

  

module.exports = { 
    list,
    upsert,
    remove,
};