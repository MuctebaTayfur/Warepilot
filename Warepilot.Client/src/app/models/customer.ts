export class Customer {

    constructor(
      public firstName = '',
      public lastName = '',
      public email = '',
      public middleName = '',
      public calledName = '',
      public phoneNumber?: string,
      public notification?:boolean,
      public catalog?:boolean,
      public addressType='',
      public streetAddress1=''
    ){}
    
}
  
  