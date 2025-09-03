namespace DATA;

entity Users {
  key ID       : UUID;
  username     : String(100);
  email        : String(200);
  password     : String(200);  
}
entity Bookstore {
  key ID          : UUID;
      Title       : String(1200);
      Author      : String(80);
      Genre       : String(40);
      Price       : Decimal(10,2);
      InStock     : Boolean;
      Date1        : DateTime;
}
@readonly
entity AuditLogs {
  key ID       : UUID;
  action       : String(255);
  performedBy  : String(100);
  timestamp    : Timestamp;
  details      : String(500);  
}
