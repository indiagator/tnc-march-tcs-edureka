import { Subscription } from "./subscription.js";

export class Subscriber
{

    constructor(id,subname,phonenumber,email)
    {
        this.id = id;
        this.subname = subname;
        this.subscription = new Subscription();
        this.categories = new Array();
        this.phonenumber = phonenumber;
        this.email = email;
    }

    setCategory(category)
    {
        this.categories.push(category);
    }

    setSubscription(subscription)
    {
        this.subscription = subscription;
    }


}