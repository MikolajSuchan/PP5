class Customer{
    constructor(){}

    name="";
    nip="";
    city="";
    street="";
    number="";
    numberM="";
    kod="";
    uwagi=""
    branza="";
    check=true;

    getAddress(){
        return kod+" "+city+" ul."+street+" nr."+number+" nr.mieszkania "+numberM
    };
    getData(){
        return `Nazwa:`


    };

    

}
class Supplier extends Customer{

    constructor(account_number){
        super();
        account_number=account_number;
    }
    invocices=[];




}