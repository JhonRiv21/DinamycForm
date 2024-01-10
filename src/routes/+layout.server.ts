// src/routes/+layout.server.js
// export const load = async (event: { locals: { getSession: () => any; supabase: { storageKey: any; }; }; cookies: { delete: (arg0: any) => void; }; }) => {

//   let session = await event.locals.getSession()
  
  // solving the case when the session is null, i.e. the user was deleted from the database but the browser still has a cookie/loggedin user
  // +lauout.server.js will delete the cookie 

//   if (session == null) {
//     event.cookies.delete(event.locals.supabase.storageKey);
//   }
// }