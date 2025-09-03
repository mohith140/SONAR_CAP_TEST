using DATA from '../db/tables';

service MainService {
   entity Users               as projection on DATA.Users;
   entity Bookstore               as projection on DATA.Bookstore;
   entity AuditLogs               as projection on DATA.AuditLogs;
  action exposeToken() returns String;
}


service CatalogService {
  entity Books as projection on DATA.Bookstore;
}