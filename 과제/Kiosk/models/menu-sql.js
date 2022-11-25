exports.createMenuSql = ()=>{
    return `create table if not exists menu(
      id integer primary key autoincrement,
      name text not null,
      price text,
      imageUrl text
    )`;
  };
  
  exports.selectAllMenuSql = ()=>{
    return `select * from menu`;
  };
  
  exports.insertMenuSql = (name, price, imageUrl) =>{
    return `insert into menu(name, price, imageUrl)
      values(
        '${name}',
        '${price}',
        '${imageUrl}'
      )`;
  };
  
  exports.updateMenuSql = (id, name, price, imageUrl) =>{
    return `update menu set 
          name='${name}',
          price='${price}',
          imageUrl='${imageUrl}'
          where id = ${id}`;
  };

  exports.deleteMenuSql = (id) => {
    return `delete from menu where id= '${id}'`;
  };