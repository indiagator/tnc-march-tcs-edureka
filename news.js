

export class News
{
    constructor(category,journalist,headline,text)
    {

        this.category = category;
        this.journalist = journalist;
        this.headline = headline;
        this.text = text;
        this.date = new Date();

    }    
}