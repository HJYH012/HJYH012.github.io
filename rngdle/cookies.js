const cookies=
{
  set(name,value,days=null,path='/')
  {
    let expires='';
    if(days)
    {
      const date=new Date();
      date.setTime(date.getTime()+days*24*3600*1000);
      expires=`;expires=${date.toUTCString()}`;
    }
    document.cookie=`${name}=${encodeURIComponent(value)}${expires};path=${path}`;
  },
  get(name)
  {
    return document.cookie
      .split(';')
      .find(c=>c.trim().startsWith(`${name}=`))
      ?.split('=')[1];
  },
  delete(name)
  {
    this.set(name,'',-1);
  }
};